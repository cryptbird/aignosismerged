import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import BeatLoader from "react-spinners/BeatLoader";
import { encryptCalibrationData, encryptPassword } from "../config/EncryptionUtils";
import { AppContext } from "../aignosisintegration/AppContext.jsx";
import Circle from "./Circle";
import dogpng from "../../assets/aignoisiai/dog_face.png";

const SERVER_MIDDLEWARE_URL = "https://35.207.211.80/rest/calibration/data/";

const DogCalibration = () => {
  const [startTime, setStartTime] = useState();
  const [frameCaptureInterval, setFrameCaptureInterval] = useState();
  const [frames, setFrames] = useState([]);
  const [isCircleVisible, setIsCircleVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCircleIndex, setCurrentCircleIndex] = useState(0);
  const [parentDimensions, setParentDimensions] = useState([0, 0]);
  const [videoResolution, setVideoResolution] = useState([640, 480]);
  const [clickTimes, setClickTimes] = useState([]);

  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const parentRef = useRef(null);
  const navigate = useNavigate();
  const { testData, setTestData } = useContext(AppContext);

  const circleCoordinates = [
    [window.innerWidth / 2, window.innerHeight / 2],
    [50, 50],
    [50, window.innerHeight / 2],
    [50, window.innerHeight - 100],
    [window.innerWidth - 100, 50],
    [window.innerWidth - 100, window.innerHeight / 2],
    [window.innerWidth - 100, window.innerHeight - 100],
    [window.innerWidth / 2, 50],
    [window.innerWidth / 2, window.innerHeight - 100],
  ];

  const audio = new Audio(`/dog_bark.wav?timestamp=${Date.now()}`);

  useEffect(() => {
    const handleAudioPlay = () => {
      audio.loop = true;
      audio.play().catch((error) => console.error("Audio play error:", error));
    };

    audio.addEventListener("canplaythrough", handleAudioPlay);

    setTestData({
      ...testData,
      PATIENT_UID: uuidv4(),
      TRANSACTION_ID: uuidv4(),
    });

    console.log("Current page test data", testData)

    if (parentRef.current) {
      const { clientWidth, clientHeight } = parentRef.current;
      setParentDimensions([clientWidth, clientHeight]);
    }

    const startWebcam = async () => {
      if (!navigator.mediaDevices.getUserMedia) {
        console.error("getUserMedia not supported");
        return;
      }

      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoRef.current.srcObject = stream;

        videoRef.current.onloadedmetadata = () => {
          setVideoResolution([
            videoRef.current.videoWidth,
            videoRef.current.videoHeight,
          ]);
        };
      } catch (error) {
        console.error("Webcam start error:", error);
      }
    };

    startWebcam();
    return () => audio.pause();
  }, []);

  const handleNextButtonClick = () => {
    const { PATIENT_UID, TRANSACTION_ID, calibration_encrypted_aes_key, videolanguage } = testData;
    
    if (PATIENT_UID && TRANSACTION_ID && calibration_encrypted_aes_key && videolanguage) {
      navigate(`/video`);
    } else {
      console.error("Missing required parameters");
    }
  };

  const captureFrame = () => {
    if (!canvasRef.current || !videoRef.current) {
      console.warn("Frame capture failed: missing refs");
      return;
    }

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
    return canvas.toDataURL("image/jpeg");
  };

  const handleCircleClick = async () => {
    if (currentCircleIndex === 0) {
      initializeCalibration();
    } else if (currentCircleIndex < circleCoordinates.length - 1) {
      recordClick();
    } else {
      await finalizeCalibration();
    }
  };

  const initializeCalibration = () => {
    setStartTime(Date.now());
    setClickTimes([0.0]);
    setFrameCaptureInterval(
      setInterval(() => {
        const frameData = captureFrame();
        setFrames(prev => [...prev, frameData]);
      }, 33)
    );
    setCurrentCircleIndex(prev => prev + 1);
  };

  const recordClick = () => {
    setClickTimes(prev => [...prev, (Date.now() - startTime) / 1000]);
    setCurrentCircleIndex(prev => prev + 1);
  };

  const finalizeCalibration = async () => {
    audio.loop = false;
    audio.pause();
    audio.currentTime = 0;

    const finalClickTime = (Date.now() - startTime) / 1000;
    setClickTimes(prev => [...prev, finalClickTime]);
    setIsCircleVisible(false);

    const timeElapsed = finalClickTime;
    const fps = Math.floor(frames.length / timeElapsed);

    const calibrationData = createCalibrationData(fps);
    await processAndSendData(calibrationData);
    clearInterval(frameCaptureInterval);
  };

  const createCalibrationData = (fps) => {
    const calibrationPoints = clickTimes.map((time, i) => ({
      point: {
        x: circleCoordinates[i][0],
        y: circleCoordinates[i][1],
        final: i === clickTimes.length - 1,
      },
      frames: [
        {
          timestamp: time,
          frame: frames[Math.floor(fps * time)],
        },
        {
          timestamp: time + 1/fps,
          frame: frames[Math.floor(fps * time) + 1],
        },
      ],
    }));

    return {
      patient_uid: testData.PATIENT_UID,
      transaction_id: testData.TRANSACTION_ID,
      patient_name: testData.patientName,
      patient_dob: testData.patientDOB,
      camera_resolution: {
        width: videoResolution[0],
        height: videoResolution[1],
      },
      screen_resolution: {
        width: window.innerWidth,
        height: window.innerHeight,
      },
      debug: true,
      calibration_points: calibrationPoints,
    };
  };

  const processAndSendData = async (calibrationData) => {
    setIsLoading(true);

    try {
      const aesKey = Array.from(crypto.getRandomValues(new Uint8Array(32)))
        .map(b => b.toString(16).padStart(2, "0"))
        .join("");

      const encryptedCalibrationPoints = await encryptCalibrationData(
        calibrationData.calibration_points,
        aesKey
      );

      const calibration_encrypted_aes_key = await encryptPassword(aesKey);

      const finalData = {
        ...calibrationData,
        encrypted_calibration_points: encryptedCalibrationPoints,
        calibration_encrypted_aes_key,
      };

      setTestData({
        ...testData,
        calibration_encrypted_aes_key,
      });

      const response = await axios.post(SERVER_MIDDLEWARE_URL, finalData, {
        headers: { "Content-Type": "application/json" },
      });

      setIsLoading(false);
      
      if (response.status !== 200) {
        navigate("/Error");
      }
    } catch (error) {
      console.error("Processing error:", error);
      navigate("/Error");
    }
  };

  return (
    <div
      id="parent-container"
      ref={parentRef}
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        height: "100vh",
        backgroundColor: "#1b0c26",
      }}
    >
      {isCircleVisible && parentDimensions[0] > 0 && parentDimensions[1] > 0 && (
        <Circle
          onClickHandler={handleCircleClick}
          x={circleCoordinates[currentCircleIndex][0]}
          y={circleCoordinates[currentCircleIndex][1]}
          radius={50}
          imageUrl={dogpng}
        />
      )}

      {!isCircleVisible && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          {isLoading ? (
            <>
              <BeatLoader color="#ffffff" size={15} />
              <p
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  backgroundColor: "rgba(138, 0, 194, 0.6)",
                  color: "white",
                  padding: "12px 24px",
                  borderRadius: "25px",
                  border: "none",
                  fontSize: "32px",
                  fontWeight: "bold",
                }}
              >
                Calibrating
              </p>
            </>
          ) : (
            <button
              style={{
                backgroundColor: "transparent",
                color: "white",
                padding: "12px 24px",
                borderRadius: "50px",
                border: "2px solid white",
                fontSize: "32px",
                fontWeight: "bold",
                cursor: "pointer",
                transition: "background-color 0.3s ease, color 0.3s ease",
              }}
              onClick={handleNextButtonClick}
            >
              Next
            </button>
          )}
        </div>
      )}

      <div style={{ display: "none", flex: 1 }}>
        <video ref={videoRef} autoPlay playsInline />
      </div>
      <canvas ref={canvasRef} style={{ flex: 1, display: "none" }} />
    </div>
  );
};

export default DogCalibration;
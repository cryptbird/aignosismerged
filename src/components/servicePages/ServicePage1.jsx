import React, { useState } from "react";
import img from "../../assets/images/SectionL.png";
import { GoArrowUpRight } from "react-icons/go";
import { CiPhone } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import crossIcon from "../../assets/images/cross.png";
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import Header from "../Header";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import service1 from "../../assets/servicepage/assesment.jpg";
import pos1 from "../../assets/images/pos1.png";
import pos2 from "../../assets/images/pos2.png";
import pos3 from "../../assets/images/pos3.png";
import pos4 from "../../assets/images/pos4.png";
import arrow1 from "../../assets/images/Arrow 3.png";
import arrow2 from "../../assets/images/Arrow 4.png";
import arrow3 from "../../assets/images/Arrow 5.png";
import cloud1 from "../../assets/images/cloud1.png";
import cloud2 from "../../assets/images/cloud2.png";
import cloud3 from "../../assets/images/cloud3.png";
import cloud4 from "../../assets/images/cloud4.png";
import ScrollToTop from "../ScrollToTop";
import { useEffect } from "react";
import ContactServicePage from "../ContactServicePage";
import BlogFooter from "../BlogPages/BlogFooter";
import ContactPage from "../ContactPage";
import SEO from "../config/Seo";
import Newnavbar from "../Newnavbar";
import WhatsAppButton from "../WhatsAppButton";

const ServicePage1 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const faqData = [
    {
      question: "How do I know if my child needs an assessment?",
      answer:
        "Signs that may indicate your child needs an assessment include difficulties in learning, consistent struggles with reading or writing, challenges in social interactions, behavioral issues, or delays in speech and language development. If you notice your child facing these challenges, it may be beneficial to seek an assessment.",
    },
    {
      question: "What is the appropriate age for an assessment?",
      answer:
        "Children can be assessed as early as 18 months for developmental milestones, but most comprehensive evaluations typically occur between the ages of 3 and 7. Early intervention is crucial, so if you have concerns, it’s best to seek guidance sooner rather than later.",
    },
    {
      question: "How long does the assessment process take?",
      answer:
        "The assessment process generally takes between 1 to 2 hours, depending on the specific evaluations being conducted. Additional time may be needed for follow-up discussions and to review the results with you.",
    },
    {
      question: "What can I expect during an assessment?",
      answer:
        "During the assessment, your child will participate in various activities and tasks designed to evaluate their cognitive, social, and emotional functioning. The process is interactive and child-friendly, ensuring your child feels comfortable. Afterward, you will receive a detailed report outlining the findings, along with recommendations for further support or intervention if needed.",
    },
  ];
  const Divider = ({ title }) => (
    <div className="flex flex-row justify-center items-center space-x-4 mb-8 mt-10">
      <span
        className="h-[10px] w-[118px] rounded-full max-sm:w-[60px]"
        style={{
          background:
            "linear-gradient(270deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)",
        }}
      ></span>
      <span className="2xl:text-[20px] md:text-sm text-[#F1C6FE] font-medium max-sm:text-sm">
        {title}
      </span>
      <span
        className="h-[10px] w-[118px] rounded-full max-sm:w-[60px]"
        style={{
          background:
            "linear-gradient(90deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)",
        }}
      ></span>
    </div>
  );

  return (
    <>
      <Newnavbar />
      <SEO
        metaDescription="Explore AI-powered autism assessment tools, psychological evaluations, and care solutions for parents. Aignosis transforms autism diagnosis and care."
        canonicalUrl="https://aignosis.in/assessments-evaluation"
        pageTitle="AI Autism Assessment & Psychological Evaluations | Aignosis"
      />
      <div className="bg-[#1A0C25] font-montserrat text-white">
        <Header />
        <WhatsAppButton/>
        <div className="h-full w-full ">
          <div className="bg-[#1A0C25] w-full flex justify-center items-center h-auto px-4 sm:px-0">
            <div className="w-full z-10 relative flex flex-col justify-center items-center md:mt-[12vh] 2xl:mt-[6vw] h-auto">
              {/* Title and Gradient Bars */}
              <Divider title="Services" />

              {/* Headline and Subtitle */}
              <div className="flex flex-col items-center text-center">
                <h1 className="text-lg sm:text-4xl md:text-5xl mt-2 font-medium font-raleway">
                  Unlock Your Child’s Learning Potential
                </h1>
                <h2 className="text-xs sm:text-base mt-2 max-sm:mb-2 sm:mt-3">
                  Explore Online Assessments with 24/7 Support in 8 Languages!
                </h2>
              </div>
              {/* Image Section */}
              <div className="w-[70%]  mt-[2vw] sm:w-[40vw] mb-20 max-sm:mb-4 sm:mb-[50px] h-[200px] sm:h-[20vw] bg-[#D9D9D9] overflow-hidden rounded-lg">
                <img
                  src={service1}
                  alt="Child’s Learning Potential"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* CTA and Rating */}
              <div className=" flex flex-col sm:flex-row gap-4 items-center justify-center w-full">
                <div className="w-full max-sm:w-[50%] sm:w-[14rem] cursor-pointer border-2 border-[#B740A1] gap-2 sm:gap-4 rounded-full flex justify-between items-center text-[#0D0C0A] h-[3rem] sm:h-[3.5rem] group bg-transparent hover:bg-[#B7407D] transition-colors duration-300 px-4">
                  <Link to="/test" className="text-white text-xs sm:text-base">
                    Get In Touch
                  </Link>
                  <div className="w-[2rem] sm:w-[2.5rem] h-[2rem] sm:h-[2.5rem] flex items-center justify-center text-white text-lg group-hover:bg-white group-hover:text-black rounded-full bg-[#B740A1]">
                    <GoArrowUpRight />
                  </div>
                </div>
                <span className="text-white text-xs sm:text-base font-semibold text-center">
                  Rated 4.5/5 by Parents
                </span>
              </div>
            </div>
            <div className="absolute inset-1 mt-[5vw] bg-[#B740A1] opacity-20 blur-[200px] rounded-full "></div>
          </div>

          <div className="w-full min-h-screen h-full max-sm:h-auto px-[10vw] gap-[3vw] bg-[#1A0C25] font-montserrat text-white  flex justify-center items-start flex-wrap md:flex-nowrap">
            <div className="w-full md:w-[50%] h-auto p-[3vw]">
              <div className="w-[100%] text-right flex-col mt-[3vw] h-auto flex font-raleway">
                <div>
                  <span className="2xl:text-2xl md:text-xl text-lg text-left font-semibold">
                    What Are Assessments?
                  </span>
                  <h3 className="mt-6 2xl:text-base md:text-sm text-xs text-left mr-[1vw]">
                    Our comprehensive psycho-educational assessments help
                    identify your child's unique learning needs.
                  </h3>
                </div>
                <div className="mt-6">
                  <h3 className="2xl:text-2xl md:text-xl text-lg text-left font-semibold">
                    Why is Early Diagnosis Important?
                  </h3>
                  <p className="mt-6 2xl:text-base md:text-sm text-xs text-left mr-[1vw]">
                    It allows us to develop customized therapy solutions and
                    ensure a smooth transition into school.
                  </p>
                </div>
                <div className="mt-6">
                  <h3 className="2xl:text-2xl md:text-xl text-lg text-left font-medium">
                    Our Assessment Services:
                  </h3>
                  <div className="pl-[2vw] mt-6 2xl:text-base md:text-sm text-xs text-left">
                    {[
                      "ADHD Screening",
                      "Autism Evaluation",
                      "Speech and Language Assessments",
                      "Cognitive and Social Functioning Tests",
                      "Intellectual, Social, and Developmental Quotients",
                      "Learning Styles, Aptitude, and Interests",
                      "Learning Disabilities (Dyslexia, Dyscalculia, Dysgraphia)",
                      "Depression & Anxiety Evaluations",
                    ].map((service, index) => (
                      <h5 key={index} className="mt-6 mr-[1vw]">
                        {service}
                      </h5>
                    ))}
                  </div>
                </div>
              </div>
              <div className="w-[100%] flex-col mt-[4vw] h-[auto] py-[2vw] rounded-3xl bg-[#564A5952] px-[2vw] border border-[#B7407D80]">
                <h5 className="mt-10 2xl:text-xl md:text-lg text-base font-semibold uppercase text-center font-raleway">
                  “The Best Time to Start is NOW”
                </h5>
                <h6 className=" mt-3 pl-[1vw] 2xl:text-base md:text-sm text-xs text-center">
                  Support for Every Age Group
                </h6>
                <div className="mt-6 flex flex-col justify-center items-center pl-[2vw]">
                  <h5 className="2xl:text-xl md:text-lg text-base text-left pr-[14vw] font-medium font-raleway">
                    We Specialize In:
                  </h5>
                  <div className="pl-[1vw] 2xl:text-base md:text-sm text-xs mt-6">
                    {[
                      "Sensory Processing Disorder",
                      "Autism",
                      "ADHD",
                      "Speech and Language Challenge",
                      "Learning Disabilities",
                      "Anxiety Disorders",
                      "Slow Learners",
                      "Down Syndromes",
                      "Intellectual Disabilities",
                      "Giftedness",
                    ].map((specialty, index) => (
                      <h4 key={index} className="mt-6">
                        {specialty}
                      </h4>
                    ))}
                  </div>
                </div>
              </div>
              <div className="w-[100%] mt-[4vw] flex-col h-[35vw] justify-center max-sm:hidden  md:flex items-center">
                <div className="flex justify-center gap-5 items-center">
                  <span
                    className="h-[10px] w-[118px] rounded-full max-sm:w-[60px]"
                    style={{
                      background:
                        "linear-gradient(270deg, rgba(255, 202, 223, 0.13) 0%, #FB7CE4 100%)",
                    }}
                  ></span>
                  <h5 className="text-[#F1C6FE] 2xl:text-base md:text-sm">
                    Advantages
                  </h5>
                  <span
                    className="h-[10px] w-[118px] rounded-full max-sm:w-[60px]"
                    style={{
                      background:
                        "linear-gradient(270deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)",
                    }}
                  ></span>
                </div>
                <div className=" justify-center w-full items-center flex flex-col">
                  <span className="mt-5 2xl:text-5xl md:text-3xl font-medium">
                    Why choose us
                  </span>
                  <span className="mt-3 2xl:text-base md:text-sm">
                    Early Intervention + Consistent Practice{" "}
                  </span>
                  <span className="font-semibold italic 2xl:text-xl md:text-lg text-[#9C00AD]">
                    = Enhanced Progress!
                  </span>
                </div>
                <div className="w-full pt-[3vw] pl-[2.5vw] h-[25vw]  justify-center flex items-center">
                  <div className="w-full flex h-[22vw] relative">
                    {/* Group for pos1 */}
                    <div className="group ">
                      {/* First Image */}
                      <img
                        className="absolute cursor-pointer scale-[.9] top-5 left-[2vw]"
                        src={pos1}
                        alt=""
                        loading="lazy"
                      />

                      {/* Cloud Image - Visible on hover */}
                      <img
                        className="absolute scale-[.6] -top-[5vw] left-[3vw] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        src={cloud1}
                        alt=""
                        loading="lazy"
                      />

                      {/* Heading Content - Visible on hover */}
                      <h5 className="text-black absolute text-[10px] font-medium left-[9vw] -top-[2vw] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Expertise from <br /> Licensed <br /> Psychologists
                      </h5>
                    </div>

                    {/* Group for pos2 */}
                    <div className="group ">
                      <img
                        className="absolute cursor-pointer scale-[.9] top-[4vw] left-[15vw]"
                        src={pos2}
                        alt=""
                        loading="lazy"
                      />
                      <img
                        className="absolute scale-[.6] -top-[4vw] left-[16vw] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        src={cloud1}
                        alt=""
                        loading="lazy"
                      />
                      <h6 className="text-black absolute text-[10px] font-medium left-[22vw] -top-[1vw] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Personalized <br /> Therapy <br /> Sessions for You
                      </h6>
                    </div>

                    {/* Group for pos3 */}
                    <div className="group ">
                      <img
                        className="absolute cursor-pointer scale-[.9] top-[13vw] left-[4vw]"
                        src={pos3}
                        alt=""
                        loading="lazy"
                      />
                      <img
                        className="absolute scale-[.6] top-[4vw] z-10 left-[3vw] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        src={cloud1}
                        alt=""
                        loading="lazy"
                      />
                      <span className="text-black z-20 absolute text-[10px] font-medium left-[8.6vw] top-[7.5vw] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        24/7 Support and <br /> Guidance Available
                      </span>
                    </div>

                    {/* Group for pos4 */}
                    <div className="group ">
                      <img
                        className="absolute cursor-pointer scale-[.9] top-[15vw] left-[16vw]"
                        src={pos4}
                        alt=""
                        loading="lazy"
                      />
                      <img
                        className="absolute scale-[.6] z-10 top-[6vw] left-[15vw] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        src={cloud1}
                        alt=""
                        loading="lazy"
                      />
                      <span className="text-black absolute z-20 text-[10px] font-medium left-[21vw] top-[9vw] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Confidential <br /> and Secure <br /> Environment
                      </span>
                    </div>

                    {/* Other elements such as arrows */}
                    <img
                      className="absolute scale-[.7] top-[6vw] left-[9vw]"
                      src={arrow1}
                      alt=""
                      loading="lazy"
                    />
                    <img
                      className="absolute scale-[.7] top-[10vw] left-[10vw]"
                      src={arrow2}
                      alt=""
                      loading="lazy"
                    />
                    <img
                      className="absolute scale-[.7] top-[16vw] left-[10.5vw]"
                      src={arrow3}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
              <div className="w-[100%]  flex-col max-sm:mt-[10vw] h-[45vw] max-sm:h-auto justify-center flex items-center">
                <div className="flex justify-center gap-5 items-center">
                  <span
                    className="h-[10px] w-[118px] rounded-full max-sm:w-[60px]"
                    style={{
                      background:
                        "linear-gradient(270deg, rgba(255, 202, 223, 0.13) 0%, #FB7CE4 100%)",
                    }}
                  ></span>
                  <span className="text-[#F1C6FE] 2xl:text-base md:text-sm">
                    Advantages
                  </span>
                  <span
                    className="h-[10px] w-[118px] rounded-full max-sm:w-[60px]"
                    style={{
                      background:
                        "linear-gradient(270deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)",
                    }}
                  ></span>
                </div>
                <div className=" justify-center w-full items-center flex flex-col">
                  <h2 className="2xl:text-5xl md:text-3xl mt-5 font-manrope text-center font-medium">
                    Benefits of Our Service:
                  </h2>
                </div>
                <div className=" w-[42vw] max-sm:w-[80vw] mt-[4vw] rounded-3xl h-auto bg-[#564A5957]">
                  <table className="w-full text-left text-gray-200">
                    <thead>
                      <tr>
                        <th className="pb-4 text-center text-lg border-r border-[#F6E8FB80]">
                          {" "}
                        </th>
                        <th className="pb-4 p-[2vw] 2xl:text-sm md:text-xs text-center">
                          Ai.gnosis
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-center 2xl:text-base md:text-sm">
                      {[
                        "Affordable Compared to Traditional Centers",
                        "Access to Qualified Specialists",
                        "Flexible Scheduling (Weekdays and Evenings)",
                        "Resources Provided After Sessions",
                        "Regular Progress Updates",
                        "Engaging Group Art & Story Sessions",
                        "Direct Messaging with Specialists.",
                        "Easy Online Scheduling",
                        "Convenient App for Tips and Activities",
                        "No Travel or Waiting Time",
                        "EMI Options for Indian Residents*",
                      ].map((feature, index) => (
                        <tr
                          key={index}
                          className="border-t border-[#F6E8FB80] last:pb-[1rem]"
                        >
                          <td className="py-3 border-r border-[#F6E8FB80]">
                            {feature}
                          </td>
                          <td className="py-3 text-center">✅</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="w-auto max-sm:w-full flex-col max-sm:mt-[5vw] md:h-[vw] flex justify-center items-center ">
                <div className="b flex flex-col justify-center items-center  p-6">
                  <h2 className="text-[#F6E8FB] text-[40px] max-sm:text-[20px] 2xl:text-5xl md:text-3xl text-center font-bold font-manrope">
                    Frequently Asked Questions
                  </h2>
                  <div className=" w-auto max-sm:w-[80vw] bg-[#564A5957] rounded-3xl p-8 px-[5vw] mx-auto mt-10">
                    <div className="space-y-4">
                      {faqData.map((item, index) => (
                        <div key={index} className="border-b border-gray-400">
                          <div
                            onClick={() => toggleQuestion(index)}
                            className="flex items-center justify-between py-4 cursor-pointer"
                          >
                            <p className="2xl:text-lg md:text-base text-[#F6E8FB] font-raleway ">
                              {index + 1}. {item.question}
                            </p>
                            <button className="2xl:text-xl md:text-lg font-semibold text-gray-300">
                              {openQuestion === index ? "−" : "+"}
                            </button>
                          </div>
                          {openQuestion === index && (
                            <p className="text-gray-300 font-montserrat text-sm mt-2 mb-4">
                              {item.answer}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="text-center mt-8 2xl:text-base md:text-sm text-gray-400 cursor-pointer">
                      View All
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[50%]  max-sm:w-full  sm:block h-auto p-[3vw] md:sticky max-sm:mr-[3vw]  max-sm:mt-[5vw] md:top-10">
              <div className="max-sm:w-[80vw] w-auto relative md:z-10 flex-col h-[auto] py-[2vw] rounded-3xl bg-[#564A5957] flex items-center justify-center">
                <div className="absolute w-[15vw] h-[15vw] bottom-0 inset-1 ml-[10vw] mt-[20vw] bg-[#B740A1] opacity-45 blur-[200px] rounded-full "></div>

                <h4 className="2xl:text-xl md:text-lg mt-10 font-semibold font-manrope ">
                  Book an online consultation{" "}
                </h4>
                <h4 className="2xl:text-xl md:text-lg font-semibold font-manrope">
                  Today
                </h4>
                <form className="mt-[2vw] 2xl:text-base md:text-sm px-[2vw] flex flex-col justify-center items-center space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-[16vw] max-sm:w-full px-4 py-2 r bg-[#2521276B]  border border-[#B7407D80]  rounded-md"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-2   bg-[#2521276B]   border border-[#B7407D80] rounded-md"
                  />
                  <input
                    type="phone"
                    placeholder="Your Phone Number"
                    className="w-full px-4 py-2 r bg-[#2521276B]  border border-[#B7407D80]  rounded-md"
                  />
                  <textarea
                    placeholder="Your Message"
                    className="w-full h-32 px-4 py-2 r bg-[#2521276B]  border border-[#B7407D80]  rounded-md resize-none"
                  ></textarea>
                  <Link
                    to=""
                    className="w-[60%] max-sm:w-[78%] sm:w-[12rem] cursor-pointer mt-[5rem] border-2 border-[#B740A1] gap-4 rounded-full flex justify-center items-center text-[#0D0C0A] h-[3.5rem] group bg-transparent hover:bg-[#B7407D] transition-colors duration-300"
                  >
                    <span className="text-white 2xl:text-base md:text-sm flex-grow text-center">
                      submit
                    </span>
                    <div className="w-[2.5rem] h-[2.5rem] flex justify-center items-center text-white text-xl ml-2 group-hover:bg-white group-hover:text-black rounded-full bg-[#B740A1] mr-1">
                      <GoArrowUpRight />
                    </div>
                  </Link>
                </form>
                <div className="flex flex-col justify-start  items-start">
                  <h2 className="mt-[3vw] max-sm:py-[10px] justify-center mx-[auto] 2xl:text-base md:text-sm font-medium">
                    Reach us at{" "}
                  </h2>
                  <div className="w-full mt-[1vw] flex justify-start text-xs items-center gap-[1vw] text-[#811F67]">
                    <FaPhoneAlt />
                    <h2 className="text-white 2xl:text-sm md:text-xs text-xs font-medium ">
                      +91 8209860578
                    </h2>
                  </div>
                  <div className="w-full mt-[1vw] flex justify-start text-xs items-center gap-[1vw] text-[#811F67]">
                    <IoIosMail />
                    <h2 className="text-white 2xl:text-sm md:text-xs text-xs font-medium">
                      support@aignosis.in
                    </h2>
                  </div>
                  <div className="w-full mt-[1vw] mb-10 flex justify-start text-xs items-center gap-[1vw] text-[#3ad345]">
                    <FaWhatsapp />
                    <h2 className="text-white 2xl:text-sm md:text-xs text-xs font-medium">
                      +91 8209860578
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-sm:hidden">
            <ContactPage />
            {/* <Footer /> */}
            <BlogFooter />
          </div>
        </div>
        <div className=" md:hidden mt-[5vw]">
          <ContactPage />
          <BlogFooter />
        </div>
      </div>
    </>
  );
};

export default ServicePage1;

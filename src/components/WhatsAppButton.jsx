import React from "react";
import { FaWhatsapp } from "react-icons/fa"; // Import WhatsApp icon

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/+918209860578"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-[15%] md:bottom-[12%] right-5 z-50 bg-green-500 p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
    >
      <FaWhatsapp className="text-white w-8 h-8" />
    </a>
  );
};

export default WhatsAppButton;

import React from "react";
import { FaHeartbeat } from "react-icons/fa";

const Motivation = () => {
  return (
    <section
      className="
        py-24 
        relative 
        overflow-hidden
        bg-gradient-to-b from-white to-[#F0FFFC]
      "
    >

      {/* MATCHING TEAL MIST BACKGROUND */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] 
        bg-teal-200/25 rounded-full blur-[120px]"></div>

      <div className="absolute bottom-10 right-1/4 w-[420px] h-[420px] 
        bg-teal-300/20 rounded-full blur-[140px]"></div>

      {/* SMALLER BLUR SPOTS FOR TEXTURE */}
      <div className="absolute top-1/3 right-10 w-40 h-40 
        bg-teal-100/20 rounded-full blur-[80px]"></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-20">

        <span className="text-sm font-semibold text-teal-700 tracking-widest flex justify-center items-center gap-2">
          <FaHeartbeat className="text-red-500" />
          HEALTH MOTIVATION
        </span>

        <h2 className="mt-6 text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
          “Your body has a right over you.”
        </h2>

        <p className="mt-4 text-gray-600 text-lg">
          — Prophet Muhammad ﷺ (Sahih Bukhari)
        </p>

      </div>

    </section>
  );
};

export default Motivation;

import React from "react";
import { FaHeartbeat } from "react-icons/fa";

const Motivation = () => {
  return (
    <section className="py-24 relative bg-gradient-to-b from-white to-gray-50 overflow-hidden">

      {/* Decorative background shapes (MATCHING TopDoctorsSlider) */}
      <div className="absolute top-10 right-20 w-52 h-52 bg-teal-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-teal-300/20 rounded-full blur-2xl"></div>

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

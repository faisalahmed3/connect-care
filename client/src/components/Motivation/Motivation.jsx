import React from "react";
import { FaHeartbeat } from "react-icons/fa";

const Motivation = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-[#2DBCA6]/10 to-[#21C4C0]/10 relative overflow-hidden">

      {/* Decorative circles */}
      <div className="absolute top-10 right-20 w-40 h-40 bg-teal-300/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-14 left-16 w-52 h-52 bg-[#2DBCA6]/30 rounded-full blur-2xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-20 flex flex-col md:flex-row items-center gap-14">

        {/* LEFT TEXT */}
        <div className="max-w-lg">
          <span className="text-sm tracking-widest text-teal-600 font-bold flex items-center gap-2">
            <FaHeartbeat className="text-red-500" /> HEALTH MOTIVATION
          </span>

          <h2 className="text-4xl font-bold text-gray-800 leading-tight mt-3">
            Your Health is Your Greatest <span className="text-teal-600">Wealth</span>
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Take charge of your health today. Small daily habits shape a healthier, 
            stronger future. Stay positive, stay active, and give your body the care 
            it deserves — one step at a time.
          </p>

          <button
            className="
              mt-6 px-7 py-3 bg-teal-600 text-white font-semibold
              rounded-lg shadow-lg hover:bg-teal-700 transition
            "
          >
            Start Your Wellness Journey
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <img
            src="https://img.freepik.com/free-photo/smiling-female-doctor-holding-stethoscope_23-2147896184.jpg"
            alt="Motivation"
            className="
              w-full max-w-sm rounded-2xl shadow-xl 
              hover:scale-[1.03] transition duration-500
            "
          />
        </div>
      </div>
    </section>
  );
};

export default Motivation;

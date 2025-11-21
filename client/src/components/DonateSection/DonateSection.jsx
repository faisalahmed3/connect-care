import React from "react";
import { FaHandHoldingHeart } from "react-icons/fa";

const DonateSection = () => {
  return (
    <section
      className="
        py-24 
        relative 
        overflow-hidden
        bg-gradient-to-b from-[#F0FFFC] to-white
      "
    >
      {/* Background Highlights */}
      <div className="absolute top-14 right-20 w-60 h-60 bg-teal-300/25 rounded-full blur-3xl"></div>
      <div className="absolute bottom-12 left-16 w-72 h-72 bg-teal-200/20 rounded-full blur-[120px]"></div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-20">

        {/* TAG */}
        <span className="text-sm font-semibold text-teal-700 tracking-widest flex justify-center items-center gap-2">
          <FaHandHoldingHeart className="text-red-500 text-lg" />
          SUPPORT HUMANITY
        </span>

        {/* HEADING */}
        <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
          Help Provide <span className="text-teal-600">Free Medical Care</span>
          <br /> for the Houseless & Vulnerable
        </h2>

        {/* DESCRIPTION */}
        <p className="mt-5 text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
          Thousands of people sleep hungry, homeless, and untreated.  
          Your donation can offer them hope — access to medical checkups,  
          emergency treatment, essential medicines, and compassionate care.
        </p>

        {/* DONATE BUTTON */}
        <button
          className="
            mt-8 px-10 py-4 text-lg
            bg-teal-600 text-white font-semibold
            rounded-xl shadow-lg
            hover:bg-teal-700 hover:shadow-xl
            transition-all duration-300
          "
        >
          Donate Now
        </button>

        {/* IMPACT BOXES */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16">

          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
            <h3 className="text-2xl font-bold text-teal-600">₹300</h3>
            <p className="mt-2 text-gray-600 text-sm">Provides basic medicines for one patient.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
            <h3 className="text-2xl font-bold text-teal-600">₹800</h3>
            <p className="mt-2 text-gray-600 text-sm">Funds a full health checkup + lab tests.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
            <h3 className="text-2xl font-bold text-teal-600">₹2000</h3>
            <p className="mt-2 text-gray-600 text-sm">Supports emergency treatment & medicines.</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DonateSection;

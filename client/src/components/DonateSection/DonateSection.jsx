import React, { useState } from "react";
import { FaHandHoldingHeart } from "react-icons/fa";
import DonateModal from "../DonateModal/DonateModal";


const DonateSection = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="py-24 relative bg-gradient-to-b from-[#F0FFFC] to-white overflow-hidden">

      {/* Soft Background Shapes */}
      <div className="absolute top-10 right-20 w-60 h-60 bg-teal-300/25 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-20 w-64 h-64 bg-teal-200/20 rounded-full blur-[100px]"></div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-20">

        <span className="text-sm font-semibold text-teal-700 tracking-widest flex justify-center items-center gap-2">
          <FaHandHoldingHeart className="text-red-500" /> SUPPORT HUMANITY
        </span>

        <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
          Help Provide <span className="text-teal-600">Free Medical Care</span>  
          <br /> For the Houseless & Vulnerable
        </h2>

        <p className="mt-5 text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
          Your small donation brings life-saving support to the people who need it most.  
          Together, we can gift hope, healing, and dignity.
        </p>

        {/* OPEN MODAL BUTTON */}
        <button
          className="mt-8 px-10 py-4 text-lg bg-teal-600 text-white font-semibold rounded-xl shadow-lg hover:bg-teal-700 transition-all"
          onClick={() => setOpen(true)}
        >
          Donate Now
        </button>

        {/* DaisyUI Modal */}
        <DonateModal open={open} setOpen={setOpen} />
      </div>
    </section>
  );
};

export default DonateSection;

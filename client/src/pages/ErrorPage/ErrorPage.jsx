import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaHeartbeat } from "react-icons/fa";

const ErrorPage = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-[#EBFFFC] to-white">

      {/* Floating BG shapes */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-teal-300/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-teal-200/30 rounded-full blur-2xl"></div>

      <div className="text-center relative z-20 px-6">

        {/* Icon */}
        <FaHeartbeat className="text-teal-600 text-6xl mx-auto animate-pulse drop-shadow-lg" />

        {/* 404 Text */}
        <h1 className="text-[120px] md:text-[150px] font-extrabold text-gray-800 leading-none drop-shadow-sm">
          404
        </h1>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mt-4">
          Looks like you're lost.
        </h2>

        <p className="mt-4 text-gray-600 max-w-lg mx-auto leading-relaxed">
          The page you are looking for may have been moved, deleted, or doesn’t exist anymore.  
          Let’s get you back to safety.
        </p>

        {/* HOME BUTTON */}
        <Link
          to="/"
          className="
            inline-flex items-center gap-2
            mt-8 px-8 py-3 
            bg-teal-600 text-white 
            rounded-xl shadow-lg 
            hover:bg-teal-700 hover:shadow-xl 
            transition-all duration-300 font-semibold
          "
        >
          <FaHome />
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;

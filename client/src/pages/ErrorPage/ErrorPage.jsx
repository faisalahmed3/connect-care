import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaHeartbeat } from "react-icons/fa";

const ErrorPage = () => {
  return (
    <section
      className="
        min-h-screen flex items-center justify-center
        relative overflow-hidden
        bg-gradient-to-b from-[#EBFFFC] to-white
        px-4 sm:px-6
      "
    >
      {/* Floating BG shapes */}
      <div className="absolute top-10 sm:top-20 right-5 sm:right-20 w-40 sm:w-72 h-40 sm:h-72 bg-teal-300/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 sm:bottom-20 left-5 sm:left-20 w-36 sm:w-64 h-36 sm:h-64 bg-teal-200/30 rounded-full blur-2xl"></div>

      <div className="text-center relative z-20 max-w-lg mx-auto">

        {/* Icon */}
        <FaHeartbeat
          className="
            text-teal-600 
            text-5xl sm:text-6xl 
            mx-auto 
            animate-pulse drop-shadow-lg
          "
        />

        {/* 404 Text */}
        <h1
          className="
            font-extrabold text-gray-800 leading-none drop-shadow-sm
            text-[80px] sm:text-[120px] md:text-[150px]
          "
        >
          404
        </h1>

        <h2
          className="
            font-bold text-gray-700 mt-4
            text-2xl sm:text-3xl md:text-4xl
          "
        >
          Looks like you're lost.
        </h2>

        <p
          className="
            mt-4 text-gray-600 leading-relaxed
            text-sm sm:text-base
            px-2
          "
        >
          The page you are looking for may have been moved, deleted, or doesn’t exist anymore.
          Let’s get you back to safety.
        </p>

        {/* Home Button */}
        <Link
          to="/"
          className="
            inline-flex items-center gap-2
            mt-8 px-6 sm:px-8 py-3 
            bg-teal-600 text-white 
            rounded-xl shadow-lg 
            hover:bg-teal-700 hover:shadow-xl 
            transition-all duration-300 font-semibold
            text-sm sm:text-base
          "
        >
          <FaHome className="text-lg" />
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;

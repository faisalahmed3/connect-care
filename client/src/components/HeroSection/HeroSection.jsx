import React, { useState, useEffect } from "react";
import doctorImg from "../../assets/Doctor-bg.png";
import { Link } from "react-router-dom";

const slides = [
  {
    title: "WE PROVIDE BEST HEALTHCARE",
    text: "Get personalized healthcare services from trusted professionals.",
  },
  {
    title: "FIND DOCTORS IN SECONDS",
    text: "Search, compare and book appointments instantly with verified doctors.",
  },
  {
    title: "YOUR HEALTH, OUR PRIORITY",
    text: "Experience a seamless healthcare journey with trusted medical support.",
  },
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  const typingSpeed = isDeleting ? 40 : 60;
  const pauseTime = 1200;

  useEffect(() => {
    const currentTitle = slides[index].title;

    const handleTyping = () => {
      if (!isDeleting) {
        if (charIndex < currentTitle.length) {
          setTypedText(currentTitle.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (charIndex > 0) {
          setTypedText(currentTitle.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % slides.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, index]);

  return (
    <section
      className="
        relative w-full 
        h-[65vh] sm:h-[70vh] md:h-[80vh] lg:h-[92vh] 
        overflow-hidden
      "
    >

      {/* BG GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2DBCA6] to-[#21C4C0]"></div>
      <div className="absolute inset-0 bg-teal-500 opacity-[0.18] mix-blend-overlay"></div>

      {/* DOCTOR IMAGE */}
      <img
        src={doctorImg}
        alt="doctor"
        className="
          absolute right-0 top-0
          h-[50%] sm:h-[60%] md:h-[75%] lg:h-full
          w-auto object-contain
          pointer-events-none select-none
          z-10
        "
      />

      {/* GRADIENT OVER IMAGE */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2DBCA6]/60 to-[#21C4C0]/60 z-20 pointer-events-none"></div>

      {/* WAVE FIXED */}
      <svg
        className="absolute -bottom-[2px] left-0 w-full z-30"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#ffffff"
          d="M0,224L80,202.7C160,181,320,139,480,128C640,117,800,139,960,160C1120,181,1280,203,1360,186.7L1440,160V320H0Z"
        />
      </svg>

      {/* CONTENT */}
      <div
        className="
          relative z-40 
          max-w-7xl mx-auto 
          h-full 
          px-6 sm:px-8 md:px-12 lg:px-16
          flex items-center
        "
      >
        <div className="max-w-xl mt-10 sm:mt-16 md:mt-20">

          {/* TYPING TITLE */}
          <h1
            className="
              text-white font-extrabold tracking-tight 
              leading-[1.15]
              text-[28px] sm:text-[36px] md:text-[46px] lg:text-[52px]
              mb-4 sm:mb-5 md:mb-6
            "
          >
            {typedText}
            <span className="animate-pulse opacity-80">|</span>
          </h1>

          {/* DESCRIPTION */}
          <p
            key={index}
            className="
              text-white/90 
              text-[13px] sm:text-[14px] md:text-[15px]
              leading-[1.7]
              mb-6 sm:mb-7 md:mb-8
              max-w-xs sm:max-w-sm md:max-w-md
              transition-opacity duration-500
            "
          >
            {slides[index].text}
          </p>

          {/* BUTTON */}
          <Link to="/find-doctor">
          <button 
            className="
              px-6 sm:px-7 md:px-8 
              py-2.5 sm:py-3 
              bg-white text-teal-700 font-semibold
              rounded-md shadow-md hover:bg-gray-100 transition
              text-[13px] sm:text-[14px]
            "
          >
            Book Now
          </button>
          </Link>

          {/* DOTS */}
          <div className="flex gap-2 sm:gap-3 mt-8 sm:mt-10 ml-1 sm:ml-2">
            {slides.map((_, i) => (
              <div
                key={i}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all ${
                  index === i ? "bg-white" : "bg-white/50"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

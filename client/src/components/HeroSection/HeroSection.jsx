import React, { useState, useEffect } from "react";
import doctorImg from "../../assets/Doctor-bg.png";

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

  const typingSpeed = isDeleting ? 40 : 60; // speed for typing & erasing
  const pauseTime = 1200; // wait before erasing

  useEffect(() => {
    const currentTitle = slides[index].title;

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing forward
        if (charIndex < currentTitle.length) {
          setTypedText(currentTitle.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          // Wait before erasing
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        // Erasing backward
        if (charIndex > 0) {
          setTypedText(currentTitle.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          // Move to next slide
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % slides.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, index]);

  return (
    <section className="relative w-full h-[92vh] overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2DBCA6] to-[#21C4C0]"></div>
      <div className="absolute inset-0 bg-teal-500 opacity-[0.18] mix-blend-overlay"></div>

      {/* DOCTOR IMAGE */}
      <img
        src={doctorImg}
        alt="doctor"
        className="absolute right-0 top-0 h-full object-contain z-10 pointer-events-none select-none"
      />

      {/* OVERLAY ON DOCTOR */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2DBCA6]/60 to-[#21C4C0]/60 z-20"></div>

      {/* WAVE */}
      <svg className="absolute bottom-0 left-0 w-full z-30" viewBox="0 0 1440 320">
        <path
          fill="#ffffff"
          d="M0,224L80,202.7C160,181,320,139,480,128C640,117,800,139,960,160C1120,181,1280,203,1360,186.7L1440,160V320H0Z"
        />
      </svg>

      {/* CONTENT */}
      <div className="relative z-40 max-w-7xl mx-auto h-full px-10 flex items-center">

        <div className="max-w-xl mt-20">

          {/* TYPING + ERASING TITLE */}
          <h1 className="text-white font-extrabold tracking-tight leading-[1.15] text-[52px] mb-6">
            {typedText}
            <span className="animate-pulse opacity-80">|</span>
          </h1>

          {/* Description */}
          <p
            key={index}
            className="text-white/90 text-[15px] leading-[1.7] mb-8 max-w-md transition-opacity duration-500"
          >
            {slides[index].text}
          </p>

          {/* BUTTON */}
          <button className="px-8 py-3 bg-white text-teal-700 font-semibold rounded-md shadow-md hover:bg-gray-100 transition">
            Book Now
          </button>

          {/* DOTS */}
          <div className="flex gap-3 mt-10 ml-2">
            {slides.map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full ${
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

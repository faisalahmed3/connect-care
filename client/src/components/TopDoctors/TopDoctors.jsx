import React, { useState, useEffect, useRef } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const doctors = [
  {
    name: "Dr. Amelia Thompson",
    specialty: "Cardiologist",
    rating: 4.9,
    image: "https://i.pravatar.cc/300?img=47",
  },
  {
    name: "Dr. Ethan Carter",
    specialty: "Neurologist",
    rating: 4.8,
    image: "https://i.pravatar.cc/300?img=52",
  },
  {
    name: "Dr. Sophia Reynolds",
    specialty: "Dermatologist",
    rating: 4.7,
    image: "https://i.pravatar.cc/300?img=32",
  },
  {
    name: "Dr. Benjamin Clarke",
    specialty: "Orthopedic Surgeon",
    rating: 4.9,
    image: "https://i.pravatar.cc/300?img=15",
  },
  {
    name: "Dr. Olivia Martinez",
    specialty: "General Physician",
    rating: 4.8,
    image: "https://i.pravatar.cc/300?img=10",
  },
];

const TopDoctorsSlider = () => {
  const [current, setCurrent] = useState(0);
  const sliderRef = useRef(null);

  // ----------------------------------------
  // FIX: Declare functions BEFORE useEffect
  // ----------------------------------------

  const moveLeft = () => {
    setCurrent((prev) =>
      prev === 0 ? doctors.length - 1 : prev - 1
    );
  };

  const moveRight = () => {
    setCurrent((prev) => (prev + 1) % doctors.length);
  };

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      moveRight();
    }, 3000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION TITLE */}
        <h2 className="text-3xl font-bold text-gray-800 text-center tracking-wide">
          TOP DOCTORS
        </h2>
        <p className="text-gray-600 text-center mt-3 max-w-2xl mx-auto">
          Highly qualified and trusted healthcare professionals.
        </p>

        <div className="relative mt-14">

          {/* LEFT BUTTON */}
          <button
            onClick={moveLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 
            bg-white shadow-lg p-3 rounded-full 
            hover:bg-gray-100 transition z-20"
          >
            <FaChevronLeft className="text-teal-600" />
          </button>

          {/* RIGHT BUTTON */}
          <button
            onClick={moveRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 
            bg-white shadow-lg p-3 rounded-full 
            hover:bg-gray-100 transition z-20"
          >
            <FaChevronRight className="text-teal-600" />
          </button>

          {/* SLIDER */}
          <div className="overflow-hidden">
            <div
              ref={sliderRef}
              className="flex gap-6 transition-transform duration-700 ease-out"
              style={{
                transform: `translateX(-${current * 260}px)`,
              }}
            >
              {doctors.map((doc, index) => (
                <div
                  key={index}
                  className="min-w-[250px] bg-white rounded-2xl shadow-md 
                  hover:shadow-xl transition-all duration-300 p-6 
                  hover:-translate-y-2 hover:border-teal-500 hover:border 
                  cursor-pointer"
                >
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="w-28 h-28 rounded-full mx-auto object-cover shadow-md"
                  />

                  <h3 className="mt-5 text-lg font-semibold text-gray-800 text-center">
                    {doc.name}
                  </h3>

                  <p className="text-teal-600 text-sm font-medium text-center mt-1">
                    {doc.specialty}
                  </p>

                  <div className="flex justify-center items-center gap-1 mt-3 text-yellow-500">
                    <FaStar />
                    <span className="text-gray-700 text-sm font-medium">
                      {doc.rating}
                    </span>
                  </div>

                  <button
                    className="
                      mt-5 w-full py-2.5 
                      bg-teal-600 text-white 
                      rounded-md shadow-md 
                      hover:bg-teal-700 transition
                      text-sm font-medium
                    "
                  >
                    View Profile
                  </button>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TopDoctorsSlider;

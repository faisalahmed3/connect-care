import React, { useEffect, useRef, useState } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

// Doctors with IDs for routing
const doctors = [
  { id: 1, name: "Dr. Amelia Thompson", specialty: "Cardiologist", rating: 4.9, image: "https://i.pravatar.cc/300?img=47" },
  { id: 2, name: "Dr. Ethan Carter", specialty: "Neurologist", rating: 4.8, image: "https://i.pravatar.cc/300?img=52" },
  { id: 3, name: "Dr. Sophia Reynolds", specialty: "Dermatologist", rating: 4.7, image: "https://i.pravatar.cc/300?img=32" },
  { id: 4, name: "Dr. Benjamin Clarke", specialty: "Orthopedic Surgeon", rating: 4.9, image: "https://i.pravatar.cc/300?img=15" },
  { id: 5, name: "Dr. Olivia Martinez", specialty: "General Physician", rating: 4.8, image: "https://i.pravatar.cc/300?img=10" },
];

// Create infinite loop data
const loopDoctors = [...doctors, ...doctors, ...doctors];

const CARD_WIDTH = 260;

const TopDoctorsSlider = () => {
  const [index, setIndex] = useState(doctors.length);
  const sliderRef = useRef(null);

  const slideTo = (i) => setIndex(i);

  // Handle looping logic
  useEffect(() => {
    if (index === loopDoctors.length - doctors.length) {
      setTimeout(() => {
        sliderRef.current.style.transition = "none";
        setIndex(doctors.length);
      }, 600);
    }

    if (index === doctors.length - 1) {
      setTimeout(() => {
        sliderRef.current.style.transition = "none";
        setIndex(loopDoctors.length - doctors.length * 2);
      }, 600);
    }
  }, [index]);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      sliderRef.current.style.transition = "transform 0.6s ease";
      slideTo(index + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [index]);

  const moveLeft = () => {
    sliderRef.current.style.transition = "transform 0.6s ease";
    slideTo(index - 1);
  };

  const moveRight = () => {
    sliderRef.current.style.transition = "transform 0.6s ease";
    slideTo(index + 1);
  };

  return (
    <section className="py-24 relative bg-gradient-to-b from-white to-gray-50 overflow-hidden">

      {/* Background shapes */}
      <div className="absolute top-10 right-20 w-52 h-52 bg-teal-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-teal-300/20 rounded-full blur-2xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-20">

        {/* SECTION INTRO */}
        <div className="text-center">
          <span className="text-sm tracking-widest text-teal-600 font-semibold">
            MEET OUR EXPERTS
          </span>

          <h2 className="text-4xl font-bold text-gray-800 mt-2">
            Top Doctors
          </h2>

          <div className="w-20 h-1 bg-teal-500 mx-auto mt-3 rounded-full"></div>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto leading-relaxed">
            Our team consists of highly experienced, specialized doctors delivering exceptional care.
          </p>
        </div>

        <div className="relative mt-16">

          {/* LEFT ARROW */}
          <button
            onClick={moveLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 
            bg-white shadow-xl p-4 rounded-full 
            hover:bg-gray-100 transition z-30 border border-gray-200"
          >
            <FaChevronLeft className="text-teal-600" />
          </button>

          {/* RIGHT ARROW */}
          <button
            onClick={moveRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 
            bg-white shadow-xl p-4 rounded-full 
            hover:bg-gray-100 transition z-30 border border-gray-200"
          >
            <FaChevronRight className="text-teal-600" />
          </button>

          {/* SLIDER */}
          <div className="overflow-hidden">
            <div
              ref={sliderRef}
              className="flex gap-8 my-5"
              style={{
                transform: `translateX(-${index * CARD_WIDTH}px)`,
                transition: "transform 0.6s ease",
              }}
            >
              {loopDoctors.map((doc, idx) => (
                <div
                  key={idx}
                  className="
                    min-w-[250px] bg-white rounded-2xl shadow-lg 
                    p-6 hover:shadow-2xl transition-all duration-300 
                    hover:-translate-y-2 hover:border-teal-500 border border-transparent
                    hover:scale-[1.03]
                  "
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
                    <span className="text-gray-700 text-sm font-medium">{doc.rating}</span>
                  </div>

                  {/* View Profile Button */}
                  <Link
                    to={`/doctor/${doc.id}`}
                    className="
                      mt-5 w-full py-2.5 bg-teal-600 text-white 
                      rounded-md shadow-md hover:bg-teal-700 
                      transition text-sm font-medium text-center block
                    "
                  >
                    View Profile
                  </Link>
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

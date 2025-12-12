import React, { useEffect, useRef, useState } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const CARD_WIDTH = 260;

const TopDoctorsSlider = () => {
  const [topDoctors, setTopDoctors] = useState([]);
  const [loopDoctors, setLoopDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  const sliderRef = useRef(null);
  const [index, setIndex] = useState(0);

  const slideTo = (i) => setIndex(i);

  // FETCH ALL DOCTORS → SORT → TOP 5
  useEffect(() => {
    fetch("https://server-ten-beta-18.vercel.app/doctors")
      .then((res) => res.json())
      .then((data) => {
        if (!Array.isArray(data)) {
          console.error("Invalid API response:", data);
          setLoading(false);
          return;
        }

        // sort by rating DESC
        const sorted = data.sort((a, b) => b.rating - a.rating);

        // top 5
        const top = sorted.slice(0, 5);
        setTopDoctors(top);

        // create infinite loop dataset
        const duplicated = [...top, ...top, ...top];
        setLoopDoctors(duplicated);

        // position to center copy
        setIndex(top.length);

        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load doctors:", err);
        setLoading(false);
      });
  }, []);

  // LOOP FIXES
  useEffect(() => {
    if (loopDoctors.length === 0) return;

    const total = loopDoctors.length;
    const original = topDoctors.length;

    if (index === total - original) {
      setTimeout(() => {
        sliderRef.current.style.transition = "none";
        setIndex(original);
      }, 600);
    }

    if (index === original - 1) {
      setTimeout(() => {
        sliderRef.current.style.transition = "none";
        setIndex(total - original * 2);
      }, 600);
    }
  }, [index, topDoctors.length, loopDoctors.length]);

  // AUTO SLIDE
  useEffect(() => {
    if (loopDoctors.length === 0) return;

    const interval = setInterval(() => {
      sliderRef.current.style.transition = "transform 0.6s ease";
      slideTo(index + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [index, loopDoctors.length]);

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

      <div className="max-w-7xl mx-auto px-6 relative z-20">

        {/* HEADER */}
        <div className="text-center">
          <span className="text-sm tracking-widest text-teal-600 font-semibold">MEET OUR EXPERTS</span>
          <h2 className="text-4xl font-bold text-gray-800 mt-2">Top Doctors</h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto mt-3 rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto leading-relaxed">
            Our top-rated doctors delivering exceptional care.
          </p>
        </div>

        {/* SLIDER */}
        <div className="relative mt-16">

          {/* LEFT ARROW */}
          <button
            onClick={moveLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 
            bg-white shadow-xl p-4 rounded-full hover:bg-gray-100 transition z-30"
          >
            <FaChevronLeft className="text-teal-600" />
          </button>

          {/* RIGHT ARROW */}
          <button
            onClick={moveRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 
            bg-white shadow-xl p-4 rounded-full hover:bg-gray-100 transition z-30"
          >
            <FaChevronRight className="text-teal-600" />
          </button>

          {/* LOADING */}
          {loading ? (
            <p className="text-center text-teal-600 mt-10 animate-pulse">Loading top doctors...</p>
          ) : (
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
                  <div key={idx} className="min-w-[250px] bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                    
                    <img src={doc.image} alt={doc.name} className="w-28 h-28 rounded-full mx-auto object-cover shadow-md" />

                    <h3 className="mt-5 text-lg font-semibold text-gray-800 text-center">{doc.name}</h3>

                    <p className="text-teal-600 text-sm font-medium text-center mt-1">{doc.specialty}</p>

                    <div className="flex justify-center items-center gap-1 mt-3 text-yellow-500">
                      <FaStar />
                      <span className="text-gray-700 text-sm font-medium">{doc.rating}</span>
                    </div>

                    <Link
                      to={`/doctor/${doc.id}`}
                      className="mt-5 w-full py-2 bg-teal-600 text-white rounded-md shadow-md hover:bg-teal-700 transition text-sm font-medium text-center block"
                    >
                      View Profile
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default TopDoctorsSlider;

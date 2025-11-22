import React, { useState } from "react";
import { FaSearch, FaStar } from "react-icons/fa";

const doctors = [
  {
    name: "Dr. Amelia Thompson",
    degree: "MBBS, FCPS (Cardiology)",
    hospital: "GreenLife Hospital",
    specialty: "Cardiologist",
    rating: 4.9,
    image: "https://i.pravatar.cc/300?img=47",
  },
  {
    name: "Dr. Ethan Carter",
    degree: "MBBS, MD (Neurology)",
    hospital: "United Hospital",
    specialty: "Neurologist",
    rating: 4.8,
    image: "https://i.pravatar.cc/300?img=52",
  },
  {
    name: "Dr. Sophia Reynolds",
    degree: "MBBS, DDV (Dermatology)",
    hospital: "Popular Diagnostic Centre",
    specialty: "Dermatologist",
    rating: 4.7,
    image: "https://i.pravatar.cc/300?img=32",
  },
  {
    name: "Dr. Benjamin Clarke",
    degree: "MBBS, MS (Ortho Surgery)",
    hospital: "Square Hospital",
    specialty: "Orthopedic Surgeon",
    rating: 4.9,
    image: "https://i.pravatar.cc/300?img=15",
  },
  {
    name: "Dr. Olivia Martinez",
    degree: "MBBS, FCPS (Medicine)",
    hospital: "Ibn Sina Medical",
    specialty: "General Physician",
    rating: 4.8,
    image: "https://i.pravatar.cc/300?img=10",
  },
  {
    name: "Dr. Liam Anderson",
    degree: "MBBS, MD (Pediatrics)",
    hospital: "Evercare Hospital",
    specialty: "Pediatrician",
    rating: 4.6,
    image: "https://i.pravatar.cc/300?img=56",
  },
  {
    name: "Dr. Harper Wilson",
    degree: "MBBS, FCPS (GYNAE)",
    hospital: "Labaid Hospital",
    specialty: "Gynecologist",
    rating: 4.7,
    image: "https://i.pravatar.cc/300?img=22",
  },
  {
    name: "Dr. Noah Bennett",
    degree: "MBBS, MS (ENT)",
    hospital: "Medinova Hospital",
    specialty: "ENT Specialist",
    rating: 4.8,
    image: "https://i.pravatar.cc/300?img=5",
  },
];

const AllDoctors = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const specialties = ["All", ...new Set(doctors.map((d) => d.specialty))];

  const filteredDoctors = doctors.filter((doc) => {
    const matchName = doc.name.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === "All" || doc.specialty === filter;
    return matchName && matchFilter;
  });

  return (
    <section className="py-24 bg-gradient-to-b from-[#E4FFFA] to-white min-h-screen relative">

      {/* Background shapes */}
      <div className="absolute -top-10 left-10 w-40 h-40 bg-teal-300/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-10 w-52 h-52 bg-teal-300/20 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-20">

        {/* Page Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800">
            All Doctors
          </h2>
          <p className="text-gray-600 mt-3 max-w-xl mx-auto">
            Browse through our list of certified, experienced healthcare professionals.
          </p>
          <div className="w-24 h-1 bg-teal-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row items-center gap-5 md:justify-between mb-10">

        {/* SEARCH BAR */}
        {/* SEARCH BAR */}
        <div className="relative w-full md:w-1/3">
        <input
            type="text"
            placeholder="Search doctor..."
            className="
            w-full bg-white/70 backdrop-blur-xl 
            border border-teal-100 rounded-xl
            py-3 pl-12 pr-12 shadow-md
            focus:ring-2 focus:ring-teal-300 outline-none
            "
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />

        {/* Left ICON */}
        <FaSearch className="absolute left-4 top-3.5 text-gray-500 text-lg" />

        {/* Right clickable ICON */}
        <button
            onClick={() => console.log('Search triggered:', search)}
            className="
            absolute right-3 top-2.5 
            bg-teal-500 hover:bg-teal-600
            text-white p-2 rounded-lg
            transition-all duration-200
            shadow
            "
        >
            <FaSearch className="text-sm" />
        </button>
        </div>


          {/* FILTER */}
          <select
            className="bg-white/70 backdrop-blur-xl border border-teal-100 rounded-xl py-3 px-4 shadow-md focus:ring-2 focus:ring-teal-300 outline-none"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            {specialties.map((spec, idx) => (
              <option key={idx} value={spec}>
                {spec}
              </option>
            ))}
          </select>
        </div>

        {/* DOCTOR GRID */}
        {filteredDoctors.length === 0 ? (
          <p className="text-center text-gray-600 mt-20 text-lg">
            No doctors found 😔
          </p>
        ) : (
          <div className="
            grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
            gap-10
          ">
            {filteredDoctors.map((doc, idx) => (
              <div
                key={idx}
                className="
                  bg-white/70 backdrop-blur-xl
                  p-6 rounded-2xl shadow-lg 
                  border border-teal-100
                  hover:shadow-2xl hover:-translate-y-2
                  transition-all duration-300
                  text-center
                "
              >
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-28 h-28 rounded-full mx-auto shadow-md object-cover"
                />

                <h3 className="text-lg font-semibold mt-5 text-gray-800">
                  {doc.name}
                </h3>

                {/* DEGREE */}
                <p className="text-gray-600 text-sm mt-1">
                  {doc.degree}
                </p>

                {/* SPECIALTY */}
                <p className="text-teal-600 font-medium text-sm mt-1">
                  {doc.specialty}
                </p>

                {/* HOSPITAL */}
                <p className="text-gray-700 text-xs mt-1 italic">
                  {doc.hospital}
                </p>

                <div className="flex justify-center items-center gap-1 text-yellow-500 mt-3">
                  <FaStar />
                  <span className="text-gray-700 text-sm font-medium">
                    {doc.rating}
                  </span>
                </div>

                <button
                  className="
                    mt-5 w-full py-2.5 
                    bg-teal-600 text-white rounded-lg
                    font-semibold hover:bg-teal-700 shadow
                    transition-all
                  "
                >
                  View Profile
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AllDoctors;

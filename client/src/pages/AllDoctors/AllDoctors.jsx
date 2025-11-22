import React, { useState, useEffect } from "react";
import { FaSearch, FaStar } from "react-icons/fa";

// -- DOCTORS ARRAY (unchanged) --
const doctors = [
  // 1–8 (your originals)
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

  // 9–36 extra doctors for pagination
  {
    name: "Dr. Ava Mitchell",
    degree: "MBBS, MD (Internal Medicine)",
    hospital: "Square Hospital",
    specialty: "General Physician",
    rating: 4.5,
    image: "https://i.pravatar.cc/300?img=40",
  },
  {
    name: "Dr. William Scott",
    degree: "MBBS, FCPS (Cardiology)",
    hospital: "GreenLife Hospital",
    specialty: "Cardiologist",
    rating: 4.6,
    image: "https://i.pravatar.cc/300?img=41",
  },
  {
    name: "Dr. Emily Parker",
    degree: "MBBS, MD (Neurology)",
    hospital: "United Hospital",
    specialty: "Neurologist",
    rating: 4.7,
    image: "https://i.pravatar.cc/300?img=42",
  },
  {
    name: "Dr. Daniel Hughes",
    degree: "MBBS, MS (Ortho Surgery)",
    hospital: "Evercare Hospital",
    specialty: "Orthopedic Surgeon",
    rating: 4.4,
    image: "https://i.pravatar.cc/300?img=43",
  },
  {
    name: "Dr. Grace Turner",
    degree: "MBBS, DDV (Dermatology)",
    hospital: "Popular Diagnostic Centre",
    specialty: "Dermatologist",
    rating: 4.5,
    image: "https://i.pravatar.cc/300?img=44",
  },
  {
    name: "Dr. Jacob Morris",
    degree: "MBBS, FCPS (Medicine)",
    hospital: "Ibn Sina Medical",
    specialty: "General Physician",
    rating: 4.3,
    image: "https://i.pravatar.cc/300?img=45",
  },
  {
    name: "Dr. Mia Coleman",
    degree: "MBBS, MD (Pediatrics)",
    hospital: "Evercare Hospital",
    specialty: "Pediatrician",
    rating: 4.6,
    image: "https://i.pravatar.cc/300?img=46",
  },
  {
    name: "Dr. Lucas Reed",
    degree: "MBBS, FCPS (GYNAE)",
    hospital: "Labaid Hospital",
    specialty: "Gynecologist",
    rating: 4.4,
    image: "https://i.pravatar.cc/300?img=48",
  },
  {
    name: "Dr. Chloe Adams",
    degree: "MBBS, MS (ENT)",
    hospital: "Medinova Hospital",
    specialty: "ENT Specialist",
    rating: 4.5,
    image: "https://i.pravatar.cc/300?img=49",
  },
  {
    name: "Dr. Mason Rivera",
    degree: "MBBS, FCPS (Cardiology)",
    hospital: "GreenLife Hospital",
    specialty: "Cardiologist",
    rating: 4.2,
    image: "https://i.pravatar.cc/300?img=50",
  },
  {
    name: "Dr. Ella Foster",
    degree: "MBBS, MD (Neurology)",
    hospital: "United Hospital",
    specialty: "Neurologist",
    rating: 4.3,
    image: "https://i.pravatar.cc/300?img=51",
  },
  {
    name: "Dr. Henry Brooks",
    degree: "MBBS, DDV (Dermatology)",
    hospital: "Popular Diagnostic Centre",
    specialty: "Dermatologist",
    rating: 4.1,
    image: "https://i.pravatar.cc/300?img=53",
  },
  {
    name: "Dr. Lily Ward",
    degree: "MBBS, MS (Ortho Surgery)",
    hospital: "Square Hospital",
    specialty: "Orthopedic Surgeon",
    rating: 4.4,
    image: "https://i.pravatar.cc/300?img=54",
  },
  {
    name: "Dr. Carter James",
    degree: "MBBS, FCPS (Medicine)",
    hospital: "Ibn Sina Medical",
    specialty: "General Physician",
    rating: 4.2,
    image: "https://i.pravatar.cc/300?img=55",
  },
  {
    name: "Dr. Zoe Richardson",
    degree: "MBBS, MD (Pediatrics)",
    hospital: "Evercare Hospital",
    specialty: "Pediatrician",
    rating: 4.5,
    image: "https://i.pravatar.cc/300?img=57",
  },
  {
    name: "Dr. Nathan Cooper",
    degree: "MBBS, FCPS (GYNAE)",
    hospital: "Labaid Hospital",
    specialty: "Gynecologist",
    rating: 4.3,
    image: "https://i.pravatar.cc/300?img=58",
  },
  {
    name: "Dr. Aria Phillips",
    degree: "MBBS, MS (ENT)",
    hospital: "Medinova Hospital",
    specialty: "ENT Specialist",
    rating: 4.4,
    image: "https://i.pravatar.cc/300?img=59",
  },
  {
    name: "Dr. Logan Hayes",
    degree: "MBBS, FCPS (Cardiology)",
    hospital: "GreenLife Hospital",
    specialty: "Cardiologist",
    rating: 4.1,
    image: "https://i.pravatar.cc/300?img=60",
  },
  {
    name: "Dr. Sofia Price",
    degree: "MBBS, MD (Neurology)",
    hospital: "United Hospital",
    specialty: "Neurologist",
    rating: 4.2,
    image: "https://i.pravatar.cc/300?img=61",
  },
  {
    name: "Dr. Ryan Bell",
    degree: "MBBS, DDV (Dermatology)",
    hospital: "Popular Diagnostic Centre",
    specialty: "Dermatologist",
    rating: 4.0,
    image: "https://i.pravatar.cc/300?img=62",
  },
  {
    name: "Dr. Mila Howard",
    degree: "MBBS, MS (Ortho Surgery)",
    hospital: "Square Hospital",
    specialty: "Orthopedic Surgeon",
    rating: 4.3,
    image: "https://i.pravatar.cc/300?img=63",
  },
  {
    name: "Dr. Owen Barnes",
    degree: "MBBS, FCPS (Medicine)",
    hospital: "Ibn Sina Medical",
    specialty: "General Physician",
    rating: 4.1,
    image: "https://i.pravatar.cc/300?img=64",
  },
  {
    name: "Dr. Layla Simmons",
    degree: "MBBS, MD (Pediatrics)",
    hospital: "Evercare Hospital",
    specialty: "Pediatrician",
    rating: 4.4,
    image: "https://i.pravatar.cc/300?img=65",
  },
  {
    name: "Dr. Elijah Ward",
    degree: "MBBS, FCPS (GYNAE)",
    hospital: "Labaid Hospital",
    specialty: "Gynecologist",
    rating: 4.2,
    image: "https://i.pravatar.cc/300?img=66",
  },
  {
    name: "Dr. Nora Griffin",
    degree: "MBBS, MS (ENT)",
    hospital: "Medinova Hospital",
    specialty: "ENT Specialist",
    rating: 4.3,
    image: "https://i.pravatar.cc/300?img=67",
  },
  {
    name: "Dr. Jason Kim",
    degree: "MBBS, FCPS (Cardiology)",
    hospital: "GreenLife Hospital",
    specialty: "Cardiologist",
    rating: 4.0,
    image: "https://i.pravatar.cc/300?img=68",
  },
  {
    name: "Dr. Natalie Ross",
    degree: "MBBS, MD (Neurology)",
    hospital: "United Hospital",
    specialty: "Neurologist",
    rating: 4.1,
    image: "https://i.pravatar.cc/300?img=69",
  },
  {
    name: "Dr. Dylan Stone",
    degree: "MBBS, DDV (Dermatology)",
    hospital: "Popular Diagnostic Centre",
    specialty: "Dermatologist",
    rating: 3.9,
    image: "https://i.pravatar.cc/300?img=70",
  },
];

const AllDoctors = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("default");
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);

  // 🔥 Responsive doctors per page
  const [doctorsPerPage, setDoctorsPerPage] = useState(12);

  // Detect Screen Size (Responsive Pagination)
  useEffect(() => {
    const updatePagination = () => {
      if (window.innerWidth < 640) {
        setDoctorsPerPage(8); // mobile → 8 per page
      } else {
        setDoctorsPerPage(12); // desktop/tablet → 12 per page
      }
    };

    updatePagination();
    window.addEventListener("resize", updatePagination);
    return () => window.removeEventListener("resize", updatePagination);
  }, []);

  // Fake loading
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(t);
  }, []);

  const specialties = ["All", ...new Set(doctors.map((d) => d.specialty))];

  // Filtering
  let filtered = doctors.filter((doc) => {
    const matchName = doc.name.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === "All" || doc.specialty === filter;
    return matchName && matchFilter;
  });

  // Sorting
  if (sort === "ratingDesc") filtered = [...filtered].sort((a, b) => b.rating - a.rating);
  if (sort === "ratingAsc") filtered = [...filtered].sort((a, b) => a.rating - b.rating);

  // Pagination
  const totalPages = Math.ceil(filtered.length / doctorsPerPage);
  const indexOfLast = currentPage * doctorsPerPage;
  const indexOfFirst = indexOfLast - doctorsPerPage;
  const currentDoctors = filtered.slice(indexOfFirst, indexOfLast);

  const goToPage = (num) => setCurrentPage(num);

  return (
    <section className="py-24 bg-gradient-to-b from-[#E4FFFA] to-white min-h-screen relative">

      {/* BG SHAPES */}
      <div className="absolute -top-10 left-10 w-40 h-40 bg-teal-300/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-10 w-52 h-52 bg-teal-300/20 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-20">

        {/* TITLE */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800">All Doctors</h2>
          <p className="text-gray-600 mt-3 max-w-xl mx-auto">
            Browse through our list of certified, experienced healthcare professionals.
          </p>
          <div className="w-24 h-1 bg-teal-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* SEARCH / FILTER / SORT */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:justify-between mb-10 w-full">

          {/* SEARCH BAR */}
          <div className="relative w-full md:w-1/3">
            <FaSearch className="absolute left-4 top-3 text-gray-500" />

            <input
              type="text"
              placeholder="Search doctor..."
              className="
                w-full bg-white/70 backdrop-blur-xl 
                border border-teal-100 rounded-xl
                py-3 pl-12 pr-12 shadow-md
                focus:ring-2 focus:ring-teal-300 focus:border-teal-400
                outline-none transition
              "
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
            />

            <button
              type="button"
              className="
                absolute right-3 top-2.5 bg-teal-500 hover:bg-teal-600
                text-white p-2 rounded-lg shadow transition
              "
            >
              <FaSearch className="text-sm" />
            </button>
          </div>

          {/* FILTER + SORT WRAPPER */}
          <div className="flex w-full md:w-auto gap-3 sm:flex-row flex-col">

            {/* FILTER */}
            <select
              className="
                w-full sm:w-auto bg-white/70 backdrop-blur-xl 
                border border-teal-100 rounded-xl 
                py-3 px-4 shadow-md
                focus:ring-2 focus:ring-teal-300 focus:border-teal-400
                outline-none transition
              "
              value={filter}
              onChange={(e) => {
                setFilter(e.target.value);
                setCurrentPage(1);
              }}
            >
              {specialties.map((s, i) => (
                <option key={i} value={s}>{s}</option>
              ))}
            </select>

            {/* SORT */}
            <select
              className="
                w-full sm:w-auto bg-white/70 backdrop-blur-xl 
                border border-teal-100 rounded-xl 
                py-3 px-4 shadow-md
                focus:ring-2 focus:ring-teal-300 focus:border-teal-400
                outline-none transition
              "
              value={sort}
              onChange={(e) => {
                setSort(e.target.value);
                setCurrentPage(1);
              }}
            >
              <option value="default">Neutral (Default)</option>
              <option value="ratingDesc">Rating (High → Low)</option>
              <option value="ratingAsc">Rating (Low → High)</option>
            </select>

          </div>
        </div>

        {/* LOADING */}
        {loading && (
          <p className="text-center text-teal-600 text-lg mt-20 animate-pulse">
            Loading doctors...
          </p>
        )}

        {/* DOCTORS GRID */}
        {!loading &&
          (currentDoctors.length === 0 ? (
            <p className="text-center text-gray-600 mt-20 text-lg">No doctors found 😔</p>
          ) : (
            <div
              className="
                grid 
                grid-cols-2         /* mobile: 2 per row */
                sm:grid-cols-2
                md:grid-cols-3
                lg:grid-cols-4
                gap-6 sm:gap-8
              "
            >
              {currentDoctors.map((doc, idx) => (
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
                    className="w-24 h-24 sm:w-28 sm:h-28 rounded-full mx-auto shadow-md object-cover"
                  />

                  <h3 className="text-base sm:text-lg font-semibold mt-4 text-gray-800">
                    {doc.name}
                  </h3>

                  <p className="text-gray-600 text-xs sm:text-sm mt-1">{doc.degree}</p>

                  <p className="text-teal-600 font-medium text-xs sm:text-sm mt-1">
                    {doc.specialty}
                  </p>

                  <p className="text-gray-700 text-[11px] sm:text-xs mt-1 italic">
                    {doc.hospital}
                  </p>

                  <div className="flex justify-center items-center gap-1 text-yellow-500 mt-2 sm:mt-3">
                    <FaStar />
                    <span className="text-gray-700 text-xs sm:text-sm">
                      {doc.rating}
                    </span>
                  </div>

                  <button
                    className="
                      mt-4 w-full py-2 
                      bg-teal-600 text-white rounded-lg
                      font-semibold hover:bg-teal-700 shadow
                      transition-all text-sm
                    "
                  >
                    View Profile
                  </button>
                </div>
              ))}
            </div>
          ))}

        {/* PAGINATION */}
        {!loading && filtered.length > doctorsPerPage && (
          <div className="flex justify-center mt-10 gap-2 flex-wrap">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => goToPage(i + 1)}
                className={`
                  px-4 py-2 rounded-lg shadow text-sm font-semibold transition
                  ${currentPage === i + 1
                    ? "bg-teal-600 text-white shadow-lg"
                    : "bg-white border border-teal-200 text-teal-700 hover:bg-teal-50"
                  }
                `}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default AllDoctors;

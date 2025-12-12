import React, { useState, useEffect } from "react";
import { FaSearch, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const AllDoctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("default");

  const [currentPage, setCurrentPage] = useState(1);
  const [doctorsPerPage, setDoctorsPerPage] = useState(12);

  // ------------------------------
  // FETCH DOCTORS FROM BACKEND
  // ------------------------------
  useEffect(() => {
    fetch("https://server-ten-beta-18.vercel.app/doctors")
      .then((res) => res.json())
      .then((data) => {
        setDoctors(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  // ------------------------------
  // RESPONSIVE PAGINATION
  // ------------------------------
  useEffect(() => {
    const updatePagination = () => {
      if (window.innerWidth < 640) {
        setDoctorsPerPage(8);
      } else {
        setDoctorsPerPage(12);
      }
    };

    updatePagination();
    window.addEventListener("resize", updatePagination);
    return () => window.removeEventListener("resize", updatePagination);
  }, []);

  // ------------------------------
  // SPECIALTY FILTER OPTIONS
  // ------------------------------
  const specialties = [
    "All",
    ...new Set(doctors.map((d) => d.specialty)),
  ];

  // ------------------------------
  // FILTER + SEARCH
  // ------------------------------
  let filtered = doctors.filter((doc) => {
    const matchName = doc.name.toLowerCase().includes(search.toLowerCase());
    const matchSpecialty = filter === "All" || doc.specialty === filter;
    return matchName && matchSpecialty;
  });

  // ------------------------------
  // SORTING
  // ------------------------------
  if (sort === "ratingDesc")
    filtered = [...filtered].sort((a, b) => b.rating - a.rating);

  if (sort === "ratingAsc")
    filtered = [...filtered].sort((a, b) => a.rating - b.rating);

  // ------------------------------
  // PAGINATION LOGIC
  // ------------------------------
  const totalPages = Math.ceil(filtered.length / doctorsPerPage);
  const indexOfLast = currentPage * doctorsPerPage;
  const indexOfFirst = indexOfLast - doctorsPerPage;
  const currentDoctors = filtered.slice(indexOfFirst, indexOfLast);

  const goToPage = (num) => setCurrentPage(num);

  return (
    <section className="py-24 bg-gradient-to-b from-[#E4FFFA] to-white min-h-screen relative">

      {/* Background shapes */}
      <div className="absolute -top-10 left-10 w-40 h-40 bg-teal-300/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-10 w-52 h-52 bg-teal-300/20 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-20">

        {/* Page Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800">
            All Doctors
          </h2>
          <p className="text-gray-600 mt-3 max-w-xl mx-auto">
            Browse through our list of certified, experienced healthcare professionals.
          </p>
          <div className="w-24 h-1 bg-teal-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Search + Filter + Sort */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:justify-between mb-10 w-full">

          {/* SEARCH */}
          <div className="relative w-full md:w-1/3">
            <FaSearch className="absolute left-4 top-3 text-gray-500" />

            <input
              type="text"
              placeholder="Search doctor..."
              className="w-full bg-white/70 backdrop-blur-xl border border-teal-100 rounded-xl py-3 pl-12 pr-12 shadow-md focus:ring-2 focus:ring-teal-300 outline-none transition"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
            />

            <button
              type="button"
              className="absolute right-3 top-2.5 bg-teal-500 hover:bg-teal-600 text-white p-2 rounded-lg shadow transition"
            >
              <FaSearch className="text-sm" />
            </button>
          </div>

          {/* FILTER + SORT */}
          <div className="flex w-full md:w-auto gap-3 sm:flex-row flex-col">

            {/* FILTER */}
            <select
              className="w-full sm:w-auto bg-white/70 backdrop-blur-xl border border-teal-100 rounded-xl py-3 px-4 shadow-md focus:ring-2 focus:ring-teal-300 transition"
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
              className="w-full sm:w-auto bg-white/70 backdrop-blur-xl border border-teal-100 rounded-xl py-3 px-4 shadow-md focus:ring-2 focus:ring-teal-300 transition"
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

        {/* Loading text */}
        {loading && (
          <p className="text-center text-teal-600 text-lg mt-20 animate-pulse">
            Loading doctors...
          </p>
        )}

        {/* Doctors Grid */}
        {!loading &&
          (currentDoctors.length === 0 ? (
            <p className="text-center text-gray-600 mt-20 text-lg">No doctors found 😔</p>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
              {currentDoctors.map((doc, idx) => (
                <div
                  key={idx}
                  className="bg-white/70 backdrop-blur-xl p-6 rounded-2xl shadow-lg border border-teal-100 hover:shadow-2xl hover:-translate-y-2 transition text-center"
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

                  <Link to={`/doctor/${doc.id}`}>
                    <button className="mt-4 w-full py-2 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 shadow transition text-sm">
                      View Profile
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          ))}

        {/* Pagination */}
        {!loading && filtered.length > doctorsPerPage && (
          <div className="flex justify-center mt-10 gap-2 flex-wrap">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => goToPage(i + 1)}
                className={`px-4 py-2 rounded-lg shadow text-sm font-semibold transition ${
                  currentPage === i + 1
                    ? "bg-teal-600 text-white shadow-lg"
                    : "bg-white border border-teal-200 text-teal-700 hover:bg-teal-50"
                }`}
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

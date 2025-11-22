import React from "react";
import { useParams, Link } from "react-router-dom";
import { FaStar, FaHospital, FaUserMd, FaArrowLeft } from "react-icons/fa";
import doctors from "../../data/doctors"; 

const DoctorDetails = () => {
  const { id } = useParams();
  const doctor = doctors[id];

  if (!doctor) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-700 text-xl">Doctor not found.</p>
      </div>
    );
  }

  return (
    <section className="py-24 bg-gradient-to-b from-[#E4FFFA] to-white min-h-screen relative">

      {/* Background shapes */}
      <div className="absolute -top-10 left-10 w-44 h-44 bg-teal-300/20 rounded-full blur-2xl"></div>
      <div className="absolute bottom-0 right-10 w-52 h-52 bg-teal-300/20 rounded-full blur-3xl"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-20">

        {/* BACK BUTTON */}
        <Link
          to="/find-doctor"
          className="inline-flex items-center gap-2 mb-8 text-teal-700 font-semibold hover:text-teal-600"
        >
          <FaArrowLeft /> Back to Doctors
        </Link>

        {/* CARD */}
        <div className="bg-white/70 backdrop-blur-xl border border-teal-100 shadow-xl p-10 rounded-3xl flex flex-col md:flex-row gap-10">

          {/* IMAGE */}
          <div className="flex-shrink-0 mx-auto">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-52 h-52 rounded-full object-cover shadow-xl border-4 border-white"
            />
          </div>

          {/* DETAILS */}
          <div className="flex-1">
            <h1 className="text-3xl font-extrabold text-gray-800">{doctor.name}</h1>

            <p className="text-lg text-teal-600 font-semibold mt-2">
              {doctor.specialty}
            </p>

            <p className="text-gray-700 text-sm mt-1">{doctor.degree}</p>

            <div className="flex items-center gap-2 mt-4 text-yellow-500 text-lg">
              <FaStar />
              <span className="text-gray-800 font-medium">{doctor.rating}</span>
            </div>

            <div className="flex items-center gap-3 mt-6 text-gray-700">
              <FaHospital className="text-teal-600" />
              <span className="text-md font-medium">{doctor.hospital}</span>
            </div>

            {/* DESCRIPTION */}
            <p className="mt-6 text-gray-600 leading-relaxed">
              Dr. {doctor.name} is a highly experienced {doctor.specialty.toLowerCase()} with
              over 10+ years of experience. They have contributed significantly to medical 
              research and patient care, ensuring top-quality treatment and compassionate service.
            </p>

            {/* APPOINTMENT BUTTON */}
            <button
              className="
                mt-7 px-8 py-3 
                bg-teal-600 text-white rounded-xl 
                shadow-lg hover:bg-teal-700 
                transition font-semibold
              "
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorDetails;

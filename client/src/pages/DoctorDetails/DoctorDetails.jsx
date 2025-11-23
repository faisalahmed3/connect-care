import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FaStar, FaHospital, FaUser, FaArrowLeft } from "react-icons/fa";
import doctors from "../../data/doctors";

const DoctorDetails = () => {
  const { id } = useParams();
  const doctor = doctors.find((d) => d.id === Number(id));

  const [showModal, setShowModal] = useState(false);
  const [remainingSlots, setRemainingSlots] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [patientName, setPatientName] = useState("");
  const [patientNumber, setPatientNumber] = useState("");
  const [error, setError] = useState("");

  if (!doctor) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl text-gray-700">
        Doctor not found.
      </div>
    );
  }

  // When Book Appointment is clicked
  const handleOpenModal = () => {
    const slots = Math.floor(Math.random() * 10) + 1; // OK because inside event handler
    setRemainingSlots(slots);
    setShowModal(true);
  };

  const handleConfirm = () => {
    if (selectedSlot === null) return setError("Please select a time slot.");
    if (!patientName.trim()) return setError("Patient name is required.");
    if (!patientNumber.trim()) return setError("Contact number is required.");

    setError("");

    alert(
      `Appointment Confirmed!\n\nDoctor: ${doctor.name}\nPatient: ${patientName}\nContact: ${patientNumber}\nTime: ${doctor.timeSlots[selectedSlot].day} (${doctor.timeSlots[selectedSlot].time})`
    );

    setShowModal(false);
  };

  return (
    <>
      {/* MAIN PAGE */}
      <section className="py-24 bg-gradient-to-b from-[#E4FFFA] to-white min-h-screen relative">
        {/* BG shapes */}
        <div className="absolute -top-10 left-10 w-44 h-44 bg-teal-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-10 w-52 h-52 bg-teal-300/20 rounded-full blur-[120px]"></div>

        <div className="max-w-6xl mx-auto px-6 relative z-20">
          {/* Back */}
          <Link
            to="/find-doctor"
            className="inline-flex items-center gap-2 mb-6 text-teal-700 font-semibold hover:text-teal-600"
          >
            <FaArrowLeft /> Back to Doctors
          </Link>

          {/* MAIN CARD */}
          <div className="bg-white/70 backdrop-blur-xl border border-teal-100 shadow-xl rounded-3xl p-8 md:p-12">
            
            <div className="flex flex-col md:flex-row gap-10">
              
              {/* PHOTO + NAME */}
              <div className="flex-shrink-0 mx-auto md:mx-0">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-48 h-48 md:w-56 md:h-56 rounded-2xl object-cover shadow-xl border-4 border-white"
                />
                <h2 className="text-xl font-bold text-gray-800 mt-4 text-center md:text-left">
                  {doctor.name}
                </h2>
                <p className="text-teal-600 font-medium text-center md:text-left">
                  {doctor.specialty}
                </p>
              </div>

              {/* BIO + SPECIALIZATION */}
              <div className="flex-1">
                
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Biography
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {doctor.biography}
                  </p>
                </div>

                <div className="mt-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Specialization
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {doctor.specialization}
                  </p>
                </div>
              </div>
            </div>

            {/* REVIEWS */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Patient Reviews & Ratings
              </h3>

              <div className="space-y-4">
                {doctor.reviews.map((rev, index) => (
                  <div
                    key={index}
                    className="bg-white/70 backdrop-blur-xl border border-teal-100 rounded-xl p-4 shadow-md"
                  >
                    <div className="flex items-center gap-3">
                      <FaUser className="text-gray-500 text-xl" />
                      <p className="font-semibold text-gray-700">
                        {rev.user}
                      </p>
                    </div>

                    <div className="flex items-center gap-1 text-yellow-500 mt-2">
                      {Array.from({ length: Math.round(rev.rating) }).map(
                        (_, i) => <FaStar key={i} />
                      )}
                      <span className="text-gray-600 ml-2">
                        {rev.rating}/5
                      </span>
                    </div>

                    <p className="text-gray-700 mt-2">{rev.comment}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* TIME SLOTS */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Available Time Slots
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {doctor.timeSlots.map((slot, index) => (
                  <div
                    key={index}
                    className="bg-white/70 backdrop-blur-xl border border-teal-100 p-4 rounded-xl shadow-md"
                  >
                    <p className="font-semibold text-teal-700">{slot.day}</p>
                    <p className="text-gray-700 text-sm">{slot.time}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <button
                onClick={handleOpenModal}
                className="w-full sm:w-auto px-8 py-3 bg-teal-600 text-white rounded-xl shadow-lg hover:bg-teal-700 transition font-semibold"
              >
                Book Appointment
              </button>

              <button className="w-full sm:w-auto px-8 py-3 bg-white border border-teal-400 text-teal-700 rounded-xl shadow hover:bg-teal-50 transition font-semibold">
                Consult for Guidelines
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* APPOINTMENT MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white w-full max-w-lg p-8 rounded-2xl shadow-lg relative">

            {/* CLOSE */}
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl"
              onClick={() => setShowModal(false)}
            >
              ✖
            </button>

            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              Book Appointment
            </h2>
            <p className="text-gray-600 mb-6">
              Select an available time slot for <b>{doctor.name}</b>.
            </p>

            {/* SLOT SELECTION */}
            <div className="space-y-3">
              {doctor.timeSlots.map((slot, index) => (
                <label
                  key={index}
                  className={`block border rounded-xl p-4 cursor-pointer transition 
                    ${selectedSlot === index
                      ? "border-teal-500 bg-teal-50"
                      : "border-teal-200 bg-white"}`}
                >
                  <input
                    type="radio"
                    name="slot"
                    className="mr-3"
                    checked={selectedSlot === index}
                    onChange={() => setSelectedSlot(index)}
                  />
                  <span className="font-semibold text-teal-700">{slot.day}</span>{" "}
                  — <span className="text-gray-700 text-sm">{slot.time}</span>
                </label>
              ))}
            </div>

            {/* REMAINING SLOTS */}
            <p className="mt-5 text-gray-800 font-semibold">
              Remaining patient slots:{" "}
              <span className="text-teal-600">{remainingSlots}</span>
            </p>

            {/* NAME */}
            <div className="mt-6">
              <label className="block text-gray-700 font-semibold mb-1">
                Patient Name
              </label>
              <input
                type="text"
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                className="w-full border border-teal-200 p-3 rounded-xl focus:ring-2 focus:ring-teal-400 outline-none"
                placeholder="Enter patient name"
              />
            </div>

            {/* CONTACT */}
            <div className="mt-4">
              <label className="block text-gray-700 font-semibold mb-1">
                Contact Number
              </label>
              <input
                type="text"
                value={patientNumber}
                onChange={(e) => setPatientNumber(e.target.value)}
                className="w-full border border-teal-200 p-3 rounded-xl focus:ring-2 focus:ring-teal-400 outline-none"
                placeholder="e.g. 017XXXXXXXX"
              />
            </div>

            {/* ERROR */}
            {error && (
              <p className="mt-3 text-red-600 font-semibold">{error}</p>
            )}

            {/* CONFIRM */}
            <button
              className="w-full mt-6 py-3 bg-teal-600 text-white font-semibold rounded-xl shadow-lg hover:bg-teal-700 transition"
              onClick={handleConfirm}
            >
              Confirm Appointment
            </button>

          </div>
        </div>
      )}
    </>
  );
};

export default DoctorDetails;

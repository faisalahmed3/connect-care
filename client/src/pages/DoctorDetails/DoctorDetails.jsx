import React, { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { FaStar, FaUser, FaArrowLeft } from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/AuthContext"; // your firebase auth context

const DoctorDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);

  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);

  // Modal States
  const [showModal, setShowModal] = useState(false);
  const [remainingSlots, setRemainingSlots] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [patientName, setPatientName] = useState("");
  const [patientNumber, setPatientNumber] = useState("");
  const [error, setError] = useState("");


  // FETCH DOCTOR FROM BACKEND
  useEffect(() => {
    fetch(`http://localhost:3000/doctors/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setDoctor(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-lg text-teal-700">
        Loading doctor details...
      </div>
    );
  }

  if (!doctor) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl text-gray-700">
        Doctor not found.
      </div>
    );
  }

  // OPEN MODAL
  const handleOpenModal = () => {
    const slots = Math.floor(Math.random() * 10) + 1;
    setRemainingSlots(slots);
    setShowModal(true);
  };

  // CONFIRM APPOINTMENT
  const handleConfirm = async () => {
    if (!user) {
      return Swal.fire({
        icon: "warning",
        title: "Please login first!",
        confirmButtonColor: "#0d9488",
      });
    }

    if (selectedSlot === null)
      return setError("Please select a time slot.");

    if (!patientName.trim())
      return setError("Patient name is required.");

    if (!patientNumber.trim())
      return setError("Contact number is required.");

    setError("");

    const slot = doctor.timeSlots[selectedSlot];

    const appointmentData = {
      userId: user.uid || user.email,
      doctorId: doctor.id,
      doctorName: doctor.name,
      slotDay: slot.day,
      slotTime: slot.time,
      patientName,
      contact: patientNumber,
      createdAt: new Date(),
    };

    try {
      await fetch("http://localhost:3000/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(appointmentData),
      });

      Swal.fire({
        icon: "success",
        title: "Appointment Confirmed!",
        html: `
          <div style="text-align:left; line-height:1.6">
            <p><b>Doctor:</b> ${doctor.name}</p>
            <p><b>Patient:</b> ${patientName}</p>
            <p><b>Contact:</b> ${patientNumber}</p>
            <p><b>Time:</b> ${slot.day} — ${slot.time}</p>
          </div>
        `,
        confirmButtonColor: "#0d9488",
      });

      setShowModal(false);
      setSelectedSlot(null);
      setPatientName("");
      setPatientNumber("");
    } catch (err) {
      console.error("Appointment save failed:", err);
      Swal.fire({
        icon: "error",
        title: "Failed!",
        text: "Could not save appointment. Try again later.",
      });
    }
  };

  return (
    <>
      {/* MAIN PAGE */}
      <section className="py-24 bg-gradient-to-b from-[#E4FFFA] to-white min-h-screen relative">
        <div className="absolute -top-10 left-10 w-44 h-44 bg-teal-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-10 w-52 h-52 bg-teal-300/20 rounded-full blur-[120px]"></div>

        <div className="max-w-6xl mx-auto px-6 relative z-20">

          {/* BACK */}
          <Link
            to="/find-doctor"
            className="inline-flex items-center gap-2 mb-8 text-teal-700 font-semibold hover:text-teal-600"
          >
            <FaArrowLeft /> Back to Doctors
          </Link>

          {/* MAIN CARD */}
          <div className="bg-white/70 backdrop-blur-xl border border-teal-100 shadow-xl rounded-3xl p-8 md:p-12">

            <div className="flex flex-col md:flex-row gap-10">

              {/* IMAGE + NAME */}
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

              {/* BIO */}
              <div className="flex-1">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    Biography
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {doctor.biography}
                  </p>
                </div>

                <div className="mt-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
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
                Patient Reviews
              </h3>

              {doctor.reviews?.length > 0 ? (
                <div className="space-y-4">
                  {doctor.reviews.map((rev, idx) => (
                    <div
                      key={idx}
                      className="bg-white/70 backdrop-blur-xl border border-teal-100 rounded-xl p-4 shadow-md"
                    >
                      <div className="flex items-center gap-3">
                        <FaUser className="text-gray-500 text-xl" />
                        <p className="font-semibold text-gray-700">{rev.user}</p>
                      </div>

                      <div className="flex items-center gap-1 text-yellow-500 mt-2">
                        {Array.from({ length: Math.round(rev.rating) }).map((_, i) => (
                          <FaStar key={i} />
                        ))}
                        <span className="text-gray-600 ml-2">{rev.rating}/5</span>
                      </div>

                      <p className="text-gray-700 mt-2">{rev.comment}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">No reviews yet.</p>
              )}
            </div>

            {/* TIME SLOTS */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Available Time Slots
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {doctor.timeSlots?.map((slot, i) => (
                  <div
                    key={i}
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

            {/* Close */}
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

            {/* Slot Selection */}
            <div className="space-y-3">
              {doctor.timeSlots.map((slot, i) => (
                <label
                  key={i}
                  className={`block border rounded-xl p-4 cursor-pointer transition ${
                    selectedSlot === i
                      ? "border-teal-500 bg-teal-50"
                      : "border-teal-200 bg-white"
                  }`}
                >
                  <input
                    type="radio"
                    name="slot"
                    className="mr-3"
                    checked={selectedSlot === i}
                    onChange={() => setSelectedSlot(i)}
                  />
                  <span className="font-semibold text-teal-700">{slot.day}</span>{" "}
                  — <span className="text-gray-700 text-sm">{slot.time}</span>
                </label>
              ))}
            </div>

            {/* Remaining slots */}
            <p className="mt-5 text-gray-800 font-semibold">
              Remaining patient slots:{" "}
              <span className="text-teal-600">{remainingSlots}</span>
            </p>

            {/* Patient Name */}
            <div className="mt-6">
              <label className="block text-gray-700 font-semibold mb-1">
                Patient Name
              </label>
              <input
                type="text"
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                className="w-full border border-teal-200 p-3 rounded-xl outline-none focus:ring-2 focus:ring-teal-400"
                placeholder="Enter patient name"
              />
            </div>

            {/* Contact Number */}
            <div className="mt-4">
              <label className="block text-gray-700 font-semibold mb-1">
                Contact Number
              </label>
              <input
                type="text"
                value={patientNumber}
                onChange={(e) => setPatientNumber(e.target.value)}
                className="w-full border border-teal-200 p-3 rounded-xl outline-none focus:ring-2 focus:ring-teal-400"
                placeholder="e.g. 017XXXXXXXX"
              />
            </div>

            {error && (
              <p className="mt-3 text-red-600 font-semibold">{error}</p>
            )}

            {/* Confirm Btn */}
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

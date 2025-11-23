import React, { useState } from "react";
import {
  FaUserCircle,
  FaCalendarCheck,
  FaCalendarAlt,
  FaUserEdit,
} from "react-icons/fa";
import Swal from "sweetalert2";

const mockAppointments = {
  upcoming: [
    {
      id: 1,
      doctor: "Dr. Amelia Thompson",
      date: "27 Jan 2025",
      time: "3:00 PM",
      specialty: "Cardiologist",
    },
    {
      id: 2,
      doctor: "Dr. Ethan Carter",
      date: "29 Jan 2025",
      time: "11:00 AM",
      specialty: "Neurologist",
    },
  ],
  past: [
    {
      id: 3,
      doctor: "Dr. Sophia Reynolds",
      date: "10 Dec 2024",
      time: "5:00 PM",
      specialty: "Dermatologist",
    },
    {
      id: 4,
      doctor: "Dr. Olivia Martinez",
      date: "03 Nov 2024",
      time: "1:30 PM",
      specialty: "General Physician",
    },
  ],
};

const UserDashboard = () => {
  const [cancelModal, setCancelModal] = useState(false);
  const [cancelReason, setCancelReason] = useState("");
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  /* -------- PROFILE STATE -------- */
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "+880 1789 456 123",
  });

  const [editModal, setEditModal] = useState(false);
  const [editData, setEditData] = useState(profile);

  const handleCancelClick = (appointment) => {
    setSelectedAppointment(appointment);
    setCancelModal(true);
  };

  const confirmCancel = () => {
    if (!cancelReason.trim()) {
      Swal.fire({
        icon: "warning",
        title: "Reason Required",
        text: "Please provide a reason for cancellation.",
        confirmButtonColor: "#0d9488",
      });
      return;
    }

    Swal.fire({
      icon: "success",
      title: "Appointment Cancelled",
      html: `
        <div style="text-align:left">
          <p><b>Doctor:</b> ${selectedAppointment.doctor}</p>
          <p><b>Reason:</b> ${cancelReason}</p>
        </div>
      `,
      confirmButtonColor: "#0d9488",
    });

    setCancelModal(false);
    setCancelReason("");
    setSelectedAppointment(null);
  };

  /* -------- EDIT PROFILE -------- */
  const openEditProfile = () => {
    setEditData(profile);
    setEditModal(true);
  };

  const saveProfile = () => {
    if (!editData.name || !editData.email || !editData.phone) {
      Swal.fire({
        icon: "warning",
        title: "Missing Information",
        text: "Please fill out all fields.",
        confirmButtonColor: "#0d9488",
      });
      return;
    }

    setProfile(editData);
    setEditModal(false);

    Swal.fire({
      icon: "success",
      title: "Profile Updated!",
      text: "Your profile details were successfully updated.",
      confirmButtonColor: "#0d9488",
    });
  };

  return (
    <section className="py-20 min-h-screen bg-gradient-to-b from-[#E4FFFA] to-white relative">
      {/* Background shapes */}
      <div className="absolute top-0 left-10 w-40 h-40 bg-teal-300/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-56 h-56 bg-teal-300/20 rounded-full blur-[120px]"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-20">
        {/* Page Title */}
        <h1 className="text-4xl font-extrabold text-gray-800 mb-10 text-center">
          User Dashboard
        </h1>

        {/* User Profile Card */}
        <div className="bg-white/70 backdrop-blur-xl border border-teal-100 shadow-xl rounded-3xl p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <FaUserCircle className="text-gray-600 text-7xl" />

            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-800">{profile.name}</h2>
              <p className="text-gray-600 mt-1">Email: {profile.email}</p>
              <p className="text-gray-600">Phone: {profile.phone}</p>

              <button
                onClick={openEditProfile}
                className="mt-4 px-6 py-2 bg-teal-600 text-white rounded-xl shadow hover:bg-teal-700 transition inline-flex items-center gap-2"
              >
                <FaUserEdit /> Edit Profile
              </button>
            </div>
          </div>
        </div>

        {/* Upcoming Appointments */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center gap-3">
            <FaCalendarCheck className="text-teal-600" /> Upcoming Appointments
          </h2>

          {mockAppointments.upcoming.length === 0 ? (
            <p className="text-gray-600">No upcoming appointments.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mockAppointments.upcoming.map((app) => (
                <div
                  key={app.id}
                  className="bg-white/70 backdrop-blur-xl border border-teal-100 rounded-xl p-6 shadow-md"
                >
                  <h3 className="text-xl font-semibold text-gray-800">
                    {app.doctor}
                  </h3>
                  <p className="text-teal-600 mt-1">{app.specialty}</p>

                  <p className="text-gray-700 mt-3">
                    <b>Date:</b> {app.date}
                  </p>
                  <p className="text-gray-700">
                    <b>Time:</b> {app.time}
                  </p>

                  {/* Cancel Button */}
                  <button
                    onClick={() => handleCancelClick(app)}
                    className="mt-4 w-full py-2 bg-red-500 text-white font-semibold rounded-xl shadow hover:bg-red-600 transition"
                  >
                    Cancel Appointment
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Past Appointments */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center gap-3">
            <FaCalendarAlt className="text-teal-600" /> Past Appointments
          </h2>

          {mockAppointments.past.length === 0 ? (
            <p className="text-gray-600">No past appointments.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mockAppointments.past.map((app) => (
                <div
                  key={app.id}
                  className="bg-white/70 backdrop-blur-xl border border-teal-100 rounded-xl p-6 shadow-md"
                >
                  <h3 className="text-xl font-semibold text-gray-800">
                    {app.doctor}
                  </h3>
                  <p className="text-teal-600 mt-1">{app.specialty}</p>

                  <p className="text-gray-700 mt-3">
                    <b>Date:</b> {app.date}
                  </p>
                  <p className="text-gray-700">
                    <b>Time:</b> {app.time}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* CANCEL MODAL */}
      {cancelModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white w-full max-w-lg p-8 rounded-2xl shadow-xl relative">
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl"
              onClick={() => setCancelModal(false)}
            >
              ✖
            </button>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Cancel Appointment
            </h2>

            <p className="text-gray-600 mb-4">
              Appointment with:{" "}
              <b className="text-gray-800">{selectedAppointment?.doctor}</b>
            </p>

            <textarea
              className="w-full border border-teal-200 rounded-xl p-4 outline-none focus:ring-2 focus:ring-teal-400"
              rows="4"
              placeholder="Write your reason for cancellation..."
              value={cancelReason}
              onChange={(e) => setCancelReason(e.target.value)}
            ></textarea>

            <div className="flex justify-end gap-4 mt-6">
              <button
                className="px-6 py-2 bg-gray-200 text-gray-800 rounded-xl hover:bg-gray-300 transition"
                onClick={() => setCancelModal(false)}
              >
                Close
              </button>

              <button
                className="px-6 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition shadow"
                onClick={confirmCancel}
              >
                Confirm Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* EDIT PROFILE MODAL */}
      {editModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
          <div className="bg-white w-full max-w-lg p-8 rounded-2xl shadow-xl relative">

            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl"
              onClick={() => setEditModal(false)}
            >
              ✖
            </button>

            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Edit Profile
            </h2>

            {/* Name */}
            <input
              type="text"
              placeholder="Full Name"
              className="w-full mb-4 border border-teal-200 rounded-xl p-3 outline-none focus:ring-2 focus:ring-teal-400"
              value={editData.name}
              onChange={(e) => setEditData({ ...editData, name: e.target.value })}
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Email Address"
              className="w-full mb-4 border border-teal-200 rounded-xl p-3 outline-none focus:ring-2 focus:ring-teal-400"
              value={editData.email}
              onChange={(e) => setEditData({ ...editData, email: e.target.value })}
            />

            {/* Phone */}
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full mb-4 border border-teal-200 rounded-xl p-3 outline-none focus:ring-2 focus:ring-teal-400"
              value={editData.phone}
              onChange={(e) => setEditData({ ...editData, phone: e.target.value })}
            />

            {/* Save Button */}
            <button
              className="w-full py-3 bg-teal-600 text-white rounded-xl shadow hover:bg-teal-700 transition font-semibold"
              onClick={saveProfile}
            >
              Save Changes
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default UserDashboard;

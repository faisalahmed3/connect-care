import React, { useContext, useState } from "react";
import {
  FaUserCircle,
  FaCalendarCheck,
  FaCalendarAlt,
  FaUserEdit,
  FaSignOutAlt,
} from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/AuthContext";

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
  const { user, logOut } = useContext(AuthContext);

  const [cancelModal, setCancelModal] = useState(false);
  const [cancelReason, setCancelReason] = useState("");
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const [editModal, setEditModal] = useState(false);
  const [editData, setEditData] = useState({
    name: user?.displayName || "",
    email: user?.email || "",
    phone: user?.phoneNumber || "",
  });

  // Cancel appointment logic
  const handleCancelClick = (appointment) => {
    setSelectedAppointment(appointment);
    setCancelModal(true);
  };

  const confirmCancel = () => {
    if (!cancelReason.trim()) {
      Swal.fire({
        icon: "warning",
        title: "Reason Required",
        text: "Please provide a cancellation reason.",
      });
      return;
    }

    Swal.fire({
      icon: "success",
      title: "Appointment Cancelled",
      html: `
        <p><b>Doctor:</b> ${selectedAppointment.doctor}</p>
        <p><b>Reason:</b> ${cancelReason}</p>
      `,
    });

    setCancelModal(false);
    setCancelReason("");
  };

  // Edit Profile
  const saveProfile = () => {
    Swal.fire({
      icon: "info",
      title: "Firebase Restriction",
      text: "Profile editing is disabled because Firebase email-only auth cannot change displayName directly here.",
    });
  };

  // Logout user
  const handleLogout = async () => {
    await logOut();
    Swal.fire({
      icon: "success",
      title: "Logged Out Successfully",
      timer: 1500,
      showConfirmButton: false,
    });
  };

  return (
    <section className="py-20 min-h-screen bg-gradient-to-b from-[#E4FFFA] to-white relative">
      <div className="absolute top-0 left-10 w-40 h-40 bg-teal-300/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-56 h-56 bg-teal-300/20 rounded-full blur-[120px]"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-20">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-10 text-center">
          User Dashboard
        </h1>

        {/* User Profile Card */}
        <div className="bg-white/70 backdrop-blur-xl border border-teal-100 shadow-xl rounded-3xl p-8 mb-12 flex flex-col md:flex-row items-center gap-8">
          
          {/* Profile Image */}
          {user?.photoURL ? (
            <img
              src={user.photoURL}
              className="w-28 h-28 rounded-full border-4 border-white shadow-md object-cover"
            />
          ) : (
            <FaUserCircle className="text-gray-500 text-7xl" />
          )}

          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-800">
              {user?.displayName || "Unnamed User"}
            </h2>
            <p className="text-gray-600 mt-1">Email: {user?.email}</p>
            <p className="text-gray-600">
              Phone: {user?.phoneNumber || "Not Provided"}
            </p>

            <div className="flex gap-4 mt-4">
              <button
                onClick={() => setEditModal(true)}
                className="px-6 py-2 bg-teal-600 text-white rounded-xl shadow hover:bg-teal-700 transition inline-flex items-center gap-2"
              >
                <FaUserEdit /> Edit Profile
              </button>

              <button
                onClick={handleLogout}
                className="px-6 py-2 bg-red-500 text-white rounded-xl shadow hover:bg-red-600 transition inline-flex items-center gap-2"
              >
                <FaSignOutAlt /> Logout
              </button>
            </div>
          </div>
        </div>

        {/* Upcoming Appointments */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center gap-3">
            <FaCalendarCheck className="text-teal-600" /> Upcoming Appointments
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mockAppointments.upcoming.map((app) => (
              <div
                key={app.id}
                className="bg-white/70 backdrop-blur-xl border border-teal-100 rounded-xl p-6 shadow-md"
              >
                <h3 className="text-xl font-semibold text-gray-800">{app.doctor}</h3>
                <p className="text-teal-600 mt-1">{app.specialty}</p>
                <p className="text-gray-700 mt-3">
                  <b>Date:</b> {app.date}
                </p>
                <p className="text-gray-700">
                  <b>Time:</b> {app.time}
                </p>

                <button
                  onClick={() => handleCancelClick(app)}
                  className="mt-4 w-full py-2 bg-red-500 text-white font-semibold rounded-xl shadow hover:bg-red-600 transition"
                >
                  Cancel Appointment
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Past Appointments */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center gap-3">
            <FaCalendarAlt className="text-teal-600" /> Past Appointments
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mockAppointments.past.map((app) => (
              <div
                key={app.id}
                className="bg-white/70 backdrop-blur-xl border border-teal-100 rounded-xl p-6 shadow-md"
              >
                <h3 className="text-xl font-semibold text-gray-800">{app.doctor}</h3>
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

            <textarea
              className="w-full border border-teal-200 rounded-xl p-4 outline-none focus:ring-2 focus:ring-teal-400"
              rows="4"
              placeholder="Reason for cancellation..."
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
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
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

            <input
              type="text"
              placeholder="Full Name"
              className="w-full mb-4 border border-teal-200 rounded-xl p-3"
              value={editData.name}
              onChange={(e) => setEditData({ ...editData, name: e.target.value })}
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full mb-4 border border-teal-200 rounded-xl p-3"
              value={editData.email}
              onChange={(e) => setEditData({ ...editData, email: e.target.value })}
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="w-full mb-4 border border-teal-200 rounded-xl p-3"
              value={editData.phone}
              onChange={(e) => setEditData({ ...editData, phone: e.target.value })}
            />

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

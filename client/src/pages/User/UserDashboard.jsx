import React from "react";
import { FaUserCircle, FaCalendarCheck, FaCalendarAlt, FaUserEdit } from "react-icons/fa";

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
              <h2 className="text-2xl font-bold text-gray-800">John Doe</h2>
              <p className="text-gray-600 mt-1">Email: john@example.com</p>
              <p className="text-gray-600">Phone: +880 1789 456 123</p>

              <button className="mt-4 px-6 py-2 bg-teal-600 text-white rounded-xl shadow hover:bg-teal-700 transition inline-flex items-center gap-2">
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
          )}
        </div>
      </div>
    </section>
  );
};

export default UserDashboard;

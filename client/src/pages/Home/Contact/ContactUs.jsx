import React from "react";
import { FaEnvelope, FaPhoneAlt, FaUsers } from "react-icons/fa";

const teamMembers = [
  {
    name: "Jannatul Kawnine Ikra",
    id: "233022712",
    section: "07",
  },
  {
    name: "Tanjima Binta Hoque",
    id: "233021712",
    section: "07",
  },
  {
    name: "Fabiha Ayman Meeha",
    id: "233023512",
    section: "07",
  },
  {
    name: "Israt Jahan Chowdhury",
    id: "233007312",
    section: "07",
  },
];

const ContactUs = () => {
  return (
    <section
      className="
        py-24 relative 
        bg-gradient-to-b from-[#E4FFFA] to-white 
        overflow-hidden
      "
    >
      {/* Background orbs */}
      <div className="absolute -top-16 left-10 w-60 h-60 bg-teal-300/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-10 w-72 h-72 bg-teal-200/30 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-20">

        {/* HEADING */}
        <div className="text-center">
          <span className="text-sm font-semibold text-teal-600 tracking-widest flex justify-center items-center gap-2">
            <FaUsers /> CONTACT TEAM
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mt-3">
            Get in Touch With Us
          </h2>

          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            We’re here to help you. Contact our project team for any queries, support, or assistance.
          </p>

          <div className="w-24 h-1 bg-teal-500 mx-auto mt-5 rounded-full"></div>
        </div>

        {/* TEAM CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 mt-16">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="
                bg-white/70 backdrop-blur-xl
                p-8 rounded-2xl shadow-lg 
                border border-teal-100
                hover:shadow-2xl hover:-translate-y-1
                transition-all duration-300
              "
            >
              <h3 className="text-2xl font-bold text-gray-800">
                {member.name}
              </h3>

              <p className="text-gray-700 mt-2 text-[15px]">
                <span className="font-semibold">Student ID:</span> {member.id}
              </p>

              <p className="text-gray-700 text-[15px]">
                <span className="font-semibold">Section:</span> {member.section}
              </p>
            </div>
          ))}
        </div>

        {/* CONTACT METHODS */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-gray-800">Reach Us Directly</h3>

          <div className="flex flex-col sm:flex-row justify-center gap-10 mt-10">
            {/* Email */}
            <div
              className="
                flex items-center gap-4 bg-white/60 backdrop-blur-xl 
                px-6 py-4 rounded-xl shadow-md border border-teal-100
                hover:shadow-xl transition
              "
            >
              <FaEnvelope className="text-teal-600 text-2xl" />
              <div>
                <p className="text-gray-700 font-semibold">Email</p>
                <p className="text-gray-500 text-sm">support@connectcare.com</p>
              </div>
            </div>

            {/* Phone */}
            <div
              className="
                flex items-center gap-4 bg-white/60 backdrop-blur-xl 
                px-6 py-4 rounded-xl shadow-md border border-teal-100
                hover:shadow-xl transition
              "
            >
              <FaPhoneAlt className="text-teal-600 text-2xl" />
              <div>
                <p className="text-gray-700 font-semibold">Phone</p>
                <p className="text-gray-500 text-sm">+880 1234-567890</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactUs;

import React from "react";
import { FaEnvelope, FaPhoneAlt, FaUsers, FaIdBadge } from "react-icons/fa";

const teamMembers = [
  {
    name: "Jannatul Kawnine Ikra",
    id: "233022712",
    section: "07",
    email: "233022712@eastdelta.edu.bd",
  },
  {
    name: "Tanjima Binta Hoque",
    id: "233021712",
    section: "07",
    email: "233021712@eastdelta.edu.bd",
  },
  {
    name: "Fabiha Ayman Meeha",
    id: "233023512",
    section: "07",
    email: "233023512@eastdelta.edu.bd",
  },
  {
    name: "Israt Jahan Chowdhury",
    id: "233007312",
    section: "07",
    email: "233007312@eastdelta.edu.bd",
  },
];

const ContactUs = () => {
  return (
    <section className="py-20 md:py-24 relative bg-gradient-to-b from-[#E4FFFA] to-white overflow-hidden">

      {/* Background Shapes */}
      <div className="absolute -top-16 left-6 sm:left-10 w-40 sm:w-60 h-40 sm:h-60 bg-teal-300/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-6 sm:right-10 w-48 sm:w-72 h-48 sm:h-72 bg-teal-200/30 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">

        {/* Header */}
        <div className="text-center">
          <span className="text-xs sm:text-sm font-semibold text-teal-600 tracking-widest flex justify-center items-center gap-2">
            <FaUsers /> CONTACT TEAM
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mt-3">
            Get in Touch With Us
          </h2>

          <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-sm sm:text-base">
            Our team is here to assist with questions, academic clarifications, or project guidance.
          </p>

          <div className="w-20 sm:w-24 h-1 bg-teal-500 mx-auto mt-5 rounded-full"></div>
        </div>

        {/* TEAM MEMBER GRID */}
        <div className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-2 
            gap-6 sm:gap-8 lg:gap-10 
            mt-14 sm:mt-16
        ">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="
                bg-white/70 backdrop-blur-xl
                p-6 sm:p-8 rounded-2xl shadow-lg 
                border border-teal-100
                hover:shadow-2xl hover:-translate-y-2
                transition-all duration-300
              "
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 flex items-center gap-2">
                <FaIdBadge className="text-teal-600" />
                {member.name}
              </h3>

              <p className="text-gray-700 mt-3 text-sm sm:text-[15px]">
                <span className="font-semibold">Student ID:</span> {member.id}
              </p>

              <p className="text-gray-700 text-sm sm:text-[15px]">
                <span className="font-semibold">Section:</span> {member.section}
              </p>

              {/* EMAIL */}
              <div className="mt-4 flex items-center gap-2 text-gray-700 text-sm sm:text-[15px] break-all">
                <FaEnvelope className="text-teal-600 text-xl" />
                <a
                  href={`mailto:${member.email}`}
                  className="hover:text-teal-600 transition font-medium"
                >
                  {member.email}
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* CONTACT METHODS */}
        <div className="mt-20 text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
            Our Helpline
          </h3>

          <div className="flex flex-row justify-center gap-6 sm:gap-10 mt-10">

            {/* Email Box */}
            <div
              className="
                flex items-center gap-4 
                bg-white/60 backdrop-blur-xl 
                px-5 sm:px-6 py-4 
                rounded-xl shadow-md 
                border border-teal-100 
                hover:shadow-xl transition
              "
            >
              <FaEnvelope className="text-teal-600 text-xl sm:text-2xl" />
              <div>
                <p className="text-gray-700 font-semibold text-sm sm:text-base">Email</p>
                <p className="text-gray-500 text-xs sm:text-sm">support@connectcare.com</p>
              </div>
            </div>

            {/* Phone Box */}
            <div
              className="
                flex items-center gap-4 
                bg-white/60 backdrop-blur-xl 
                px-5 sm:px-6 py-4 
                rounded-xl shadow-md 
                border border-teal-100 
                hover:shadow-xl transition
              "
            >
              <FaPhoneAlt className="text-teal-600 text-xl sm:text-2xl" />
              <div>
                <p className="text-gray-700 font-semibold text-sm sm:text-base">Phone</p>
                <p className="text-gray-500 text-xs sm:text-sm">+8801 ********</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactUs;

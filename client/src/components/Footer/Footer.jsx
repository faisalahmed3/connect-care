import React from "react";
import logo from "../../assets/logo.png";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#E8FFFC] to-white pt-16 pb-10 relative overflow-hidden">

      {/* Soft glowing backgrounds */}
      <div className="absolute top-0 right-10 w-48 h-48 bg-teal-300/20 rounded-full blur-2xl"></div>
      <div className="absolute bottom-0 left-10 w-56 h-56 bg-teal-200/20 rounded-full blur-2xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-20">

        {/* LOGO + BRAND */}
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-3">
            <img src={logo} alt="ConnectCare" className="w-12 h-12 drop-shadow" />
            <h2 className="text-2xl font-bold text-gray-800 tracking-wide">
              ConnectCare
            </h2>
          </div>

          <p className="text-gray-600 max-w-lg mt-3 text-sm">
            Providing seamless access to healthcare, trusted doctors, and easy appointment booking.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-6 mt-6">
            <FaFacebook className="text-gray-600 hover:text-teal-600 text-xl cursor-pointer transition" />
            <FaInstagram className="text-gray-600 hover:text-teal-600 text-xl cursor-pointer transition" />
            <FaTwitter className="text-gray-600 hover:text-teal-600 text-xl cursor-pointer transition" />
          </div>
        </div>

        {/* LINK CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-14">

          {/* CARD 1 */}
          <div className="bg-white/60 backdrop-blur-md p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition">
            <h3 className="text-gray-800 font-semibold mb-3 text-lg">Quick Links</h3>

            <div className="space-y-2">
              <a href="/" className="block text-gray-600 hover:text-teal-600 transition">Home</a>
              <a href="/find-doctor" className="block text-gray-600 hover:text-teal-600 transition">Find a Doctor</a>
              <a href="/contact" className="block text-gray-600 hover:text-teal-600 transition">Contact Us</a>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="bg-white/60 backdrop-blur-md p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition">
            <h3 className="text-gray-800 font-semibold mb-3 text-lg">Legal</h3>

            <div className="space-y-2">
              <a href="/privacy-policy" className="block text-gray-600 hover:text-teal-600 transition">Privacy Policy</a>
              <a href="/terms" className="block text-gray-600 hover:text-teal-600 transition">Terms & Conditions</a>
              <a href="/cookies" className="block text-gray-600 hover:text-teal-600 transition">Cookies</a>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="bg-white/60 backdrop-blur-md p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition">
            <h3 className="text-gray-800 font-semibold mb-3 text-lg">Support</h3>

            <div className="space-y-2">
              <a href="/faq" className="block text-gray-600 hover:text-teal-600 transition">FAQ</a>
              <a href="/help" className="block text-gray-600 hover:text-teal-600 transition">Help Center</a>
              <a href="/appointments" className="block text-gray-600 hover:text-teal-600 transition">Appointments</a>
            </div>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="text-center mt-14">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} ConnectCare — All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

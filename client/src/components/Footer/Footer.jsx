import React from "react";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-20 py-12">
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP SECTION */}
        <div className="flex flex-col items-center text-center space-y-4">
          {/* Logo + Brand */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="ConnectCare" className="w-10 h-10" />
            <h2 className="text-xl font-semibold text-gray-800">
              ConnectCare
            </h2>
          </div>

          <p className="text-gray-500 text-sm max-w-md">
            Your trusted partner for finding doctors, booking appointments,
            and accessing reliable healthcare services easily.
          </p>
        </div>

        {/* LINK GRID */}
        <div className="
          grid grid-cols-1 sm:grid-cols-3 
          gap-6 mt-10 text-center sm:text-left
        ">
          <div className="space-y-2">
            <h3 className="text-gray-800 font-semibold mb-2">Quick Links</h3>
            <a href="/" className="text-gray-600 hover:text-blue-600 block">Home</a>
            <a href="/find-doctor" className="text-gray-600 hover:text-blue-600 block">Find a Doctor</a>
            <a href="/contact" className="text-gray-600 hover:text-blue-600 block">Contact Us</a>
          </div>

          <div className="space-y-2">
            <h3 className="text-gray-800 font-semibold mb-2">Legal</h3>
            <a href="/privacy-policy" className="text-gray-600 hover:text-blue-600 block">Privacy Policy</a>
            <a href="/terms" className="text-gray-600 hover:text-blue-600 block">Terms & Conditions</a>
            <a href="/cookies" className="text-gray-600 hover:text-blue-600 block">Cookies</a>
          </div>

          <div className="space-y-2">
            <h3 className="text-gray-800 font-semibold mb-2">Support</h3>
            <a href="/faq" className="text-gray-600 hover:text-blue-600 block">FAQ</a>
            <a href="/help" className="text-gray-600 hover:text-blue-600 block">Help Center</a>
            <a href="/appointments" className="text-gray-600 hover:text-blue-600 block">Appointments</a>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="text-center mt-10 pt-2">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} ConnectCare — All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

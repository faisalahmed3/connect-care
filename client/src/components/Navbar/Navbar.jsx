import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../../assets/logo.png";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-[999] bg-transparent">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-5 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-2 cursor-pointer select-none">
          <img src={logo} alt="ConnectCare Logo" className="w-10 h-10 object-contain" />
          <h1 className="text-white text-2xl font-semibold tracking-wide">
            ConnectCare
          </h1>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-12">
          <a
            href="/"
            className="text-white text-sm font-medium tracking-wider hover:text-gray-200 transition"
          >
            HOME
          </a>

          <a
            href="/find-doctor"
            className="text-white text-sm font-medium tracking-wider hover:text-gray-200 transition"
          >
            FIND A DOCTOR
          </a>

          <a
            href="/contact"
            className="text-white text-sm font-medium tracking-wider hover:text-gray-200 transition"
          >
            CONTACT US
          </a>

          {/* AVATAR ICON → DASHBOARD */}
          <a
            href="/dashboard"
            className="text-white hover:text-gray-200 transition text-2xl"
            title="Go to Dashboard"
          >
            <FaUserCircle />
          </a>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {open && (
        <div className="md:hidden bg-white/10 backdrop-blur-md py-5 px-6 space-y-5 text-white text-sm font-medium tracking-wider">

          <a href="/" className="block hover:text-gray-200 transition">
            HOME
          </a>

          <a href="/find-doctor" className="block hover:text-gray-200 transition">
            FIND A DOCTOR
          </a>

          <a href="/contact" className="block hover:text-gray-200 transition">
            CONTACT US
          </a>

          {/* MOBILE AVATAR */}
          <a
            href="/dashboard"
            className="block text-white text-2xl hover:text-gray-200 transition"
          >
            <FaUserCircle />
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;

import React, { useState } from "react";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-[999] bg-transparent">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-5 flex items-center justify-between">

        {/* LOGO */}
        <h1 className="text-white text-2xl font-semibold tracking-wide select-none">
          ConnectCare
        </h1>

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

          {/* SEARCH ICON */}
          <button className="text-white text-lg hover:text-gray-200 transition">
            <FiSearch size={18} />
          </button>
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

          <button className="text-white text-lg hover:text-gray-200 transition">
            <FiSearch size={18} />
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;

import React from "react";
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-30">
      <div className="max-w-7xl mx-auto px-10 py-6 flex items-center justify-between">

        {/* LOGO */}
        <h1 className="text-white text-xl font-semibold tracking-wide">
          ConnectCare
        </h1>

        {/* NAV LINKS */}
        <nav className="flex items-center gap-12">
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
      </div>
    </header>
  );
};

export default Navbar;

import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../../assets/logo.png";
import { FaUserCircle } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [glass, setGlass] = useState(false);
  const location = useLocation();

  // scroll + route behavior
  useEffect(() => {
    const isNotHome = location.pathname !== "/";

    const handleScroll = () => {
      if (isNotHome) {
        setGlass(true);
      } else {
        setGlass(window.scrollY > 120);
      }
    };

    // Update navbar immediately
    handleScroll();

    if (!isNotHome) {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [location.pathname]);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-[999]
        transition-all duration-300

        ${glass
          ? "backdrop-blur-xl bg-white/20 border-b border-white/30 shadow-[0_4px_20px_rgba(0,0,0,0.1)]"
          : "bg-transparent border-none shadow-none"}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2 select-none">
          <img src={logo} alt="ConnectCare" className="w-10 h-10" />
          <h1 className={`text-2xl font-semibold tracking-wide transition ${
            glass ? "text-teal-700" : "text-white"
          }`}>
            ConnectCare
          </h1>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-12">
          {[
            { to: "/", label: "HOME" },
            { to: "/find-doctor", label: "FIND A DOCTOR" },
            { to: "/contact", label: "CONTACT US" },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`transition font-medium tracking-wider ${
                glass ? "text-teal-700 hover:text-teal-500" : "text-white hover:text-gray-200"
              }`}
            >
              {item.label}
            </Link>
          ))}

          <Link
            to="/dashboard"
            className={glass ? "text-teal-700" : "text-white"}
          >
            <FaUserCircle className="text-2xl hover:opacity-80 transition" />
          </Link>
        </nav>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden text-2xl ${
            glass ? "text-teal-700" : "text-white"
          }`}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="
          md:hidden
          bg-white/30 backdrop-blur-xl border-t border-white/30
          py-6 px-6 shadow-lg space-y-6 text-teal-700 font-medium tracking-wider
        ">
          <Link to="/" onClick={() => setOpen(false)}>HOME</Link>
          <Link to="/find-doctor" onClick={() => setOpen(false)}>FIND A DOCTOR</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>CONTACT US</Link>

          <Link to="/dashboard" onClick={() => setOpen(false)} className="text-3xl">
            <FaUserCircle />
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;

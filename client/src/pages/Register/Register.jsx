import React, { useState, useContext } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/AuthContext";

const Register = () => {
  const { registerUser, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleRegister = async () => {
    const { name, email, phone, password, confirmPassword } = form;

    if (!name || !email || !phone || !password || !confirmPassword) {
      return Swal.fire({
        icon: "warning",
        title: "Missing Information",
        text: "All fields are required.",
        confirmButtonColor: "#0d9488",
      });
    }

    if (password !== confirmPassword) {
      return Swal.fire({
        icon: "error",
        title: "Password Mismatch",
        text: "Passwords do not match.",
      });
    }

    try {
      await registerUser(email, password);

      Swal.fire({
        icon: "success",
        title: "Registration Successful!",
        text: "Your account has been created.",
        confirmButtonColor: "#0d9488",
      });

      navigate("/login");

    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Registration Failed",
        text: error.message,
      });
    }
  };

  const handleGoogleRegister = async () => {
    try {
      await googleLogin();

      Swal.fire({
        icon: "success",
        title: "Registered with Google!",
        confirmButtonColor: "#0d9488",
      });

      navigate("/dashboard");

    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Google Registration Failed",
        text: error.message,
      });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#E4FFFA] to-white flex items-center justify-center px-4 sm:px-6 md:px-10 relative overflow-hidden">

      {/* Background shapes */}
      <div className="absolute top-10 left-10 w-40 sm:w-56 md:w-64 bg-teal-300/20 rounded-full blur-3xl h-40 sm:h-56 md:h-64"></div>
      <div className="absolute bottom-10 right-10 w-48 sm:w-64 md:w-72 bg-teal-300/20 rounded-full blur-[120px] h-48 sm:h-64 md:h-72"></div>

      {/* Register Box */}
      <div className="w-full max-w-md bg-white/60 backdrop-blur-xl shadow-xl rounded-3xl p-8 sm:p-10 relative z-20 border border-teal-100">

        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 text-center">
          Register
        </h1>
        <p className="text-center text-gray-600 mt-2 text-sm sm:text-base">
          Create a new account
        </p>

        {/* FULL NAME */}
        <div className="mt-8">
          <label className="text-gray-700 font-medium text-sm sm:text-base">
            Full Name
          </label>
          <div className="relative mt-2">
            <FaUser className="absolute left-3 top-3 text-gray-500" />
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-teal-200 bg-white/70 backdrop-blur-xl rounded-xl py-3 pl-10 pr-4 outline-none focus:ring-2 focus:ring-teal-400 text-sm sm:text-base"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>
        </div>

        {/* EMAIL */}
        <div className="mt-6">
          <label className="text-gray-700 font-medium text-sm sm:text-base">
            Email
          </label>
          <div className="relative mt-2">
            <FaEnvelope className="absolute left-3 top-3 text-gray-500" />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-teal-200 bg-white/70 backdrop-blur-xl rounded-xl py-3 pl-10 pr-4 outline-none focus:ring-2 focus:ring-teal-400 text-sm sm:text-base"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>
        </div>

        {/* PHONE */}
        <div className="mt-6">
          <label className="text-gray-700 font-medium text-sm sm:text-base">
            Phone Number
          </label>
          <div className="relative mt-2">
            <FaPhone className="absolute left-3 top-3 text-gray-500" />
            <input
              type="number"
              placeholder="Enter your phone number"
              className="w-full border border-teal-200 bg-white/70 backdrop-blur-xl rounded-xl py-3 pl-10 pr-4 outline-none focus:ring-2 focus:ring-teal-400 text-sm sm:text-base"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
          </div>
        </div>

        {/* PASSWORD */}
        <div className="mt-6">
          <label className="text-gray-700 font-medium text-sm sm:text-base">
            Password
          </label>
          <div className="relative mt-2">
            <FaLock className="absolute left-3 top-3 text-gray-500" />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Create a password"
              className="w-full border border-teal-200 bg-white/70 backdrop-blur-xl rounded-xl py-3 pl-10 pr-12 outline-none focus:ring-2 focus:ring-teal-400 text-sm sm:text-base"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-3 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>

        {/* CONFIRM PASSWORD */}
        <div className="mt-6">
          <label className="text-gray-700 font-medium text-sm sm:text-base">
            Confirm Password
          </label>
          <div className="relative mt-2">
            <FaLock className="absolute left-3 top-3 text-gray-500" />

            <input
              type={showConfirm ? "text" : "password"}
              placeholder="Re-enter your password"
              className="w-full border border-teal-200 bg-white/70 backdrop-blur-xl rounded-xl py-3 pl-10 pr-12 outline-none focus:ring-2 focus:ring-teal-400 text-sm sm:text-base"
              value={form.confirmPassword}
              onChange={(e) =>
                setForm({ ...form, confirmPassword: e.target.value })
              }
            />

            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-4 top-3 text-gray-500 hover:text-gray-700"
            >
              {showConfirm ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>

        {/* REGISTER BUTTON */}
        <button
          onClick={handleRegister}
          className="mt-8 w-full bg-teal-600 text-white py-3 rounded-xl font-semibold shadow-lg hover:bg-teal-700 transition text-sm sm:text-base"
        >
          Register
        </button>

        {/* GOOGLE REGISTER */}
        <button
          onClick={handleGoogleRegister}
          className="mt-4 w-full py-3 bg-white border border-teal-300 text-gray-700 rounded-xl shadow hover:bg-teal-50 transition flex items-center justify-center gap-3 text-sm sm:text-base"
        >
          <FcGoogle className="text-2xl" />
          Register with Google
        </button>

        {/* LOGIN LINK */}
        <p className="mt-6 text-center text-gray-600 text-sm sm:text-base">
          Already have an account?{" "}
          <Link to="/login">
            <span className="text-teal-600 font-semibold cursor-pointer hover:underline">
              Login here
            </span>
          </Link>
        </p>
      </div>

    </section>
  );
};

export default Register;

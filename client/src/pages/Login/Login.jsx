import React, { useState } from "react";
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleLogin = () => {
    if (!form.email || !form.password) {
      Swal.fire({
        icon: "warning",
        title: "Missing Information",
        text: "Please enter your email and password.",
        confirmButtonColor: "#0d9488",
      });
      return;
    }

    if (form.email === "john@example.com" && form.password === "123456") {
      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: "Welcome back!",
        confirmButtonColor: "#0d9488",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: "Invalid email or password.",
        confirmButtonColor: "#ef4444",
      });
    }
  };

  const handleGoogleLogin = () => {
    Swal.fire({
      icon: "info",
      title: "Google Login",
      text: "Google login feature coming soon!",
      confirmButtonColor: "#0d9488",
    });
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#E4FFFA] to-white flex items-center justify-center px-4 sm:px-6 md:px-10 relative overflow-hidden">

      {/* Background shapes */}
      <div className="absolute top-10 left-10 w-40 sm:w-56 md:w-64 h-40 sm:h-56 md:h-64 bg-teal-300/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-48 sm:w-64 md:w-72 h-48 sm:h-64 md:h-72 bg-teal-300/20 rounded-full blur-[120px]"></div>

      {/* Login Box */}
      <div className="w-full max-w-md bg-white/60 backdrop-blur-xl shadow-xl rounded-3xl p-8 sm:p-10 relative z-20 border border-teal-100">

        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 text-center">
          Login
        </h1>

        <p className="text-center text-gray-600 mt-2 text-sm sm:text-base">
          Welcome back! Please enter your details.
        </p>

        {/* EMAIL */}
        <div className="mt-8">
          <label className="text-gray-700 font-medium text-sm sm:text-base">Email</label>
          <div className="relative mt-2">
            <FaUser className="absolute left-3 top-3 text-gray-500" />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-teal-200 bg-white/70 backdrop-blur-xl rounded-xl py-3 pl-10 pr-4 outline-none focus:ring-2 focus:ring-teal-400 text-sm sm:text-base"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>
        </div>

        {/* PASSWORD */}
        <div className="mt-6">
          <label className="text-gray-700 font-medium text-sm sm:text-base">Password</label>
          <div className="relative mt-2">
            <FaLock className="absolute left-3 top-3 text-gray-500" />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
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

        {/* LOGIN BUTTON */}
        <button
          onClick={handleLogin}
          className="mt-8 w-full bg-teal-600 text-white py-3 rounded-xl font-semibold shadow-lg hover:bg-teal-700 transition text-sm sm:text-base"
        >
          Login
        </button>

        {/* Google Login */}
        <button
          onClick={handleGoogleLogin}
          className="mt-4 w-full py-3 bg-white border border-teal-300 text-gray-700 rounded-xl shadow hover:bg-teal-50 transition flex items-center justify-center gap-3 text-sm sm:text-base"
        >
          <FcGoogle className="text-2xl" />
          Login with Google
        </button>

        {/* Register Link */}
        <p className="mt-6 text-center text-gray-600 text-sm sm:text-base">
          Don't have an account?{" "}
          <Link to="/register">
            <span className="text-teal-600 font-semibold cursor-pointer hover:underline">
              Register now
            </span>
          </Link>
        </p>
      </div>

    </section>
  );
};

export default Login;

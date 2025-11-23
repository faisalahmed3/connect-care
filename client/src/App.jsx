import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import ContactUs from "./pages/Contact/ContactUs";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import AllDoctors from "./pages/AllDoctors/AllDoctors";
import DoctorDetails from "./pages/DoctorDetails/DoctorDetails";
import UserDashboard from "./pages/User/UserDashboard";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

const App = () => {
  const location = useLocation();

  // Routes where Navbar & Footer should NOT appear
  const noLayoutRoutes = ["/login", "/register"];

  const hideLayout = noLayoutRoutes.includes(location.pathname);

  return (
    <>
      {!hideLayout && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/find-doctor" element={<AllDoctors />} />
        <Route path="/doctor/:id" element={<DoctorDetails />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
};

export default App;

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

import PrivateRoute from "./routes/PrivateRoute";

const App = () => {
  const { pathname } = useLocation();

  const noLayoutRoutes = ["/login", "/register"];
  const hideLayout = noLayoutRoutes.includes(pathname);

  return (
    <>
      {!hideLayout && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/find-doctor" element={<AllDoctors />} />

        {/* PROTECTED ROUTES */}
        <Route
          path="/doctor/:id"
          element={
            <PrivateRoute>
              <DoctorDetails />
            </PrivateRoute>
          }
        />

        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <UserDashboard />
            </PrivateRoute>
          }
        />

        {/* Public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
};

export default App;

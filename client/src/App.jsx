import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import ContactUs from "./pages/Contact/ContactUs";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import AllDoctors from "./pages/AllDoctors/AllDoctors";
import DoctorDetails from "./pages/DoctorDetails/DoctorDetails";
import UserDashboard from "./pages/User/UserDashboard";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>} />
      <Route path="/contact" element={<ContactUs></ContactUs>} />
      <Route path="/find-doctor" element={<AllDoctors></AllDoctors>} />
      <Route path="/doctor/:id" element={<DoctorDetails></DoctorDetails>} />
      <Route path="/dashboard" element={<UserDashboard></UserDashboard>} />
      <Route path="/login" element={<Login></Login>} />
      <Route path="/register" element={<Register></Register>} />
      <Route path="*" element={<ErrorPage></ErrorPage>} />
    </Routes>
  );
};

export default App;

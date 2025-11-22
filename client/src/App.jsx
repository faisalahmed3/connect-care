import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import ContactUs from "./pages/Contact/ContactUs";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import AllDoctors from "./pages/AllDoctors/AllDoctors";
import DoctorDetails from "./pages/DoctorDetails/DoctorDetails";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>} />
      <Route path="/contact" element={<ContactUs></ContactUs>} />
      <Route path="/find-doctor" element={<AllDoctors></AllDoctors>} />
      <Route path="/doctor/:id" element={<DoctorDetails></DoctorDetails>} />
      <Route path="*" element={<ErrorPage></ErrorPage>} />
    </Routes>
  );
};

export default App;

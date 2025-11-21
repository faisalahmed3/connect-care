import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import ContactUs from "./pages/Contact/ContactUs";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>} />
      <Route path="/contact" element={<ContactUs></ContactUs>} />
    </Routes>
  );
};

export default App;

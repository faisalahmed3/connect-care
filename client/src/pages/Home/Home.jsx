import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import HeroSection from "../../components/HeroSection/HeroSection";
import Departments from "../../components/Departments/Departments";
import Footer from "../../components/Footer/Footer";
import TopDoctorsSlider from "../../components/TopDoctors/TopDoctors";
import Motivation from "../../components/Motivation/Motivation";


const Home = () => {
  return (
    <div className="bg-white min-h-screen"> 
      <Navbar />
      <HeroSection />
      <Departments />
      <TopDoctorsSlider></TopDoctorsSlider>
      <Motivation></Motivation>
      <Footer />
    </div>
  );
};

export default Home;

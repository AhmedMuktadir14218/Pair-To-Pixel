// src/App.jsx
import React, { useState } from "react";
import Hero from "./components/Hero";
import Sidebar from "./components/Sidebar";
import ServicesSection from "./components/ServicesSection";
import backgroundImage from "./assets/Website resouces/Frame-1.png"; // Ensure this path is correct
import PowerbankScene from './components/PowerbankScene'; 
import WhyItMatters from './components/WhyItMatters'; 

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="relative flex min-h-screen bg-gradient-to-br from-[#1E1E1E] via-[#2B1C1C] to-[#000000] text-white transition-all duration-500 ease-in-out">
      
      {/* Sidebar */}
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content that shifts right when sidebar opens */}
      <main
        className={`flex-1 transition-all duration-500 ease-in-out 
          bg-no-repeat bg-cover bg-center
          ${isOpen ? "ml-64" : "ml-20"}
        `}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          // Image-er actual size maintain korbe (this comment is preserved)
        }}
      >
        <Hero />
        <ServicesSection />
        <WhyItMatters />
        {/* The 3D component is correctly placed here */}
        <PowerbankScene /> 
      </main>
    </div>
  );
};

export default App;
// src/components/ServicesSection.jsx

import React from "react";
// Import the services data and icons (assuming they are in src/data/servicesData.js)
// NOTE: I'll include the data array here for completeness, 
// but in a real project, keep it in a separate file (src/data/servicesData.js) as you originally planned.

// --- Start of Data Array for demonstration (replace with your import if in a separate file) ---
// You MUST ensure these image paths are correct and the assets exist!
import icon1 from "../assets/Website resouces/icons/1.png";
import icon2 from "../assets/Website resouces/icons/2.png";
import icon3 from "../assets/Website resouces/icons/3.png";
import icon4 from "../assets/Website resouces/icons/4.png";
import icon5 from "../assets/Website resouces/icons/5.png";
import icon6 from "../assets/Website resouces/icons/6.png";
import icon7 from "../assets/Website resouces/icons/7.png";
import icon8 from "../assets/Website resouces/icons/8.png";

export const services = [
  {
    icon: icon1,
    title: "3D PRODUCT MODELING & ANIMATION",
    description:
      "See your ideas in full 3D glory. We craft photo real products and animation that make viewers pause, admire, and remember. From every angle, your product tells its story.",
  },
  {
    icon: icon7, 
    title: "MOTION DESIGN",
    description:
      "We turn ideas into movement that speaks. Every frame, color, and transition is crafted to catch eyes and hold attention. Your story doesn't just get told—it comes alive.",
  },
  {
    icon: icon6, 
    title: "STATIC DESIGN & BRANDING VISUALS",
    description:
      "We make all the visuals your brand needs—posters, banners, brochures. Cover photos—anything that shows who you are. Clean, clear, and simple, so your message hits the right spot every time.",
  },
  {
    icon: icon5, 
    title: "LOGO DESIGN & BRAND GUIDELINE",
    description:
      "We don't just create logos—you get a full guide for your brand. Colors, fonts, and usage rules, all carefully laid out so your visual looks consistent everywhere.",
  },
  {
    icon: icon4, 
    title: "FASHION DESIGN",
    description:
      "Sketches, patterns, and concepts that speak for themselves. Designs made to catch the eye and fit the brand's vibe perfectly.",
  },
  {
    icon: icon3, 
    title: "UI/UX DESIGN & WEB DEVELOPMENT",
    description:
      "We plan how it all feels and works, then build it so everything just works. Clean, simple, and easy for anyone to use—no extra fuss.",
  },
  {
    icon: icon8, 
    title: "DEVOPS AND SYSTEM ADMINISTRATION",
    description:
      "Keeping your systems running smoothly, updates in check, and monitoring fixed before they even show up. Tech that just works.",
  },
  {
    icon: icon2, 
    title: "DIGITAL MARKETING",
    description:
      "Helping your brand get seen and heard. From campaigns to posts, everything is set up to reach the right people, the right way.",
  },
];
// --- End of Data Array ---


/**
 * ServiceCard Component
 * Renders an individual service card with the specified styling.
 */
const ServiceCard = ({ icon, title, description }) => (
  <div className="
      bg-gradient-to-b from-red-600 to-red-800 
      rounded-xl 
      p-6 md:p-8 
      py-10 md:py-12  
      flex flex-col justify-start items-start 
      text-white shadow-2xl 
      hover:from-red-700 hover:to-red-900 
      transition duration-300 transform hover:scale-[1.02]
      h-full 
  ">
    
    {/* Icon Container: Increased size and added justify-end for right alignment */}
    {/* The w-full ensures the flex container spans the card width, allowing justify-end to work */}
    <div className="mb-6 w-full flex justify-end items-center"> 
      <img 
        src={icon} 
        alt={title} 
        className="w-24 h-24 object-contain" // <--- KEY CHANGE: Increased icon size (w-16 h-16)
        style={{ filter: 'brightness(0) invert(1) drop-shadow(0 0 4px rgba(255, 255, 255, 0.4))' }} 
      />
    </div>
    
    {/* Title */}
    <h3 className="
      text-lg font-bold tracking-widest uppercase mb-4 
      text-yellow-400 
    ">
      {title}
    </h3>
    
    {/* Description */}
    <p className="text-base font-light leading-relaxed opacity-90">
      {description}
    </p>
  </div>
);

/**
 * ServicesSection Component
 * Renders the main section with the title, cards, and call-to-action buttons.
 */
const ServicesSection = () => {
  return (
    // Applied a darker, subtle vertical gradient to the main section background
    <div className="w-full min-h-screen  py-16 md:py-24 px-4 sm:px-6 lg:px-8  "
    >
      
      {/* Header */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-12 md:mb-16 tracking-wide">
        OUR SERVICES
      </h2>
      
      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
        
        {/* Helper div for the 3-column layout when there are 8 cards */}
        {services.length % 3 === 2 && (
          <div className="hidden lg:block">
            {/* This empty div ensures the two cards in the last row align to the left */}
          </div>
        )}
      </div>

      {/* Buttons / Call-to-Action */}
      <div className="flex justify-center mt-16 md:mt-24 space-x-6">
        <button
          className="
            bg-red-900 
            text-white 
            font-semibold 
            py-3 px-8 
            text-sm 
            uppercase 
            tracking-wider 
            rounded 
            transition 
            duration-300 
            border-2 border-red-900 
            hover:bg-red-700 
            hover:border-red-700 
            shadow-xl
          "
          onClick={() => console.log("Start Project Clicked")}
        >
          Start Your Project
        </button>
        <button
          className="
            bg-yellow-500 
            text-black 
            font-semibold 
            py-3 px-8 
            text-sm 
            uppercase 
            tracking-wider 
            rounded 
            transition 
            duration-300 
            border-2 border-yellow-500 
            hover:bg-yellow-400 
            hover:border-yellow-400 
            shadow-xl
          "
          onClick={() => console.log("See Portfolio Clicked")}
        >
          See Portfolio
        </button>
      </div>
    </div>
  );
};

export default ServicesSection;
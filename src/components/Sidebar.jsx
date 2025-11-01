// src/components/Sidebar.jsx
import React from "react";
import logo from "../assets/mainLogo.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Home, Settings, Briefcase, Info, Mail, Menu } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home", icon: Home },
  { name: "Services", href: "#services", icon: Settings },
  { name: "Portfolio", href: "#portfolio", icon: Briefcase },
  { name: "About", href: "#about", icon: Info },
  { name: "Contact", href: "#contact", icon: Mail },
];

const socialLinks = [
  {
    icon: FaFacebook,
    href: "https://facebook.com/pairtopixel",
    color: "bg-[#1877F2]",
  },
  {
    icon: FaInstagram,
    href: "https://instagram.com/pairtopixel",
    color: "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600",
  },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/company/pairtopixel",
    color: "bg-[#0A66C2]",
  },
  {
    icon: FaYoutube,
    href: "https://youtube.com/@pairtopixel",
    color: "bg-[#FF0000]",
  },
];

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside
      className={`fixed top-0 left-0 z-50 h-screen backdrop-blur-md bg-[#2A1919]/80 border-r border-[#4A2F2F]/30 shadow-xl flex flex-col items-center transition-all duration-500 ease-in-out ${
        isOpen ? "w-64" : "w-20"
      }`}
    >
      {/* Toggle Button */}
      {/* <button
        onClick={toggleSidebar}
        className="absolute top-4 right-3 p-2 rounded-lg text-gray-300 hover:text-white hover:bg-[#4d3232]/50 transition-colors"
      >
        <Menu className="w-6 h-6" />
      </button> */}

      {/* Logo */}
      <div
        className={`flex flex-col items-center mt-8 mb-10 transition-all duration-500 ${
          isOpen ? "scale-100" : "scale-90"
        }`}
      >
        <div className="relative group"  onClick={toggleSidebar}>
      <img
      src={logo}
      alt="Pair to Pixel Logo"
      className={`transition-all duration-500 ease-in-out rounded-full shadow-md
        ${isOpen ? "w-24 h-24" : "w-8 h-8"}
      `}
    />
        </div>

        <div
          className={`mt-3 text-center transition-all duration-500 ${
            isOpen ? "opacity-100" : "opacity-0 w-0 h-0"
          }`}
        >
          <span className="text-xl font-semibold text-[#FFD700] tracking-wide">
            Pair to Pixel
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav
        className={`flex flex-col space-y-3 w-full px-4 transition-all duration-500 ${
          isOpen ? "opacity-100" : "opacity-70"
        }`}
      >
        {navLinks.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.name}
              href={link.href}
              className={`flex items-center space-x-3 py-2 px-3 rounded-xl transition-all duration-300 hover:bg-[#4A2F2F]/60 hover:text-[#FFD700] ${
                isOpen ? "justify-start" : "justify-center"
              }`}
            >
              <Icon className="w-5 h-5" />
              {isOpen && (
                <span className="text-sm font-medium">{link.name}</span>
              )}
            </a>
          );
        })}
      </nav>

      <div className="flex-1" />

      {/* Social Icons */}
      <div
        className={`flex ${
          isOpen ? "space-x-3" : "flex-col space-y-3"
        } mb-6 transition-all duration-500`}
      >
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 rounded-full ${social.color} text-white hover:scale-110 transition-transform`}
          >
            <social.icon size={18} />
          </a>
        ))}
      </div>

      {isOpen && (
        <p className="text-xs text-gray-400 mb-5 tracking-wide">
          pairtopixel.com
        </p>
      )}
    </aside>
  );
};

export default Sidebar;


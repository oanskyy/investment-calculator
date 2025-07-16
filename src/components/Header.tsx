import { useState } from "react";
import logo from "../assets/logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container items-center justify-between px-6 py-4  mx-auto flex ">
        {/* Logo + Title */}
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Logo" className="h-8 w-auto" />
          <h1 className="text-xl font-bold text-gray-800">
            Investment Calculator
          </h1>
        </div>

        {/* Hamburger for mobile */}
        <button
          className="text-gray-800 focus:outline-none md:hidden"
          onClick={toggleMenu}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Navigation */}
        <nav className={`space-x-4 md:flex ${isOpen ? "block" : "hidden"}`}>
          <a
            href="/about"
            className="block text-gray-800 hover:text-gray-500 md:inline"
          >
            About
          </a>
          <a
            href="/services"
            className="block text-gray-800 hover:text-gray-500 md:inline"
          >
            Services
          </a>
          <a
            href="/contact"
            className="block text-gray-800 hover:text-gray-500 md:inline"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

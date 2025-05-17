import React from "react";
import logo from "../assets/logo.webp";

const Logo = () => (
  <nav className="w-full bg-white shadow-sm border-b border-green-600 text-black">
    <div className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-20 py-3 gap-4">

      {/* Logo */}
      <div className="flex items-center justify-center sm:justify-start">
        <img
          src={logo}
          alt="Cashify Logo"
          className="h-10 sm:h-16 object-contain"
        />
      </div>

      {/* Search Bar */}
      <div className="w-full sm:w-1/2">
        <input
          type="text"
          placeholder="Search mobiles, accessories & more"
          className="w-full px-4 py-2 rounded-md bg-green-100 text-black placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      {/* Location & Login */}
      <div className="flex flex-col sm:flex-row items-center gap-2">

        {/* Location */}
        <div className="flex items-center text-sm text-grey-700 space-x-1 cursor-pointer hover:text-black transition">
          <svg
            className="h-5 w-5 text-green-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
            <circle cx="12" cy="9" r="2.5" />
          </svg>
          <span>Gurgaon</span>
          <svg
            className="h-3 w-3 text-green-600 ml-1"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        {/* Login Button */}
        <button className="px-4 py-2 bg-green-300 text-white rounded-md hover:bg-green-700 transition text-sm">
          Login
        </button>
      </div>
    </div>
  </nav>
);

export default Logo;

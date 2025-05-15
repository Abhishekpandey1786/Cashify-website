import React from "react";
import phoneImg from "./d1.webp";
import laptopImg from "./d2.webp";
import tvImg from "./d3.webp";
import tabletImg from "./d4.webp";
import consoleImg from "./d5.webp";
import watchImg from "./d6.webp";
import speakerImg from "./d7.webp";

const devices = [
  { label: "Sell Phone", img: phoneImg },
  { label: "Sell Laptop", img: laptopImg },
  { label: "Sell TV", img: tvImg },
  { label: "Sell Tablet", img: tabletImg },
  { label: "Sell Gaming Consoles", img: consoleImg },
  { label: "Sell Smartwatch", img: watchImg },
  { label: "Sell Smart Speakers", img: speakerImg },
];

const Device = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center sm:text-left">
        Sell Your Old Device Now
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {devices.map((device, index) => (
          <div
            key={index}
            className="flex flex-col items-center  rounded-lg py-4 px-4 shadow-sm hover:shadow-md transition duration-300 ease-in-out"
          >
            <img
              src={device.img}
              alt={device.label}
              className="h-16 mb-2 object-contain"
            />
            <span className="text-sm font-semibold text-gray-800 text-center">
              {device.label}
            </span>
          </div>
        ))}

        {/* Sell More Card */}
        <div
          key="sell-more"
          className="flex flex-col items-center justify-center  rounded-lg py-4 px-4 shadow-sm hover:shadow-md transition"
        >
          <div className="flex space-x-1 mb-2">
            <span className="block h-2 w-2 bg-teal-400 rounded-full"></span>
            <span className="block h-2 w-2 bg-teal-400 rounded-full"></span>
            <span className="block h-2 w-2 bg-teal-400 rounded-full"></span>
          </div>
          <span className="text-sm font-semibold text-gray-800 text-center">
            Sell More
          </span>
        </div>
      </div>
    </div>
  );
};

export default Device;

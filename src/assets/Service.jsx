import React from "react";
import img1 from "./s1.webp";
import img2 from "./s2.webp";
import img3 from "./s3.webp";
import img4 from "./s4.webp";
import img5 from "./s5.webp";
import img6 from "./s6.webp";
import img7 from "./s7.webp";
import img8 from "./s8.webp";
import img9 from "./s9.webp";

const services = [
  {
    label: "Sell Phone",
    img: img1,
  },
  {
    label: "Buy Phone",
    img: img2,
  },
  {
    label: "Buy Laptops",
    img: img3,
  },
  {
    label: "Repair Phone",
    img: img4,
  },
  {
    label: "Repair Laptop",
    img: img5,
  },
  {
    label: "Find New Phone",
    img: img6,
  },
  {
    label: "Nearby Stores",
    img: img7,
  },
  {
    label: "Buy Smartwatches",
    img: img8,
  },
  {
    label: "Recycle",
    img: img9,
  },
];

const Service = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center sm:text-left">
        Our Services
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center  rounded-lg py-4 px-2 shadow-sm hover:shadow-md transition duration-300 ease-in-out"
          >
            <img
              src={service.img}
              alt={service.label}
              className="h-16 mb-2 object-contain"
            />
            <span className="text-sm font-semibold text-gray-800 text-center">
              {service.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;

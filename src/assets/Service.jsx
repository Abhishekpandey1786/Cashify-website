import React from "react";
import img1 from '../assets/ex1.webp'
import img2 from '../assets/ex2.webp'
import img3 from '../assets/ex3.webp'
// Add image URLs here
const services = [
  {
    id: 1,
    title: "Check Price",
    description:
      "Select your device & tell us about its current condition, and our advanced AI tech will tailor make the perfect price for you.",
    image: img1, 
  },
  {
    id: 2,
    title: "Schedule Pickup",
    description:
      "Book a free pickup from your home or work at a time slot that best suits your convenience.",
    image: img2, 
  },
  {
    id: 3,
    title: "Get Paid",
    description:
      "Did we mention you get paid as soon as our executive picks up your device? It’s instant payment all the way!",
    image: img3, 
  },
];

const Service = () => (
  <section className="bg-white py-12">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-black mb-10 text-left">
        How Cashify Works
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service) => (
          <div key={service.id} className="flex flex-col items-center text-center">
            <div className="mb-4">
              <img
                src={service.image}
                alt={service.title}
                className="w-16 h-16 object-contain"
              />
            </div>
            <div className="flex items-center mb-2">
              <span className="w-7 h-7 flex items-center justify-center rounded-full bg-[#3ec6b8] text-white font-bold mr-2">
                {service.id}
              </span>
              <span className="text-lg md:text-xl font-semibold text-black">{service.title}</span>
            </div>
            <p className="text-gray-700 text-sm md:text-base max-w-xs">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Service;

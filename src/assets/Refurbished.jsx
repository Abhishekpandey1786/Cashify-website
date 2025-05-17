import React from "react";
import icon1 from "../assets/w1.webp";
import icon2 from "../assets/w2.webp";
import icon3 from "../assets/w3.webp";
import icon4 from "../assets/w4.webp";
import icon5 from "../assets/w5.webp";
import icon6 from "../assets/w6.webp";

const reasons = [
  { title: "Best Prices", desc: "Objective AI-based pricing", img: icon1 },
  { title: "Instant Payment", desc: "Instant Money Transfer in your preferred mode at time of pick up or store drop off", img: icon2 },
  { title: "Simple & Convenient", desc: "Check price, schedule pickup & get paid", img: icon3 },
  { title: "Free Doorstep Pickup", desc: "No fees for pickup across 1500 cities across India", img: icon4 },
  { title: "Factory Grade Data Wipe", desc: "100% Safe and Data Security Guaranteed", img: icon5 },
  { title: "Valid Purchase Invoice", desc: "Genuine Bill of Sale", img: icon6 },
];

const Refurbished = () => (
  <section className="bg-[#dff7f7] py-8">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-2xl font-bold text-black mb-6 text-left">Why Us</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
        {reasons.map((item) => (
          <div key={item.title} className="flex items-start space-x-3">
            <img src={item.img} alt={item.title} className="w-10 h-10 object-contain" />
            <div>
              <div className="font-bold text-black">{item.title}</div>
              <div className="text-gray-700 text-sm">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Refurbished;

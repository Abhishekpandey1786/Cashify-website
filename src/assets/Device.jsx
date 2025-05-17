import React from "react";
import img1 from '../assets/h1.webp'
import img2 from '../assets/h2.webp'
import img3 from '../assets/h1.webp'
import img4 from '../assets/h2.webp'
// Placeholder images, replace these src with your actual images as needed
const deals = [
  {
    title: "Exchange Offers",
    bg: "bg-[#c5f3ee]",
    img: img1
  },
  {
    title: "Refurbished Device Offers",
    bg: "bg-[#d5d3f6]",
    img: img2
  },
   {
    title: "Refurbished Device Offers",
    bg: "bg-[#c5f3ee]",
    img: img3
  }, {
    title: "Refurbished Device Offers",
    bg: "bg-[#d5d3f6]",
    img: img2
  },
];

const Device = () => (
  <section className="bg-[#f7f8fa] py-8">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-xl font-bold text-black mb-4">Hot Deals</h2>
      <div className="flex flex-wrap gap-4">
        {deals.map((deal, idx) => (
          <div
            key={deal.title}
            className={`${deal.bg} rounded-xl flex-1 min-w-[260px] max-w-xs flex justify-between items-end p-5 relative`}
            style={{ height: 160 }}
          >
            <div className="flex flex-col justify-between h-full">
              <span className="text-black font-bold text-lg leading-tight">
                {deal.title.split(" ").map((word, i, arr) =>
                  i === arr.length - 1 ? word : word + " "
                ).reduce((a, b) => [a, <br key={b}/>, b])}
              </span>
              <button className="mt-4 w-7 h-7 rounded-full bg-white flex items-center justify-center shadow">
                <svg width="18" height="18" fill="none" stroke="#3ec6b8" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            <img
              src={deal.img}
              alt="phone"
              className="absolute right-5 bottom-5 w-[400px] h-[120px] object-contain"
              draggable="false"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Device;
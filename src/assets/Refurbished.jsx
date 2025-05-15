import React from "react";

import macbook from "./r1.webp";
import iphone14 from "./r2.webp";
import flipz from "./r3.webp";
import watch from "./r4.webp";
import xiaomi14 from "./r5.webp";
import badgeIcon from "./r6.webp";

const products = [
  {
    img: macbook,
    discount: "₹50,400 OFF",
    title: "Apple MacBook Air 2024 A3114 (Apple M3 Chip 15 Inch)...",
    badge: "Flash Sale",
    rating: "5.0",
    sale: "-40%",
    price: "₹74,999",
    oldPrice: "₹1,25,399",
    goldPrice: "₹72,911",
  },
  {
    img: iphone14,
    discount: "₹43,401 OFF",
    title: "Apple iPhone 14 - Refurbished",
    badge: "Cricket Mania Sale",
    rating: "4.7",
    sale: "-54%",
    price: "₹36,499",
    oldPrice: "₹79,900",
    goldPrice: "₹35,181",
  },
  {
    img: flipz,
    discount: "₹54,000 OFF",
    title: "Samsung Galaxy Z Flip6 5G - Refurbished",
    badge: "Flash Sale",
    rating: "4.8",
    sale: "-54%",
    price: "₹55,899",
    oldPrice: "₹1,09,999",
    goldPrice: "₹53,193",
  },
  {
    img: watch,
    discount: "₹17,600 OFF",
    title: "Apple Watch Series 10 (46mm, GPS Only) - Refurbished",
    badge: "Flash Sale",
    rating: "5.0",
    sale: "-36%",
    price: "₹30,999",
    oldPrice: "₹48,599",
    goldPrice: "₹29,791",
  },
  {
    img: xiaomi14,
    discount: "₹25,300 OFF",
    title: "Xiaomi 14 CIVI - Refurbished",
    badge: "Cricket Mania Sale",
    rating: "5.0",
    sale: "-45%",
    price: "₹31,199",
    oldPrice: "₹56,499",
    goldPrice: "₹29,987",
  },
];

const Refurbished = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <h2 className="text-xl sm:text-2xl font-bold">Buy Refurbished Devices</h2>
        <a href="#" className="text-teal-500 font-semibold hover:underline mt-2 sm:mt-0 text-sm">
          View All
        </a>
      </div>

      <div className="flex space-x-4 overflow-x-auto pb-3 scrollbar-thin scrollbar-thumb-gray-300">
        {products.map((p, idx) => (
          <div
            key={idx}
            className="min-w-[240px] sm:min-w-[220px] max-w-[240px] bg-white rounded-xl shadow p-3 flex flex-col border border-gray-100"
          >
            {/* Top Badge */}
            <div className="flex items-center mb-2">
              <img src={badgeIcon} alt="badge" className="h-5 mr-1" />
              <span className="bg-black text-white text-xs px-2 py-0.5 rounded ml-auto">
                {p.discount}
              </span>
            </div>

            {/* Product Image */}
            <img src={p.img} alt={p.title} className="h-24 mx-auto object-contain mb-2" />

            {/* Title */}
            <div className="text-xs font-semibold mb-2">{p.title}</div>

            {/* Sale Badge & Rating */}
            <div className="flex items-center mb-1">
              <span className="text-xs px-2 py-0.5 rounded bg-blue-100 text-blue-700 mr-2">
                {p.badge}
              </span>
              <span className="flex items-center text-xs font-semibold text-yellow-600">
                {p.rating}
                <svg
                  className="h-4 w-4 ml-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
                </svg>
              </span>
            </div>

            {/* Price Section */}
            <div className="flex items-center mb-1">
              <span className="text-red-500 font-bold text-sm mr-2">{p.sale}</span>
              <span className="text-lg font-bold mr-2">{p.price}</span>
              <span className="text-xs text-gray-400 line-through">{p.oldPrice}</span>
            </div>

            {/* Gold Price */}
            <div className="text-xs text-gray-500">
              <span className="font-semibold">{p.goldPrice}</span> with{" "}
              <span className="text-yellow-600 font-bold">GOLD</span>
            </div>
          </div>
        ))}

        {/* Scroll Arrow Placeholder (Optional UI) */}
        <div className="hidden sm:flex items-center justify-center min-w-[40px]">
          <button className="bg-white border border-gray-300 rounded-full shadow p-2 hover:bg-gray-100">
            <svg
              className="h-5 w-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Refurbished;

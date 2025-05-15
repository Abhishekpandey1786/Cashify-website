import React from "react";
import l1 from './l1.webp'
import l2 from './l2.webp'
import l3 from './l3.webp'
import l4 from './l2.webp'
import l5 from './l1.webp'

const laptops = [
  {
    img: l1,
    discount: "₹62,500 OFF",
    title: "Apple MacBook Pro 2023 A2991 (Apple M3 Pro Chip 16 Inch)...",
    badge: "Lowest Price",
    rating: "5.0",
    sale: "-29%",
    price: "₹1,49,999",
    oldPrice: "₹2,12,499",
    goldPrice: "₹1,46,899",
    stock: "1 left",
  },
  {
    img: l2,
    discount: "₹38,800 OFF",
    title: "Apple MacBook Pro 2023 A2992 (Apple M3 Pro Chip 14 Inch)...",
    badge: "Lowest Price",
    rating: "5.0",
    sale: "-23%",
    price: "₹1,29,999",
    oldPrice: "₹1,68,799",
    goldPrice: "₹1,27,389",
    stock: "1 left",
  },
  {
    img: l3,
    discount: "₹44,000 OFF",
    title: "Apple MacBook Pro 2023 A2918 (Apple M3 Chip 14 Inch)...",
    badge: "Lowest Price",
    rating: "4.0",
    sale: "-28%",
    price: "₹1,13,999",
    oldPrice: "₹1,57,999",
    goldPrice: "₹1,13,675",
    stock: "2 left",
  },
  {
    img: l4,
    discount: "₹60,000 OFF",
    title: "Apple Macbook Pro 2019 (15\", Intel Core i9) - Refurbished",
    badge: "",
    rating: "4.5",
    sale: "-43%",
    price: "₹79,999",
    oldPrice: "₹1,39,999",
    goldPrice: "₹77,811",
    stock: "1 left",
  },
  {
    img: l5,
    discount: "₹34,000 OFF",
    title: "Apple MacBook Pro 2022 A2338 (Apple M2 Chip 13.3 Inch)...",
    badge: "Lowest Price",
    rating: "4.7",
    sale: "-30%",
    price: "₹77,999",
    oldPrice: "₹1,11,989",
    goldPrice: "₹75,851",
    stock: "2",
  },
];

const Laptop = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Section Heading */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl sm:text-2xl font-bold">Refurbished Laptops</h2>
        <a href="#" className="text-teal-600 font-medium hover:underline text-sm">
          View All
        </a>
      </div>

      {/* Horizontal Scroll Cards */}
      <div className="flex overflow-x-auto space-x-4 scrollbar-thin scrollbar-thumb-gray-300 pb-3">
        {laptops.map((laptop, index) => (
          <div
            key={index}
            className="min-w-[240px] max-w-[240px] bg-white rounded-xl border shadow-sm p-3 flex flex-col flex-shrink-0"
          >
            <div className="flex items-center mb-2">
              <img src="src/assets/l0.webp" alt="cashify" className="h-5 mr-1" />
              <span className="ml-auto bg-red-100 text-red-600 text-xs px-2 py-0.5 rounded">
                {laptop.stock}
              </span>
            </div>
            <img src={laptop.img} alt={laptop.title} className="h-24 object-contain mb-2 mx-auto" />
            <div className="text-sm font-medium mb-2 line-clamp-2">{laptop.title}</div>
            <div className="flex items-center text-xs mb-1">
              {laptop.badge && (
                <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded mr-2">{laptop.badge}</span>
              )}
              <span className="flex items-center text-yellow-600 font-semibold">
                {laptop.rating}
                <svg className="h-4 w-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
                </svg>
              </span>
            </div>
            <div className="flex items-center text-sm font-semibold mb-1">
              <span className="text-orange-500 mr-2">{laptop.sale}</span>
              <span className="mr-2">{laptop.price}</span>
              <span className="line-through text-gray-400 text-xs">{laptop.oldPrice}</span>
            </div>
            <div className="text-xs text-gray-500">
              <span className="font-medium">{laptop.goldPrice}</span> with{" "}
              <span className="text-yellow-600 font-bold">GOLD</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Laptop;

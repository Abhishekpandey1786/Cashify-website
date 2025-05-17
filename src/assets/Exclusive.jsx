import React from "react";
import img1 from '../assets/g1.webp'
import img2 from '../assets/g2.webp'
import img3 from '../assets/g3.webp'
import img4 from '../assets/g4.webp'
import img5 from '../assets/g5.webp'
import img6 from '../assets/g6.webp'
import img7 from '../assets/g7.webp'
const phones = [
  {
    img: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-11-1.jpg",
    name: "Apple iPhone 11",
    specs: "4 GB/128 GB",
    price: "₹16,020",
  },
  {
    img: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-11-1.jpg",
    name: "Apple iPhone 11",
    specs: "4 GB/64 GB",
    price: "₹14,920",
  },
  {
    img: img7,
    name: "Apple iPhone XR",
    specs: "3 GB/64 GB",
    price: "₹10,340",
  },
  {
    img: img6,
    name: "Apple iPhone 7",
    specs: "2 GB/32 GB",
    price: "₹4,960",
  },
  {
    img: img5,
    name: "Apple iPhone 12",
    specs: "4 GB/128 GB",
    price: "₹20,520",
  },
  {
    img: img4,
    name: "Apple iPhone 12",
    specs: "4 GB/64 GB",
    price: "₹19,390",
  },
  {
    img: img3,
    name: "Xiaomi Redmi Note 8",
    specs: "4 GB/64 GB",
    price: "₹4,010",
  },
  {
    img: img2,
    name: "Xiaomi Redmi Note 5 Pro",
    specs: "4 GB/64 GB",
    price: "₹3,000",
  },
  {
    img: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-x-new-1.jpg",
    name: "Apple iPhone X",
    specs: "3 GB/64 GB",
    price: "₹10,750",
  },
  {
    img: img1,
    name: "Xiaomi Redmi Note 7 Pro",
    specs: "4 GB/64 GB",
    price: "₹3,940",
  },
];

const Exclusive = () => (
  <section className="py-8 bg-white">
    <div className="max-w-7xl mx-auto px-2 sm:px-4">
      <h2 className="text-xl font-bold text-black mb-4">Top Selling Mobile Phones</h2>
      {/* Table for desktop, cards for mobile */}
      <div className="bg-white rounded-lg overflow-hidden shadow border border-gray-100">
        {/* Table Head */}
        <div className="hidden md:grid grid-cols-12 bg-gray-100 font-bold text-black text-left text-sm">
          <div className="col-span-6 py-3 px-4">Top Selling Mobile Phones</div>
          <div className="col-span-3 py-3 px-4">Price</div>
          <div className="col-span-3 py-3 px-4"></div>
        </div>
        {/* Table Body */}
        <div>
          {phones.map((phone, idx) => (
            <div
              key={idx}
              className="flex flex-col md:grid md:grid-cols-12 items-center border-b last:border-b-0"
            >
              {/* Phone Info */}
              <div className="flex items-center col-span-6 w-full py-4 px-4">
                <img
                  src={phone.img}
                  alt={phone.name}
                  className="w-12 h-16 object-contain rounded mr-4 border"
                />
                <div>
                  <div className="font-semibold text-black text-sm">
                    {phone.name}
                  </div>
                  <div className="text-xs text-gray-700 font-semibold">
                    ({phone.specs})
                  </div>
                </div>
              </div>
              {/* Price */}
              <div className="col-span-3 w-full flex flex-col items-start md:items-center px-4">
                <span className="text-xs text-gray-500">Get Upto</span>
                <span className="text-lg font-bold text-[#ff5f5f]">{phone.price}</span>
              </div>
              {/* Button */}
              <div className="col-span-3 w-full flex justify-end px-4 pb-4 md:pb-0">
                <button className="bg-[#34d1c5] hover:bg-[#25b3a8] text-white font-semibold px-7 py-2 rounded transition text-sm w-full md:w-auto">
                  Sell Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Exclusive;
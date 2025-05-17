import React from "react";
import img1 from '../assets/t1.webp'
const brands = [
  {
    name: "Apple",
    logo: (
      <img src="src\assets\t1.webp" alt="" srcset="" className="h-15 mx-auto"/>
    ),
    label: "Apple",
  },
  {
    name: "Xiaomi",
    logo: (
      <img src="src\assets\t2.webp" alt="Xiaomi" className="h-15 mx-auto" />
    ),
    label: "Xiaomi",
  },
  {
    name: "Samsung",
    logo: (
      <img src="src\assets\t3.webp" alt="Samsung" className="h-15 mx-auto" />
    ),
    label: "Samsung",
  },
  {
    name: "Vivo",
    logo: (
      <img src="src\assets\t4.webp" alt="Vivo" className="h-15 mx-auto" />
    ),
    label: "Vivo",
  },
  {
    name: "OnePlus",
    logo: (
      <img src="src\assets\t5.webp" alt="OnePlus" className="h-15 mx-auto" />
    ),
    label: "OnePlus",
  },
  {
    name: "OPPO",
    logo: (
      <img src="src\assets\t6.webp" alt="OPPO" className="h-15 mx-auto" />
    ),
    label: "OPPO",
  },
  {
    name: "Realme",
    logo: (
      <img src="src\assets\t7.webp" alt="Realme" className="h-15 mx-auto" />
    ),
    label: "Realme",
  },
];

const Laptop = () => (
  <section className="py-6 bg-white">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-xl font-bold text-black mb-4">Top Selling Brands</h2>
      <div className="
        flex gap-4 overflow-x-auto scrollbar-hide pb-2
        md:grid md:grid-cols-4 md:gap-6 md:overflow-x-visible
        lg:grid-cols-7
      ">
        {brands.map((brand) => (
          <div
            key={brand.name}
            className="
              bg-white rounded-xl shadow border border-gray-100
              flex flex-col items-center justify-center
              min-w-[130px] w-40 h-36 p-4
              md:min-w-0 md:w-full
              transition
            "
          >
            <div className="mb-2">{brand.logo}</div>
            <div className="font-bold text-black text-sm">{brand.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Laptop;

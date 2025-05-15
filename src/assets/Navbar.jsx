import React from "react";

function Navbar() {
  return (
    <div className="bg-white shadow-sm border-b border-green-500">
      <nav className="overflow-x-auto">
        <ul className="flex flex-nowrap sm:flex-wrap items-center px-4 sm:px-20 py-3 gap-3 text-sm whitespace-nowrap min-w-max">
          {[
            {
              label: "Laptop",
              options: [
                "All",
                "Phone",
                "Smart Watch",
                "Tablet",
                "Repair",
                "Buy Phone",
                "Recycle",
                "Sell Gadgets",
                "Find New Phone",
              ],
            },
            {
              label: "Sell Phone",
              options: [
                "Top Brands",
                "Apple",
                "Xiaomi",
                "Samsung",
                "Oneplus",
                "Nokia",
                "Poco",
                "Top Selling Phones",
                "Apple iPhone 12",
                "Samsung Galaxy Note 20",
                "Apple iPhone 11",
                "One Plus 9 Pro",
                "Xiaomi Redmi Note 14",
              ],
            },
            {
              label: "Sell Gadgets",
              options: [
                "Phone",
                "Laptop",
                "Smart Speaker",
                "Tablet",
                "Gaming Consoles",
                "iMac",
                "Smartwatch",
                "TV",
                "Earbuds",
                "DSLR Camera",
                "AC",
              ],
            },
            {
              label: "Buy Phone",
              options: [
                "Refurbished Phones",
                "Refurbished Laptop",
                "Refurbished Smart Watches",
                "Refurbished Tablets",
                "Refurbished Gaming Consoles",
                "Refurbished Cameras",
                "Top Brands",
                "Apple",
                "Xiaomi",
                "Samsung",
                "Oneplus",
                "Google",
                "Oppo",
                "Vivo",
              ],
            },
            {
              label: "Find New Gadgets",
              options: [
                "Find New Phone",
                "Find New Laptop",
                "Find New Smartwatch",
                "Find New Tablet",
                "Explore",
                "Videos",
                "News",
                "Reviews",
                "Articles",
                "QnA",
                "Tips and Tricks",
                "Tech News",
              ],
            },
            {
              label: "Buy Laptop",
              options: [
                "Apple",
                "Dell",
                "Lenovo",
                "HP",
                "Acer",
                "Asus",
                "Top Selling Laptops",
                "Apple MacBook Air Mid 2017",
                "Apple MacBook Air Early 2015",
                "Apple MacBook Air 2020",
              ],
            },
            {
              label: "Cashify Store",
              options: [
                "Delhi",
                "Gurgaon",
                "Noida",
                "Bengaluru",
                "Chennai",
                "Pune",
                "Agra",
                "Patna",
                "Ghaziabad",
                "Meerut",
                "Mohali",
                "Thane",
              ],
            },
            {
              label: "More",
              options: [
                "New Offers",
                "Partner with Us",
                "Contact Us",
                "Warranty Policy",
                "Refer & Earn",
                "About Us",
                "Careers",
                "Articles",
                "Become Supersale Partner",
                "Press Releases",
                "Terms & Conditions",
              ],
            },
          ].map((menu, idx) => (
            <li key={idx}>
              <select
                className="w-40 border border-green-500 rounded px-2 py-1 font-semibold text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option disabled selected className="font-bold">
                  {menu.label}
                </option>
                {menu.options.map((opt, i) => (
                  <option key={i} className="font-medium">{opt}</option>
                ))}
              </select>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;

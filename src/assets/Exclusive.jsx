import React from "react";

const stores = [
  {
    city: "GURGAON",
    title: "Cashify Buy, Sell and Repair Mobile Store Sushant Lok",
    address: "GF 133, Sushant Vyapar Kendra, Sushant Lok, Gurgaon",
    timings: "10:00 AM - 09:00 PM",
  },
  {
    city: "GURGAON",
    title: "Cashify Buy, Sell and Repair Mobile Store Sec 14 Gurgaon",
    address:
      "Shop No.13, Old Delhi road, Opp. Plaza Solitaire Hotel Bank market, Gurugram",
    timings: "10:00 AM - 09:00 PM",
  },
  {
    city: "GURGAON",
    title: "Cashify Buy, Sell and Repair Mobile Store MG Road Gurgaon",
    address: "MG Road Metro, Exit Gate no 2, M.G. Road Gurgaon",
    timings: "09:00 AM - 09:00 PM",
  },
];

const Exclusive = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Heading */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
        <h2 className="text-xl sm:text-2xl font-bold">Our Exclusive Stores</h2>
        <a
          href="#"
          className="text-teal-600 font-semibold text-sm hover:underline"
        >
          View all stores
        </a>
      </div>

      {/* Stats */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex items-center text-gray-700 text-sm font-semibold">
          <svg
            className="h-5 w-5 text-teal-500 mr-2"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="10" />
            <path
              d="M12 8v4l3 3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          200+ Experience Centres
        </div>
        <div className="flex items-center text-gray-700 text-sm font-semibold">
          <svg
            className="h-5 w-5 text-teal-500 mr-2"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927C9.469 2.021 10.531 2.021 10.951 2.927l1.286 2.773a1 1 0 00.757.553l3.046.444c.969.141 1.357 1.33.654 2.012l-2.203 2.147a1 1 0 00-.287.885l.52 3.03c.166.967-.848 1.704-1.713 1.25l-2.722-1.432a1 1 0 00-.928 0l-2.722 1.432c-.865.454-1.879-.283-1.713-1.25l.52-3.03a1 1 0 00-.287-.885L2.306 8.709c-.703-.682-.315-1.87.654-2.012l3.046-.444a1 1 0 00.757-.553l1.286-2.773z" />
          </svg>
          4.5+ Star Ratings
        </div>
      </div>

      {/* Store Cards + Pincode */}
      <div className="bg-gray-50 rounded-xl p-5">
        {/* Pincode Input */}
        <div className="flex flex-wrap justify-center items-center mb-6 gap-2">
          <input
            type="text"
            placeholder="Enter Pincode"
            className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400 w-full sm:w-64"
          />
          <button className="bg-white border border-gray-300 rounded px-3 py-2 hover:bg-gray-100">
            <svg
              className="h-5 w-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
          </button>
        </div>

        {/* Store Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {stores.map((store, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-sm p-4">
              <span className="bg-black text-white text-xs px-2 py-0.5 rounded mb-2 inline-block">
                {store.city}
              </span>
              <div className="font-bold mb-1">{store.title}</div>
              <div className="text-sm text-gray-600 mb-1">{store.address}</div>
              <div className="text-sm text-gray-500 mb-2">
                Timings: {store.timings}
              </div>
              <a
                href="#"
                className="text-teal-600 text-sm font-semibold hover:underline flex items-center"
              >
                View Details
                <svg
                  className="h-4 w-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Exclusive;

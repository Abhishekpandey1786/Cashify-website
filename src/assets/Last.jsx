import React from "react";

const Recent = () => {
  return (
    <div className="max-w-7xl mx-auto px-2 py-8">
      {/* Banner Section */}
      <div className="bg-teal-400 rounded-2xl px-6 py-8 flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <div className="flex-1 mb-0 md:mb-0">
          <h2 className="text-white text-2xl font-bold mb-2">Download the App</h2>
          <div className="text-white text-base mb-4">
            Sell your old phone | Buy top-quality refurbished phones | Get your phone repaired
          </div>
          <div className="flex space-x-4">
            <a
              href="#"
              className="bg-black text-white px-4 py-2 rounded font-semibold text-sm shadow"
            >
              GET IT ON
            </a>
            <a
              href="#"
              className="bg-black text-white px-4 py-2 rounded font-semibold text-sm shadow"
            >
              Download on the
            </a>
          </div>
        </div>
         <img
            src="src\assets\last1.webp"
            alt="app screens"
            className="h-36 md:h-55 ml-[-40px] z-20"
          />
        </div>
      </div>
    
  );
};

export default Recent;

import React, { useState, useEffect } from 'react';

const images = [
  "https://cdn.dribbble.com/users/3906861/screenshots/10739144/headphone__banner__4x.jpg",
  "https://s3no.cashify.in/estore/c87a822652224b2fb41e1d3cdba8d8a5.webp?p=default&s=lg",
  "https://mir-s3-cdn-cf.behance.net/project_modules/1400/71622d80849069.5ced519ae4235.png",
  "https://i.ytimg.com/vi/fssA9VYWga4/hq720.jpg",
  "https://s3b.cashify.in/gpro/uploads/2019/09/16135517/buyback_offer_banner.png",
  "https://s3no.cashify.in/cashify/web/b00327f2dd534e26925be418cb653406.webp?p=default&s=lg",
  "https://i.pinimg.com/736x/dc/f6/23/dcf6239bbf6a973c7b06908f8fe03409.jpg",
  "https://cdna.artstation.com/p/assets/images/images/052/882/258/large/druthik-druthik-boat-1.jpg?1660894729"
];

function Slider() {
  const [current, setCurrent] = useState(0);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrent(prev => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent(prev => (prev + 1) % images.length);
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto overflow-hidden rounded-lg shadow-lg mt-10 h-120">
      {/* Slides Container */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px]"
          >
            <img
              src={src}
              alt={`slide-${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Prev / Next Buttons */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/70 p-2 text-xl sm:text-2xl rounded-full shadow hover:bg-white transition"
      >
        ‹
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/70 p-2 text-xl sm:text-2xl rounded-full shadow hover:bg-white transition"
      >
        ›
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2.5 h-2.5 rounded-full transition ${
              index === current ? 'bg-indigo-600 scale-110' : 'bg-gray-300'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default Slider;

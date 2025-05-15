import React from "react";

const Banner = () => {
  const imageIds = [
    "21b181db0bd44f539f6fb12d7734d2ae",
    "dc841f6d633d49059eaf532610365370",
    "40a4aae2315a4ca59eb9c4bf9cf88e41",
    "e148f87dee934d308576090c81bc807e",
    "300ceff92e0e41cea6c53f49137243cf",
    "6b62e37c95e04ea28df2e4ecb148b95b",
    "2d070f10356049d1b2ce515c9b512b78",
    "21e1fe99e6084445bf65537f8c587d13",
    "7f38fba7b800486797e3daa5e3e382ac",
    "a2e34a6d8a9e4b679db292da08fb1848",
    "a1947f645ab3466c9b315b70892968ca",
    "d6b3fc009a3944bb9604bba8cd0ecea9",
    "41cd19daf698432ab359b16d07c2dfa5",
  ];

  return (
    <div className="w-full overflow-hidden bg-emerald-400 py-4 relative">
      {/* Inline <style> for animation */}
      <style>
        {`
          @keyframes scrollBanner {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-100%); }
          }

          .scrolling-banner {
            animation: scrollBanner 40s linear infinite;
          }
        `}
      </style>

      {/* Scrolling images container */}
      <div className="flex gap-6 whitespace-nowrap scrolling-banner">
        {imageIds.concat(imageIds).map((id, index) => (
          <img
            key={index}
            src={`https://s3no.cashify.in/estore/${id}.webp?p=default&s=lg`}
            alt={`Banner ${index + 1}`}
            className="h-16 w-auto object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;

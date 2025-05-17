import React from "react";

const Tranding = () => {
  return (
    <div className="bg-gray-200 pt-5">
      {/* Responsive heading size & margin */}
      <h1 className="text-3xl sm:text-3xl font-bold ml-6 sm:ml-35 mt-5 mb-6">
        Trending Articles
      </h1>

      {/* Top 3 featured cards */}
      <div className="flex flex-wrap justify-center gap-8 px-4 sm:px-24">
        {/* Card 1 */}
        <div className="w-full sm:w-96">
          <img
            alt="Samsung One UI 7.0"
            className="w-full rounded-lg"
            src="https://s3bo.cashify.in/gpro/uploads/2025/05/01190319/Samsung-One-UI-7.0.webp?p=gp2&s=gp"
          />
          <h2 className="text-lg font-bold mt-3.5">
            Samsung One UI 7.0 New Camera Features: Full List!
          </h2>
          <p className="text-gray-500">
            The best thing about the new Samsung update is the One UI 7.0 camera features!
            From camera tools to amazing AI features, it's a complete photography package.
            In this article, we will specifically discuss camera features.
          </p>
          <p className="text-gray-500 mt-3.5">1st May 2025</p>
        </div>

        {/* Card 2 */}
        <div className="w-full sm:w-96">
          <img
            alt="Snapdragon 8 Elite vs Dimensity 9400"
            className="w-full rounded-lg"
            src="https://s3bo.cashify.in/gpro/uploads/2025/04/30173826/Snapdragon-8-Elite-vs-Dimensity-9400.png?p=gp2&s=gp"
          />
          <h2 className="text-lg font-bold mt-3.5">
            Dimensity 9400 Vs Snapdragon 8 Elite: Gaming And AI Faceoff 2025
          </h2>
          <p className="text-gray-500">
            Flagship phones come with advanced processors aimed at enhancing your overall
            user experience. Two such processors that are leading the market in 2025 are
            MediaTek Dimensity 9400 vs Snapdragon 8 Elite.
          </p>
          <p className="text-gray-500 mt-3.5">30th Apr 2025</p>
        </div>

        {/* Card 3 */}
        <div className="w-full sm:w-96">
          <img
            alt="MediaTek Dimensity 9500"
            className="w-full rounded-lg"
            src="https://s3bo.cashify.in/gpro/uploads/2025/04/30161426/reasons-to-pick-iPhone-14-Plus.webp?p=gp2&s=gp"
          />
          <h2 className="text-lg font-bold mt-3.5">
            MediaTek Dimensity 9500 Processor: Features Revealed Before Launch
          </h2>
          <p className="text-gray-500">
            Mediatek is developing powerful chipsets, and the latest one, MediaTek Dimensity 9500,
            is a direct competitor to the Snapdragon 8 Elite.
          </p>
          <p className="text-gray-500 mt-3.5">30th Apr 2025</p>
        </div>
      </div>

      {/* Grid layout for smaller articles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 px-4 sm:px-35 my-14">
        {[
          {
            title: "12GB RAM vs 8GB RAM: How Much Do You Really Need in 2025?",
            date: "30th Apr 2025",
            img: "https://s3bo.cashify.in/gpro/uploads/2025/04/30125930/12GB-RAM-vs-8GB-RAM-How-Much-Do-You-Really-Need-in-2025.webp?p=gp2&s=gp",
          },
          {
            title: "Exynos Processor Ranking 2025: Full List & Performance Comparison",
            date: "29th Apr 2025",
            img: "https://s3bo.cashify.in/gpro/uploads/2025/04/30145153/Exynos-Processor-List.webp?p=gp2&s=gp",
          },
          {
            title: "What is UPI Circle? Set it Up in Google Pay, PhonePe, and Paytm",
            date: "29th Apr 2025",
            img: "https://s3bo.cashify.in/gpro/uploads/2025/04/29164936/UPI-Circle.webp?p=gp2&s=gp",
          },
          {
            title: "Exynos 1380 Vs Snapdragon 778G: Gaming And Workload Comparison 2025",
            date: "28th Apr 2025",
            img: "https://s3bo.cashify.in/gpro/uploads/2025/04/29151129/Exynos-1380-Vs-Snapdragon-778G-feature.webp?p=gp2&s=gp",
          },
        ].map((item, index) => (
          <div key={index} className="p-4 flex gap-3 items-start">
            <img
              src={item.img}
              alt={item.title}
              className="w-32 rounded-lg object-cover"
            />
            <div>
              <h1 className="text-lg font-bold">{item.title}</h1>
              <p className="text-gray-500 mt-4">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tranding;

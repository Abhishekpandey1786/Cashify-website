import React from "react";

const stories = [
  {
    text: "I trust Cashify to sell any phone online. They are super professional, fast, give good price and don't cause delays in payment.",
    name: "Priyank Rawat",
    city: "Noida",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    text: "Great experience! The staff was professional, and the process was smooth. Got a fair price for my old phone.",
    name: "Ram Balram",
    city: "Udaipur",
    avatar: "https://randomuser.me/api/portraits/men/33.jpg",
  },
  {
    text: "I liked the Cashify service. I was able to sell my used phone from Redmi finally. There was no issue with the payment as well. Thanks",
    name: "Satish Ram",
    city: "Jaipur",
    avatar: "https://randomuser.me/api/portraits/men/34.jpg",
  },
  {
    text: "Cashify is good! Their staff is polite and responsive. I got a reasonable quote when I went to sell my old mobile.",
    name: "Yogesh Sharma",
    city: "Goa",
    avatar: "https://randomuser.me/api/portraits/men/35.jpg",
  },
];

const Custumer = () => (
  <section className="bg-black py-12">
<div className="max-w-7xl mx-auto gap-3 px-4">
      <h2 className="text-3xl font-bold text-white text-center mb-10">Customer Stories</h2>
      <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2 md:grid md:grid-cols-4 md:gap-6 md:overflow-x-visible">
        {stories.map((story, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow p-6 flex flex-col justify-between min-w-[300px] max-w-xs md:max-w-none md:w-full"
          >
            <div>
              <svg width="36" height="36" fill="none" className="mb-2" viewBox="0 0 36 36">
                <text x="0" y="28" fontSize="36" fill="#3ec6b8" fontWeight="bold">“</text>
              </svg>
              <p className="text-black text-sm mb-6">{story.text}</p>
            </div>
            <div className="flex items-center mt-auto">
              <img src={story.avatar} alt={story.name} className="w-8 h-8 rounded-full mr-3 object-cover" />
              <div>
                <div className="font-bold text-black text-sm">{story.name}</div>
                <div className="text-xs text-gray-500">{story.city}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Custumer;

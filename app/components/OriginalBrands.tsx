import React from "react";

const OriginalBrands = () => {
  const brands = [
    { img: "/niv.webp", title: "" },
    { img: "/headphone.webp", title: "" },
    { img: "/lipstick.webp", title: "" },
    { img: "/phone.webp", title: "" },
    { img: "/perfume.webp", title: "" },
    { img: "/bags.webp", title: "" },
    { img: "/footwearshoe.webp", title: "" },
    { img: "/books.webp", title: "" },
  ];

  return (
    <section className="mt-10">
      {/* Heading */}
      <div className="flex justify-between items-center mb-6 px-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          Original Brands
          <span className="text-blue-600 text-xl">✔️</span>
        </h2>
        <button className="text-pink-700 font-medium hover:underline">
          VIEW ALL →
        </button>
      </div>

      {/* Brands */}
      <div className="flex gap-12 overflow-x-auto scrollbar-hide scroll-smooth px-6 py-2">
        {brands.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center cursor-pointer transition-transform duration-300 hover:-translate-y-2"
          >
            <div className="overflow-hidden rounded-xl shadow-md">
              <img
                src={item.img}
                alt={item.title}
                className="h-48 w-48 object-contain transition-transform duration-500 hover:scale-110"
              />
            </div>
            <p className="text-gray-800 font-semibold mt-4 text-base hover:text-pink-600 transition-colors">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OriginalBrands;



"use client";

import React, { useRef } from "react";

const Products = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -400, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 400, behavior: "smooth" });
  };

  const products = [
    { img: "/smartwatch.jpeg", title: "Smart Watch", price: "₹999" },
    { img: "/tshirt.jpeg", title: "Trendy T-Shirt", price: "₹499" },
    { img: "/earbuds.jpeg", title: "Wireless Earbuds", price: "₹1,499" },
    { img: "/sandal.jpeg", title: "Stylish Sandals", price: "₹799" },
    { img: "/storybook.jpeg", title: "Story Book", price: "₹299" },
    { img: "/backpack.jpeg", title: "Backpack", price: "₹1,199" },
    { img: "/matte.jpeg", title: "Matte Lipstick", price: "₹349" },
    { img: "/frangance.jpeg", title: "Fragrance", price: "₹899" },
  ];

  return (
    <section className="relative px-10 py-8 mt-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Featured Products</h2>
        <button className="text-pink-700 font-medium hover:underline">
          VIEW ALL →
        </button>
      </div>

      {/* Left Arrow */}
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md 
                   rounded-full p-3 hover:bg-gray-100 z-10"
      >
        ◀
      </button>

      {/* Scrollable Products */}
      <div
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth"
      >
        {products.map((item, index) => (
          <div
            key={index}
            className="min-w-[180px] w-48 bg-white rounded-xl shadow-md p-4 
                       flex flex-col items-center hover:-translate-y-2 
                       transition-transform duration-300"
          >
            <img
              src={item.img}
              alt={item.title}
              className="h-40 object-contain transition-transform duration-500 hover:scale-110"
            />
            <h3 className="mt-3 font-semibold text-gray-800 text-center">
              {item.title}
            </h3>
            <p className="text-pink-700 font-medium mt-1">{item.price}</p>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md 
                   rounded-full p-3 hover:bg-gray-100 z-10"
      >
        ▶
      </button>
    </section>
  );
};

export default Products;

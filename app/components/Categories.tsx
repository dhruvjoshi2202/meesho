import React from "react";

const categories = [
  { name: "Ethnic Wear", img: "/lady.webp" },
  { name: "Western Dresses", img: "/women.webp" },
  { name: "Menswear", img: "/men.webp" },
  { name: "Footwear", img: "/shoe.webp" },
  { name: "Home Decor", img: "/flower.webp" },
  { name: "Beauty", img: "/shampoo.webp" },
  { name: "Accessories", img: "/bag.webp" },
  { name: "Grocery", img: "/groc.webp" },
];

const Categories = () => {
  return (
    <div className="w-full bg-white py-8 px-10">
      <div className="flex justify-between items-center gap-x-1">
        {categories.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center transition-transform duration-300 hover:-translate-y-2"
          >
            <div className="relative w-28 h-28">
              {/* Pink background shape */}
              <div className="absolute inset-0 bg-pink-100 rounded-t-full rounded-b-none"></div>

              {/* Image */}
              <img
                src={item.img}
                alt={item.name}
                className="relative w-full h-full object-contain"
              />
            </div>

            <p className="mt-3 text-sm font-medium text-gray-700 text-center">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;

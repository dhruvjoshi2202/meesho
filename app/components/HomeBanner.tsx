import Image from "next/image";

const HomeBanner = () => {
  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <Image
        src="/banner.webp"
        alt="Meesho Banner"
        width={1920}
        height={532}
        style={{
          width: "100%",
          height: "auto",
        }}
        priority
      />
      {/* Text & Button */}
      <div className="absolute top-[45%] right-[2%] left-[80%] transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
  {/* Headings */}
  <h1 className="text-4xl md:text-5xl font-bold mb-7 whitespace-nowrap drop-shadow-lg">
    Smart Shopping
  </h1>
  <h1 className="text-3xl md:text-5xl font-bold mb-12 whitespace-nowrap drop-shadow-lg">
    Trusted by Millions
  </h1>

  {/* Button */}
  <button className="bg-white text-black text-lg font-medium px-8 py-3 rounded-lg hover:bg-gray-100 transition-all shadow-md ml-0">
    Shop Now
  </button>
</div>
</div>
  );
};

export default HomeBanner;

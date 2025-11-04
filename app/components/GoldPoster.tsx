import Image from "next/image";

const GoldPoster = () => {
  return (
    <div className="relative w-full h-[500px] overflow-hidden shadow-lg">
      {/* Background Image - clear & original look */}
      <Image
        src="/gold.webp" // <-- yahan apni image ka path do (e.g. /images/gold.webp)
        alt="Gold Collection"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute top-1/2 right-24 -translate-y-1/2 grid grid-cols-2 gap-8 z-10">
      {/* Lehengas */}
  <div className="relative flex flex-col items-center group transition-all duration-300">
    <div className="relative z-10 mt-4 transform group-hover:-translate-y-2 transition-transform duration-300">
      <Image src="/leh.webp" alt="Lehengas" width={140} height={160} className="object-contain" />
    </div>
    <p className="text-[#f5d38c] font-semibold text-lg mt-2 group-hover:text-yellow-300 transition-colors duration-300">Lehengas</p>
  </div>

  {/* Menwear */}
  <div className="relative flex flex-col items-center group transition-all duration-300">
    <div className="relative z-10 mt-4 transform group-hover:-translate-y-2 transition-transform duration-300">
      <Image src="/menwear.webp" alt="Menwear" width={140} height={160} className="object-contain" />
    </div>
    <p className="text-[#f5d38c] font-semibold text-lg mt-2 group-hover:text-yellow-300 transition-colors duration-300">Menwear</p>
  </div>

  {/* Sarees */}
  <div className="relative flex flex-col items-center group transition-all duration-300">
    <div className="relative z-10 mt-4 transform group-hover:-translate-y-2 transition-transform duration-300">
      <Image src="/saree.webp" alt="Sarees" width={140} height={160} className="object-contain" />
    </div>
    <p className="text-[#f5d38c] font-semibold text-lg mt-2 group-hover:text-yellow-300 transition-colors duration-300">Sarees</p>
  </div>

  {/* Jewellery */}
  <div className="relative flex flex-col items-center group transition-all duration-300">
    <div className="relative z-10 mt-4 transform group-hover:-translate-y-2 transition-transform duration-300">
      <Image src="/jewl.webp" alt="Jewellery" width={140} height={160} className="object-contain" />
    </div>
    <p className="text-[#f5d38c] font-semibold text-lg mt-2 group-hover:text-yellow-300 transition-colors duration-300">Jewellery</p>
  </div>
</div>

{/* Button Section */}
<div className="absolute bottom-8 left-50">
    <button className="border border-[#f7c778] text-[#f7c778] bg-brown px-13 py-3 text-xl font-bold rounded-md hover:bg-[#f7c778] hover:text-[#2a1207] transition duration-300">
            Shop Now
            </button>
            
            </div>
            </div>
            );
        };
        export default GoldPoster;

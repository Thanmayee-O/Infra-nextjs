export default function LacasaVilla() {
  return (
    <div className="relative w-full min-h-screen md:h-screen bg-[url('https://res.cloudinary.com/dybw1km5u/image/upload/v1777118092/imgg_ep3tb4.webp')] bg-cover bg-center flex items-center px-5 sm:px-10 md:px-20 text-white overflow-hidden">

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-xl">

        <p className="text-[14px] sm:text-[16px] md:text-[20px] text-[#DCBC82] mb-3 sm:mb-4 uppercase font-semibold">
          Featured Projects - 01
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold leading-tight">
          LACASA VILLA
        </h1>

        <p className="text-xs sm:text-sm text-gray-200 leading-relaxed mt-3 mb-4">
          We create refined, functional spaces where aesthetics meet purpose.
          Each project is crafted with precision and inspired by timeless design.
        </p>

        <div className="flex flex-wrap gap-2 sm:gap-3 mb-6">
          <span className="text-xs sm:text-sm px-4 py-2 rounded-full bg-white/20">Hyderabad</span>
          <span className="text-xs sm:text-sm px-4 py-2 rounded-full bg-white/20">2025</span>
          <span className="text-xs sm:text-sm px-4 py-2 rounded-full bg-white/20">Residential</span>
        </div>

        <button onClick={()=>document.getElementById("reviews")?.scrollIntoView({ behavior: "smooth" })}className="cursor-pointer w-[140px] h-[45px] border border-white text-sm hover:bg-white hover:text-black transition">
            VIEW
        </button>

      </div>
    </div>
  );
}
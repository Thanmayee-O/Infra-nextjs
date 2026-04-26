export default function LacasaVilla() {
  return (
    <div className="relative w-[1920px] h-[960px] max-w-full min-h-screen md:h-[960px] bg-[url('https://res.cloudinary.com/dybw1km5u/image/upload/v1777118092/imgg_ep3tb4.webp')] bg-cover bg-center flex items-center px-5 sm:px-10 md:px-20 text-white">

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-xl">

        {/* Subtitle */}
        <p className="text-[14px] sm:text-[16px] md:text-[20px] text-[#DCBC82] mb-3 sm:mb-4 ml-1 uppercase font-[600p]">
          Featured Projects - 01
        </p>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-[600] leading-[1.1] md:leading-[0.95] mt-2 font-Plus Jakarta Sans">
          LACASA VILLA
        </h1>

        {/* Description */}
        <p className="text-xs sm:text-sm text-gray-200 leading-relaxed mb-3 sm:mb-4 mt-3">
          We create refined, functional spaces where aesthetics meet purpose.
          Each project is a dialogue between form and feeling—crafted with precision,
          shaped by context, and inspired by timeless design principles.
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-9">
          <span className="text-xs sm:text-sm pt-[8px] sm:pt-[10px] pr-[16px] sm:pr-[24px] pb-[8px] sm:pb-[10px] pl-[16px] sm:pl-[24px] rounded-full bg-white/20">
            Hyderabad
          </span>
          <span className="text-xs sm:text-sm pt-[8px] sm:pt-[10px] pr-[16px] sm:pr-[24px] pb-[8px] sm:pb-[10px] pl-[16px] sm:pl-[24px] rounded-full bg-white/20">
            2025
          </span>
          <span className="text-xs sm:text-sm pt-[8px] sm:pt-[10px] pr-[16px] sm:pr-[24px] pb-[8px] sm:pb-[10px] pl-[16px] sm:pl-[24px] rounded-full bg-white/20">
            Residential
          </span>
        </div>

        {/* Button */}
        <button className="p-[12px] sm:p-[14px] md:p-[16px] w-[130px] sm:w-[150px] md:w-[160px] h-[45px] sm:h-[48px] md:h-[50px] border border-white text-xs sm:text-sm hover:bg-white hover:text-black transition">
          VIEW
        </button>

      </div>
    </div>
  );
}
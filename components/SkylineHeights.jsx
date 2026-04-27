export default function SkylineHeights() {
  return (
    <div className="relative w-full min-h-screen md:h-screen bg-[url('https://res.cloudinary.com/dybw1km5u/image/upload/v1777121570/a5cf2d70e29ae7be29139e57902786a69f2bb604_xzavz0.png')] bg-cover bg-center flex items-center px-5 sm:px-10 md:px-20 text-white overflow-hidden" style={{boxShadow: '0 -12px 40px rgba(0,0,0,0.5)'}}>

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 max-w-xl">

        <p className="text-[14px] sm:text-[16px] md:text-[20px] text-[#DCBC82] mb-3 uppercase font-semibold">
          Featured Projects - 03
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-[72px] font-semibold leading-tight">
          SKYLINE HEIGHTS
        </h1>

        <p className="text-xs sm:text-sm text-gray-200 mt-3 mb-4">
          A premium high-rise with breathtaking city views and modern amenities.
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
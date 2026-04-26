"use client";

const blogs = [
  {
    img: "https://res.cloudinary.com/dybw1km5u/image/upload/v1777140387/Blogs_urdqj2.png",
    meta: "River Edge, 01.08.2025",
    title: "The Future of Urban Living: Trends in Real Estate Development",
  },
  {
    img: "https://res.cloudinary.com/dybw1km5u/image/upload/v1777140465/Rectangle_24_ktpavp.png",
    meta: "LaPaloma, 01.06.2024",
    title: "Building Your Dream Home: How E-Infra Delivers Luxury Villas",
  },
  {
    img: "https://res.cloudinary.com/dybw1km5u/image/upload/v1777140493/Blogs_1_bcpa0h.png",
    meta: "River Edge, 01.24.2027",
    title: "How to Choose the Perfect Commercial Space for Your Business",
  },
];

export default function NewsUpdates() {
  return (
    <section className="w-full bg-[#F9F9F9] py-16 px-4 sm:px-8 md:px-10 lg:px-20">

      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-gray-800 font-normal">
          News & Updates
        </h2>

        <button className="font-[600] px-5 py-2 border border-[#C78800] text-[#C78800] text-xs tracking-widest uppercase">
          View All
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {blogs.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-3 cursor-pointer group"
          >

            {/* Image with Hover Overlay */}
            <div className="w-full aspect-[4/3] overflow-hidden relative">

              {/* Image */}
              <img
                src={item.img}
                alt={item.title}
                className="text-[24px] font-[500] w-full h-full object-cover transition duration-500"
              />

              {/* Sliding Overlay */}
              <div className="absolute inset-0 overflow-hidden">
                
                <div className="absolute inset-0 bg-black/30 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></div>

                {/* Center Text */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500 delay-200">
                  <h1 className="text-white text-lg md:text-2xl font-semibold tracking-[0.3em]">
                    <img src="https://res.cloudinary.com/dybw1km5u/image/upload/v1777143162/Group_2_omm0ry.png" className="h-[40px]"/>
                  </h1>
                </div>

              </div>
            </div>

            {/* Meta */}
            <p className="text-[16px] font-[500] text-gray-400 tracking-wide">
              {item.meta}
            </p>

            {/* Title */}
            <h3 className="text-base md:text-lg text-gray-800 leading-snug transition duration-300">
              {item.title}
            </h3>

          </div>
        ))}
      </div>
    </section>
  );
}
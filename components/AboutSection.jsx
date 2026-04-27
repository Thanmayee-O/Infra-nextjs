"use client"

export default function AboutSection() {
  return (
    <section className="relative py-22 overflow-hidden bg-[#FDFBF7]">
      <div className="w-full h-screen mx-auto px-6 md:px-16 flex flex-col md:flex-row items-center gap-20 md:gap-24">

        {/* Left Side: Text Content */}
        <div className="w-full md:w-1/2 flex flex-col items-start z-10">
          <h2 className="text-3xl md:text-5xl font-medium text-[#1A1A1A] mb-6">
            About us
          </h2>
          <p className="text-gray-600 leading-relaxed mb-10 text-sm md:text-base">
            We work at the intersection of architectural design, construction science, and ecological research.
            Where dreams takes shape, spaces come alive. Our approach integrates sustainability, aesthetics,
            and functional efficiency to create environments that inspire and endure. We believe in crafting
            spaces that reflect the unique lifestyle and aspirations of our clients, ensuring every detail
            is meticulously planned and executed.
          </p>
          <button onClick={() => document.getElementById("contact").scrollIntoView()} className="cursor-pointer px-8 py-3 text-xs md:text-sm font-semibold uppercase tracking-widest text-[#D4AF37] border border-[#D4AF37] hover:bg-[#D4AF37] hover:text-white transition-colors">
            Know More
          </button>
        </div>

        {/* Right Side: Animated Image */}
        <div  className="w-full md:w-1/2 relative h-[400px] md:h-[600px] animate-slide-in-right">
          <div
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1000"
            className="absolute inset-0 w-full h-full bg-cover bg-center shadow-2xl"
            style={{
              backgroundImage: "url('https://res.cloudinary.com/dybw1km5u/image/upload/v1777091522/about_yvpx5x.jpg')"
            }}
          ></div>
        </div>

      </div>
    </section>
  );
}

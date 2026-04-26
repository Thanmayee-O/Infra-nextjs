"use client";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">

      {/* Background Image with Zoom-Out Animation */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center animate-zoomOut"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dybw1km5u/image/upload/v1777092630/hp_o8tjmg.webp')",
        }}
      />

      {/*  Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-20 px-6 md:px-12 py-3 md:py-4 flex items-center justify-between text-white border-b border-white/20">
    {/* Logo */}  

        <div className="text-lg md:text-xl font-semibold tracking-widest ml-3">
          <img src="https://res.cloudinary.com/dybw1km5u/image/upload/v1777143162/Group_2_omm0ry.png" className="h-[40px]"/>
        </div>
  

  {/* Right Side */}
  <div className="flex items-center gap-6 md:gap-8">
    
    {/* Links */}
    <div className="hidden md:flex items-center gap-6 text-sm tracking-wide">
      <a href="#" className="hover:opacity-80 transition">PROJECTS</a>
      <a href="#" className="hover:opacity-80 transition">GALLERY</a>
      <a href="#" className="hover:opacity-80 transition">CONTACT US</a>
    </div>

    {/* Hamburger */}
    <button className="text-2xl md:text-3xl leading-none hover:opacity-80 transition">
      ☰
    </button>

  </div>
</nav>

      {/* Content */}
      <div className="relative z-10 flex items-end h-full px-6 md:px-12 pb-16 md:pb-24 text-white">
  
  <div className="w-full flex flex-col md:flex-row md:items-end md:justify-between gap-6">
    
    {/* LEFT → Heading */}
    <h1 className="text-3xl sm:text-4xl md:text-6xl font-light leading-tight max-w-3xl">
      REMARKABLE SPACES,
      <br />
      GUIDED BY LIFESTYLE
    </h1>

    {/* RIGHT → Buttons */}
    <div className="flex gap-4">
      
      <button className="border border-white px-6 py-2 text-sm hover:bg-white hover:text-black transition">
        EXPLORE PROJECTS
      </button>

      <button className="bg-white text-black px-6 py-2 text-sm hover:bg-gray-200 transition">
        LET’S TALK
      </button>

    </div>

  </div>
</div>
    </section>
  );
}
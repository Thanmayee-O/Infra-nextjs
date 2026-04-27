"use client";
import { useState } from "react";

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="relative w-full h-screen overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/infra.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* NAVBAR */}
      <nav className="absolute top-0 left-0 w-full z-20 px-4 sm:px-6 md:px-12 py-3 md:py-4 text-white border-b border-white/20">

        <div className="flex items-center justify-between">

          {/* Logo */}
          <img
            onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })}
            src="https://res.cloudinary.com/dybw1km5u/image/upload/v1777143162/Group_2_omm0ry.png"
            className="h-[30px] sm:h-[35px] md:h-[40px]"
            alt="Logo"
          />

          {/* Right Side */}
          <div className="flex items-center gap-6 md:gap-8">

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-6 text-sm tracking-wide">
              <a href="#projects" className="hover:opacity-80 transition">
                PROJECTS
              </a>
              <a href="#gallery" className="hover:opacity-80 transition">
                GALLERY
              </a>
              <a href="#contact" className="hover:opacity-80 transition">
                CONTACT US
              </a>
            </div>

            {/* Hamburger (ALL screens) */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-2xl md:text-3xl hover:opacity-80 transition"
            >
              {menuOpen ? "✕" : "☰"}
            </button>

          </div>
        </div>

        {/* MOBILE DROPDOWN */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            menuOpen ? "max-h-60 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-4 text-sm tracking-wide bg-black/80 backdrop-blur-md p-4 rounded-md">
            
            <a
              href="#projects"
              onClick={() => setMenuOpen(false)}
              className="hover:opacity-80"
            >
              PROJECTS
            </a>

            <a
              href="#projects"
              onClick={() => setMenuOpen(false)}
              className="hover:opacity-80"
            >
              GALLERY
            </a>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="hover:opacity-80"
            >
              CONTACT US
            </a>

          </div>
        </div>

      </nav>

      {/* CONTENT */}
      <div className="relative z-10 flex items-end h-full px-4 sm:px-6 md:px-12 pb-12 sm:pb-16 md:pb-24 text-white">

        <div className="w-full flex flex-col md:flex-row md:items-end md:justify-between gap-4 sm:gap-6">

          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-light leading-tight max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-3xl">
            REMARKABLE SPACES,
            <br />
            GUIDED BY LIFESTYLE
          </h1>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-3 sm:gap-4 w-full md:w-auto">

            <button
              onClick={() =>
                document.getElementById("projects")?.scrollIntoView()
              }
              className="border border-white px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm hover:bg-white hover:text-black transition w-full md:w-auto text-center"
            >
              EXPLORE PROJECTS
            </button>

            <button
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView()
              }
              className="bg-white text-black px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm hover:bg-gray-200 transition w-full md:w-auto text-center"
            >
              LET'S TALK
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}

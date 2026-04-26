"use client";

import { useRef, useState } from "react";
import Form from "./Form";  

export default function Projects() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    const cardWidth = container.children[0].offsetWidth + 24;

    container.scrollBy({
      left: direction === "next" ? cardWidth : -cardWidth,
      behavior: "smooth",
    });
  };

  const cards = [
    {
      title: "LA’PALOMA",
      subtitle: "Luxury Villas",
      image:
        "https://res.cloudinary.com/dybw1km5u/image/upload/v1777118092/imgg_ep3tb4.webp",
    },
    {
      title: "SKYLA",
      subtitle: "Luxury Apartments",
      image:
        "https://res.cloudinary.com/dybw1km5u/image/upload/v1777140298/Rectangle_27_srptoh.png",
    },
    {
      title: "RIVER EDGE",
      subtitle: "Luxury Villas",
      image:
        "https://res.cloudinary.com/dybw1km5u/image/upload/v1777091452/river_feqw6a.jpg",
    },
  ];

  return (
    <section className="w-full bg-[#FFF8EF] py-20">
      <div className="max-w-[1920px] mx-auto flex flex-col lg:flex-row items-center gap-16 px-6 lg:px-16">
        
        {/* LEFT */}
        <div className="lg:w-[35%] space-y-6">
          <h2 className="text-4xl md:text-5xl font-light text-[#2d2d2d]">
            Our Projects
          </h2>

          <p className="text-[#6b6b6b]">
            We create refined, functional spaces where aesthetics meet purpose.
            Each project is a dialogue between form and feeling.
          </p>

          <button
            onClick={() => setIsFormOpen(true)}
            className="font-semibold px-6 py-2 border border-[#C78800] text-[#C78800] text-xs uppercase hover:bg-[#fff3e4] transition"
          >
            VIEW ALL
          </button>
        </div>

        {/* RIGHT */}
        <div className="relative lg:w-[65%] w-full">
          
          {/* Prev Button */}
          <button
            onClick={() => scroll("prev")}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 
                      w-10 h-10 flex items-center justify-center
                      bg-white rounded-full shadow-md text-xl"
          >
            ‹
          </button>

          {/* Next Button */}
          <button
            onClick={() => scroll("next")}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 
                      w-10 h-10 flex items-center justify-center
                      bg-white rounded-full shadow-md text-xl"
          >
            ›
          </button>

          {/* Slider */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth px-8"
          >
            {cards.map((card, i) => (
              <div
                key={i}
                className="group min-w-[75%] md:min-w-[60%] lg:min-w-[55%] h-[400px] rounded-xl overflow-hidden relative shrink-0 cursor-pointer"
              >
                {/* Image */}
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-500" />

                {/* Text */}
                <div className="absolute bottom-6 left-6 text-white transition-all duration-500">
                  <h3 className="text-xl font-semibold group-hover:text-2xl transition-all duration-500">
                    {card.title}
                  </h3>
                  <p className="text-sm opacity-80 group-hover:text-base transition-all duration-500">
                    {card.subtitle}
                  </p>
                </div>

                {/* Tag */}
                <div className="absolute top-4 right-4">
                  <span className="bg-[#C6902B] text-white text-[10px] px-3 py-1">
                    COMPLETED PROJECT
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Form isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </section>
  );
}
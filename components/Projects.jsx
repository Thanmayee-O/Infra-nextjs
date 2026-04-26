"use client";

import { useMemo, useState } from "react";
import Form from "./Form";

export default function Sample() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const cards = useMemo(
    () => [
      {
        id: "la-paloma",
        image:
          "https://res.cloudinary.com/dybw1km5u/image/upload/v1777091076/laa_ozeess.jpg",
        badge: "COMPLETED PROJECT",
        title: "LA PALOMA",
        subtitle: "Luxury Villas",
      },
      {
        id: "skyla",
        image:
          "https://res.cloudinary.com/dybw1km5u/image/upload/v1777091445/skyla_hqu04p.jpg",
        title: "SKYLA",
        subtitle: "Luxury Apartments",
      },
      {
        id: "river",
        image:
          "https://res.cloudinary.com/dybw1km5u/image/upload/v1777091452/river_feqw6a.jpg",
        title: "RIVER",
        subtitle: "Premium Residences",
      },
    ],
    []
  );

  return (
    <section className="relative w-full bg-[#FFF8EF] py-16">

      {/* MAIN CONTAINER */}
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 flex flex-col lg:flex-row items-center gap-10">

        {/* LEFT CONTENT */}
        <div className="w-full lg:w-1/2 space-y-6">

          <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#212121] font-light leading-tight">
            Our Projects
          </h2>

          <p className="text-sm sm:text-base text-[#5C5C5C] max-w-md leading-relaxed">
            We create refined, functional spaces where aesthetics meet purpose.
            Each project is a dialogue between form and feeling - crafted with
            precision, shaped by context, and inspired by timeless design principles.
          </p>

          <button
            onClick={() => setIsFormOpen(true)}
            className="px-6 py-2 border border-[#D9C7AE] text-[#A88344] text-xs tracking-[0.18em] uppercase hover:bg-[#fff3e4] transition"
          >
            VIEW ALL
          </button>
        </div>

        {/* RIGHT CARDS (SCROLLABLE) */}
        <div className="w-full lg:w-1/2 overflow-hidden">

          <div className="flex gap-6 overflow-x-auto no-scrollbar">

            {cards.map((c) => (
              <div
                key={c.id}
                className="min-w-[280px] sm:min-w-[320px] md:min-w-[360px] lg:min-w-[400px] h-[260px] sm:h-[300px] md:h-[340px] relative rounded-lg overflow-hidden shrink-0"
              >
                {/* Image */}
                <img
                  src={c.image}
                  alt={c.title}
                  className="w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                {/* Badge */}
                {c.badge && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 text-[10px] tracking-widest uppercase bg-[#C6902B] text-white">
                      {c.badge}
                    </span>
                  </div>
                )}

                {/* Text */}
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold tracking-wide">
                    {c.title}
                  </h3>
                  <p className="text-xs text-white/80">
                    {c.subtitle}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>

      </div>

      {/* FORM POPUP */}
      <Form isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />

    </section>
  );
}
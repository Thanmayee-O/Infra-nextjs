'use client';

import { useState } from 'react';

const services = [
  {
    id: 1,
    title: 'High-Rise Apartments',
    description:
      'Meticulously crafted towers that rise above the ordinary. Our high-rise projects are designed with a focus on luxury, innovation, and sustainability.',
    image:
      'https://res.cloudinary.com/dybw1km5u/image/upload/v1777135207/Rectangle_27_ydhqox.png',
  },
  {
    id: 2,
    title: 'Luxury Villas',
    description:
      'Private sanctuaries built to perfection. Each villa is a curated blend of bespoke architecture, landscape artistry, and the needs of modern families.',
    image:
      'https://res.cloudinary.com/dybw1km5u/image/upload/v1777135207/Rectangle_27_ydhqox.png',
  },
  {
    id: 3,
    title: 'Commercial Spaces',
    description:
      'Forward-thinking commercial developments built for brands and businesses with a focus on functionality, sophistication, and the needs of modern enterprise.',
    image:
      'https://res.cloudinary.com/dybw1km5u/image/upload/v1777135207/Rectangle_27_ydhqox.png',
  },
  {
    id: 4,
    title: 'Open Plots',
    description:
      'Prime locations for residential or personal development. Our open plots offer the freedom to build your own story.',
    image:
      'https://res.cloudinary.com/dybw1km5u/image/upload/v1777135207/Rectangle_27_ydhqox.png',
  },
];

export default function Services() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="w-full bg-[#212121] min-h-screen px-5 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-16 md:py-24">
      
      {/* Heading */}
      <h2 className="
        text-white text-center uppercase
        font-bold tracking-widest
        text-3xl sm:text-4xl md:text-5xl lg:text-6xl
        mb-14 md:mb-20
      ">
        Our Services
      </h2>

      {/* Service Rows */}
      <div className="flex flex-col divide-y divide-white/10">
        {services.map((service) => {
          const isHovered = hoveredId === service.id;

          return (
            <div
              key={service.id}
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="
                relative 
                flex flex-col md:flex-row
                md:items-center justify-between
                gap-6 md:gap-0
                py-8 sm:py-10 md:py-12
                cursor-pointer group
                overflow-hidden
              "
            >
              {/* Text */}
              <div className="flex-1 md:pr-16 z-10">
                <h3 className="
                  text-white font-semibold
                  text-base sm:text-lg md:text-xl lg:text-2xl
                  mb-2 sm:mb-3
                  transition-colors duration-300
                  tracking-wide
                ">
                  {service.title}
                </h3>
                <p className="
                  text-white/40 text-xs sm:text-sm
                  leading-relaxed
                  max-w-md
                ">
                  {service.description}
                </p>
              </div>

              {/* Image */}
              <div className="
                relative
                w-full md:w-52 lg:w-64
                h-44 md:h-36 lg:h-44
                overflow-hidden
                rounded-sm
              ">
                <img
                  src={service.image}
                  alt={service.title}
                  className="
                    w-full h-full object-cover
                    transition-all duration-[1350ms] ease-[cubic-bezier(0.16,1,0.3,1)]

                    /* Mobile: visible */
                    translate-y-0 opacity-100

                    /* Desktop: hover animation */
                    md:translate-y-full md:opacity-0
                    md:group-hover:translate-y-0 md:group-hover:opacity-100
                  "
                />

                {/* Overlay */}
                <div className="
                  absolute inset-0 bg-white/5
                  transition-opacity duration-500

                  /* Mobile: hidden */
                  opacity-0

                  /* Desktop: visible until hover */
                  md:opacity-100 md:group-hover:opacity-0
                " />
              </div>

              {/* Arrow */}
              <div className="
                hidden md:block
                text-white/40 group-hover:text-white
                transition-all duration-300
                group-hover:-translate-y-1 group-hover:translate-x-1
              ">
                <svg
                  width="20" height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
}
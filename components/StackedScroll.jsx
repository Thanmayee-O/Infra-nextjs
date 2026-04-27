"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import LacasaVilla from "./LacasaVilla";
import RiverEdge from "./RiverEdge";
import SkylineHeights from "./SkylineHeights";
import StatsSection from "./StatsSection";

gsap.registerPlugin(ScrollTrigger);

const SECTIONS = [LacasaVilla, RiverEdge, SkylineHeights, StatsSection];

export default function StackedScroll() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current;

      // Set initial positions
      gsap.set(cards, {
        yPercent: (i) => (i === 0 ? 0 : 100),
        zIndex: (i) => i + 1,
      });

      // Create timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${(SECTIONS.length - 1) * 100}%`,
          scrub: 1.2, // 🔥 smoothness control
          pin: true,
          anticipatePin: 1,
        },
      });

      // Animate cards
      cards.forEach((card, i) => {
        if (i === 0) return;

        tl.to(
          card,
          {
            yPercent: 0,
            ease: "power2.out",
            duration: 1,
          },
          i - 1 // stagger timing
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* DESKTOP */}
      <div
        ref={containerRef}
        className="relative hidden md:block w-full h-screen overflow-hidden"
      >
        {SECTIONS.map((Component, i) => (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            className="absolute inset-0 w-full h-full"
            style={{
              boxShadow:
                i > 0 ? "0 -10px 40px rgba(0,0,0,0.5)" : "none",
              willChange: "transform",
            }}
          >
            <Component />
          </div>
        ))}
      </div>

      {/* MOBILE */}
      <div className="md:hidden">
        {SECTIONS.map((Component, i) => (
          <Component key={i} />
        ))}
      </div>
    </>
  );
}
"use client";

import { useEffect, useRef } from "react";
import LacasaVilla from "./LacasaVilla";
import RiverEdge from "./RiverEdge";
import SkylineHeights from "./SkylineHeights";
import StatsSection from "./StatsSection";

// ── Section list ─────────────────────────────────────────────────────────────
// Desktop: 4 cards stack one over the other.
// Mobile:  rendered in plain document flow below (no JS, no transforms).
const DESKTOP_SECTIONS = [LacasaVilla, RiverEdge, SkylineHeights, StatsSection];
const MOBILE_SECTIONS  = [LacasaVilla, RiverEdge, SkylineHeights, StatsSection];
const N = DESKTOP_SECTIONS.length; // 4 → wrapper = 400 vh

// ── Lerp helper ──────────────────────────────────────────────────────────────
// Exponential ease-out: current value chases target by FACTOR each frame.
// FACTOR = 0.09 → buttery smooth (~120 ms to settle).
const LERP_FACTOR = 0.09;
const lerp = (a, b, t) => a + (b - a) * t;

export default function StackedScroll() {
  const wrapperRef = useRef(null);
  const panelRef   = useRef(null);
  const cardRefs   = useRef([]);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const panel   = panelRef.current;
    if (!wrapper || !panel) return;

    // ── Per-card animation state (kept in closure, never in React state) ─────
    // smoothY = current rendered position (lerped toward targetY each frame)
    // targetY = raw scroll-driven target (0 % = fully in view, 100 % = below panel)
    const smoothY = Array.from({ length: N }, (_, i) => (i === 0 ? 0 : 100));
    const targetY = Array.from({ length: N }, (_, i) => (i === 0 ? 0 : 100));

    let rafId;

    // ── Main animation loop ───────────────────────────────────────────────────
    const tick = () => {
      if (window.innerWidth >= 768) {
        const vh       = window.innerHeight;
        const rect     = wrapper.getBoundingClientRect();

        // scrolledIn: pixels scrolled past the TOP of the wrapper.
        // Clamped to [0, (N-1)*vh] so the panel doesn't over-shoot.
        const scrolledIn = Math.max(0, Math.min(-rect.top, (N - 1) * vh));

        // ── 1. PANEL — direct tracking, no lerp ──────────────────────────
        // The panel must move at exactly the scroll speed so content stays
        // pinned to the viewport (simulates position:sticky without using it).
        panel.style.transform = `translateY(${scrolledIn}px)`;

        // ── 2. CARDS — lerp toward scroll-driven targets ──────────────────
        for (let i = 1; i < N; i++) {
          // Each card's slide window: (i-1)*vh → i*vh
          const progress = Math.min(1, Math.max(0,
            (scrolledIn - (i - 1) * vh) / vh
          ));
          targetY[i] = (1 - progress) * 100; // 100 % (below) → 0 % (on top)
        }

        cardRefs.current.forEach((card, i) => {
          if (!card) return;
          // Exponential ease-out toward target
          smoothY[i] = lerp(smoothY[i], targetY[i], LERP_FACTOR);
          card.style.transform = `translateY(${smoothY[i].toFixed(3)}%)`;
        });
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <>
      {/* ── DESKTOP: JS-driven stacked scroll (hidden on mobile) ─────────── */}
      <div
        ref={wrapperRef}
        className="relative hidden md:block"
        style={{ height: `${N * 100}vh` }}
      >
        {/* Panel — clips the card stack and follows scroll via JS transform */}
        <div
          ref={panelRef}
          className="absolute top-0 left-0 w-full overflow-hidden"
          style={{ height: "100vh", willChange: "transform" }}
        >
          {DESKTOP_SECTIONS.map((Component, i) => (
            <div
              key={i}
              ref={(el) => (cardRefs.current[i] = el)}
              className="absolute inset-0 w-full h-full"
              style={{
                zIndex: i + 1,
                transform: i === 0 ? "translateY(0%)" : "translateY(100%)",
                willChange: "transform",
                // Depth shadow — makes each new card feel like it slides ON TOP
                boxShadow: i > 0 ? "0 -10px 40px rgba(0,0,0,0.5)" : "none",
              }}
            >
              <Component />
            </div>
          ))}
        </div>
      </div>

      {/* ── MOBILE: plain document flow — no JS, no transforms ───────────── */}
      <div className="md:hidden">
        {MOBILE_SECTIONS.map((Component, i) => (
          <Component key={i} />
        ))}
      </div>
    </>
  );
}
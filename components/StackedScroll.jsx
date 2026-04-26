"use client";

import LacasaVilla from "./LacasaVilla";
import RiverEdge from "./RiverEdge";
import SkylineHeights from "./SkylineHeights";

export default function StackedScroll() {
  return (
    <div className="relative">

      {/* Section 1 */}
      <div className="sticky top-0 z-10">
        <LacasaVilla />
      </div>

      {/* Section 2 */}
      <div className="sticky top-0 z-20">
        <RiverEdge />
      </div>

      {/* Section 3 */}
      <div className="sticky top-0 z-30">
        <SkylineHeights />
      </div>

    </div>
  );
}
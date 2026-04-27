"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { usePathname } from "next/navigation";

export default function AOSProvider({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,        // 🔥 important (allow repeat)
      mirror: true,       // 🔥 re-trigger when scrolling back
      offset: 120,
    });
  }, []);

  useEffect(() => {
    // 🔥 FORCE RESET + RE-ANIMATE on page change
    setTimeout(() => {
      AOS.refreshHard();
    }, 50);
  }, [pathname]);

  return children;
}
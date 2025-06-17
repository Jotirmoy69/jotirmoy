"use client";

import { useEffect } from "react";
import gsap from "gsap";
import ScrollSmoother from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollSmoother);

export default function SmoothScroll({ children }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const isTouchDevice =
        "ontouchstart" in window || navigator.maxTouchPoints > 0;

      const isTabletOrMobile = window.innerWidth <= 1024 || isTouchDevice;

      if (!isTabletOrMobile) {
        ScrollSmoother.create({
          wrapper: "#smooth-wrapper",
          content: "#smooth-content",
          smooth: 1.5,
          effects: true,
          normalizeScroll: true,
          ignoreMobileResize: true,
          smoothTouch: false, // optional: explicitly off
        });
      }
    }
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  );
}

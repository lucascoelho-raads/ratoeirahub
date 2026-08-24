"use client";

import { useEffect } from "react";

// Seletores de elementos com animações CSS infinitas que devem pausar
// quando estiverem fora da viewport (economia de CPU/bateria, sobretudo no mobile).
const ANIMATED_SELECTOR = [
  ".logo-marquee-track",
  ".animate-marquee-left",
  ".animate-marquee-right",
  ".float-animation",
  ".float-animation-delayed",
  ".animated-gradient",
  ".gradient-border-auto",
  ".gradient-border-stop-hover",
  "[class*='animate-gradient-']",
  "[style*='aurora-blob']",
].join(",");

export default function OffscreenAnimationPauser() {
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          entry.target.classList.toggle("anim-paused", !entry.isIntersecting);
        }
      },
      { rootMargin: "100px" }
    );

    const observed = new WeakSet<Element>();
    const scan = () => {
      document.querySelectorAll(ANIMATED_SELECTOR).forEach((el) => {
        if (!observed.has(el)) {
          observed.add(el);
          observer.observe(el);
        }
      });
    };

    scan();
    // Segundo scan para capturar elementos montados após a hidratação inicial.
    const timer = window.setTimeout(scan, 2000);

    return () => {
      window.clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return null;
}

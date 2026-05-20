import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface WhisperTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  triggerStart?: string;
  scrollTrigger?: boolean;
}

const WhisperText: React.FC<WhisperTextProps> = ({
  text,
  className = "",
  delay = 80,
  duration = 0.4,
  x = 0,
  y = 0,
  triggerStart = "top 90%",
  scrollTrigger = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const targets = gsap.utils.toArray<HTMLElement>("[data-word]");

      gsap.set(targets, { opacity: 0, x, y });

      if (scrollTrigger && containerRef.current) {
        gsap.to(targets, {
          scrollTrigger: {
            trigger: containerRef.current,
            start: triggerStart,
            toggleActions: "play none none none",
            once: true,
          },
          opacity: 1,
          x: 0,
          y: 0,
          duration,
          ease: "power2.out",
          stagger: delay / 1000,
        });
      } else {
        gsap.to(targets, {
          opacity: 1,
          x: 0,
          y: 0,
          duration,
          ease: "power2.out",
          stagger: delay / 1000,
          delay: 0.3,
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, [text, delay, duration, x, y, triggerStart, scrollTrigger]);

  const renderWords = () =>
    text.split(" ").map((word, i) => (
      <span
        key={i}
        data-word
        className="inline-block whitespace-nowrap"
        style={{ position: "relative" }}
      >
        {word}
      </span>
    ));

  return (
    <div
      ref={containerRef}
      className={`relative inline-flex flex-wrap gap-x-2 ${className}`}
      style={{ overflow: "visible" }}
    >
      {renderWords()}
    </div>
  );
};

export default WhisperText;

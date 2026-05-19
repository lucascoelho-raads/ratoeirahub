"use client";

import { cn } from "@/lib/utils";

type RadialGlowBackgroundProps = {
  className?: string;
  sizePx?: number;
  position?: {
    x: string;
    y: string;
  };
  color?: string;
};

export function RadialGlowBackground({
  className,
  sizePx = 520,
  position = { x: "50%", y: "20%" },
  color = "rgba(255,184,0,0.18)",
}: RadialGlowBackgroundProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0", className)}
      style={{
        backgroundImage: `radial-gradient(circle ${sizePx}px at ${position.x} ${position.y}, ${color}, transparent)`,
      }}
    />
  );
}

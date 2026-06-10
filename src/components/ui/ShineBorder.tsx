"use client";

import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ShineBorderColor = string | string[];

interface ShineBorderProps {
  borderRadius?: number;
  borderWidth?: number;
  duration?: number;
  color?: ShineBorderColor;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

export function ShineBorder({
  borderRadius = 24,
  borderWidth = 1.5,
  duration = 14,
  color = "var(--color-brand-primary)",
  className,
  style,
  children,
}: ShineBorderProps) {
  const palette = Array.isArray(color) ? color : [color, color, color, color];
  const innerRadius = Math.max(borderRadius - borderWidth, 0);
  const cssVars = {
    "--sb-radius": `${borderRadius}px`,
    "--sb-width": `${borderWidth}px`,
    "--sb-duration": `${duration}s`,
    border: "var(--sb-width) solid transparent",
    borderRadius: "var(--sb-radius)",
    backgroundImage: `linear-gradient(var(--color-surface-default), var(--color-surface-default)), linear-gradient(120deg, ${palette[0]}, ${palette[1]}, ${palette[2]}, ${palette[3]}, ${palette[1]})`,
    backgroundOrigin: "border-box",
    backgroundClip: "padding-box, border-box",
    backgroundSize: "100% 100%, 220% 220%",
    animation: "shineBorderMove var(--sb-duration) linear infinite",
    boxShadow: "0 0 22px rgba(255, 184, 0, 0.46), 0 0 38px rgba(255, 126, 74, 0.3)",
  } as CSSProperties;

  return (
    <div
      style={{ ...cssVars, ...style }}
      className={cn(
        "relative rounded-[--sb-radius] overflow-hidden will-change-[background-position]",
        className,
      )}
    >
      <div
        className="relative z-10 h-full w-full overflow-hidden"
        style={{ borderRadius: `${innerRadius}px` }}
      >
        {children}
      </div>

      <style jsx>{`
        @keyframes shineBorderMove {
          0% {
            background-position: 0 0, 0% 50%;
          }
          100% {
            background-position: 0 0, 220% 50%;
          }
        }
      `}</style>
    </div>
  );
}

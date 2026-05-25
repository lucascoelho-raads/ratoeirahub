"use client";

import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps {
  children: ReactNode;
  className?: string;
}

export const AuroraBackground = ({
  className,
  children,
}: AuroraBackgroundProps) => {
  return (
    <div className={cn("relative flex flex-col h-full min-h-[20rem] overflow-hidden", className)}>
      <div className="absolute inset-0">
        {/* Blob 1 - top-left gold */}
        <div
          className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full opacity-70 blur-[80px]"
          style={{
            background: "radial-gradient(circle, rgba(245,158,11,0.6) 0%, rgba(217,119,6,0.3) 50%, transparent 70%)",
            animation: "aurora-blob-1 20s ease-in-out infinite alternate",
          }}
        />
        {/* Blob 2 - bottom-right orange */}
        <div
          className="absolute -bottom-[20%] -right-[10%] w-[70%] h-[70%] rounded-full opacity-60 blur-[80px]"
          style={{
            background: "radial-gradient(circle, rgba(234,88,12,0.5) 0%, rgba(217,119,6,0.25) 50%, transparent 70%)",
            animation: "aurora-blob-2 25s ease-in-out infinite alternate",
          }}
        />
        {/* Blob 3 - center amber */}
        <div
          className="absolute top-[30%] left-[40%] w-[50%] h-[50%] rounded-full opacity-50 blur-[100px]"
          style={{
            background: "radial-gradient(circle, rgba(251,191,36,0.5) 0%, rgba(245,158,11,0.2) 50%, transparent 70%)",
            animation: "aurora-blob-3 18s ease-in-out infinite alternate",
          }}
        />
        {/* Vignette overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at center, transparent 0%, rgba(5,5,5,0.5) 70%, rgba(5,5,5,0.85) 100%)",
          }}
        />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};

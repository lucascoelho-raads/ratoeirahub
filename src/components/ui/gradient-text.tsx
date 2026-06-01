"use client"

import React from "react";
import { cn } from "@/lib/utils";

interface GradientTextProps {
  className?: string;
  children: React.ReactNode;
  variant?: "gold" | "orange";
}

function GradientText({
  className,
  children,
  variant = "gold",
}: GradientTextProps) {
  return (
    <span
      className={cn(
        "inline-block",
        variant === "gold" ? "text-brand-primary" : "text-brand-secondary",
        className,
      )}
    >
      {children}
    </span>
  );
}

export { GradientText }

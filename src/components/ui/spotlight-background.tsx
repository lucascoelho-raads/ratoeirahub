"use client";

import type { ComponentProps, PropsWithChildren } from "react";
import { motion } from "framer-motion";

const MotionSpotlight = ({ className, ...props }: ComponentProps<typeof motion.div>) => {
  return <motion.div className={className} {...props} />;
};

type SpotlightBackgroundProps = PropsWithChildren<{
  className?: string;
}>;

export default function SpotlightBackground({ children, className }: SpotlightBackgroundProps) {
  return (
    <div className={["relative overflow-hidden", className].filter(Boolean).join(" ")}>
      <div className="absolute inset-0 pointer-events-none">
        <MotionSpotlight
          initial={{ x: "-50%", y: "-50%", rotate: "0deg" }}
          animate={{
            x: ["-50%", "-30%", "-70%", "-50%"],
            y: ["-50%", "-70%", "-30%", "-50%"],
            rotate: ["0deg", "15deg", "-15deg", "0deg"],
          }}
          transition={{
            duration: 12,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          }}
          className="absolute left-1/4 top-1/3 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rotate-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,236,179,0.35),transparent_70%)] blur-3xl"
        />

        <MotionSpotlight
          initial={{ x: "0%", y: "0%", rotate: "0deg" }}
          animate={{
            x: ["0%", "20%", "-20%", "0%"],
            y: ["0%", "30%", "10%", "0%"],
            rotate: ["-20deg", "0deg", "20deg", "-20deg"],
          }}
          transition={{
            duration: 15,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
            delay: 3,
          }}
          className="absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,236,179,0.28),transparent_70%)] blur-[90px]"
        />

        <MotionSpotlight
          initial={{ x: "0%", y: "0%", rotate: "10deg" }}
          animate={{
            x: ["0%", "-30%", "10%", "0%"],
            y: ["0%", "-20%", "20%", "0%"],
            rotate: ["10deg", "-10deg", "25deg", "10deg"],
          }}
          transition={{
            duration: 18,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
            delay: 5,
          }}
          className="absolute left-3/4 top-1/3 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,236,179,0.24),transparent_70%)] blur-3xl"
        />
      </div>

      <div className="relative z-10 h-full w-full">{children}</div>
    </div>
  );
}

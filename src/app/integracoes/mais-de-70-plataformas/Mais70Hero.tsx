"use client";

import { FloatingIconsHero } from "@/components/ui/floating-icons-hero-section";

const logos = [
  { id: 1, imageSrc: "/logos/hotmart.jpg", imageAlt: "Hotmart", className: "top-[10%] left-[8%] hidden md:block" },
  { id: 2, imageSrc: "/logos/kiwify.png", imageAlt: "Kiwify", className: "top-[14%] right-[10%] hidden md:block" },
  { id: 3, imageSrc: "/logos/Eduzz.png", imageAlt: "Eduzz", className: "top-[40%] left-[6%] hidden lg:block" },
  { id: 4, imageSrc: "/logos/monetizze.png", imageAlt: "Monetizze", className: "top-[52%] right-[6%] hidden lg:block" },
  { id: 5, imageSrc: "/logos/ticto.png", imageAlt: "Ticto", className: "bottom-[12%] left-[10%] hidden md:block" },
  { id: 6, imageSrc: "/logos/yampi.png", imageAlt: "Yampi", className: "bottom-[10%] right-[12%] hidden md:block" },
  { id: 7, imageSrc: "/logos/perfectpay.png", imageAlt: "Perfect Pay", className: "top-[6%] left-[32%] hidden xl:block" },
  { id: 8, imageSrc: "/logos/appmax.avif", imageAlt: "Appmax", className: "top-[7%] right-[32%] hidden xl:block" },
  { id: 9, imageSrc: "/logos/braip.webp", imageAlt: "Braip", className: "bottom-[8%] left-[28%] hidden xl:block" },
  { id: 10, imageSrc: "/logos/cartpanda.png", imageAlt: "Cartpanda", className: "bottom-[7%] right-[28%] hidden xl:block" },
  { id: 11, imageSrc: "/logos/clickbank.svg", imageAlt: "ClickBank", className: "top-[66%] left-[14%] hidden lg:block" },
  { id: 12, imageSrc: "/logos/jvzoo.png", imageAlt: "JVZoo", className: "top-[72%] right-[16%] hidden lg:block" },
] as const;

export default function Mais70Hero() {
  return (
    <FloatingIconsHero
      title={<span className="text-[#FFB800]">Mais de 70 plataformas</span>}
        subtitle="Seus checkouts, plataformas de afiliação e redes conectados de uma vez. Uma configuração, rastreamento de tudo."
      ctaText="Veja as Plataformas"
      ctaHref="#explore-section"
        icons={[...logos]}
    />
  );
}

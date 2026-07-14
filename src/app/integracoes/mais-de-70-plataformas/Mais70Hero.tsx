"use client";

import { FloatingIconsHero } from "@/components/ui/floating-icons-hero-section";
import { useLanguage } from "@/contexts/LanguageContext";

const logos = [
  // Mobile-only logos — above title and below CTA
  { id: 13, imageSrc: "/logos/hotmart.jpg", imageAlt: "Hotmart", className: "top-[8%] left-[12%] md:hidden" },
  { id: 14, imageSrc: "/logos/kiwify.png", imageAlt: "Kiwify", className: "top-[10%] right-[12%] md:hidden" },
  { id: 15, imageSrc: "/logos/Eduzz.png", imageAlt: "Eduzz", className: "top-[16%] left-1/2 -translate-x-1/2 md:hidden" },
  { id: 16, imageSrc: "/logos/monetizze.png", imageAlt: "Monetizze", className: "bottom-[10%] left-[12%] md:hidden" },
  { id: 17, imageSrc: "/logos/ticto.png", imageAlt: "Ticto", className: "bottom-[12%] right-[12%] md:hidden" },
  { id: 18, imageSrc: "/logos/yampi.png", imageAlt: "Yampi", className: "bottom-[18%] left-1/2 -translate-x-1/2 md:hidden" },
  // Desktop logos
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
  const { t } = useLanguage();

  return (
    <FloatingIconsHero
      title={<span className="text-[#FFB800]">{t("mais70.hero.title")}</span>}
      subtitle={t("mais70.hero.subtitle")}
      ctaText={t("mais70.hero.cta")}
      ctaHref="#explore-section"
      icons={[...logos]}
    />
  );
}

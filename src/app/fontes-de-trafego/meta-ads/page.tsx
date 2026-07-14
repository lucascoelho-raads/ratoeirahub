"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clapperboard, Gauge, LayoutDashboard, Network, Sparkles, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroMetaAds } from "./components/HeroMetaAds";
import { useLanguage } from "@/contexts/LanguageContext";
import { useMemo } from "react";

export default function MetaAdsTrafficSourcePage() {
  const { t } = useLanguage();

  const sectionTitle = useMemo(() => t("metaAds.section.title"), [t]);
  const sectionSubtitle = useMemo(() => t("metaAds.section.subtitle"), [t]);
  const ctaTitle = useMemo(() => t("metaAds.cta.title"), [t]);
  const ctaDescription = useMemo(() => t("metaAds.cta.description"), [t]);
  const ctaButton = useMemo(() => t("metaAds.cta.button"), [t]);

  const pillars = useMemo(
    () => [
      {
        title: t("metaAds.pillars.dualSend.title"),
        description: t("metaAds.pillars.dualSend.description"),
        icon: TrendingUp,
        image: "/serveraside.png",
      },
      {
        title: t("metaAds.pillars.enrichment.title"),
        description: t("metaAds.pillars.enrichment.description"),
        icon: Sparkles,
        image: "/dashboard_resumo.png",
      },
      {
        title: t("metaAds.pillars.creative.title"),
        description: t("metaAds.pillars.creative.description"),
        icon: Clapperboard,
        image: "/dashboard.png",
      },
      {
        title: t("metaAds.pillars.visible.title"),
        description: t("metaAds.pillars.visible.description"),
        icon: Network,
        image: "/dashboard_resumo.png",
      },
      {
        title: t("metaAds.pillars.fastData.title"),
        description: t("metaAds.pillars.fastData.description"),
        icon: Gauge,
        image: "/dash.png",
      },
      {
        title: t("metaAds.pillars.unified.title"),
        description: t("metaAds.pillars.unified.description"),
        icon: LayoutDashboard,
        image: "/dashboard.png",
      },
    ],
    [t]
  );

  return (
    <main className="flex flex-col flex-1 bg-[#050505] text-white">
      <Navbar />
      <HeroMetaAds />

      <section className="py-20">
        <div className="mx-auto max-w-6xl 2xl:max-w-[90rem] 4xl:max-w-[110rem] 5xl:max-w-[130rem] 6xl:max-w-[150rem] px-4 sm:px-6 lg:px-8 2xl:px-12 4xl:px-20 5xl:px-28 6xl:px-36">
          <div className="mb-10">
            <h2 className="text-h1 font-black text-white tracking-tight leading-tight hyphens-none">
              {sectionTitle}
            </h2>
            <p className="mt-4 text-body-lg text-gray-300 max-w-3xl 2xl:max-w-[60rem] 4xl:max-w-[80rem] hyphens-none">
              {sectionSubtitle}
            </p>
          </div>

          <div className="space-y-16">
            {pillars.map((p, index) => {
              const Icon = p.icon;
              const isReversed = index % 2 === 1;
              const isDark = index % 2 === 0;

              return (
                <div key={p.title} className={`grid gap-10 lg:grid-cols-2 lg:items-center rounded-3xl p-6 sm:p-8 ${isDark ? "bg-[#0a0a0a]" : "bg-white"}`}>
                  <div className={isReversed ? "space-y-6 max-w-2xl 2xl:max-w-[50rem] 4xl:max-w-[70rem] lg:order-2" : "space-y-6 max-w-2xl 2xl:max-w-[50rem] 4xl:max-w-[70rem] lg:order-1"}>
                    <div className="flex items-center gap-3">
                      <span className={`flex w-12 h-12 items-center justify-center rounded-2xl bg-brand-primary/10 border ${isDark ? "border-white/10 text-brand-primary" : "border-black/10 text-brand-primary"}`}>
                        <Icon className="w-6 h-6" />
                      </span>
                      <h3 className={`text-h2 font-black tracking-tight leading-tight hyphens-none ${isDark ? "text-white" : "text-[#111111]"}`}>{p.title}</h3>
                    </div>
                    <p className={`text-body leading-relaxed hyphens-none ${isDark ? "text-gray-300" : "text-[#4b5563]"}`}>{p.description}</p>
                  </div>

                  <div className={isReversed ? "w-full lg:order-1" : "w-full lg:order-2"}>
                    <div className={`relative overflow-hidden rounded-3xl border ${isDark ? "border-white/10 bg-black/35" : "border-black/10 bg-gray-50"}`}>
                      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_20%,rgba(255,184,0,0.18),rgba(0,0,0,0))]" />
                      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_55%_at_70%_55%,rgba(255,126,74,0.10),rgba(0,0,0,0))]" />
                      <div className="relative z-10 p-6 sm:p-8">
                        <div className={`relative h-[clamp(240px,28vh,420px)] overflow-hidden rounded-2xl border ${isDark ? "border-white/10" : "border-black/10"}`}>
                          <Image
                            src={p.image}
                            alt={p.title}
                            fill
                            sizes="(min-width: 1024px) 50vw, 100vw"
                            className="object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className={`absolute inset-0 ring-1 ${isDark ? "ring-white/10" : "ring-black/10"}`} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-white/5">
        <div className="mx-auto max-w-6xl 2xl:max-w-[90rem] 4xl:max-w-[110rem] 5xl:max-w-[130rem] 6xl:max-w-[150rem] px-4 sm:px-6 lg:px-8 2xl:px-12 4xl:px-20 5xl:px-28 6xl:px-36">
          <div className="rounded-[32px] border border-white/10 bg-[#0A0A0A] p-6 sm:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-8">
            <div>
              <h3 className="text-h2 font-black text-white tracking-tight leading-tight hyphens-none" dangerouslySetInnerHTML={{ __html: ctaTitle }} />
              <p className="mt-3 text-body-lg text-gray-300 max-w-2xl 2xl:max-w-[50rem] 4xl:max-w-[70rem] hyphens-none">
                {ctaDescription}
              </p>
            </div>
            <Button asChild size="lg" className="h-12 px-8 text-base">
              <Link href="/planos">
                {ctaButton} <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
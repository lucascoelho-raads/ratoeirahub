"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HeroGoogleAds } from "./components/HeroGoogleAds";
import Image from "next/image";
import { LineChart, MousePointerClick, ShieldCheck, Target, Timer, Waypoints } from "lucide-react";
import { ShineBorder } from "@/components/ui/ShineBorder";
import { useLanguage } from "@/contexts/LanguageContext";
import { useMemo } from "react";

export default function GoogleAdsPage() {
  const { t } = useLanguage();

  const features = useMemo(() => [
    {
      icon: Timer,
      title: t("googleAds.features.serverSide"),
      description: t("googleAds.features.serverSideDesc"),
      image: "/googleserveraside.png",
    },
    {
      icon: Target,
      title: t("googleAds.features.gclid"),
      description: t("googleAds.features.gclidDesc"),
      image: "/gclideutms.png",
    },
    {
      icon: ShieldCheck,
      title: t("googleAds.features.ipBlocking"),
      description: t("googleAds.features.ipBlockingDesc"),
      image: "/bloqueioips.png",
      badge: t("googleAds.features.exclusive"),
    },
    {
      icon: MousePointerClick,
      title: t("googleAds.features.campaign"),
      description: t("googleAds.features.campaignDesc"),
      image: "/gerenciadorgoogle.png",
    },
    {
      icon: LineChart,
      title: t("googleAds.features.ios"),
      description: t("googleAds.features.iosDesc"),
      image: "/ios14.png",
    },
    {
      icon: Waypoints,
      title: t("googleAds.features.integration"),
      description: t("googleAds.features.integrationDesc"),
      image: "/dash.png",
    },
  ], [t]);

  const steps = useMemo(() => [
    {
      number: "01",
      title: t("googleAds.steps.connect"),
      description: t("googleAds.steps.connectDesc"),
    },
    {
      number: "02",
      title: t("googleAds.steps.preserve"),
      description: t("googleAds.steps.preserveDesc"),
    },
    {
      number: "03",
      title: t("googleAds.steps.optimize"),
      description: t("googleAds.steps.optimizeDesc"),
    },
  ], [t]);

  const sectionTitle = useMemo(() => t("googleAds.features.title"), [t]);
  const sectionSubtitle = useMemo(() => t("googleAds.features.subtitle"), [t]);
  const howItWorksTitle = useMemo(() => t("googleAds.howItWorks.title"), [t]);
  const howItWorksSubtitle = useMemo(() => t("googleAds.howItWorks.subtitle"), [t]);

  return (
    <main className="flex flex-col flex-1 bg-[#050505] text-white">
      <Navbar />
      <HeroGoogleAds />

      <section className="py-16 md:py-24 bg-[#050505]">
        <div className="max-w-7xl 2xl:max-w-[90rem] 4xl:max-w-[120rem] 5xl:max-w-[140rem] 6xl:max-w-[160rem] mx-auto px-6 2xl:px-12 4xl:px-20 5xl:px-28 6xl:px-36">
          <div className="text-center mb-20 max-w-3xl 2xl:max-w-[60rem] 4xl:max-w-[80rem] mx-auto">
            <h2 className="text-h1 font-black text-white mb-6 tracking-tight leading-tight hyphens-none" dangerouslySetInnerHTML={{ __html: sectionTitle }} />
            <p className="text-body-lg text-gray-300 max-w-3xl mx-auto px-4 sm:px-0 hyphens-none">
              {sectionSubtitle}
            </p>
          </div>

          <div className="space-y-16 md:space-y-24">
            {features.map((feature, index) => {
              const isDark = index % 2 === 0;
              return (
                <div
                  key={feature.title}
                  className={`grid gap-10 lg:grid-cols-2 ${feature.image === "/ios14.png" ? "lg:items-stretch" : "lg:items-center"} rounded-3xl p-6 sm:p-8 ${isDark ? "bg-[#0a0a0a]" : "bg-white"} ${feature.badge ? "ring-2 ring-brand-primary" : ""}`}
                >
                  <div
                    className={
                      index % 2 === 1
                        ? `space-y-6 max-w-2xl 2xl:max-w-[50rem] 4xl:max-w-[70rem] lg:order-2 ${feature.image === "/ios14.png" ? "lg:h-full lg:flex lg:flex-col lg:justify-center" : ""}`
                        : `space-y-6 max-w-2xl 2xl:max-w-[50rem] 4xl:max-w-[70rem] lg:order-1 ${feature.image === "/ios14.png" ? "lg:h-full lg:flex lg:flex-col lg:justify-center" : ""}`
                    }
                  >
                    {feature.badge && (
                      <div className="inline-flex items-center rounded-full bg-brand-primary px-3 py-1 text-xs font-black uppercase tracking-wider text-black">
                        {feature.badge}
                      </div>
                    )}
                    <div className="w-16 h-16 rounded-2xl bg-brand-primary/10 flex items-center justify-center">
                      <feature.icon className="w-8 h-8 text-brand-primary" />
                    </div>
                    <h3 className={`text-h2 font-black leading-tight tracking-tight hyphens-none ${isDark ? "text-white" : "text-[#111111]"}`}>
                      {feature.title}
                    </h3>
                    <p className={`text-body leading-relaxed hyphens-none ${isDark ? "text-gray-300" : "text-[#4b5563]"}`}>{feature.description}</p>
                  </div>

                  <div className={index % 2 === 1 ? `w-full lg:order-1 ${feature.image === "/ios14.png" ? "lg:h-full lg:flex lg:items-start" : ""}` : `w-full lg:order-2 ${feature.image === "/ios14.png" ? "lg:h-full lg:flex lg:items-start" : ""}`}>
                    {feature.image === "/ios14.png" ? (
                      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-full lg:max-h-[560px] lg:mt-[100px]">
                        <Image
                          src={feature.image}
                          alt={feature.title}
                          fill
                          sizes="(min-width: 1024px) 50vw, 100vw"
                          className="object-contain object-center"
                          priority={index < 2}
                        />
                      </div>
                    ) : (
                      <div className={`relative overflow-hidden rounded-3xl border ${isDark ? "border-white/10 bg-black/35" : "border-black/10 bg-gray-50"}`}>
                        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_20%,rgba(255,184,0,0.18),rgba(0,0,0,0))]" />
                        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_55%_at_70%_55%,rgba(255,126,74,0.10),rgba(0,0,0,0))]" />
                        <div className={`relative z-10 ${feature.image === "/googleserveraside.png" || feature.image === "/bloqueioips.png" || feature.image === "/gclideutms.png" || feature.image === "/gerenciadorgoogle.png" ? "" : "p-6 sm:p-8"}`}>
                          <div className={`relative ${feature.image === "/googleserveraside.png" || feature.image === "/bloqueioips.png" || feature.image === "/gclideutms.png" || feature.image === "/gerenciadorgoogle.png" ? "h-[clamp(260px,30vh,460px)]" : "h-[clamp(240px,28vh,420px)]"}`}>
                            <Image
                              src={feature.image}
                              alt={feature.title}
                              fill
                              sizes="(min-width: 1024px) 50vw, 100vw"
                              className={feature.image === "/gerenciadorgoogle.png" ? "object-cover object-top" : "object-cover object-center"}
                              priority={index < 2}
                            />
                          </div>
                        </div>
                        <div className={`absolute inset-0 ring-1 ${isDark ? "ring-white/10" : "ring-black/10"}`} />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="como-funciona" className="py-16 md:py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl 2xl:max-w-[90rem] 4xl:max-w-[120rem] 5xl:max-w-[140rem] 6xl:max-w-[160rem] mx-auto px-6 2xl:px-12 4xl:px-20 5xl:px-28 6xl:px-36">
          <div className="text-center mb-16 max-w-3xl 2xl:max-w-[60rem] 4xl:max-w-[80rem] mx-auto">
            <h2 className="text-h1 font-black text-white mb-6 tracking-tight leading-tight hyphens-none" dangerouslySetInnerHTML={{ __html: howItWorksTitle }} />
            <p className="text-body-lg text-gray-300 max-w-2xl mx-auto hyphens-none">
              {howItWorksSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <ShineBorder
                key={step.number}
                borderRadius={24}
                borderWidth={2}
                duration={8}
                color={["#FFB800", "#FF7E4A", "#FFB800", "#FF7E4A"]}
                className="w-full"
              >
                <div className="h-full rounded-3xl border border-white/10 bg-[#111111] p-8">
                  <div className="text-xs font-black uppercase tracking-widest text-brand-primary">
                    {step.number}
                  </div>
                  <h3 className="mt-4 text-h2 font-black text-white hyphens-none">{step.title}</h3>
                  <p className="mt-3 text-body text-gray-300 leading-relaxed hyphens-none">{step.description}</p>
                </div>
              </ShineBorder>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

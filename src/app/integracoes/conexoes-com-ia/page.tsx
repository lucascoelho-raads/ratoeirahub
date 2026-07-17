"use client";

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { SplineSceneBasic } from "@/components/ui/spline-scene-basic"
import { BentoGrid, type BentoItem } from "@/components/ui/bento-grid"
import { RadialGlowBackground } from "@/components/ui/radial-glow-background"
import { BarChart3, ListChecks, MessageSquareText } from "lucide-react"
import type { CSSProperties } from "react"
import { useLanguage } from "@/contexts/LanguageContext"
import { HIDE_MCP_PAGES_SECTION } from "@/lib/feature-flags"
import { useMemo } from "react"

export default function ConexoesComIAPage() {
  const { t } = useLanguage();

  const mcpPagesOrangeStyle = {
    "--color-brand-primary": "var(--color-brand-secondary)",
    "--color-brand-primary-hover": "#E86B3B",
  } as unknown as CSSProperties

  const mcpAdsItems = useMemo((): BentoItem[] => [
    {
      status: "01",
      title: t("ai.connection.ads.consult"),
      description: t("ai.connection.ads.consultDesc"),
      iconKey: "analytics",
      tags: [t("ai.connection.tags.roas"), t("ai.connection.tags.cpa"), t("ai.connection.tags.performance")],
      colSpan: 2,

    },
    {
      status: "02",
      title: t("ai.connection.ads.decide"),
      description: t("ai.connection.ads.decideDesc"),
      iconKey: "decision",
      tags: [t("ai.connection.tags.mobile"), t("ai.connection.tags.speed")],
    },
    {
      status: "03",
      title: t("ai.connection.ads.execute"),
      description: t("ai.connection.ads.executeDesc"),
      iconKey: "execute",
      tags: [t("ai.connection.tags.automation"), t("ai.connection.tags.operation")],
    },
    {
      status: "04",
      title: t("ai.connection.ads.actions"),
      description: t("ai.connection.ads.actionsDesc"),
      iconKey: "actions",
      tags: [
        t("ai.connection.ads.action1"),
        t("ai.connection.ads.action2"),
        t("ai.connection.ads.action3"),
        t("ai.connection.ads.action4"),
        t("ai.connection.ads.action5"),
        t("ai.connection.ads.action6"),
        t("ai.connection.ads.action7"),
      ],
      colSpan: 2,
      cta: t("ai.connection.cta"),
    },
  ], [t]);

  const mcpPagesItems = useMemo((): BentoItem[] => [
    {
      status: "01",
      title: t("ai.connection.pages.create"),
      description: t("ai.connection.pages.createDesc"),
      icon: <MessageSquareText className="h-4 w-4 text-brand-secondary" />,
      iconKey: "execute",
      tags: [t("ai.connection.tags.briefing"), t("ai.connection.tags.template"), t("ai.connection.tags.cta")],
      colSpan: 2,

    },
    {
      status: "02",
      title: t("ai.connection.pages.analytics"),
      description: t("ai.connection.pages.analyticsDesc"),
      icon: <BarChart3 className="h-4 w-4 text-brand-secondary" />,
      iconKey: "analytics",
      tags: [t("ai.connection.tags.visits"), t("ai.connection.tags.source"), t("ai.connection.tags.conversion")],
    },
    {
      status: "03",
      title: t("ai.connection.pages.clone"),
      description: t("ai.connection.pages.cloneDesc"),
      icon: <ListChecks className="h-4 w-4 text-brand-secondary" />,
      iconKey: "actions",
      tags: [t("ai.connection.tags.variations"), t("ai.connection.tags.test"), t("ai.connection.tags.scale")],
    },
    {
      status: "04",
      title: t("ai.connection.pages.actions"),
      description: t("ai.connection.pages.actionsDesc"),
      icon: <ListChecks className="h-4 w-4 text-brand-secondary" />,
      iconKey: "actions",
      tags: [
        t("ai.connection.pages.action1"),
        t("ai.connection.pages.action2"),
        t("ai.connection.pages.action3"),
        t("ai.connection.pages.action4"),
        t("ai.connection.pages.action5"),
        t("ai.connection.pages.action6"),
      ],
      colSpan: 2,
      cta: t("ai.connection.cta2"),
    },
  ], [t]);

  return (
    <main className="flex flex-col flex-1 min-h-screen bg-[#050505] text-white">
      <Navbar />

      <section>
        <SplineSceneBasic />
      </section>

      <section className="relative py-14 sm:py-20">
        <RadialGlowBackground sizePx={760} position={{ x: "50%", y: "180px" }} color="rgba(255,184,0,0.18)" />
        <div className="relative z-10 max-w-7xl 2xl:max-w-[90rem] 4xl:max-w-[120rem] 5xl:max-w-[140rem] 6xl:max-w-[160rem] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 4xl:px-20 5xl:px-28 6xl:px-36">
          <div className="relative z-10 grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="flex flex-col gap-4 lg:col-span-2">
              <h2 className="text-h1 font-black tracking-tight text-[#FFB800] text-center">
                {t("ai.connection.ads.badge")}
              </h2>

              <p className="text-center text-xs text-gray-400/60">{t("ai.connection.compatible")}</p>

              <h2 className="text-h1 font-black tracking-tight text-white text-center lg:text-left">
                {t("ai.connection.ads.title")}
              </h2>

              <p className="text-base sm:text-lg text-gray-400/70 leading-relaxed max-w-3xl 2xl:max-w-[60rem] 4xl:max-w-[80rem] text-center lg:text-left">
                {t("ai.connection.ads.subtitle")}
              </p>

              <BentoGrid className="mt-2" items={mcpAdsItems} hideStatus hideCta />
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-14 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black -z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_700px_at_50%_200px,rgba(180,83,9,0.25),transparent)] -z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_400px_at_70%_500px,rgba(234,88,12,0.3),transparent)] -z-10" />
        <div className="relative z-10 max-w-7xl 2xl:max-w-[90rem] 4xl:max-w-[120rem] 5xl:max-w-[140rem] 6xl:max-w-[160rem] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 4xl:px-20 5xl:px-28 6xl:px-36">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0b0b0b] px-8 py-12 sm:px-12 sm:py-14">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_20%,rgba(255,184,0,0.18),rgba(11,11,11,0))]" />
            <div className="relative mx-auto max-w-3xl 2xl:max-w-[60rem] 4xl:max-w-[80rem] text-center">
              <h2 className="text-h1 font-black tracking-tight text-white">
                {t("ai.connection.midSection.title")}
              </h2>
              <p className="mt-4 text-base sm:text-lg text-gray-400/70 leading-relaxed">
                {t("ai.connection.midSection.subtitle")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {!HIDE_MCP_PAGES_SECTION && (
      <section className="relative py-14 sm:py-20">
        <RadialGlowBackground sizePx={760} position={{ x: "50%", y: "180px" }} color="rgba(251,147,60,0.18)" />
        <div className="relative z-10 max-w-7xl 2xl:max-w-[90rem] 4xl:max-w-[120rem] 5xl:max-w-[140rem] 6xl:max-w-[160rem] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 4xl:px-20 5xl:px-28 6xl:px-36">
          <div
            style={mcpPagesOrangeStyle}
            className="grid gap-10 lg:grid-cols-2 lg:items-center"
          >
            <div className="flex flex-col gap-4 lg:col-span-2">
              <h2 className="text-h1 font-black tracking-tight text-[#FF7E4A] text-center">
                {t("ai.connection.pages.badge")}
              </h2>

              <p className="text-center text-xs text-gray-400/60">{t("ai.connection.compatibleClaude")}</p>

              <h2 className="text-h1 font-black tracking-tight text-white text-center lg:text-left">
                {t("ai.connection.pages.title")}
              </h2>

              <p className="text-base sm:text-lg text-gray-400/70 leading-relaxed max-w-3xl 2xl:max-w-[60rem] 4xl:max-w-[80rem] text-center lg:text-left">
                {t("ai.connection.pages.subtitle")}
              </p>

              <BentoGrid className="mt-2" items={mcpPagesItems} hideStatus hideCta />
            </div>
          </div>
        </div>
      </section>
      )}

      <Footer />
    </main>
  )
}

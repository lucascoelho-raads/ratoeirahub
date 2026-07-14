"use client";

import { Check, Info, Box } from "lucide-react";
import { useState, useMemo } from "react";
import NumberFlow from "@number-flow/react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

type TPricing = "YEARLY" | "MONTHLY";

function PlanIcon({ planId }: { planId: string }) {
  return (
    <span className="flex w-8 h-8 items-center justify-center rounded-md bg-white/5 border border-white/10 text-brand-primary">
      <Box className="w-4 h-4" />
    </span>
  );
}

function FeatureCell({ value }: { value: string | boolean | null }) {
  if (value === null) {
    return <span className="text-gray-500">—</span>;
  }
  if (value === true) {
    return (
      <span className="flex justify-center">
        <Check className="w-4 h-4 text-emerald-400" />
      </span>
    );
  }
  return <span className="text-sm text-gray-300">{value}</span>;
}

export default function DetailedPricing() {
  const { t } = useLanguage();
  const [subscriptionType, setSubscriptionType] = useState<TPricing>("YEARLY");
  const [activePlanIndex, setActivePlanIndex] = useState(1);
  const isMonthly = subscriptionType === "MONTHLY";

  const plans = useMemo(() => [
    {
      id: "rato",
      name: t("pricing.plan.rato.name"),
      description: t("pricing.plan.rato.description"),
      monthlyPrice: 497,
      yearlyPrice: 397,
      cta: t("pricing.plan.rato.cta"),
    },
    {
      id: "ratazana",
      name: t("pricing.plan.ratazana.name"),
      description: t("pricing.plan.ratazana.description"),
      monthlyPrice: 797,
      yearlyPrice: 597,
      cta: t("pricing.plan.ratazana.cta"),
      featured: true,
    },
    {
      id: "ratazana_plus",
      name: t("pricing.plan.ratazana_plus.name"),
      description: t("pricing.plan.ratazana_plus.description"),
      monthlyPrice: 1497,
      yearlyPrice: 1197,
      cta: t("pricing.plan.ratazana_plus.cta"),
    },
  ], [t]);

  const featureGroups = useMemo(() => [
    {
      group: t("pricing.group.tracking"),
      features: [
        { label: t("pricing.feature.events"), tooltip: t("pricing.tooltip.events"), values: [t("pricing.value.10k"), t("pricing.value.50k"), t("pricing.value.unlimited")] as (string | boolean | null)[] },
        { label: t("pricing.feature.serverSide"), tooltip: t("pricing.tooltip.serverSide"), values: [true, true, true] },
        { label: t("pricing.feature.fraudBlock"), tooltip: t("pricing.tooltip.fraudBlock"), values: [t("pricing.value.basic"), t("pricing.value.advanced"), t("pricing.value.realtime")] },
        { label: t("pricing.feature.customDomains"), tooltip: t("pricing.tooltip.customDomains"), values: [t("pricing.value.2"), t("pricing.value.5"), t("pricing.value.unlimited")] },
      ],
    },
    {
      group: t("pricing.group.pages"),
      features: [
        { label: t("pricing.feature.visits"), tooltip: t("pricing.tooltip.visits"), values: [t("pricing.value.5k"), t("pricing.value.25k"), t("pricing.value.unlimited")] as (string | boolean | null)[] },
        { label: t("pricing.feature.templates"), tooltip: t("pricing.tooltip.templates"), values: [t("pricing.value.10"), t("pricing.value.all"), t("pricing.value.allEarly")] },
        { label: t("pricing.feature.dragDrop"), tooltip: t("pricing.tooltip.dragDrop"), values: [true, true, true] },
        { label: t("pricing.feature.aiGeneration"), tooltip: t("pricing.tooltip.aiGeneration"), values: [null, true, t("pricing.value.unlimited")] },
        { label: t("pricing.feature.abTest"), tooltip: t("pricing.tooltip.abTest"), values: [null, true, true] },
      ],
    },
    {
      group: t("pricing.group.support"),
      features: [
        { label: t("pricing.feature.integrations"), tooltip: t("pricing.tooltip.integrations"), values: [true, true, true] },
        { label: t("pricing.feature.roiDashboard"), tooltip: t("pricing.tooltip.roiDashboard"), values: [true, true, true] },
        { label: t("pricing.feature.support"), tooltip: t("pricing.tooltip.support"), values: [t("pricing.value.email"), t("pricing.value.whatsapp"), t("pricing.value.whatsappVip")] },
        { label: t("pricing.feature.accountManager"), tooltip: t("pricing.tooltip.accountManager"), values: [null, null, true] },
      ],
    },
  ], [t]);

  return (
    <section className="py-16 md:py-24 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-5xl 2xl:max-w-[90rem] 4xl:max-w-[100rem] 5xl:max-w-[120rem] 6xl:max-w-[140rem] px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-12 text-center sm:mb-16">
          <h2 className="mb-4 text-h1 font-black tracking-tight text-white ">
            {t("pricing.compare.title")}
          </h2>
          <p className="text-base text-gray-400 sm:text-base max-w-2xl 2xl:max-w-[40rem] 4xl:max-w-[70rem] mx-auto ">
            {t("pricing.compare.subtitle")}
          </p>
        </div>

        <div className="mb-8 flex justify-center sm:mb-12">
          <div className="inline-flex rounded-full border border-white/10 bg-white/5 p-1.5">
            <button
              onClick={() => setSubscriptionType("MONTHLY")}
              className={`rounded-full px-6 py-2.5 min-h-11 text-sm font-semibold transition-all ${
                isMonthly
                  ? "bg-[#161616] text-white shadow-md border border-white/10"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {t("pricing.billing.monthly")}
            </button>
            <button
              onClick={() => setSubscriptionType("YEARLY")}
              className={`relative rounded-full px-6 py-2.5 text-sm font-semibold transition-all ${
                !isMonthly
                  ? "bg-[#161616] text-white shadow-md border border-brand-primary/50"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {t("pricing.billing.yearly")}
              <span className="absolute -top-3 -right-2 px-2 py-0.5 bg-brand-primary text-black text-xs font-bold rounded-full uppercase tracking-wider">
                -20%
              </span>
            </button>
          </div>
        </div>

        {/* Mobile View */}
        <div className="rounded-[24px] border border-white/10 bg-[#111111] overflow-hidden md:hidden">
          <div className="flex border-b border-white/10">
            {plans.map((plan, i) => (
              <button
                key={plan.id}
                onClick={() => setActivePlanIndex(i)}
                className={`flex-1 px-3 py-4 min-h-11 text-sm font-bold uppercase tracking-wider transition-colors ${
                  activePlanIndex === i
                    ? "border-b-2 border-brand-primary text-brand-primary bg-brand-primary/5"
                    : "text-gray-500 hover:text-gray-300"
                }`}
              >
                {plan.name}
              </button>
            ))}
          </div>

          <div className="p-6 border-b border-white/10 text-center">
            <div className="mb-4 flex items-end justify-center gap-1">
              <span className="text-gray-400 text-lg">R$</span>
              <span className="text-4xl sm:text-5xl font-black text-white">
                <NumberFlow
                  value={isMonthly ? plans[activePlanIndex].monthlyPrice : plans[activePlanIndex].yearlyPrice}
                />
              </span>
              <span className="mb-1 text-sm text-gray-500">
                {isMonthly ? t("pricing.billing.perMonth") : t("pricing.billing.perYear")}
              </span>
            </div>
            <Button
              variant={plans[activePlanIndex].featured ? "default" : "outline"}
              size="lg"
              className="w-full"
            >
              {plans[activePlanIndex].cta}
            </Button>
          </div>

          {featureGroups.map((group, gi) => (
            <div key={group.group}>
              <div className="bg-white/5 px-6 py-3 border-y border-white/10 first:border-t-0">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-primary">
                  {group.group}
                </span>
              </div>

              {group.features.map((feature, fi) => (
                <div key={feature.label}>
                  <div className="flex items-center justify-between px-6 py-4">
                    <div className="flex items-center gap-2 text-base text-gray-300 font-medium">
                      {feature.label}
                      {feature.tooltip && (
                        <Info className="w-4 h-4 text-gray-600" />
                      )}
                    </div>
                    <div className="text-base font-semibold text-white">
                      <FeatureCell value={feature.values[activePlanIndex]} />
                    </div>
                  </div>
                  {fi < group.features.length - 1 && (
                    <div className="mx-6 h-px bg-white/5" />
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Desktop View */}
        <div className="hidden rounded-[32px] border border-white/10 bg-[#111111] overflow-hidden md:block shadow-2xl">
          {/* Header Row */}
          <div className="grid grid-cols-[1fr_repeat(3,_220px)] border-b border-white/10">
            <div className="p-8 flex items-end">
              <span className="text-lg font-bold text-white">
                {t("pricing.table.features")}
              </span>
            </div>
            {plans.map((plan) => {
              const price = isMonthly ? plan.monthlyPrice : plan.yearlyPrice;
              return (
                <div key={plan.id} className={`p-8 flex flex-col ${plan.featured ? 'bg-white/5 relative' : ''}`}>
                  {plan.featured && (
                    <div className="absolute top-0 left-0 w-full h-1 bg-brand-primary" />
                  )}
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-lg font-bold text-white">
                      {plan.name}
                    </span>
                    <PlanIcon planId={plan.id} />
                  </div>
                  <div className="mb-6 flex items-end gap-1">
                    <span className="text-gray-400 text-base mb-1">R$</span>
                    <span className="text-2xl sm:text-4xl font-black text-white">
                      <NumberFlow value={price} />
                    </span>
                    <span className="text-sm text-gray-500 mb-1">
                      {isMonthly ? t("pricing.billing.perMonth") : t("pricing.billing.perYear")}
                    </span>
                  </div>
                  <Button
                    variant={plan.featured ? "default" : "outline"}
                    size="default"
                    className="w-full"
                  >
                    {plan.cta}
                  </Button>
                </div>
              );
            })}
          </div>

          {/* Features Rows */}
          <div className="grid grid-cols-[1fr_repeat(3,_220px)] border-b border-white/10 bg-[#0A0A0A]">
            <div className="px-8 py-3" />
            {plans.map((plan, i) => (
              <div
                key={`col-label-${plan.id}`}
                className={`flex items-center justify-center px-8 py-3 min-h-11 text-sm font-bold uppercase tracking-wider text-gray-300 ${
                  i === 1 ? "bg-white/[0.02]" : ""
                }`}
              >
                {plan.name}
              </div>
            ))}
          </div>
          {featureGroups.map((group, gi) => (
            <div key={group.group}>
              <div className="px-8 py-4 border-y border-white/10 first:border-t-0 grid grid-cols-[1fr_repeat(3,_220px)] relative">
                <div className="flex items-center">
                  <span className="text-sm font-bold uppercase tracking-widest text-brand-primary">
                    {group.group}
                  </span>
                </div>
                <div className="flex"></div>
                <div className="flex"></div>
                <div className="flex"></div>
              </div>

              {group.features.map((feature, fi) => (
                <div key={feature.label}>
                  <div className="grid grid-cols-[1fr_repeat(3,_220px)] items-center">
                    <div className="flex items-center gap-2 px-8 py-5 text-base text-gray-300 font-medium">
                      {feature.label}
                      {feature.tooltip && (
                        <div className="group relative">
                          <Info className="w-4 h-4 text-gray-600 cursor-help" />
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-[#222] border border-white/10 rounded-lg text-xs text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20 text-center shadow-xl">
                            {feature.tooltip}
                          </div>
                        </div>
                      )}
                    </div>
                    {feature.values.map((val, vi) => (
                      <div key={vi} className={`flex justify-center px-8 py-5 ${vi === 1 ? 'bg-white/[0.02]' : ''}`}>
                        <FeatureCell value={val} />
                      </div>
                    ))}
                  </div>
                  {fi < group.features.length - 1 && (
                    <div className="grid grid-cols-[1fr_repeat(3,_220px)]">
                      <div className="px-8"><div className="h-px bg-white/5" /></div>
                      <div className="px-8"><div className="h-px bg-white/5" /></div>
                      <div className="px-8"><div className="h-px bg-white/5" /></div>
                      <div className="px-8"><div className="h-px bg-white/5" /></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Info, Radar, LayoutTemplate, Link2 } from "lucide-react";
import { cn } from "@/lib/utils";

type PlanType = "ads" | "pages" | "hub";
type BillingCycle = "monthly" | "semiannual" | "annual";
type PlanFeatureValue = boolean | string | null;

type FeatureRow = {
  label: string;
  tooltip?: string;
  values: [PlanFeatureValue, PlanFeatureValue, PlanFeatureValue];
};

type FeatureGroup = {
  group: string;
  features: FeatureRow[];
};

const tabs = [
  { id: "ads", label: "Ratoeira Ads", icon: Radar },
  { id: "pages", label: "Ratoeira Pages", icon: LayoutTemplate },
  { id: "hub", label: "Ratoeira Hub", icon: Link2, badge: "Recomendado" },
];

const plansData = {
  ads: [
    {
      name: "Rato",
      description: "Para quem está validando as primeiras campanhas.",
      price: {
        monthly: "197",
        semiannual: "177",
        annual: "147",
      },
      features: [
        "Até 10.000 eventos/mês",
        "Tracking server-side (CAPI)",
        "Bloqueio básico de fraudes",
        "1 domínio customizado",
        "Suporte por e-mail",
      ],
      cta: "Assinar Plano Rato",
      popular: false,
    },
    {
      name: "Ratazana",
      description: "Para afiliados que já escalam com consistência.",
      price: {
        monthly: "397",
        semiannual: "357",
        annual: "297",
      },
      features: [
        "Até 50.000 eventos/mês",
        "Tracking server-side avançado",
        "Bloqueio avançado de fraudes e bots",
        "3 domínios customizados",
        "Suporte prioritário via WhatsApp",
      ],
      cta: "Assinar Plano Ratazana",
      popular: false,
    },
    {
      name: "Ratazana Plus",
      description: "Para operações robustas de alto volume.",
      price: {
        monthly: "997",
        semiannual: "897",
        annual: "797",
      },
      features: [
        "Até 200.000 eventos/mês",
        "Dashboard consolidado de ROI real",
        "Bloqueio de IP dinâmico em tempo real",
        "Domínios ilimitados",
        "Gerente de conta dedicado",
      ],
      cta: "Falar com Consultor",
      popular: true,
    },
  ],
  pages: [
    {
      name: "Rato",
      description: "Ideal para testar ofertas rapidamente.",
      price: {
        monthly: "97",
        semiannual: "87",
        annual: "77",
      },
      features: [
        "Até 5.000 visitas/mês",
        "Construtor Drag-and-Drop",
        "10 templates de alta conversão",
        "1 domínio customizado",
        "Hospedagem inclusa",
      ],
      cta: "Assinar Plano Rato",
      popular: false,
    },
    {
      name: "Ratazana",
      description: "Para múltiplos funis e alto tráfego.",
      price: {
        monthly: "197",
        semiannual: "177",
        annual: "147",
      },
      features: [
        "Até 25.000 visitas/mês",
        "Construtor avançado + IA",
        "Todos os templates liberados",
        "3 domínios customizados",
        "Teste A/B nativo",
      ],
      cta: "Assinar Plano Ratazana",
      popular: false,
    },
    {
      name: "Ratazana Plus",
      description: "Sem limites para sua criatividade.",
      price: {
        monthly: "497",
        semiannual: "447",
        annual: "397",
      },
      features: [
        "Até 100.000 visitas/mês",
        "Geração de páginas por IA ilimitada",
        "Acesso antecipado a novos templates",
        "Domínios ilimitados",
        "Suporte prioritário",
      ],
      cta: "Falar com Consultor",
      popular: true,
    },
  ],
  hub: [
    {
      name: "Rato",
      description: "O combo ideal para iniciar sua escala integrada.",
      price: {
        monthly: "497",
        semiannual: "447",
        annual: "397",
      },
      features: [
        "Ads Iniciante + Pages Starter",
        "10.000 eventos + 5.000 visitas",
        "Integração nativa (1 clique)",
        "2 domínios unificados",
        "Dashboard único de ROI",
      ],
      cta: "Assinar Plano Rato",
      popular: false,
    },
    {
      name: "Ratazana",
      description: "Tudo que o ecossistema Ratoeira pode oferecer.",
      price: {
        monthly: "797",
        semiannual: "697",
        annual: "597",
      },
      features: [
        "Ads Profissional + Pages Growth",
        "50.000 eventos + 25.000 visitas",
        "Integração nativa avançada",
        "Domínios ilimitados unificados",
        "Suporte VIP WhatsApp",
      ],
      cta: "Assinar Plano Ratazana",
      popular: false,
    },
    {
      name: "Ratazana Plus",
      description: "Para agências e grandes infoprodutores.",
      price: {
        monthly: "Custom",
        semiannual: "Custom",
        annual: "Custom",
      },
      features: [
        "Volume customizado de eventos/visitas",
        "Infraestrutura dedicada",
        "Onboarding com especialista",
        "Desenvolvimento de features sob demanda",
        "SLA garantido",
      ],
      cta: "Falar com Vendas",
      popular: true,
    },
  ],
};

const featureGroupsByTab: Record<PlanType, FeatureGroup[]> = {
  ads: [
    {
      group: "Tracking & Anti-Fraude",
      features: [
        { label: "Tracking server-side", tooltip: "Envio de conversões em 1st party", values: [true, true, true] },
        { label: "Bloqueio de bots/fraudes", tooltip: "Proteção contra tráfego inválido", values: ["Básico", "Avançado", "Tempo real"] },
        { label: "Dashboard de ROI", tooltip: "Visão consolidada de resultado real", values: [null, true, true] },
        { label: "Eventos por mês", tooltip: "Volume mensal de conversões/eventos", values: ["10.000", "50.000", "200.000+"] },
      ],
    },
    {
      group: "Domínios & Integrações",
      features: [
        { label: "Domínios customizados", tooltip: "Quantidade de domínios para tracking", values: ["1", "3", "Ilimitado"] },
        { label: "Integrações nativas", tooltip: "Conexão com plataformas e CRMs", values: [true, true, true] },
        { label: "Notificações", tooltip: "Alertas de eventos importantes", values: [null, true, true] },
      ],
    },
    {
      group: "Suporte",
      features: [
        { label: "Suporte", tooltip: "Canal de atendimento", values: ["E-mail", "WhatsApp", "Gerente dedicado"] },
        { label: "Onboarding", tooltip: "Acompanhamento de implementação", values: [null, true, true] },
      ],
    },
  ],
  pages: [
    {
      group: "Construtor & Templates",
      features: [
        { label: "Drag-and-drop", tooltip: "Editor visual", values: [true, true, true] },
        { label: "Templates", tooltip: "Biblioteca de modelos", values: ["10", "Todos", "Todos + antecipado"] },
        { label: "Teste A/B", tooltip: "Otimização nativa", values: [null, true, true] },
        { label: "Geração por IA", tooltip: "Copys e seções assistidas", values: [null, true, "Ilimitado"] },
      ],
    },
    {
      group: "Performance & Domínios",
      features: [
        { label: "Visitas por mês", tooltip: "Volume mensal de tráfego", values: ["5.000", "25.000", "100.000+"] },
        { label: "Domínios customizados", tooltip: "Quantidade de domínios para páginas", values: ["1", "3", "Ilimitado"] },
        { label: "Hospedagem inclusa", tooltip: "Infra pronta para produção", values: [true, true, true] },
      ],
    },
    {
      group: "Suporte",
      features: [
        { label: "Suporte", tooltip: "Canal de atendimento", values: ["Padrão", "Prioritário", "Prioritário"] },
        { label: "Onboarding", tooltip: "Acompanhamento de publicação", values: [null, true, true] },
      ],
    },
  ],
  hub: [
    {
      group: "Ecossistema Completo",
      features: [
        { label: "Tracking + Pages", tooltip: "Integração nativa entre Ads e Pages", values: [true, true, true] },
        { label: "Dashboard unificado", tooltip: "ROI real em um só lugar", values: [true, true, true] },
        { label: "Integrações", tooltip: "Conexões com plataformas e CRMs", values: [true, true, true] },
      ],
    },
    {
      group: "Limites",
      features: [
        { label: "Eventos por mês", tooltip: "Volume de eventos do tracking", values: ["10.000", "50.000", "Custom"] },
        { label: "Visitas por mês", tooltip: "Tráfego total das páginas", values: ["5.000", "25.000", "Custom"] },
        { label: "Domínios", tooltip: "Domínios para tracking + páginas", values: ["2", "Ilimitado", "Ilimitado"] },
      ],
    },
    {
      group: "Suporte",
      features: [
        { label: "Suporte", tooltip: "Canal de atendimento", values: ["Padrão", "VIP", "SLA + dedicado"] },
        { label: "Onboarding", tooltip: "Implantação com especialista", values: [true, true, true] },
      ],
    },
  ],
};

function FeatureCell({ value }: { value: PlanFeatureValue }) {
  if (value === null) return <span className="text-gray-500">—</span>;
  if (value === true) {
    return (
      <span className="flex justify-center">
        <Check className="w-4 h-4 text-emerald-400" />
      </span>
    );
  }
  return <span className="text-sm text-gray-300">{value}</span>;
}

export default function PricingTabs() {
  const getFeaturedIndex = (tab: PlanType) => {
    const idx = plansData[tab].findIndex((p) => p.popular);
    return idx >= 0 ? idx : 0;
  };

  const [activeTab, setActiveTab] = useState<PlanType>("hub");
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");
  const [activePlanIndex, setActivePlanIndex] = useState<number>(() => getFeaturedIndex("hub"));

  const plans = plansData[activeTab];
  const comparisonGroups = featureGroupsByTab[activeTab];

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tabs and Billing Toggle */}
        <div className="flex flex-col items-center gap-8 mb-16">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    const nextTab = tab.id as PlanType;
                    setActiveTab(nextTab);
                    setActivePlanIndex(getFeaturedIndex(nextTab));
                  }}
                  className={cn(
                    "relative inline-flex items-center gap-2 px-6 py-3.5 rounded-button font-semibold text-sm transition-all duration-300",
                    isActive
                      ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg shadow-yellow-500/25"
                      : "bg-white/5 text-gray-300 border border-white/10 hover:border-orange-500/50 hover:bg-white/10"
                  )}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                  {tab.badge && (
                    <span className="absolute -top-3 -right-3 px-2 py-0.5 bg-emerald-500 text-black text-[10px] font-bold rounded-full uppercase tracking-wider">
                      {tab.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Billing Cycle Toggle */}
          <div className="flex items-center p-1.5 bg-white/5 border border-white/10 rounded-full">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={cn(
                "px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300",
                billingCycle === "monthly"
                  ? "bg-[#161616] text-white shadow-md border border-white/10"
                  : "text-gray-400 hover:text-white"
              )}
            >
              Mensal
            </button>
            <button
              onClick={() => setBillingCycle("semiannual")}
              className={cn(
                "px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300",
                billingCycle === "semiannual"
                  ? "bg-[#161616] text-white shadow-md border border-white/10"
                  : "text-gray-400 hover:text-white"
              )}
            >
              Semestral
            </button>
            <button
              onClick={() => setBillingCycle("annual")}
              className={cn(
                "relative px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300",
                billingCycle === "annual"
                  ? "bg-[#161616] text-white shadow-md border border-brand-primary/50"
                  : "text-gray-400 hover:text-white"
              )}
            >
              Anual
              <span className="absolute -top-3 -right-2 px-2 py-0.5 bg-brand-primary text-black text-[10px] font-bold rounded-full uppercase tracking-wider">
                -20%
              </span>
            </button>
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden mt-12">
          {/* Mobile Pricing Cards */}
          <div className="space-y-6 mb-12">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={cn(
                  "relative flex flex-col rounded-3xl p-6 transition-all duration-300",
                  plan.popular
                    ? "bg-[#161616] border-2 border-brand-primary shadow-xl shadow-brand-primary/10"
                    : "bg-[#111111] border border-white/10"
                )}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-brand-primary text-black text-xs font-black uppercase tracking-widest rounded-full">
                    Mais Escolhido
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 text-sm">{plan.description}</p>
                </div>
                <div className="mb-6 flex items-baseline gap-1">
                  {plan.price.monthly !== "Custom" && <span className="text-gray-400">R$</span>}
                  <span className="text-4xl font-black text-white">
                    {plan.price[billingCycle as keyof typeof plan.price]}
                  </span>
                  {plan.price.monthly !== "Custom" && (
                    <span className="text-gray-400 text-sm">
                      {billingCycle === "monthly" ? "/mês" : billingCycle === "semiannual" ? "/semestre" : "/ano"}
                    </span>
                  )}
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-emerald-400" />
                      </div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={cn(
                    "w-full py-4 rounded-button font-bold text-sm transition-colors",
                    plan.popular
                      ? "bg-brand-primary text-black hover:bg-brand-primary-hover shadow-lg shadow-brand-primary/20"
                      : "bg-white/10 text-white hover:bg-white/20"
                  )}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>

          <div className="mb-8 text-center">
            <h3 className="text-2xl font-black text-white tracking-tight">Compare em detalhes</h3>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-[#111111] overflow-hidden">
            <div className="flex border-b border-white/10">
              {plans.map((plan, i) => (
                <button
                  key={plan.name}
                  onClick={() => setActivePlanIndex(i)}
                  className={cn(
                    "flex-1 px-3 py-4 text-xs font-bold uppercase tracking-wider transition-colors",
                    activePlanIndex === i
                      ? "border-b-2 border-brand-primary text-brand-primary bg-brand-primary/5"
                      : "text-gray-500 hover:text-gray-300"
                  )}
                >
                  {plan.name}
                </button>
              ))}
            </div>

            {comparisonGroups.map((group) => (
              <div key={group.group}>
                <div className="bg-white/5 px-6 py-3 border-y border-white/10 first:border-t-0">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-primary">
                    {group.group}
                  </span>
                </div>

                {group.features.map((feature, fi) => (
                  <div key={feature.label}>
                    <div className="flex items-center justify-between px-6 py-4">
                      <div className="flex items-center gap-2 text-sm text-gray-300 font-medium">
                        {feature.label}
                        {feature.tooltip && <Info className="w-4 h-4 text-gray-600" />}
                      </div>
                      <div className="text-sm font-semibold text-white">
                        <FeatureCell value={feature.values[activePlanIndex]} />
                      </div>
                    </div>
                    {fi < group.features.length - 1 && <div className="mx-6 h-px bg-white/5" />}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Desktop View: Cards & Features Separated */}
        <div className="hidden md:block w-full max-w-6xl mx-auto">
          {/* Cards Row */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-3 gap-8 mb-16"
            >
              {/* Pricing Cards */}
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={cn(
                    "relative flex flex-col rounded-3xl p-8 transition-all duration-300",
                    plan.popular
                      ? "bg-[#161616] border-2 border-brand-primary shadow-2xl shadow-brand-primary/10 scale-105 z-10"
                      : "bg-[#111111] border border-white/10 hover:border-white/20"
                  )}
                >
                  {plan.popular && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-brand-primary text-black text-xs font-black uppercase tracking-widest rounded-full">
                      Mais Escolhido
                    </div>
                  )}

                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 text-sm h-10">{plan.description}</p>
                  </div>

                  <div className="mb-8">
                    <div className="flex items-baseline gap-1">
                      {plan.price.monthly !== "Custom" && <span className="text-gray-400 text-lg">R$</span>}
                      <span className="text-5xl font-black text-white">
                        {plan.price[billingCycle as keyof typeof plan.price]}
                      </span>
                      {plan.price.monthly !== "Custom" && (
                        <span className="text-gray-400">
                          {billingCycle === "monthly" ? "/mês" : billingCycle === "semiannual" ? "/semestre" : "/ano"}
                        </span>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-4 mb-10 flex-1">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-emerald-400" />
                        </div>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={cn(
                      "w-full py-4 rounded-button font-bold text-sm transition-colors",
                      plan.popular
                        ? "bg-brand-primary text-black hover:bg-brand-primary-hover shadow-lg shadow-brand-primary/20"
                        : "bg-white/10 text-white hover:bg-white/20"
                    )}
                  >
                    {plan.cta}
                  </button>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Features Table */}
          <div className="mt-16">
            {comparisonGroups.map((group, gi) => (
              <div key={group.group} className="mb-12">
                <div className="mb-4 text-sm font-bold uppercase tracking-widest text-brand-primary border-b border-white/10 pb-4">
                  {group.group}
                </div>

                <div className="space-y-0">
                  {group.features.map((feature, fi) => (
                    <div 
                      key={feature.label} 
                      className="relative grid grid-cols-3 gap-8 items-center py-6 border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors group/row"
                    >
                      {/* Label Column (Absolute on the left of the row) */}
                      <div className="absolute left-0 flex items-center gap-2 text-sm text-gray-300 font-medium w-[180px] z-10 bg-[#050505]/80 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none py-1">
                        {feature.label}
                        {feature.tooltip && (
                          <div className="group/tooltip relative">
                            <Info className="w-4 h-4 text-gray-600 cursor-help hover:text-gray-400 transition-colors" />
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 p-2 bg-[#222] border border-white/10 rounded-lg text-xs text-gray-300 opacity-0 group-hover/tooltip:opacity-100 transition-opacity pointer-events-none z-20 text-center shadow-xl">
                              {feature.tooltip}
                            </div>
                          </div>
                        )}
                      </div>
                      
                      {/* Value Columns (Perfectly aligned with cards) */}
                      {feature.values.map((val, vi) => (
                        <div key={vi} className="flex justify-center text-white">
                          <FeatureCell value={val} />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

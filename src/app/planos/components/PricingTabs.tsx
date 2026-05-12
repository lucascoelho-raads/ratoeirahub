"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Radar, LayoutTemplate, Link2 } from "lucide-react";
import { cn } from "@/lib/utils";

type PlanType = "ads" | "pages" | "hub";

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
      price: "197",
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
      price: "397",
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
      price: "997",
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
      price: "97",
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
      price: "197",
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
      price: "497",
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
      price: "497",
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
      price: "797",
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
      price: "Custom",
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

export default function PricingTabs() {
  const [activeTab, setActiveTab] = useState<PlanType>("hub");

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as PlanType)}
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

        {/* Pricing Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {plansData[activeTab].map((plan, index) => (
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
                    {plan.price !== "Custom" && <span className="text-gray-400 text-lg">R$</span>}
                    <span className="text-5xl font-black text-white">{plan.price}</span>
                    {plan.price !== "Custom" && <span className="text-gray-400">/mês</span>}
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
      </div>
    </section>
  );
}

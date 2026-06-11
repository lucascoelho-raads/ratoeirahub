"use client";

import { useState, Fragment } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Radar, LayoutTemplate, Link2, X, Info } from "lucide-react";
import { cn } from "@/lib/utils";
import { useFloating, offset, flip, shift, autoUpdate, useHover, useFocus, useDismiss, useRole, useInteractions, FloatingPortal } from "@floating-ui/react";

type PlanType = "ads" | "pages" | "hub";
type BillingCycle = "monthly" | "semiannual" | "annual";
type PlanFeatureValue = boolean | string | null;

type PlanPrice = {
  monthly: string;
  semiannual: string;
  annual: string;
};

type Plan = {
  name: string;
  description: string;
  price: PlanPrice;
  semiannualTotal?: string;
  yearlyTotal?: string;
  features: string[];
  cta: string;
  popular: boolean;
};

type FeatureRow = {
  label: string;
  tooltip?: string;
  values: PlanFeatureValue[];
};

type FeatureGroup = {
  group: string;
  features: FeatureRow[];
};

const ADS_LIMITS_BY_PLAN: Record<
  string,
  { googleAdsProfiles: string; automaticTraps: string; integrations: string }
> = {
  Gratuito: { googleAdsProfiles: "1", automaticTraps: "1", integrations: "1" },
  Rato: { googleAdsProfiles: "3", automaticTraps: "5", integrations: "Ilimitadas" },
  Ratazana: { googleAdsProfiles: "10", automaticTraps: "50", integrations: "Ilimitadas" },
  "Ratazana Plus": { googleAdsProfiles: "30", automaticTraps: "300", integrations: "Ilimitadas" },
};

const PAGES_LIMITS_BY_PLAN: Record<
  string,
  { monthlyAccesses: string; connectedDomains: string; unlimitedPages: string }
> = {
  Gratuito: { monthlyAccesses: "5.000", connectedDomains: "1", unlimitedPages: "2" },
  Rato: { monthlyAccesses: "200.000", connectedDomains: "10", unlimitedPages: "Ilimitadas" },
  Ratazana: { monthlyAccesses: "500.000", connectedDomains: "20", unlimitedPages: "Ilimitadas" },
  "Ratazana Plus": { monthlyAccesses: "1.000.000", connectedDomains: "40", unlimitedPages: "Ilimitadas" },
};

const tabs = [
  { id: "ads", label: "Ratoeira Ads", icon: Radar },
  { id: "pages", label: "Ratoeira Pages", icon: LayoutTemplate },
  { id: "hub", label: "Ratoeira Hub", icon: Link2, badge: "Recomendado" },
];

const plansData: Record<PlanType, Plan[]> = {
  ads: [
    {
      name: "Gratuito",
      description: "Para testar o rastreamento sem compromisso.",
      price: {
        monthly: "0",
        semiannual: "0",
        annual: "0",
      },
      features: [
        "Até 1.000 eventos/mês",
        "Tracking server-side básico",
        "Bloqueio básico de fraudes",
        "1 domínio customizado",
        "Suporte por e-mail",
      ],
      cta: "Começar Grátis",
      popular: false,
    },
    {
      name: "Rato",
      description: "Para quem está validando as primeiras campanhas.",
      price: {
        monthly: "167,00",
        semiannual: "139,50",
        annual: "124,75",
      },
      semiannualTotal: "837,00",
      yearlyTotal: "1.497,00",
      features: [
        "Até 10.000 eventos/mês",
        "Tracking server-side (CAPI)",
        "Bloqueio básico de fraudes",
        "1 domínio customizado",
        "Suporte por e-mail",
      ],
      cta: "Assinar Rato",
      popular: false,
    },
    {
      name: "Ratazana",
      description: "Para anunciantes que já escalam com consistência.",
      price: {
        monthly: "247,00",
        semiannual: "199,50",
        annual: "166,42",
      },
      semiannualTotal: "1.197,00",
      yearlyTotal: "1.997,00",
      features: [
        "Até 50.000 eventos/mês",
        "Tracking server-side avançado",
        "Bloqueio avançado de fraudes e bots",
        "3 domínios customizados",
        "Suporte prioritário via WhatsApp",
      ],
      cta: "Assinar Ratazana",
      popular: false,
    },
    {
      name: "Ratazana Plus",
      description: "Para operações robustas de alto volume.",
      price: {
        monthly: "397,00",
        semiannual: "349,50",
        annual: "333,08",
      },
      semiannualTotal: "2.097,00",
      yearlyTotal: "3.997,00",
      features: [
        "Até 200.000 eventos/mês",
        "Dashboard consolidado de ROI real",
        "Bloqueio de IP dinâmico em tempo real",
        "Domínios ilimitados",
        "Gerente de conta dedicado",
      ],
      cta: "Assinar Ratazana Plus",
      popular: true,
    },
  ],
  pages: [
    {
      name: "Gratuito",
      description: "Para publicar suas primeiras páginas.",
      price: {
        monthly: "0",
        semiannual: "0",
        annual: "0",
      },
      features: [
        "Até 5.000 visitas/mês",
        "Construtor Drag-and-Drop",
        "3 templates de alta conversão",
        "1 domínio customizado",
        "Hospedagem inclusa",
      ],
      cta: "Começar Grátis",
      popular: false,
    },
    {
      name: "Rato",
      description: "Ideal para testar ofertas rapidamente.",
      price: {
        monthly: "97,00",
        semiannual: "82,83",
        annual: "54,75",
      },
      semiannualTotal: "497,00",
      yearlyTotal: "657,00",
      features: [
        "Até 5.000 visitas/mês",
        "Construtor Drag-and-Drop",
        "10 templates de alta conversão",
        "1 domínio customizado",
        "Hospedagem inclusa",
      ],
      cta: "Assinar Rato",
      popular: false,
    },
    {
      name: "Ratazana",
      description: "Para múltiplos funis e alto tráfego.",
      price: {
        monthly: "117,00",
        semiannual: "99,50",
        annual: "73,08",
      },
      semiannualTotal: "597,00",
      yearlyTotal: "877,00",
      features: [
        "Até 25.000 visitas/mês",
        "Construtor avançado + IA",
        "Todos os templates liberados",
        "3 domínios customizados",
        "Teste A/B nativo",
      ],
      cta: "Assinar Ratazana",
      popular: false,
    },
    {
      name: "Ratazana Plus",
      description: "Sem limites para sua criatividade.",
      price: {
        monthly: "147,00",
        semiannual: "132,83",
        annual: "116,42",
      },
      semiannualTotal: "797,00",
      yearlyTotal: "1.397,00",
      features: [
        "Até 100.000 visitas/mês",
        "Geração de páginas por IA ilimitada",
        "Acesso antecipado a novos templates",
        "Domínios ilimitados",
        "Suporte prioritário",
      ],
      cta: "Assinar Ratazana Plus",
      popular: true,
    },
  ],
  hub: [
    {
      name: "Gratuito",
      description: "Conheça o ecossistema Ratoeira sem compromisso.",
      price: {
        monthly: "0",
        semiannual: "0",
        annual: "0",
      },
      features: [
        "1 perfil Google Ads",
        "1.000 eventos/mês",
        "1 domínio customizado",
        "Templates limitados",
        "Suporte por e-mail",
      ],
      cta: "Começar Grátis",
      popular: false,
    },
    {
      name: "Rato",
      description: "O combo ideal para iniciar sua escala integrada.",
      price: {
        monthly: "197,00",
        semiannual: "182,83",
        annual: "158,08",
      },
      semiannualTotal: "1.097,00",
      yearlyTotal: "1.897,00",
      features: [
        "Ads Iniciante + Pages Starter",
        "10.000 eventos + 5.000 visitas",
        "Integração nativa (1 clique)",
        "2 domínios unificados",
        "Dashboard único de ROI",
      ],
      cta: "Assinar Rato",
      popular: false,
    },
    {
      name: "Ratazana",
      description: "Tudo que o ecossistema Ratoeira pode oferecer.",
      price: {
        monthly: "297,00",
        semiannual: "266,17",
        annual: "208,08",
      },
      semiannualTotal: "1.597,00",
      yearlyTotal: "2.497,00",
      features: [
        "Ads Profissional + Pages Growth",
        "50.000 eventos + 25.000 visitas",
        "Integração nativa avançada",
        "Domínios ilimitados unificados",
        "Suporte VIP WhatsApp",
      ],
      cta: "Assinar Ratazana",
      popular: false,
    },
    {
      name: "Ratazana Plus",
      description: "Para agências e grandes infoprodutores.",
      price: {
        monthly: "497,00",
        semiannual: "432,83",
        annual: "416,42",
      },
      semiannualTotal: "2.597,00",
      yearlyTotal: "4.997,00",
      features: [
        "Volume customizado de eventos/visitas",
        "Infraestrutura dedicada",
        "Onboarding com especialista",
        "Desenvolvimento de features sob demanda",
        "SLA garantido",
      ],
      cta: "Assinar Ratazana Plus",
      popular: true,
    },
  ],
};

const featureGroupsByTab: Record<PlanType, FeatureGroup[]> = {
  ads: [
    {
      group: "Limites do\nPlano",
      features: [
        { label: "E-Book de Estratégia Mensal", tooltip: "Receba todo mês um guia prático com estratégias validadas para escalar suas campanhas.", values: [false, true, true, true] },
        { label: "Produtos rastreados simultaneamente", tooltip: "Quantidade de produtos ou ofertas diferentes que você pode monitorar ao mesmo tempo.", values: ["10", "50", "100", "300"] },
        { label: "Produtos com conversão 100% automática", tooltip: "Produtos com setup de tracking totalmente automatizado via nossa integração.", values: ["1", "5", "50", "300"] },
        { label: "Integrações com plataformas", tooltip: "Conecte com Hotmart, Kiwify, PerfectPay e outras plataformas de pagamento.", values: ["1", "Ilimitadas", "Ilimitadas", "Ilimitadas"] },
        { label: "Perfis Google Ads conectados", tooltip: "Quantidade de MCCs ou contas do Google Ads vinculadas ao seu painel.", values: ["1", "3", "10", "30"] },
        { label: "Links de produtor automáticos", tooltip: "Links gerados automaticamente com todos os parâmetros UTM necessários.", values: ["1", "5", "50", "50"] },
        { label: "Contas de anúncio", tooltip: "Número de contas de anúncio individuais que podem enviar dados para a plataforma.", values: [null, null, null, "Ilimitadas"] },
      ],
    },
    {
      group: "Tracking &\nAnti-Fraude",
      features: [
        { label: "Tracking server-side", tooltip: "Envio de conversões direto do servidor (CAPI) driblando bloqueadores de anúncios e iOS14.", values: [true, true, true, true] },
        { label: "Bloqueio de bots/fraudes", tooltip: "Filtro inteligente que impede cliques falsos de gastarem seu orçamento no Google.", values: ["Básico", "Básico", "Avançado", "Tempo real"] },
        { label: "Dashboard de ROI", tooltip: "Visão financeira unificada cruzando custo exato do anúncio vs. faturamento real.", values: [null, null, true, true] },
        { label: "Eventos por mês", tooltip: "Volume total de eventos (PageViews, Checkouts, Purchases) processados no período.", values: ["1.000", "10.000", "50.000", "200.000+"] },
      ],
    },
    {
      group: "Domínios &\nIntegrações",
      features: [
        { label: "Domínios customizados", tooltip: "Use seu próprio domínio (ex: track.seusite.com) para maior confiança das plataformas.", values: ["1", "1", "3", "Ilimitado"] },
        { label: "Integrações nativas", tooltip: "Conexão em 1 clique com as principais plataformas do mercado digital.", values: [true, true, true, true] },
        { label: "Notificações", tooltip: "Receba alertas no WhatsApp ou Telegram sobre quedas de conversão e anomalias.", values: [null, null, true, true] },
      ],
    },
    {
      group: "Suporte",
      features: [
        { label: "Suporte", tooltip: "Nível de prioridade e canal para resolução de dúvidas e problemas técnicos.", values: ["E-mail", "E-mail", "WhatsApp", "Gerente dedicado"] },
        { label: "Onboarding", tooltip: "Especialista dedicado para ajudar na configuração inicial da sua conta e campanhas.", values: [null, null, true, true] },
      ],
    },
  ],
  pages: [
    {
      group: "Limites do\nPlano",
      features: [
        { label: "Hospedagem Grátis", tooltip: "Páginas hospedadas em infraestrutura premium de altíssima velocidade sem custo extra.", values: [true, true, true, true] },
        { label: "Domínios conectados", tooltip: "Quantidade de domínios diferentes que podem ser apontados para suas páginas.", values: ["1", "10", "20", "40"] },
        { label: "Acessos mensais", tooltip: "Limite de pageviews suportados por mês somando todas as suas páginas ativas.", values: ["5.000", "200.000", "500.000", "1.000.000"] },
        { label: "Páginas ilimitadas", tooltip: "Crie quantas landing pages, advertoriais ou presells quiser dentro do limite de acessos.", values: ["2", "Ilimitadas", "Ilimitadas", "Ilimitadas"] },
        { label: "Tutorial Passo a Passo", tooltip: "Acesso completo à nossa base de conhecimento em vídeo para criação de páginas.", values: [true, true, true, true] },
        { label: "Suporte Via WhatsApp", tooltip: "Atendimento rápido e direto com nossa equipe técnica pelo WhatsApp.", values: [null, true, true, true] },
        { label: "Domínio Customizado", tooltip: "Remova a marca Ratoeira e use a URL oficial da sua empresa.", values: [true, true, true, true] },
        { label: "1 E-Book Mensal", tooltip: "Material exclusivo mensal sobre copy e design focado em alta conversão.", values: [null, "1", "1", "1"] },
      ],
    },
    {
      group: "Construtor &\nTemplates",
      features: [
        { label: "Drag-and-drop", tooltip: "Editor visual fácil: arraste, solte e edite os elementos sem precisar saber programar.", values: [true, true, true, true] },
        { label: "Templates", tooltip: "Acesso a modelos de páginas pré-prontos validados por grandes players do mercado.", values: ["3", "10", "Todos", "Todos + antecipado"] },
        { label: "Teste A/B", tooltip: "Crie variações da mesma página para descobrir qual converte mais automaticamente.", values: [null, null, true, true] },
        { label: "Geração por IA", tooltip: "Deixe nossa Inteligência Artificial escrever copys inteiras e montar seções para você.", values: [null, null, true, "Ilimitado"] },
      ],
    },
    {
      group: "Performance &\nDomínios",
      features: [
        { label: "Visitas por mês", tooltip: "Tráfego suportado pela CDN de alta performance antes de taxas adicionais.", values: ["5.000", "5.000", "25.000", "100.000+"] },
        { label: "Domínios customizados", tooltip: "Quantidade de URLs próprias que você pode publicar sem subdomínios.", values: ["1", "1", "3", "Ilimitado"] },
        { label: "Hospedagem inclusa", tooltip: "Servidores globais (Edge Computing) garantindo abertura em menos de 1 segundo.", values: [true, true, true, true] },
      ],
    },
    {
      group: "Suporte",
      features: [
        { label: "Suporte", tooltip: "Canal e velocidade de resposta para te ajudar com dúvidas de configuração.", values: ["E-mail", "Padrão", "Prioritário", "Prioritário"] },
        { label: "Onboarding", tooltip: "Reunião guiada para publicar sua primeira página de alta conversão sem erros.", values: [null, null, true, true] },
      ],
    },
  ],
  hub: [
    {
      group: "Ecossistema\nCompleto",
      features: [
        { label: "Tracking + Pages", tooltip: "Suas páginas já nascem com o pixel do Ratoeira Ads injetado nativamente.", values: [true, true, true, true] },
        { label: "Dashboard unificado", tooltip: "Veja o tráfego da página e as conversões do Ads em uma única tela.", values: [null, true, true, true] },
        { label: "Integrações", tooltip: "Conecte facilmente o ecossistema com CRMs, e-mail marketing e gateways.", values: [null, true, true, true] },
      ],
    },
    {
      group: "Limites",
      features: [
        { label: "Eventos por mês", tooltip: "Capacidade mensal de rastreamento no módulo Ratoeira Ads.", values: ["1.000", "10.000", "50.000", "Custom"] },
        { label: "Visitas por mês", tooltip: "Capacidade mensal de tráfego suportado no módulo Ratoeira Pages.", values: ["1.000", "5.000", "25.000", "Custom"] },
        { label: "Domínios", tooltip: "Limite unificado de URLs customizadas aplicáveis a ambas as ferramentas.", values: ["1", "2", "Ilimitado", "Ilimitado"] },
      ],
    },
    {
      group: "Suporte",
      features: [
        { label: "Suporte", tooltip: "Acesso aos especialistas para os dois produtos do ecossistema.", values: ["E-mail", "Padrão", "VIP", "SLA + dedicado"] },
        { label: "Onboarding", tooltip: "Implantação completa do tracking e das páginas com ajuda do nosso time.", values: [null, true, true, true] },
      ],
    },
  ],
};

function FeatureCell({ value }: { value: PlanFeatureValue }) {
  if (value === null) {
    return (
      <span className="flex justify-center">
        <X className="w-4 h-4 text-red-500" />
      </span>
    );
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

function Tooltip({ children, content }: { children: React.ReactNode; content: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const { refs, x, y, strategy, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: "top",
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(8),
      flip({ fallbackAxisSideDirection: "end" }),
      shift({ padding: 8 }),
    ],
  });

  const hover = useHover(context, { move: false, delay: { open: 0, close: 100 } });
  const focus = useFocus(context);
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: "tooltip" });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    focus,
    dismiss,
    role,
  ]);

  return (
    <>
      <div
        ref={(node) => { refs.setReference(node); }}
        {...getReferenceProps()}
        className="inline-flex items-center cursor-pointer pointer-events-auto"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        onClick={() => setIsOpen(!isOpen)}
        onTouchStart={() => setIsOpen(!isOpen)}
      >
        {children}
      </div>
      <FloatingPortal>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={(node) => { refs.setFloating(node); }}
              style={{
                position: strategy,
                top: y ?? 0,
                left: x ?? 0,
                pointerEvents: "none"
              }}
              {...getFloatingProps()}
              initial={{ opacity: 0, scale: 0.95, y: 5 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 5 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="z-[99999] max-w-[250px] rounded-lg bg-white/10 px-3 py-2 text-xs text-white shadow-xl backdrop-blur-md border border-white/20 text-center"
            >
              {content}
            </motion.div>
          )}
        </AnimatePresence>
      </FloatingPortal>
    </>
  );
}

export default function PricingTabs() {
  const getPlanList = (tab: PlanType, cycle: BillingCycle) =>
    cycle !== "monthly" ? plansData[tab].filter((p) => p.name !== "Gratuito") : plansData[tab];
  const getPlanHref = (cta: string) =>
    cta.toLowerCase() === "começar grátis" ? "/planos#pricing-cards" : "/planos#vamos-transformar";

  const [activeTab, setActiveTab] = useState<PlanType>("hub");
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("annual");
  const [activePlanIndex, setActivePlanIndex] = useState<number>(() => {
    const idx = getPlanList("hub", "annual").findIndex((p) => p.popular);
    return idx >= 0 ? idx : 0;
  });

  const getFeaturedIndex = (tab: PlanType, cycle: BillingCycle) => {
    const planList = getPlanList(tab, cycle);
    const idx = planList.findIndex((p) => p.popular);
    return idx >= 0 ? idx : 0;
  };

  const plans = getPlanList(activeTab, billingCycle);
  const comparisonPlans = plans;
  const comparisonColumnCount = comparisonPlans.length;
  const comparisonGroups = featureGroupsByTab[activeTab].map((group) => ({
    ...group,
    features: group.features.map((feature) => ({
      ...feature,
      values: plans.length === 4 ? feature.values : feature.values.slice(1),
    })),
  }));
  
  const handleBillingCycleChange = (nextCycle: BillingCycle) => {
    setBillingCycle(nextCycle);
    const nextPlans = getPlanList(activeTab, nextCycle);
    setActivePlanIndex((current) => {
      if (current < nextPlans.length) return current;
      return getFeaturedIndex(activeTab, nextCycle);
    });
  };

  return (
    <section id="pricing-cards" className="scroll-mt-24 py-16 md:scroll-mt-28 md:py-24 bg-black">
      <div className="max-w-7xl 2xl:max-w-[90rem] 4xl:max-w-[120rem] 5xl:max-w-[140rem] 6xl:max-w-[160rem] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-16 4xl:px-36 5xl:px-44 6xl:px-52">
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
                    setActivePlanIndex(getFeaturedIndex(nextTab, billingCycle));
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
              onClick={() => handleBillingCycleChange("monthly")}
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
              onClick={() => handleBillingCycleChange("semiannual")}
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
              onClick={() => handleBillingCycleChange("annual")}
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
                    <span className="whitespace-normal sm:whitespace-nowrap">Mais Escolhido</span>
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 text-sm">{plan.description}</p>
                </div>
                <div className="mb-6">
                  {activeTab === "ads" && billingCycle === "annual" ? (
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-brand-primary uppercase tracking-wider mb-1">12X</span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-gray-400 text-lg">R$</span>
                        <span className="text-2xl sm:text-4xl font-black text-white">
                          {plan.price.annual}
                        </span>
                        <span className="text-gray-400 text-sm">/mês</span>
                      </div>
                      {plan.yearlyTotal ? (
                        <span className="text-xs text-gray-400 mt-1">por R${plan.yearlyTotal} à vista</span>
                      ) : null}
                    </div>
                  ) : activeTab === "ads" && billingCycle === "semiannual" ? (
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-brand-primary uppercase tracking-wider mb-1">6X</span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-gray-400 text-lg">R$</span>
                        <span className="text-2xl sm:text-4xl font-black text-white">
                          {plan.price.semiannual}
                        </span>
                        <span className="text-gray-400 text-sm">/mês</span>
                      </div>
                      {plan.semiannualTotal ? (
                        <span className="text-xs text-gray-400 mt-1">por R${plan.semiannualTotal} à vista</span>
                      ) : null}
                    </div>
                  ) : activeTab === "pages" && billingCycle === "annual" ? (
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-brand-primary uppercase tracking-wider mb-1">12X</span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-gray-400 text-lg">R$</span>
                        <span className="text-2xl sm:text-4xl font-black text-white">
                          {plan.price.annual}
                        </span>
                        <span className="text-gray-400 text-sm">/mês</span>
                      </div>
                      {plan.yearlyTotal ? (
                        <span className="text-xs text-gray-400 mt-1">ou R${plan.yearlyTotal} à vista</span>
                      ) : null}
                    </div>
                  ) : activeTab === "pages" && billingCycle === "semiannual" ? (
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-brand-primary uppercase tracking-wider mb-1">6X</span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-gray-400 text-lg">R$</span>
                        <span className="text-2xl sm:text-4xl font-black text-white">
                          {plan.price.semiannual}
                        </span>
                        <span className="text-gray-400 text-sm">/mês</span>
                      </div>
                      {plan.semiannualTotal ? (
                        <span className="text-xs text-gray-400 mt-1">ou R${plan.semiannualTotal} à vista</span>
                      ) : null}
                    </div>
                  ) : activeTab === "hub" && billingCycle === "annual" ? (
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-brand-primary uppercase tracking-wider mb-1">12X</span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-gray-400 text-lg">R$</span>
                        <span className="text-2xl sm:text-4xl font-black text-white">
                          {plan.price.annual}
                        </span>
                        <span className="text-gray-400 text-sm">/mês</span>
                      </div>
                      {plan.yearlyTotal ? (
                        <span className="text-xs text-gray-400 mt-1">ou R${plan.yearlyTotal} à vista</span>
                      ) : null}
                    </div>
                  ) : activeTab === "hub" && billingCycle === "semiannual" ? (
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-brand-primary uppercase tracking-wider mb-1">6X</span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-gray-400 text-lg">R$</span>
                        <span className="text-2xl sm:text-4xl font-black text-white">
                          {plan.price.semiannual}
                        </span>
                        <span className="text-gray-400 text-sm">/mês</span>
                      </div>
                      {plan.semiannualTotal ? (
                        <span className="text-xs text-gray-400 mt-1">ou R${plan.semiannualTotal} à vista</span>
                      ) : null}
                    </div>
                  ) : (
                    <div className="flex items-baseline gap-1">
                      {plan.price.monthly !== "Custom" && plan.price.monthly !== "0" && <span className="text-gray-400">R$</span>}
                      <span className="text-2xl sm:text-4xl font-black text-white">
                        {plan.price[billingCycle as keyof typeof plan.price] === "0" ? "Grátis" : plan.price[billingCycle as keyof typeof plan.price]}
                      </span>
                      {plan.price.monthly !== "Custom" && plan.price.monthly !== "0" && (
                        <span className="text-gray-400 text-sm">
                          {billingCycle === "monthly" ? "/mês" : "/semestre"}
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {activeTab === "ads" && ADS_LIMITS_BY_PLAN[plan.name] && (
                  <div className="mb-6">
                    <div className="h-px w-full bg-brand-primary" />
                    <div className="mt-4 space-y-2">
                      <div className="text-xs font-black uppercase tracking-widest gradient-text-animated">
                        Limites do Plano
                      </div>
                      <div className="flex items-center justify-between gap-2 text-xs">
                        <span className="text-gray-300 truncate">Perfis Google Ads</span>
                        <span className="font-bold text-white tabular-nums flex-shrink-0">
                          {ADS_LIMITS_BY_PLAN[plan.name].googleAdsProfiles}
                        </span>
                      </div>
                      <div className="flex items-center justify-between gap-2 text-xs">
                        <span className="text-gray-300 truncate">Ratoeiras Automáticas</span>
                        <span className="font-bold text-white tabular-nums flex-shrink-0">
                          {ADS_LIMITS_BY_PLAN[plan.name].automaticTraps}
                        </span>
                      </div>
                      <div className="flex items-center justify-between gap-2 text-xs">
                        <span className="text-gray-300 truncate">Integrações</span>
                        <span className="font-bold text-white flex-shrink-0">
                          {ADS_LIMITS_BY_PLAN[plan.name].integrations}
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "pages" && PAGES_LIMITS_BY_PLAN[plan.name] && (
                  <div className="mb-6">
                    <div className="h-px w-full bg-brand-primary" />
                    <div className="mt-4 space-y-2">
                      <div className="text-xs font-black uppercase tracking-widest gradient-text-animated">
                        Limites do Plano
                      </div>
                      <div className="flex items-center justify-between gap-2 text-xs">
                        <span className="text-gray-300 truncate">Acessos mensais</span>
                        <span className="font-bold text-white tabular-nums flex-shrink-0">
                          {PAGES_LIMITS_BY_PLAN[plan.name].monthlyAccesses}
                        </span>
                      </div>
                      <div className="flex items-center justify-between gap-2 text-xs">
                        <span className="text-gray-300 truncate">Domínios</span>
                        <span className="font-bold text-white tabular-nums flex-shrink-0">
                          {PAGES_LIMITS_BY_PLAN[plan.name].connectedDomains}
                        </span>
                      </div>
                      <div className="flex items-center justify-between gap-2 text-xs">
                        <span className="text-gray-300 truncate">Páginas</span>
                        <span className="font-bold text-white flex-shrink-0">
                          {PAGES_LIMITS_BY_PLAN[plan.name].unlimitedPages}
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "hub" && ADS_LIMITS_BY_PLAN[plan.name] && PAGES_LIMITS_BY_PLAN[plan.name] && (
                  <div className="mb-6">
                    <div className="h-px w-full bg-brand-primary" />
                    <div className="mt-4 space-y-4">
                      <div className="text-xs font-black uppercase tracking-widest gradient-text-animated">
                        Limites do Plano
                      </div>

                      <div className="space-y-2">
                        <div className="text-[11px] font-black uppercase tracking-widest text-[#FFB800]">
                          Ratoeira Ads
                        </div>
                        <div className="flex items-center justify-between gap-2 text-xs">
                          <span className="text-gray-300 truncate">Perfis Google Ads</span>
                          <span className="font-bold text-white tabular-nums flex-shrink-0">
                            {ADS_LIMITS_BY_PLAN[plan.name].googleAdsProfiles}
                          </span>
                        </div>
                        <div className="flex items-center justify-between gap-2 text-xs">
                          <span className="text-gray-300 truncate">Ratoeiras Automáticas</span>
                          <span className="font-bold text-white tabular-nums flex-shrink-0">
                            {ADS_LIMITS_BY_PLAN[plan.name].automaticTraps}
                          </span>
                        </div>
                        <div className="flex items-center justify-between gap-2 text-xs">
                          <span className="text-gray-300 truncate">Integrações</span>
                          <span className="font-bold text-white flex-shrink-0">
                            {ADS_LIMITS_BY_PLAN[plan.name].integrations}
                          </span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="text-[11px] font-black uppercase tracking-widest text-[#FF7E4A]">
                          Ratoeira Pages
                        </div>
                        <div className="flex items-center justify-between gap-2 text-xs">
                          <span className="text-gray-300 truncate">Acessos mensais</span>
                          <span className="font-bold text-white tabular-nums flex-shrink-0">
                            {PAGES_LIMITS_BY_PLAN[plan.name].monthlyAccesses}
                          </span>
                        </div>
                        <div className="flex items-center justify-between gap-2 text-xs">
                          <span className="text-gray-300 truncate">Domínios</span>
                          <span className="font-bold text-white tabular-nums flex-shrink-0">
                            {PAGES_LIMITS_BY_PLAN[plan.name].connectedDomains}
                          </span>
                        </div>
                        <div className="flex items-center justify-between gap-2 text-xs">
                          <span className="text-gray-300 truncate">Páginas</span>
                          <span className="font-bold text-white flex-shrink-0">
                            {PAGES_LIMITS_BY_PLAN[plan.name].unlimitedPages}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <a
                  href={getPlanHref(plan.cta)}
                  className={cn(
                    "w-full py-4 rounded-button font-bold text-sm transition-colors text-center block",
                    plan.popular
                      ? "bg-brand-primary text-black hover:bg-brand-primary-hover shadow-lg shadow-brand-primary/20"
                      : "bg-white/10 text-white hover:bg-white/20"
                  )}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
          <div className="mb-12 text-center">
            <p className="text-xs text-brand-primary">
              * Renovação automática - Ao prosseguir você concorda que a assinatura será renovada automaticamente.
            </p>
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
                        {feature.tooltip && (
                          <Tooltip content={feature.tooltip}>
                            <div className="p-1 hover:text-brand-primary cursor-pointer transition-colors text-gray-500 flex items-center justify-center pointer-events-auto">
                              <Info className="w-4 h-4" />
                            </div>
                          </Tooltip>
                        )}
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

        {/* Desktop View: Shared grid for cards & features alignment */}
        <div className="hidden md:block w-full mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="w-full mx-auto"
            >
              {/* Cards Row (desktop) */}
              <div>
                <div
                  className={cn(
                    "mx-auto grid items-stretch",
                    plans.length === 4 ? "grid-cols-4 gap-5" : "grid-cols-3 gap-8",
                    "max-w-7xl"
                  )}
                >
                  {plans.map((plan) => (
                    <div
                      key={plan.name}
                      className={cn(
                        "relative flex flex-col rounded-3xl transition-all duration-300",
                        plans.length === 4 ? "p-5" : "p-8",
                        plan.popular
                          ? "bg-[#161616] border-2 border-brand-primary shadow-2xl shadow-brand-primary/10 z-10"
                          : "bg-[#111111] border border-white/10 hover:border-white/20"
                      )}
                    >
                      {plan.popular && (
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-brand-primary text-black text-xs font-black uppercase tracking-widest rounded-full">
                          <span className="whitespace-normal sm:whitespace-nowrap">Mais Escolhido</span>
                        </div>
                      )}
  
                    <div className="flex-1 flex flex-col">
                      <div className="mb-8">
                        <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                        <p className="text-gray-400 text-sm h-10">{plan.description}</p>
                      </div>
  
                    <div className="mb-8">
                      {activeTab === "ads" && billingCycle === "annual" ? (
                        <div className="flex flex-col">
                          <span className="text-xs font-bold text-brand-primary uppercase tracking-wider mb-1">12X</span>
                          <div className="flex items-baseline gap-1">
                            <span className="text-gray-400 text-lg">R$</span>
                            <span className="text-3xl sm:text-5xl font-black text-white">
                              {plan.price.annual}
                            </span>
                            <span className="text-gray-400">/mês</span>
                          </div>
                            {plan.yearlyTotal ? (
                              <span className="text-xs text-gray-400 mt-1">por R${plan.yearlyTotal} à vista</span>
                            ) : null}
                        </div>
                      ) : activeTab === "ads" && billingCycle === "semiannual" ? (
                        <div className="flex flex-col">
                          <span className="text-xs font-bold text-brand-primary uppercase tracking-wider mb-1">6X</span>
                          <div className="flex items-baseline gap-1">
                            <span className="text-gray-400 text-lg">R$</span>
                            <span className="text-3xl sm:text-5xl font-black text-white">
                              {plan.price.semiannual}
                            </span>
                            <span className="text-gray-400">/mês</span>
                          </div>
                            {plan.semiannualTotal ? (
                              <span className="text-xs text-gray-400 mt-1">por R${plan.semiannualTotal} à vista</span>
                            ) : null}
                        </div>
                      ) : activeTab === "pages" && billingCycle === "semiannual" ? (
                        <div className="flex flex-col">
                          <span className="text-xs font-bold text-brand-primary uppercase tracking-wider mb-1">6X</span>
                          <div className="flex items-baseline gap-1">
                            <span className="text-gray-400 text-lg">R$</span>
                            <span className="text-3xl sm:text-5xl font-black text-white">
                              {plan.price.semiannual}
                            </span>
                            <span className="text-gray-400">/mês</span>
                          </div>
                            {plan.semiannualTotal ? (
                              <span className="text-xs text-gray-400 mt-1">ou R${plan.semiannualTotal} à vista</span>
                            ) : null}
                        </div>
                      ) : activeTab === "pages" && billingCycle === "annual" ? (
                        <div className="flex flex-col">
                          <span className="text-xs font-bold text-brand-primary uppercase tracking-wider mb-1">12X</span>
                          <div className="flex items-baseline gap-1">
                            <span className="text-gray-400 text-lg">R$</span>
                            <span className="text-3xl sm:text-5xl font-black text-white">
                              {plan.price.annual}
                            </span>
                            <span className="text-gray-400">/mês</span>
                          </div>
                            {plan.yearlyTotal ? (
                              <span className="text-xs text-gray-400 mt-1">ou R${plan.yearlyTotal} à vista</span>
                            ) : null}
                        </div>
                      ) : activeTab === "hub" && billingCycle === "annual" ? (
                        <div className="flex flex-col">
                          <span className="text-xs font-bold text-brand-primary uppercase tracking-wider mb-1">12X</span>
                          <div className="flex items-baseline gap-1">
                            <span className="text-gray-400 text-lg">R$</span>
                            <span className="text-3xl sm:text-5xl font-black text-white">
                              {plan.price.annual}
                            </span>
                            <span className="text-gray-400">/mês</span>
                          </div>
                            {plan.yearlyTotal ? (
                              <span className="text-xs text-gray-400 mt-1">ou R${plan.yearlyTotal} à vista</span>
                            ) : null}
                        </div>
                      ) : activeTab === "hub" && billingCycle === "semiannual" ? (
                        <div className="flex flex-col">
                          <span className="text-xs font-bold text-brand-primary uppercase tracking-wider mb-1">6X</span>
                          <div className="flex items-baseline gap-1">
                            <span className="text-gray-400 text-lg">R$</span>
                            <span className="text-3xl sm:text-5xl font-black text-white">
                              {plan.price.semiannual}
                            </span>
                            <span className="text-gray-400">/mês</span>
                          </div>
                            {plan.semiannualTotal ? (
                              <span className="text-xs text-gray-400 mt-1">ou R${plan.semiannualTotal} à vista</span>
                            ) : null}
                        </div>
                      ) : (
                        <div className="flex items-baseline gap-1">
                          {plan.price.monthly !== "Custom" && plan.price.monthly !== "0" && <span className="text-gray-400 text-lg">R$</span>}
                          <span className="text-3xl sm:text-5xl font-black text-white">
                            {plan.price[billingCycle as keyof typeof plan.price] === "0" ? "Grátis" : plan.price[billingCycle as keyof typeof plan.price]}
                          </span>
                          {plan.price.monthly !== "Custom" && plan.price.monthly !== "0" && (
                            <span className="text-gray-400">
                              {billingCycle === "monthly" ? "/mês" : "/semestre"}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
  
                    {activeTab === "ads" && ADS_LIMITS_BY_PLAN[plan.name] && (
                      <div className="mb-8">
                        <div className="h-px w-full bg-brand-primary" />
                        <div className="mt-5 space-y-3">
                          <div className="text-xs font-black uppercase tracking-widest gradient-text-animated">
                            Limites do Plano
                          </div>
                          <div className="flex items-center justify-between gap-2 text-sm">
                            <span className="text-gray-300 truncate">Perfis Google Ads</span>
                            <span className="font-bold text-white tabular-nums flex-shrink-0">
                              {ADS_LIMITS_BY_PLAN[plan.name].googleAdsProfiles}
                            </span>
                          </div>
                          <div className="flex items-center justify-between gap-2 text-sm">
                            <span className="text-gray-300 truncate">Ratoeiras Automáticas</span>
                            <span className="font-bold text-white tabular-nums flex-shrink-0">
                              {ADS_LIMITS_BY_PLAN[plan.name].automaticTraps}
                            </span>
                          </div>
                          <div className="flex items-center justify-between gap-2 text-sm">
                            <span className="text-gray-300 truncate">Integrações</span>
                            <span className="font-bold text-white flex-shrink-0">
                              {ADS_LIMITS_BY_PLAN[plan.name].integrations}
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
  
                    {activeTab === "pages" && PAGES_LIMITS_BY_PLAN[plan.name] && (
                      <div className="mb-8">
                        <div className="h-px w-full bg-brand-primary" />
                        <div className="mt-5 space-y-3">
                          <div className="text-xs font-black uppercase tracking-widest gradient-text-animated">
                            Limites do Plano
                          </div>
                          <div className="flex items-center justify-between gap-2 text-sm">
                            <span className="text-gray-300 truncate">Acessos mensais</span>
                            <span className="font-bold text-white tabular-nums flex-shrink-0">
                              {PAGES_LIMITS_BY_PLAN[plan.name].monthlyAccesses}
                            </span>
                          </div>
                          <div className="flex items-center justify-between gap-2 text-sm">
                            <span className="text-gray-300 truncate">Domínios</span>
                            <span className="font-bold text-white tabular-nums flex-shrink-0">
                              {PAGES_LIMITS_BY_PLAN[plan.name].connectedDomains}
                            </span>
                          </div>
                          <div className="flex items-center justify-between gap-2 text-sm">
                            <span className="text-gray-300 truncate">Páginas</span>
                            <span className="font-bold text-white flex-shrink-0">
                              {PAGES_LIMITS_BY_PLAN[plan.name].unlimitedPages}
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
  
                    {activeTab === "hub" && ADS_LIMITS_BY_PLAN[plan.name] && PAGES_LIMITS_BY_PLAN[plan.name] && (
                      <div className="mb-8">
                        <div className="h-px w-full bg-brand-primary" />
                        <div className="mt-5 space-y-5">
                          <div className="text-xs font-black uppercase tracking-widest gradient-text-animated">
                            Limites do Plano
                          </div>
  
                          <div className="space-y-3">
                            <div className="text-[11px] font-black uppercase tracking-widest text-[#FFB800]">
                              Ratoeira Ads
                            </div>
                            <div className="flex items-center justify-between gap-2 text-sm">
                              <span className="text-gray-300 truncate">Perfis Google Ads</span>
                              <span className="font-bold text-white tabular-nums flex-shrink-0">
                                {ADS_LIMITS_BY_PLAN[plan.name].googleAdsProfiles}
                              </span>
                            </div>
                            <div className="flex items-center justify-between gap-2 text-sm">
                              <span className="text-gray-300 truncate">Ratoeiras Automáticas</span>
                              <span className="font-bold text-white tabular-nums flex-shrink-0">
                                {ADS_LIMITS_BY_PLAN[plan.name].automaticTraps}
                              </span>
                            </div>
                            <div className="flex items-center justify-between gap-2 text-sm">
                              <span className="text-gray-300 truncate">Integrações</span>
                              <span className="font-bold text-white flex-shrink-0">
                                {ADS_LIMITS_BY_PLAN[plan.name].integrations}
                              </span>
                            </div>
                          </div>
  
                          <div className="space-y-3">
                            <div className="text-[11px] font-black uppercase tracking-widest text-[#FF7E4A]">
                              Ratoeira Pages
                            </div>
                            <div className="flex items-center justify-between gap-2 text-sm">
                              <span className="text-gray-300 truncate">Acessos mensais</span>
                              <span className="font-bold text-white tabular-nums flex-shrink-0">
                                {PAGES_LIMITS_BY_PLAN[plan.name].monthlyAccesses}
                              </span>
                            </div>
                            <div className="flex items-center justify-between gap-2 text-sm">
                              <span className="text-gray-300 truncate">Domínios</span>
                              <span className="font-bold text-white tabular-nums flex-shrink-0">
                                {PAGES_LIMITS_BY_PLAN[plan.name].connectedDomains}
                              </span>
                            </div>
                            <div className="flex items-center justify-between gap-2 text-sm">
                              <span className="text-gray-300 truncate">Páginas</span>
                              <span className="font-bold text-white flex-shrink-0">
                                {PAGES_LIMITS_BY_PLAN[plan.name].unlimitedPages}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    </div>
                    <a
                      href={getPlanHref(plan.cta)}
                      className={cn(
                        "w-full py-4 rounded-button font-bold text-sm transition-colors mt-auto text-center block",
                        plan.popular
                          ? "bg-brand-primary text-black hover:bg-brand-primary-hover shadow-lg shadow-brand-primary/20"
                          : "bg-white/10 text-white hover:bg-white/20"
                      )}
                    >
                      {plan.cta}
                    </a>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 text-center">
                <p className="text-xs text-brand-primary">
                  * Renovação automática - Ao prosseguir você concorda que a assinatura será renovada automaticamente.
                </p>
              </div>

              <div className="mt-20">
                <div className="mb-10 text-center">
                  <h3 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Compare os Planos
                  </h3>
                  <p className="mt-4 text-lg text-neutral-400">
                    Encontre a configuração ideal para sua operação
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <div className="inline-block min-w-full align-middle">
                    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#111111] backdrop-blur-xl">
                      <table className="w-full min-w-[980px] table-fixed divide-y divide-white/10">
                        <colgroup>
                          <col style={{ width: "30%" }} />
                          {comparisonPlans.map((plan) => (
                            <col
                              key={`col-${plan.name}`}
                              style={{ width: `${70 / comparisonPlans.length}%` }}
                            />
                          ))}
                        </colgroup>

                        <thead>
                          <tr>
                            <th
                              scope="col"
                              className="bg-white/5 py-5 pl-8 pr-8 text-left text-sm font-semibold text-white"
                            >
                              Recursos
                            </th>

                            {comparisonPlans.map((plan) => (
                              <th
                                key={plan.name}
                                scope="col"
                                className="bg-white/5 px-6 py-5 text-center text-sm font-semibold text-white"
                              >
                                {plan.name}
                              </th>
                            ))}
                          </tr>
                        </thead>

                        <tbody className="divide-y divide-white/10 bg-transparent">
                          {comparisonGroups.map((group) => (
                            <Fragment key={group.group}>
                              <tr>
                                <th
                                  colSpan={comparisonPlans.length + 1}
                                  scope="colgroup"
                                  className="bg-white/[0.02] py-4 pl-8 text-left text-xs font-bold uppercase tracking-wider text-brand-primary"
                                >
                                  {group.group}
                                </th>
                              </tr>
                              {group.features.map((feature, index) => (
                                <tr
                                  key={feature.label}
                                  className={index % 2 === 0 ? "bg-white/[0.02]" : "bg-transparent"}
                                >
                                  <td className="py-4 pl-8 pr-8 text-sm font-medium leading-snug text-neutral-300 whitespace-normal">
                                    <div className="flex items-center gap-1.5">
                                      {feature.label}
                                      {feature.tooltip && (
                                        <Tooltip content={feature.tooltip}>
                                          <div className="p-1 hover:text-brand-primary cursor-pointer transition-colors text-gray-500 flex items-center justify-center pointer-events-auto">
                                            <Info className="w-3.5 h-3.5" />
                                          </div>
                                        </Tooltip>
                                      )}
                                    </div>
                                  </td>

                                  {feature.values.slice(0, comparisonColumnCount).map((val, vi) => (
                                    <td
                                      key={vi}
                                      className="px-6 py-4 text-center text-sm text-neutral-400"
                                    >
                                      <div className="flex items-center justify-center">
                                        <FeatureCell value={val} />
                                      </div>
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </Fragment>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

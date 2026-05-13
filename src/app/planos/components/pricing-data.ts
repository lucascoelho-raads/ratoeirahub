export type PlanFeatureValue = boolean | string | null;

export type PricingPlan = {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  cta: string;
  featured?: boolean;
};

export type FeatureRow = {
  label: string;
  tooltip?: string;
  values: [PlanFeatureValue, PlanFeatureValue, PlanFeatureValue];
};

export type FeatureGroup = {
  group: string;
  features: FeatureRow[];
};

export const PRICING_PAGE_PLANS: PricingPlan[] = [
  {
    id: "rato",
    name: "Rato",
    description: "Ideal para começar a tracionar.",
    monthlyPrice: 497,
    yearlyPrice: 397,
    cta: "Assinar Rato",
  },
  {
    id: "ratazana",
    name: "Ratazana",
    description: "Para quem já escala com consistência.",
    monthlyPrice: 797,
    yearlyPrice: 597,
    cta: "Assinar Ratazana",
    featured: true,
  },
  {
    id: "ratazana_plus",
    name: "Ratazana Plus",
    description: "Operações robustas de alto volume.",
    monthlyPrice: 1497,
    yearlyPrice: 1197,
    cta: "Falar com Vendas",
  },
];

export const PRICING_FEATURE_GROUPS: FeatureGroup[] = [
  {
    group: "Tracking & Ads",
    features: [
      { label: "Eventos por mês", tooltip: "Volume de disparos server-side", values: ["10.000", "50.000", "Ilimitado"] },
      { label: "Tracking Server-Side", tooltip: "API de Conversões Meta/Google", values: [true, true, true] },
      { label: "Bloqueio de Fraude", tooltip: "Prevenção contra bots", values: ["Básico", "Avançado", "Tempo Real"] },
      { label: "Domínios Customizados", tooltip: "Para tracking e páginas", values: ["2", "5", "Ilimitado"] },
    ],
  },
  {
    group: "Construtor de Páginas",
    features: [
      { label: "Visitas por mês", tooltip: "Tráfego nas landing pages", values: ["5.000", "25.000", "Ilimitado"] },
      { label: "Templates Alta Conversão", tooltip: "Acesso à biblioteca", values: ["10", "Todos", "Todos + Antecipado"] },
      { label: "Construtor Drag-and-Drop", tooltip: "Editor visual", values: [true, true, true] },
      { label: "Geração por IA", tooltip: "Copys e seções", values: [null, true, "Ilimitado"] },
      { label: "Teste A/B Nativo", tooltip: "Otimização de conversão", values: [null, true, true] },
    ],
  },
  {
    group: "Suporte & Integrações",
    features: [
      { label: "Integrações Nativas", tooltip: "Plataformas de venda", values: [true, true, true] },
      { label: "Dashboard de ROI Único", tooltip: "Visão unificada", values: [true, true, true] },
      { label: "Suporte Técnico", tooltip: "Canal de atendimento", values: ["E-mail", "WhatsApp", "WhatsApp VIP"] },
      { label: "Gerente de Conta", tooltip: "Acompanhamento estratégico", values: [null, null, true] },
    ],
  },
];

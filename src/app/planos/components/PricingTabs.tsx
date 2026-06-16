"use client";

import { useState, Fragment } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  useFloating,
  offset,
  flip,
  shift,
  autoUpdate,
  useHover,
  useFocus,
  useDismiss,
  useRole,
  useInteractions,
  FloatingPortal,
} from "@floating-ui/react";

type PlanType = "ads" | "pages" | "hub";
type BillingCycle = "monthly" | "semiannual" | "annual";

const TABS: { id: PlanType; label: string; icon: string; badge?: string }[] = [
  {
    id: "ads",
    label: "Ratoeira Ads",
    icon: "/icons/pricing/ads-icon.png",
  },
  {
    id: "pages",
    label: "Ratoeira Pages",
    icon: "/icons/pricing/pages-icon.png",
  },
  {
    id: "hub",
    label: "Ratoeira Hub",
    icon: "/icons/pricing/hub-icon.png",
    badge: "RECOMENDADO",
  },
];

const GOOGLE_ADS_LOGO = "/icons/pricing/google-ads.webp";
const META_ADS_LOGO = "/icons/pricing/meta-ads.png";

const PERIODS: { id: BillingCycle; label: string }[] = [
  { id: "monthly", label: "Mensal" },
  { id: "semiannual", label: "Semestral" },
  { id: "annual", label: "Anual" },
];

const DESCRIPTIONS: Record<
  PlanType,
  Record<BillingCycle, [string, string, string]>
> = {
  ads: {
    monthly: [
      "Para quem está validando as primeiras campanhas.",
      "Para anunciantes que já escalam com consistência.",
      "Para operações robustas de alto volume.",
    ],
    semiannual: [
      "Para quem está validando as primeiras campanhas.",
      "Para anunciantes que já escalam com consistência.",
      "Para operações robustas de alto volume.",
    ],
    annual: [
      "Para quem está validando as primeiras campanhas.",
      "Para anunciantes que já escalam com consistência.",
      "Para operações robustas de alto volume.",
    ],
  },
  pages: {
    monthly: [
      "Para quem está iniciando e precisa de mais páginas.",
      "Ideal para te dar flexibilidade de domínios.",
      "Plano ideal para não travar sua escala.",
    ],
    semiannual: [
      "Para quem está iniciando e precisa de mais páginas.",
      "Ideal para te dar flexibilidade de domínios.",
      "Plano ideal para não travar sua escala.",
    ],
    annual: [
      "Para quem está iniciando e precisa de mais páginas.",
      "Ideal para te dar flexibilidade de domínios.",
      "Plano ideal para não travar sua escala.",
    ],
  },
  hub: {
    monthly: [
      "O combo ideal para iniciar sua escala integrada.",
      "Ideal para ter flexibilidade de teste e escala.",
      "Ideal para não travar sua escala.",
    ],
    semiannual: [
      "O combo ideal para iniciar sua escala integrada.",
      "Ideal para ter flexibilidade de teste e escala.",
      "Ideal para não travar sua escala.",
    ],
    annual: [
      "O combo ideal para iniciar sua escala integrada.",
      "Ideal para ter flexibilidade de teste e escala.",
      "Ideal para não travar sua escala.",
    ],
  },
};

// Source: /tmp/pricing_cards.json
const PRICING_CARDS: PricingCard[] = [
  {
    index: 1,
    product: "ads",
    cycle: "monthly",
    name: "Rato",
    badge: "",
    inst: "",
    val: "167,00",
    per: "/mês",
    avista: "",
    cta: "Assinar Rato",
    limits: [
      ["Ratoeiras Totais", "50"],
      ["Ratoeiras Automáticas", "5"],
      ["Integrações / Webhooks", "Ilimitado"],
      ["Perfis/E-mail Google Ads", "3"],
    ],
    platforms: [
      ["Google Ads", "10"],
      ["Meta Ads", "Em Breve"],
    ],
    hub_subs: [],
  },
  {
    index: 2,
    product: "ads",
    cycle: "monthly",
    name: "Ratazana",
    badge: "MAIS ESCOLHIDO",
    inst: "",
    val: "247,00",
    per: "/mês",
    avista: "",
    cta: "Assinar Ratazana",
    limits: [
      ["Ratoeiras Totais", "100"],
      ["Ratoeiras Automáticas", "50"],
      ["Integrações / Webhooks", "Ilimitado"],
      ["Perfis/E-mail Google Ads", "10"],
    ],
    platforms: [
      ["Google Ads", "20"],
      ["Meta Ads", "Em Breve"],
    ],
    hub_subs: [],
  },
  {
    index: 3,
    product: "ads",
    cycle: "monthly",
    name: "Ratazana Plus",
    badge: "MELHOR PREÇO",
    inst: "",
    val: "397,00",
    per: "/mês",
    avista: "",
    cta: "Assinar Ratazana Plus",
    limits: [
      ["Ratoeiras Totais", "300"],
      ["Ratoeiras Automáticas", "300"],
      ["Integrações / Webhooks", "Ilimitado"],
      ["Perfis/E-mail Google Ads", "30"],
    ],
    platforms: [
      ["Google Ads", "Ilimitado"],
      ["Meta Ads", "Em Breve"],
    ],
    hub_subs: [],
  },
  {
    index: 4,
    product: "ads",
    cycle: "semiannual",
    name: "Rato",
    badge: "",
    inst: "6X",
    val: "149,52",
    per: "/mês",
    avista: "por R$797,00 à vista",
    cta: "Assinar Rato",
    limits: [
      ["Ratoeiras Totais", "50"],
      ["Ratoeiras Automáticas", "5"],
      ["Integrações / Webhooks", "Ilimitado"],
      ["Perfis/E-mail Google Ads", "3"],
    ],
    platforms: [
      ["Google Ads", "10"],
      ["Meta Ads", "Em Breve"],
    ],
    hub_subs: [],
  },
  {
    index: 5,
    product: "ads",
    cycle: "semiannual",
    name: "Ratazana",
    badge: "MAIS ESCOLHIDO",
    inst: "6X",
    val: "205,80",
    per: "/mês",
    avista: "por R$1.097,00 à vista",
    cta: "Assinar Ratazana",
    limits: [
      ["Ratoeiras Totais", "100"],
      ["Ratoeiras Automáticas", "50"],
      ["Integrações / Webhooks", "Ilimitado"],
      ["Perfis/E-mail Google Ads", "10"],
    ],
    platforms: [
      ["Google Ads", "20"],
      ["Meta Ads", "Em Breve"],
    ],
    hub_subs: [],
  },
  {
    index: 6,
    product: "ads",
    cycle: "semiannual",
    name: "Ratazana Plus",
    badge: "MELHOR PREÇO",
    inst: "6X",
    val: "349,50",
    per: "/mês",
    avista: "por R$2.097,00 à vista",
    cta: "Assinar Ratazana Plus",
    limits: [
      ["Ratoeiras Totais", "300"],
      ["Ratoeiras Automáticas", "300"],
      ["Integrações / Webhooks", "Ilimitado"],
      ["Perfis/E-mail Google Ads", "30"],
    ],
    platforms: [
      ["Google Ads", "Ilimitado"],
      ["Meta Ads", "Em Breve"],
    ],
    hub_subs: [],
  },
  {
    index: 7,
    product: "ads",
    cycle: "annual",
    name: "Rato",
    badge: "",
    inst: "12X",
    val: "139,31",
    per: "/mês",
    avista: "por R$1.347,00 à vista",
    cta: "Assinar Rato",
    limits: [
      ["Ratoeiras Totais", "50"],
      ["Ratoeiras Automáticas", "5"],
      ["Integrações / Webhooks", "Ilimitado"],
      ["Perfis/E-mail Google Ads", "3"],
    ],
    platforms: [
      ["Google Ads", "10"],
      ["Meta Ads", "Em Breve"],
    ],
    hub_subs: [],
  },
  {
    index: 8,
    product: "ads",
    cycle: "annual",
    name: "Ratazana",
    badge: "MAIS ESCOLHIDO",
    inst: "12X",
    val: "185,85",
    per: "/mês",
    avista: "por R$1.797,00 à vista",
    cta: "Assinar Ratazana",
    limits: [
      ["Ratoeiras Totais", "100"],
      ["Ratoeiras Automáticas", "50"],
      ["Integrações / Webhooks", "Ilimitado"],
      ["Perfis/E-mail Google Ads", "10"],
    ],
    platforms: [
      ["Google Ads", "20"],
      ["Meta Ads", "Em Breve"],
    ],
    hub_subs: [],
  },
  {
    index: 9,
    product: "ads",
    cycle: "annual",
    name: "Ratazana Plus",
    badge: "MELHOR PREÇO",
    inst: "12X",
    val: "333,08",
    per: "/mês",
    avista: "por R$3.997,00 à vista",
    cta: "Assinar Ratazana Plus",
    limits: [
      ["Ratoeiras Totais", "300"],
      ["Ratoeiras Automáticas", "300"],
      ["Integrações / Webhooks", "Ilimitado"],
      ["Perfis/E-mail Google Ads", "30"],
    ],
    platforms: [
      ["Google Ads", "Ilimitado"],
      ["Meta Ads", "Em Breve"],
    ],
    hub_subs: [],
  },
  {
    index: 10,
    product: "pages",
    cycle: "monthly",
    name: "Rato",
    badge: "",
    inst: "",
    val: "97,00",
    per: "/mês",
    avista: "",
    cta: "Assinar Rato",
    limits: [
      ["Acessos mensais", "200.000"],
      ["Domínios", "10"],
      ["Páginas", "Ilimitadas"],
      ["Hospedagem Grátis", "Ilimitada"],
      ["Conexão com IA", "20"],
      ["Regras de Tráfego", "20"],
      ["Site COD", "5"],
    ],
    platforms: [],
    hub_subs: [],
  },
  {
    index: 11,
    product: "pages",
    cycle: "monthly",
    name: "Ratazana",
    badge: "MAIS ESCOLHIDO",
    inst: "",
    val: "117,00",
    per: "/mês",
    avista: "",
    cta: "Assinar Ratazana",
    limits: [
      ["Acessos mensais", "500.000"],
      ["Domínios", "20"],
      ["Páginas", "Ilimitadas"],
      ["Hospedagem Grátis", "Ilimitada"],
      ["Conexão com IA", "50"],
      ["Regras de Tráfego", "50"],
      ["Site COD", "10"],
    ],
    platforms: [],
    hub_subs: [],
  },
  {
    index: 12,
    product: "pages",
    cycle: "monthly",
    name: "Ratazana Plus",
    badge: "MELHOR PREÇO",
    inst: "",
    val: "147,00",
    per: "/mês",
    avista: "",
    cta: "Assinar Ratazana Plus",
    limits: [
      ["Acessos mensais", "1.000.000"],
      ["Domínios", "40"],
      ["Páginas", "Ilimitadas"],
      ["Hospedagem Grátis", "Ilimitada"],
      ["Conexão com IA", "100"],
      ["Regras de Tráfego", "100"],
      ["Site COD", "20"],
    ],
    platforms: [],
    hub_subs: [],
  },
  {
    index: 13,
    product: "pages",
    cycle: "semiannual",
    name: "Rato",
    badge: "",
    inst: "6X",
    val: "82,83",
    per: "/mês",
    avista: "ou R$497,00 à vista",
    cta: "Assinar Rato",
    limits: [
      ["Acessos mensais", "200.000"],
      ["Domínios", "10"],
      ["Páginas", "Ilimitadas"],
      ["Hospedagem Grátis", "Ilimitada"],
      ["Conexão com IA", "20"],
      ["Regras de Tráfego", "20"],
      ["Site COD", "5"],
    ],
    platforms: [],
    hub_subs: [],
  },
  {
    index: 14,
    product: "pages",
    cycle: "semiannual",
    name: "Ratazana",
    badge: "MAIS ESCOLHIDO",
    inst: "6X",
    val: "99,50",
    per: "/mês",
    avista: "ou R$597,00 à vista",
    cta: "Assinar Ratazana",
    limits: [
      ["Acessos mensais", "500.000"],
      ["Domínios", "20"],
      ["Páginas", "Ilimitadas"],
      ["Hospedagem Grátis", "Ilimitada"],
      ["Conexão com IA", "50"],
      ["Regras de Tráfego", "50"],
      ["Site COD", "10"],
    ],
    platforms: [],
    hub_subs: [],
  },
  {
    index: 15,
    product: "pages",
    cycle: "semiannual",
    name: "Ratazana Plus",
    badge: "MELHOR PREÇO",
    inst: "6X",
    val: "132,83",
    per: "/mês",
    avista: "ou R$797,00 à vista",
    cta: "Assinar Ratazana Plus",
    limits: [
      ["Acessos mensais", "1.000.000"],
      ["Domínios", "40"],
      ["Páginas", "Ilimitadas"],
      ["Hospedagem Grátis", "Ilimitada"],
      ["Conexão com IA", "100"],
      ["Regras de Tráfego", "100"],
      ["Site COD", "20"],
    ],
    platforms: [],
    hub_subs: [],
  },
  {
    index: 16,
    product: "pages",
    cycle: "annual",
    name: "Rato",
    badge: "",
    inst: "12X",
    val: "54,75",
    per: "/mês",
    avista: "ou R$657,00 à vista",
    cta: "Assinar Rato",
    limits: [
      ["Acessos mensais", "200.000"],
      ["Domínios", "10"],
      ["Páginas", "Ilimitadas"],
      ["Hospedagem Grátis", "Ilimitada"],
      ["Conexão com IA", "20"],
      ["Regras de Tráfego", "20"],
      ["Site COD", "5"],
    ],
    platforms: [],
    hub_subs: [],
  },
  {
    index: 17,
    product: "pages",
    cycle: "annual",
    name: "Ratazana",
    badge: "MAIS ESCOLHIDO",
    inst: "12X",
    val: "73,08",
    per: "/mês",
    avista: "ou R$877,00 à vista",
    cta: "Assinar Ratazana",
    limits: [
      ["Acessos mensais", "500.000"],
      ["Domínios", "20"],
      ["Páginas", "Ilimitadas"],
      ["Hospedagem Grátis", "Ilimitada"],
      ["Conexão com IA", "50"],
      ["Regras de Tráfego", "50"],
      ["Site COD", "10"],
    ],
    platforms: [],
    hub_subs: [],
  },
  {
    index: 18,
    product: "pages",
    cycle: "annual",
    name: "Ratazana Plus",
    badge: "MELHOR PREÇO",
    inst: "12X",
    val: "116,42",
    per: "/mês",
    avista: "ou R$1.397,00 à vista",
    cta: "Assinar Ratazana Plus",
    limits: [
      ["Acessos mensais", "1.000.000"],
      ["Domínios", "40"],
      ["Páginas", "Ilimitadas"],
      ["Hospedagem Grátis", "Ilimitada"],
      ["Conexão com IA", "100"],
      ["Regras de Tráfego", "100"],
      ["Site COD", "20"],
    ],
    platforms: [],
    hub_subs: [],
  },
  {
    index: 19,
    product: "hub",
    cycle: "monthly",
    name: "Rato",
    badge: "",
    inst: "",
    val: "197,00",
    per: "/mês",
    avista: "",
    cta: "Assinar Rato",
    limits: [
      ["Ratoeiras Totais", "50"],
      ["Ratoeiras Automáticas", "5"],
      ["Integrações / Webhooks", "Ilimitado"],
      ["Perfis/E-mail Google Ads", "3"],
      ["Acessos mensais", "200.000"],
      ["Domínios", "10"],
      ["Páginas", "Ilimitadas"],
      ["Hospedagem Grátis", "Ilimitada"],
    ],
    platforms: [
      ["Google Ads", "10"],
      ["Meta Ads", "Em Breve"],
    ],
    hub_subs: ["RATOEIRA ADS", "RATOEIRA PAGES"],
  },
  {
    index: 20,
    product: "hub",
    cycle: "monthly",
    name: "Ratazana",
    badge: "MAIS ESCOLHIDO",
    inst: "",
    val: "297,00",
    per: "/mês",
    avista: "",
    cta: "Assinar Ratazana",
    limits: [
      ["Ratoeiras Totais", "100"],
      ["Ratoeiras Automáticas", "50"],
      ["Integrações / Webhooks", "Ilimitado"],
      ["Perfis/E-mail Google Ads", "10"],
      ["Acessos mensais", "500.000"],
      ["Domínios", "20"],
      ["Páginas", "Ilimitadas"],
      ["Hospedagem Grátis", "Ilimitada"],
    ],
    platforms: [
      ["Google Ads", "20"],
      ["Meta Ads", "Em Breve"],
    ],
    hub_subs: ["RATOEIRA ADS", "RATOEIRA PAGES"],
  },
  {
    index: 21,
    product: "hub",
    cycle: "monthly",
    name: "Ratazana Plus",
    badge: "MELHOR PREÇO",
    inst: "",
    val: "497,00",
    per: "/mês",
    avista: "",
    cta: "Assinar Ratazana Plus",
    limits: [
      ["Ratoeiras Totais", "300"],
      ["Ratoeiras Automáticas", "300"],
      ["Integrações / Webhooks", "Ilimitado"],
      ["Perfis/E-mail Google Ads", "30"],
      ["Acessos mensais", "1.000.000"],
      ["Domínios", "40"],
      ["Páginas", "Ilimitadas"],
      ["Hospedagem Grátis", "Ilimitada"],
    ],
    platforms: [
      ["Google Ads", "Ilimitado"],
      ["Meta Ads", "Em Breve"],
    ],
    hub_subs: ["RATOEIRA ADS", "RATOEIRA PAGES"],
  },
  {
    index: 22,
    product: "hub",
    cycle: "semiannual",
    name: "Rato",
    badge: "",
    inst: "6X",
    val: "182,83",
    per: "/mês",
    avista: "ou R$1.097,00 à vista",
    cta: "Assinar Rato",
    limits: [
      ["Ratoeiras Totais", "50"],
      ["Ratoeiras Automáticas", "5"],
      ["Integrações / Webhooks", "Ilimitado"],
      ["Perfis/E-mail Google Ads", "3"],
      ["Acessos mensais", "200.000"],
      ["Domínios", "10"],
      ["Páginas", "Ilimitadas"],
      ["Hospedagem Grátis", "Ilimitada"],
    ],
    platforms: [
      ["Google Ads", "10"],
      ["Meta Ads", "Em Breve"],
    ],
    hub_subs: ["RATOEIRA ADS", "RATOEIRA PAGES"],
  },
  {
    index: 23,
    product: "hub",
    cycle: "semiannual",
    name: "Ratazana",
    badge: "MAIS ESCOLHIDO",
    inst: "6X",
    val: "266,17",
    per: "/mês",
    avista: "ou R$1.597,00 à vista",
    cta: "Assinar Ratazana",
    limits: [
      ["Ratoeiras Totais", "100"],
      ["Ratoeiras Automáticas", "50"],
      ["Integrações / Webhooks", "Ilimitado"],
      ["Perfis/E-mail Google Ads", "10"],
      ["Acessos mensais", "500.000"],
      ["Domínios", "20"],
      ["Páginas", "Ilimitadas"],
      ["Hospedagem Grátis", "Ilimitada"],
    ],
    platforms: [
      ["Google Ads", "20"],
      ["Meta Ads", "Em Breve"],
    ],
    hub_subs: ["RATOEIRA ADS", "RATOEIRA PAGES"],
  },
  {
    index: 24,
    product: "hub",
    cycle: "semiannual",
    name: "Ratazana Plus",
    badge: "MELHOR PREÇO",
    inst: "6X",
    val: "432,83",
    per: "/mês",
    avista: "ou R$2.497,00 à vista",
    cta: "Assinar Ratazana Plus",
    limits: [
      ["Ratoeiras Totais", "300"],
      ["Ratoeiras Automáticas", "300"],
      ["Integrações / Webhooks", "Ilimitado"],
      ["Perfis/E-mail Google Ads", "30"],
      ["Acessos mensais", "1.000.000"],
      ["Domínios", "40"],
      ["Páginas", "Ilimitadas"],
      ["Hospedagem Grátis", "Ilimitada"],
    ],
    platforms: [
      ["Google Ads", "Ilimitado"],
      ["Meta Ads", "Em Breve"],
    ],
    hub_subs: ["RATOEIRA ADS", "RATOEIRA PAGES"],
  },
  {
    index: 25,
    product: "hub",
    cycle: "annual",
    name: "Rato",
    badge: "",
    inst: "12X",
    val: "158,08",
    per: "/mês",
    avista: "ou R$1.897,00 à vista",
    cta: "Assinar Rato",
    limits: [
      ["Ratoeiras Totais", "50"],
      ["Ratoeiras Automáticas", "5"],
      ["Integrações / Webhooks", "Ilimitado"],
      ["Perfis/E-mail Google Ads", "3"],
      ["Acessos mensais", "200.000"],
      ["Domínios", "10"],
      ["Páginas", "Ilimitadas"],
      ["Hospedagem Grátis", "Ilimitada"],
    ],
    platforms: [
      ["Google Ads", "10"],
      ["Meta Ads", "Em Breve"],
    ],
    hub_subs: ["RATOEIRA ADS", "RATOEIRA PAGES"],
  },
  {
    index: 26,
    product: "hub",
    cycle: "annual",
    name: "Ratazana",
    badge: "MAIS ESCOLHIDO",
    inst: "12X",
    val: "208,08",
    per: "/mês",
    avista: "ou R$2.497,00 à vista",
    cta: "Assinar Ratazana",
    limits: [
      ["Ratoeiras Totais", "100"],
      ["Ratoeiras Automáticas", "50"],
      ["Integrações / Webhooks", "Ilimitado"],
      ["Perfis/E-mail Google Ads", "10"],
      ["Acessos mensais", "500.000"],
      ["Domínios", "20"],
      ["Páginas", "Ilimitadas"],
      ["Hospedagem Grátis", "Ilimitada"],
    ],
    platforms: [
      ["Google Ads", "20"],
      ["Meta Ads", "Em Breve"],
    ],
    hub_subs: ["RATOEIRA ADS", "RATOEIRA PAGES"],
  },
  {
    index: 27,
    product: "hub",
    cycle: "annual",
    name: "Ratazana Plus",
    badge: "MELHOR PREÇO",
    inst: "12X",
    val: "416,42",
    per: "/mês",
    avista: "ou R$4.997,00 à vista",
    cta: "Assinar Ratazana Plus",
    limits: [
      ["Ratoeiras Totais", "300"],
      ["Ratoeiras Automáticas", "300"],
      ["Integrações / Webhooks", "Ilimitado"],
      ["Perfis/E-mail Google Ads", "30"],
      ["Acessos mensais", "1.000.000"],
      ["Domínios", "40"],
      ["Páginas", "Ilimitadas"],
      ["Hospedagem Grátis", "Ilimitada"],
    ],
    platforms: [
      ["Google Ads", "Ilimitado"],
      ["Meta Ads", "Em Breve"],
    ],
    hub_subs: ["RATOEIRA ADS", "RATOEIRA PAGES"],
  },
];

type PricingCard = {
  index: number;
  product: PlanType;
  cycle: BillingCycle;
  name: string;
  badge: string;
  inst: string;
  val: string;
  per: string;
  avista: string;
  cta: string;
  limits: [string, string][];
  platforms: [string, string][];
  hub_subs: string[];
};

type CompareRow =
  | { type: "section"; target: string; label: string }
  | {
      type: "row";
      section: string;
      label: string;
      rato: string;
      ratazana: string;
      ratazana_plus: string;
    };

// Source: /tmp/pricing_compare.json
const COMPARE_ROWS: CompareRow[] = [
  { type: "section", target: "rows-ads", label: "Ratoeira Ads" },
  { type: "section", target: "rows-pgs", label: "Ratoeira Pages" },
  { type: "section", target: "rows-hub", label: "Ratoeira Hub" },
  {
    type: "row",
    section: "rows-ads",
    label: "Ratoeiras Totais",
    rato: "50",
    ratazana: "100",
    ratazana_plus: "300",
  },
  {
    type: "row",
    section: "rows-ads",
    label: "Ratoeiras Automáticas",
    rato: "5",
    ratazana: "50",
    ratazana_plus: "300",
  },
  {
    type: "row",
    section: "rows-ads",
    label: "Integrações / Webhooks",
    rato: "Ilimitado",
    ratazana: "Ilimitado",
    ratazana_plus: "Ilimitado",
  },
  {
    type: "row",
    section: "rows-ads",
    label: "Perfis/E-mail Google Ads",
    rato: "3",
    ratazana: "10",
    ratazana_plus: "30",
  },
  {
    type: "row",
    section: "rows-ads",
    label: "Contas Google Ads",
    rato: "10",
    ratazana: "20",
    ratazana_plus: "Ilimitado",
  },
  {
    type: "row",
    section: "rows-ads",
    label: "Contas Meta Ads",
    rato: "Em Breve",
    ratazana: "Em Breve",
    ratazana_plus: "Em Breve",
  },
  {
    type: "row",
    section: "rows-ads",
    label: "Gerenciador Integrado",
    rato: "",
    ratazana: "",
    ratazana_plus: "",
  },
  {
    type: "row",
    section: "rows-ads",
    label: "Dashboard Financeiro",
    rato: "",
    ratazana: "",
    ratazana_plus: "",
  },
  {
    type: "row",
    section: "rows-ads",
    label: "Acesso aos leads",
    rato: "",
    ratazana: "",
    ratazana_plus: "",
  },
  {
    type: "row",
    section: "rows-ads",
    label: "Analytics Avançado",
    rato: "",
    ratazana: "",
    ratazana_plus: "",
  },
  {
    type: "row",
    section: "rows-ads",
    label: "Aulas e tutoriais",
    rato: "",
    ratazana: "",
    ratazana_plus: "",
  },
  {
    type: "row",
    section: "rows-ads",
    label: "Integração com IA (MCP)",
    rato: "",
    ratazana: "",
    ratazana_plus: "",
  },
  {
    type: "row",
    section: "rows-ads",
    label: "Acesso Beta VIP à novas funcionalidades",
    rato: "",
    ratazana: "",
    ratazana_plus: "",
  },
  {
    type: "row",
    section: "rows-ads",
    label: "Acesso a todos os eventos",
    rato: "",
    ratazana: "",
    ratazana_plus: "",
  },
  {
    type: "row",
    section: "rows-ads",
    label: "Acesso às vendas com detalhes",
    rato: "",
    ratazana: "",
    ratazana_plus: "",
  },
  {
    type: "row",
    section: "rows-ads",
    label: "Acesso à todas as visitas",
    rato: "",
    ratazana: "",
    ratazana_plus: "",
  },
  {
    type: "row",
    section: "rows-ads",
    label: "Suporte WhatsApp",
    rato: "",
    ratazana: "",
    ratazana_plus: "",
  },
  {
    type: "row",
    section: "rows-pgs",
    label: "Acessos mensais",
    rato: "200.000",
    ratazana: "500.000",
    ratazana_plus: "1.000.000",
  },
  {
    type: "row",
    section: "rows-pgs",
    label: "Domínios customizados",
    rato: "10",
    ratazana: "20",
    ratazana_plus: "40",
  },
  {
    type: "row",
    section: "rows-pgs",
    label: "Páginas",
    rato: "Ilimitadas",
    ratazana: "Ilimitadas",
    ratazana_plus: "Ilimitadas",
  },
  {
    type: "row",
    section: "rows-pgs",
    label: "Hospedagem Turbo",
    rato: "Ilimitada",
    ratazana: "Ilimitada",
    ratazana_plus: "Ilimitada",
  },
  {
    type: "row",
    section: "rows-pgs",
    label: "Construtor de página intuitivo",
    rato: "",
    ratazana: "",
    ratazana_plus: "",
  },
  {
    type: "row",
    section: "rows-pgs",
    label: "Analytics Avançado",
    rato: "",
    ratazana: "",
    ratazana_plus: "",
  },
  {
    type: "row",
    section: "rows-pgs",
    label: "Templates Exclusivos",
    rato: "",
    ratazana: "",
    ratazana_plus: "",
  },
  {
    type: "row",
    section: "rows-pgs",
    label: "Aulas e tutoriais",
    rato: "",
    ratazana: "",
    ratazana_plus: "",
  },
  {
    type: "row",
    section: "rows-pgs",
    label: "Clonador de páginas",
    rato: "",
    ratazana: "",
    ratazana_plus: "",
  },
  {
    type: "row",
    section: "rows-pgs",
    label: "Integração com IA (MCP)",
    rato: "",
    ratazana: "",
    ratazana_plus: "",
  },
  {
    type: "row",
    section: "rows-pgs",
    label: "Teste A/B Nativo",
    rato: "20",
    ratazana: "50",
    ratazana_plus: "100",
  },
  {
    type: "row",
    section: "rows-pgs",
    label: "Regras de Tráfego",
    rato: "20",
    ratazana: "50",
    ratazana_plus: "100",
  },
  {
    type: "row",
    section: "rows-pgs",
    label: "Acesso Beta VIP à novas funcionalidades",
    rato: "",
    ratazana: "",
    ratazana_plus: "",
  },
  {
    type: "row",
    section: "rows-pgs",
    label: "Site COD",
    rato: "5",
    ratazana: "10",
    ratazana_plus: "20",
  },
  {
    type: "row",
    section: "rows-pgs",
    label: "Suporte WhatsApp",
    rato: "",
    ratazana: "",
    ratazana_plus: "",
  },
  {
    type: "row",
    section: "rows-hub",
    label: "Tudo acima de Ads e Pages",
    rato: "",
    ratazana: "",
    ratazana_plus: "",
  },
  {
    type: "row",
    section: "rows-hub",
    label: "Maior performance",
    rato: "",
    ratazana: "",
    ratazana_plus: "",
  },
  {
    type: "row",
    section: "rows-hub",
    label: "Segurança reforçada",
    rato: "",
    ratazana: "",
    ratazana_plus: "",
  },
  {
    type: "row",
    section: "rows-hub",
    label: "Maior economia",
    rato: "",
    ratazana: "",
    ratazana_plus: "",
  },
  {
    type: "row",
    section: "rows-hub",
    label: "Maior taxa de rastreamento",
    rato: "",
    ratazana: "",
    ratazana_plus: "",
  },
  {
    type: "row",
    section: "rows-hub",
    label: "Login unificado",
    rato: "",
    ratazana: "",
    ratazana_plus: "",
  },
];

function getCards(product: PlanType, cycle: BillingCycle): PricingCard[] {
  return PRICING_CARDS.filter((c) => c.product === product && c.cycle === cycle);
}

function getPlanHref() {
  return "/planos#vamos-transformar";
}

function Tooltip({
  children,
  content,
}: {
  children: React.ReactNode;
  content: React.ReactNode;
}) {
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

  const hover = useHover(context, {
    move: false,
    delay: { open: 0, close: 100 },
  });
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
        ref={(node) => {
          refs.setReference(node);
        }}
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
              ref={(node) => {
                refs.setFloating(node);
              }}
              style={{
                position: strategy,
                top: y ?? 0,
                left: x ?? 0,
                pointerEvents: "none",
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

function LimitValue({ value }: { value: string }) {
  if (value === "✓" || value.toLowerCase() === "incluído") {
    return <Check className="h-4 w-4 text-[#22c55e]" />;
  }
  if (/^ilimit/i.test(value)) {
    return (
      <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.05] px-2 py-0.5 text-[11px] font-semibold text-white whitespace-nowrap">
        {value}
      </span>
    );
  }
  return <span className="text-xs font-bold text-white whitespace-nowrap">{value}</span>;
}

function PricingCardComponent({
  card,
  description,
  product,
}: {
  card: PricingCard;
  description: string;
  product: PlanType;
}) {
  const isYellow = card.badge === "MAIS ESCOLHIDO";
  const isGreen = card.badge === "MELHOR PREÇO";

  const ctaClass = isGreen
    ? "bg-[#22c55e] text-[#0d0d0d] hover:bg-[#16a34a]"
    : isYellow
      ? "bg-[#f59f0a] text-[#0d0d0d] hover:bg-[#d97706]"
      : "bg-white/[0.08] text-white hover:bg-white/[0.14]";

  const renderAdAccounts = () => {
    if (card.platforms.length === 0) return null;
    return (
      <>
        <div className="text-[10px] font-extrabold uppercase tracking-[0.1em] text-[#666666] mt-3 mb-2">
          Contas de Anúncio
        </div>
        <div className="flex flex-col gap-1.5">
          {card.platforms.map(([name, value]) => (
            <div
              key={name}
              className="flex justify-between items-center bg-white/[0.03] rounded-lg px-2.5 py-1.5"
            >
              <div className="flex items-center gap-2">
                <img
                  src={name === "Google Ads" ? GOOGLE_ADS_LOGO : META_ADS_LOGO}
                  alt={name}
                  className="w-[18px] h-[18px] object-contain rounded-[3px]"
                />
                <span className="text-xs text-[#cccccc]">{name}</span>
              </div>
              <LimitValue value={value} />
            </div>
          ))}
        </div>
      </>
    );
  };

  const renderLimitRow = (label: string, value: string) => (
    <div key={label} className="flex justify-between items-center gap-2 mb-1.5">
      <span className="text-xs text-[#aaaaaa]">{label}</span>
      <LimitValue value={value} />
    </div>
  );

  // Render limits with optional subsection headers for Hub
  const renderLimits = () => {
    if (product === "hub" && card.hub_subs.length > 0) {
      // Split limits between Ratoeira Ads and Ratoeira Pages sections
      const adsLimitCount = 4;
      const adsLimits = card.limits.slice(0, adsLimitCount);
      const pagesLimits = card.limits.slice(adsLimitCount);

      return (
        <>
          <div className="text-[10px] font-extrabold uppercase tracking-[0.1em] text-[#f59f0a] mb-1.5">
            RATOEIRA ADS
          </div>
          {adsLimits.map(([label, value]) => (
            <Fragment key={label}>
              {renderLimitRow(label, value)}
              {label === "Perfis/E-mail Google Ads" && renderAdAccounts()}
            </Fragment>
          ))}
          <div className="text-[10px] font-extrabold uppercase tracking-[0.1em] text-[#f59f0a] mt-2.5 mb-1.5">
            RATOEIRA PAGES
          </div>
          {pagesLimits.map(([label, value]) => renderLimitRow(label, value))}
        </>
      );
    }

    return card.limits.map(([label, value]) => (
      <Fragment key={label}>
        {renderLimitRow(label, value)}
        {label === "Perfis/E-mail Google Ads" && renderAdAccounts()}
      </Fragment>
    ));
  };

  return (
    <div
      className={cn(
        "relative flex flex-col rounded-[20px] p-6 transition-all duration-200",
        "bg-[#111111] border",
        isYellow
          ? "border-[#f59f0a]"
          : isGreen
            ? "border-[#22c55e]"
            : "border-white/[0.08]",
      )}
    >
      {card.badge && (
        <span
          className={cn(
            "absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-full text-[11px] font-bold whitespace-nowrap",
            isYellow
              ? "bg-[#f59f0a] text-[#0d0d0d]"
              : "bg-[#22c55e] text-[#0d0d0d]",
          )}
        >
          {card.badge}
        </span>
      )}

      <div className="text-xl font-extrabold text-white mb-1">{card.name}</div>
      <div className="text-[13px] text-[#888888] mb-4 min-h-[36px]">{description}</div>

      {card.inst && (
        <div className="text-[11px] font-bold text-[#f59f0a] uppercase tracking-[0.08em] mb-0.5">
          {card.inst}
        </div>
      )}
      <div className="flex items-baseline gap-1 mb-1">
        <span className="text-base text-[#aaaaaa]">R$</span>
        <span className="text-[32px] font-black text-white leading-none">{card.val}</span>
        <span className="text-[13px] text-[#888888]">{card.per}</span>
      </div>
      {card.avista && (
        <div className="text-xs text-[#666666] mb-3">{card.avista}</div>
      )}

      <div className="h-px bg-white/[0.07] my-4" />

      <div className="text-[10px] font-extrabold uppercase tracking-[0.1em] text-[#666666] mb-2.5">
        Limites do Plano
      </div>

      {renderLimits()}

      <div className="flex-1" />

      <a
        href={getPlanHref()}
        className={cn(
          "w-full mt-4 py-3 rounded-xl text-sm font-bold text-center transition-colors",
          ctaClass,
        )}
      >
        {card.cta}
      </a>
    </div>
  );
}

function ComparisonTable() {
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({
    "rows-ads": true,
    "rows-pgs": true,
    "rows-hub": false,
  });

  const toggleSection = (target: string) => {
    setCollapsed((prev) => ({ ...prev, [target]: !prev[target] }));
  };

  const sections: { target: string; label: string }[] = [
    { target: "rows-ads", label: "Ratoeira Ads" },
    { target: "rows-pgs", label: "Ratoeira Pages" },
    { target: "rows-hub", label: "Ratoeira Hub" },
  ];

  const renderCell = (value: string) => {
    if (value === "") {
      return (
        <div className="flex justify-center">
          <Check className="h-[18px] w-[18px] text-[#34d399]" strokeWidth={2.5} />
        </div>
      );
    }
    if (/^ilimit/i.test(value)) {
      return (
        <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.05] px-2 py-0.5 text-[11px] font-semibold text-white whitespace-nowrap">
          {value}
        </span>
      );
    }
    return <span className="text-[13px] text-neutral-300">{value}</span>;
  };

  return (
    <div className="max-md:overflow-auto max-md:max-h-[70vh] rounded-lg">
      <table className="w-full min-w-[720px] border-separate border-spacing-0 text-[13px] compare-table">
        <colgroup>
          <col className="w-[40%]" />
          <col className="w-[20%]" />
          <col className="w-[20%]" />
          <col className="w-[20%]" />
        </colgroup>
        <thead className="sticky top-16 z-10">
          <tr>
            <th className="bg-[#0d0d0d] text-[#aaaaaa] text-xs font-bold uppercase tracking-[0.06em] text-left py-3 px-3.5 border-b border-white/[0.06]">
              Recursos
            </th>
            <th className="bg-[#0d0d0d] text-[#aaaaaa] text-xs font-bold uppercase tracking-[0.06em] text-center py-3 px-3.5 border-b border-white/[0.06]">
              Rato
            </th>
            <th className="bg-[#0d0d0d] text-[#aaaaaa] text-xs font-bold uppercase tracking-[0.06em] text-center py-3 px-3.5 border-b border-white/[0.06]">
              Ratazana
            </th>
            <th className="bg-[#0d0d0d] text-[#f59f0a] text-xs font-bold uppercase tracking-[0.06em] text-center py-3 px-3.5 border-b border-white/[0.06]">
              <span className="block text-[10px] text-[#22c55e] font-bold uppercase tracking-[0.08em] mb-0.5">
                Recomendado
              </span>
              Ratazana Plus
            </th>
          </tr>
        </thead>
        <tbody>
          {sections.map((section) => {
            const sectionRows = COMPARE_ROWS.filter(
              (r): r is Extract<CompareRow, { type: "row" }> =>
                r.type === "row" && r.section === section.target,
            );
            const isCollapsed = collapsed[section.target];

            return (
              <Fragment key={section.target}>
                <tr
                  className="cursor-pointer"
                  onClick={() => toggleSection(section.target)}
                >
                  <td colSpan={4} className="p-0 border-b border-white/[0.06]">
                    <div className="flex justify-between items-center bg-white/[0.04] rounded-lg mx-0 my-1 py-2.5 px-3.5">
                      <span className="text-xs font-bold uppercase tracking-[0.18em] text-white">
                        {section.label}
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#f59f0a] px-3 py-1 text-xs font-bold text-[#0d0d0d]">
                        <span>{isCollapsed ? "Expandir" : "Fechar"}</span>
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 transition-transform duration-200 text-[#d97706]",
                            isCollapsed ? "-rotate-90" : "",
                          )}
                        />
                      </span>
                    </div>
                  </td>
                </tr>
                {!isCollapsed &&
                  sectionRows.map((row, i) => (
                    <tr
                      key={row.label}
                      className={cn(
                        "transition-colors hover:bg-white/[0.02]",
                        i % 2 === 0 ? "bg-white/[0.02]" : "bg-transparent",
                      )}
                    >
                      <td className="py-3 px-3.5 text-left text-[13px] font-medium text-[#cccccc] border-b border-white/[0.06]">
                        {row.label === "Gerenciador Integrado" ? (
                          <span className="inline-flex items-center gap-1.5">
                            {row.label}
                            <img
                              src={GOOGLE_ADS_LOGO}
                              alt="Google Ads"
                              className="w-[18px] h-[18px] object-contain rounded-[3px] inline-block"
                            />
                          </span>
                        ) : (
                          row.label
                        )}
                      </td>
                      <td className="py-3 px-3.5 text-center border-b border-white/[0.06]">
                        {renderCell(row.rato)}
                      </td>
                      <td className="py-3 px-3.5 text-center border-b border-white/[0.06]">
                        {renderCell(row.ratazana)}
                      </td>
                      <td className="py-3 px-3.5 text-center border-b border-white/[0.06]">
                        {renderCell(row.ratazana_plus)}
                      </td>
                    </tr>
                  ))}
              </Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default function PricingTabs() {
  const [activeTab, setActiveTab] = useState<PlanType>("hub");
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("annual");

  const cards = getCards(activeTab, billingCycle);
  const descriptions = DESCRIPTIONS[activeTab][billingCycle];

  return (
    <section
      id="pricing-cards"
      className="scroll-mt-24 py-12 md:scroll-mt-28 md:py-16 bg-[#0d0d0d] text-white"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 pt-8 pb-5">
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full border text-sm font-semibold transition-all duration-200",
                  isActive
                    ? "bg-[#f59f0a] text-[#0d0d0d] border-[#f59f0a]"
                    : "bg-white/[0.04] text-[#aaaaaa] border-white/[0.12] hover:border-[#f59f0a]/50 hover:bg-white/[0.08]",
                )}
              >
                <img
                  src={tab.icon}
                  alt={tab.label}
                  className="w-5 h-5 object-contain"
                />
                {tab.label}
                {tab.badge && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-[#22c55e] text-white text-[10px] font-bold rounded-full whitespace-nowrap">
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Billing cycle */}
        <div className="flex justify-center pb-6">
          <div className="inline-flex items-center gap-1 p-1 bg-white/[0.05] border border-white/[0.1] rounded-full">
            {PERIODS.map((p) => {
              const isActive = billingCycle === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setBillingCycle(p.id)}
                  className={cn(
                    "relative px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200",
                    isActive
                      ? "bg-[#1a1a1a] text-white"
                      : "text-[#888888] hover:text-white",
                  )}
                >
                  {p.label}
                  {p.id === "annual" && (
                    <span className="absolute -top-3 -right-1 px-2.5 py-0.5 bg-[#22c55e] text-white text-[11px] font-bold rounded-full whitespace-nowrap">
                      -20%
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab + billingCycle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4 pb-6">
              {cards.map((card, i) => (
                <PricingCardComponent
                  key={card.index}
                  card={card}
                  description={descriptions[i]}
                  product={activeTab}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Footer note */}
        <p className="text-center text-xs text-[#555555] pb-10 px-6">
          * Renovação automática – Ao prosseguir você concorda que a assinatura
          será renovada automaticamente.
        </p>

        {/* Comparison table */}
        <div className="pt-10 pb-16">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-extrabold text-white mb-1.5">
              Compare os Planos
            </h2>
            <p className="text-sm text-[#888888]">
              Encontre a configuração ideal para sua operação
            </p>
          </div>
          <ComparisonTable />
        </div>
      </div>
    </section>
  );
}

"use client";

import { usePathname } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import { shouldHideHubPages } from "@/lib/feature-flags";
import { type NavLink } from "@/components/header/nav-data";

// Hrefs que remetem a Ratoeira Hub / Ratoeira Pages — ocultos na Home
const HUB_PAGES_HREFS = new Set<string>([
  "/solucoes/ratoeira-hub",
  "/solucoes/ratoeira-pages",
]);

// Labels (já traduzidos via t()) que remetem a Ratoeira Hub / Ratoeira Pages
// Usado como fallback caso o item não tenha href definido.
const HUB_PAGES_LABEL_KEYS = new Set<string>([
  "nav.menu.ratoeiraHub",
  "nav.menu.ratoeiraPages",
]);

function isHubPagesItem(item: { label: string; href?: string }): boolean {
  if (item.href && HUB_PAGES_HREFS.has(item.href)) return true;
  if (HUB_PAGES_LABEL_KEYS.has(item.label)) return true;
  return false;
}

function filterMenuColumns(
  columns: NonNullable<NavLink["menu"]>["columns"],
  hideHubPages: boolean,
): NonNullable<NavLink["menu"]>["columns"] {
  if (!hideHubPages) return columns;
  return columns
    .map((column) => ({
      ...column,
      items: column.items.filter((item) => !isHubPagesItem(item)),
    }))
    .filter((column) => column.items.length > 0);
}

export function useTranslatedNav() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const hideHubPages = shouldHideHubPages(pathname);

  const translatedNavLinks: NavLink[] = [
    {
      label: t("nav.company"),
      href: "#empresa",
      menu: {
        id: "empresa",
        columns: [
          {
            heading: t("nav.menu.aboutRatoeira"),
            items: [
              {
                label: t("nav.menu.whoWeAre"),
                description: t("nav.menu.whoWeAreDesc"),
                href: "/quem-somos",
              },
              {
                label: t("nav.menu.manifesto"),
                description: t("nav.menu.manifestoDesc"),
                href: "/quem-somos#manifesto",
              },
            ],
          },
          {
            heading: t("nav.menu.partnership"),
            accent: true,
            items: [
              {
                label: t("nav.menu.partnerships"),
                description: t("nav.menu.partnershipsDesc"),
                href: "/parcerias",
              },
            ],
          },
        ],
      },
    },
    {
      label: t("nav.solutions"),
      href: "#solucoes",
      menu: {
        id: "solucoes",
        columns: filterMenuColumns([
          {
            heading: t("nav.menu.byOperation"),
            items: [
              {
                label: t("nav.menu.ratoeiraAds"),
                description: t("nav.menu.ratoeiraAdsDesc"),
                href: "/solucoes/ratoeira-ads",
              },
              {
                label: t("nav.menu.ratoeiraPages"),
                description: t("nav.menu.ratoeiraPagesDesc"),
                href: "/solucoes/ratoeira-pages",
              },
              {
                label: t("nav.menu.ratoeiraHub"),
                description: t("nav.menu.ratoeiraHubDesc"),
                href: "/solucoes/ratoeira-hub",
              },
            ],
          },
          {
            heading: t("nav.menu.trafficSource"),
            items: [
              {
                label: t("nav.menu.googleAds"),
                description: t("nav.menu.googleAdsDesc"),
                href: "/fontes-de-trafego/google-ads",
              },
              {
                label: t("nav.menu.metaAds"),
                description: t("nav.menu.metaAdsDesc"),
                href: "/fontes-de-trafego/meta-ads",
              },
              {
                label: t("nav.menu.nativeAds"),
                description: t("nav.menu.nativeAdsDesc"),
                href: "/fontes-de-trafego/native-ads",
              },
              {
                label: t("nav.menu.tiktokAds"),
                description: t("nav.menu.tiktokAdsDesc"),
                href: "/fontes-de-trafego/tiktok-ads",
              },
            ],
          },
          {
            heading: t("nav.menu.integrationsAI"),
            items: [
              {
                label: t("nav.menu.moreThan70"),
                description: t("nav.menu.moreThan70Desc"),
                href: "/integracoes/mais-de-70-plataformas",
              },
              {
                label: t("nav.menu.connectionsAI"),
                description: t("nav.menu.connectionsAIDesc"),
                href: "/integracoes/conexoes-com-ia",
              },
            ],
          },
          {
            heading: t("nav.menu.quickAccess"),
            accent: true,
            items: [
              { label: t("nav.menu.viewBenefits"), href: "#solucoes" },
              { label: t("nav.menu.viewNumbers"), href: "#empresa" },
              { label: t("nav.menu.viewCases"), href: "#cases" },
              { label: t("nav.menu.talkToTeam"), href: "/fale-conosco" },
            ],
          },
        ], hideHubPages),
      },
    },
    {
      label: t("nav.plans"),
      href: "/planos",
    },
    {
      label: t("nav.cases"),
      href: "/cases",
    },
    {
      label: t("nav.materials"),
      href: "#materiais",
      menu: {
        id: "materiais",
        columns: [
          {
            heading: "Materiais",
            items: [
              {
                label: "Central de Ajuda Ads",
                description: "Documentação e suporte do Ratoeira Ads.",
                href: "https://ratoeira-ads.gitbook.io/help-ratoeira",
              },
              {
                label: "Central de Ajuda Pages",
                description: "Documentação e suporte do Ratoeira Pages.",
                href: "https://ratoeira-ads.gitbook.io/ratoeira-pages",
              },
              {
                label: "Grupo do WhatsApp",
                description: "Novidades e comunicados da plataforma.",
                href: "https://chat.whatsapp.com/BQCxIjwb3I0IjGvTOPmBuz",
              },
              {
                label: "FAQ",
                description: "Respostas para dúvidas frequentes.",
                href: "/faq",
              },
            ],
          },
        ],
      },
    },
  ];

  return translatedNavLinks;
}

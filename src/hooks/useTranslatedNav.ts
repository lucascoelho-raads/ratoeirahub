"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { NAV_LINKS, type NavLink } from "@/components/header/nav-data";

export function useTranslatedNav() {
  const { t } = useLanguage();

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
        columns: [
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
        ],
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
            heading: t("nav.menu.communitySupport"),
            items: [
              {
                label: t("nav.menu.googleAds"),
                href: "/fontes-de-trafego/google-ads",
              },
              {
                label: t("nav.menu.metaAds"),
                href: "/fontes-de-trafego/meta-ads",
              },
              {
                label: t("nav.menu.nativeAds"),
                href: "/fontes-de-trafego/native-ads",
              },
              {
                label: t("footer.helpCenter"),
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

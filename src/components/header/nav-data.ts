export type NavItem = {
  label: string;
  description?: string;
  href?: string;
  disabled?: boolean;
};

export type NavColumn = {
  heading: string;
  items: NavItem[];
  accent?: boolean;
};

export type NavMenu = {
  id: string;
  columns: NavColumn[];
};

export type NavLink = {
  label: string;
  href?: string;
  menu?: NavMenu;
};

export const NAV_LINKS: NavLink[] = [
  {
    label: "Empresa",
    href: "#empresa",
    menu: {
      id: "empresa",
      columns: [
        {
          heading: "Sobre a Ratoeira",
          items: [
            {
              label: "Quem Somos",
              description: "Conheça nossa jornada e visão de produto.",
              href: "/quem-somos",
            },
            {
              label: "Manifesto",
              description: "A missão por trás do ecossistema Ratoeira Hub.",
              href: "/quem-somos#manifesto",
            },
          ],
        },
        {
          heading: "Parceria",
          accent: true,
          items: [
            {
              label: "Parcerias",
              description: "Vantagens exclusivas para parceiros certificados.",
              href: "/parcerias",
            },
          ],
        },
      ],
    },
  },
  {
    label: "Soluções",
    href: "#solucoes",
    menu: {
      id: "solucoes",
      columns: [
        {
          heading: "Por Operação",
          items: [
            {
              label: "Ratoeira Ads",
              description: "Traqueamento de Elite",
              href: "/solucoes/ratoeira-ads",
            },
            {
              label: "Ratoeira Pages",
              description: "Páginas Conversivas",
              href: "/solucoes/ratoeira-pages",
            },
            {
              label: "Ratoeira Hub",
              description: "Ecossistema Integrado",
              href: "/solucoes/ratoeira-hub",
            },
          ],
        },
        {
          heading: "Fonte de Tráfego",
          items: [
            {
              label: "Google Ads",
              description: "Conheça as soluções",
              href: "/fontes-de-trafego/google-ads",
            },
            {
              label: "Meta Ads",
              description: "Facebook & Instagram",
              href: "/fontes-de-trafego/meta-ads",
            },
            {
              label: "Native Ads",
              description: "Taboola e NewsBreak",
              href: "/fontes-de-trafego/native-ads",
            },
            {
              label: "TikTok Ads",
              description: "Eventos de conversão",
              href: "/fontes-de-trafego/tiktok-ads",
            },
          ],
        },
        {
          heading: "Integrações & IA",
          items: [
            {
              label: "Mais de 100 plataformas",
              description: "Conexão em minutos",
              href: "/integracoes/mais-de-70-plataformas",
            },
            {
              label: "Conexões com IA",
              description: "MCP em tempo real",
              href: "/integracoes/conexoes-com-ia",
            },
          ],
        },
        {
          heading: "Acesso Rápido",
          accent: true,
          items: [
            { label: "Ver Benefícios", href: "#solucoes" },
            { label: "Ver Números", href: "#empresa" },
            { label: "Ver Cases", href: "#cases" },
            { label: "Falar com Time", href: "/fale-conosco" },
          ],
        },
      ],
    },
  },
  {
    label: "Planos",
    href: "/planos",
  },
  {
    label: "Cases",
    href: "/cases",
  },
  {
    label: "Materiais",
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
  {
    label: "Fale Conosco",
    href: "/fale-conosco",
  },
];

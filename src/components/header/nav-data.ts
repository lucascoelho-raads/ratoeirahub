export type NavItem = {
  label: string;
  description?: string;
  href?: string;
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
              description: "Conheca nossa jornada e visao de produto.",
              href: "/quem-somos",
            },
            {
              label: "Manifesto",
              description: "A missao por tras do ecossistema Ratoeira Hub.",
              href: "/quem-somos#manifesto",
            },
          ],
        },
        {
          heading: "Carreira e Cultura",
          accent: true,
          items: [
            {
              label: "Parcerias",
              description: "Conecte-se ao nosso programa de parceiros.",
              href: "#parcerias",
            },
          ],
        },
      ],
    },
  },
  {
    label: "Solucoes",
    href: "#solucoes",
    menu: {
      id: "solucoes",
      columns: [
        {
          heading: "Por Operacao",
          items: [
            {
              label: "Rastreamento Inteligente",
              description: "Recupere conversoes invisiveis e bloqueie fraude.",
              href: "#solucoes",
            },
            {
              label: "Paginas de Alta Conversao",
              description: "Templates e construtor visual integrados ao tracking.",
              href: "#solucoes",
            },
            {
              label: "Ecossistema Integrado",
              description: "Ads + Pages em um unico dashboard operacional.",
              href: "#solucoes",
            },
          ],
        },
        {
          heading: "Stack da Plataforma",
          items: [
            {
              label: "Ratoeira Ads",
              description: "Server-side tracking para trafego pago.",
              href: "#solucoes",
            },
            {
              label: "Ratoeira Pages",
              description: "Landing pages rapidas e orientadas a ROI.",
              href: "#solucoes",
            },
          ],
        },
        {
          heading: "Integracoes & IA",
          items: [
            {
              label: "Conexoes Nativas",
              description: "+60 plataformas de vendas e CRMs integrados.",
              href: "#solucoes",
            },
            {
              label: "Geracao por IA",
              description: "Crie copys e paginas usando inteligencia artificial.",
              href: "#solucoes",
            },
          ],
        },
        {
          heading: "Acesso Rapido",
          accent: true,
          items: [
            { label: "Ver Beneficios", href: "#solucoes" },
            { label: "Ver Numeros", href: "#empresa" },
            { label: "Ver Cases", href: "#cases" },
            { label: "Falar com Time", href: "#fale-conosco" },
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
          heading: "Comunidade e Suporte",
          items: [
            {
              label: "FAQ",
              description: "Respostas para duvidas frequentes.",
              href: "#materiais",
            },
            {
              label: "Grupo de Comunicados",
              description: "Novidades e atualizacoes da plataforma.",
              href: "#materiais",
            },
          ],
        },
        {
          heading: "Ratoeira ADS",
          items: [
            {
              label: "Privacidade",
              description: "Politicas de privacidade do Ads.",
              href: "#materiais",
            },
            {
              label: "Termos de Uso",
              description: "Termos de uso do Ratoeira Ads.",
              href: "#materiais",
            },
            {
              label: "Central de Ajuda",
              description: "Fale com a nossa equipe.",
              href: "#materiais",
            },
          ],
        },
        {
          heading: "Ratoeira Pages",
          items: [
            {
              label: "Privacidade",
              description: "Politicas de privacidade do Pages.",
              href: "#materiais",
            },
            {
              label: "Termos de Uso",
              description: "Termos de uso do Ratoeira Pages.",
              href: "#materiais",
            },
            {
              label: "Central de Ajuda",
              description: "Fale com a nossa equipe.",
              href: "#materiais",
            },
          ],
        },
      ],
    },
  },
  {
    label: "Fale Conosco",
    href: "#fale-conosco",
  },
];

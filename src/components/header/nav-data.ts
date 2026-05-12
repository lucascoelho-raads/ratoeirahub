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
              description: "Conecte-se ao nosso programa de parceiros.",
              href: "#parcerias",
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
              label: "Rastreamento Inteligente",
              description: "Recupere conversões invisíveis e bloqueie fraude.",
              href: "#solucoes",
            },
            {
              label: "Páginas de Alta Conversão",
              description: "Templates e construtor visual integrados ao tracking.",
              href: "#solucoes",
            },
            {
              label: "Ecossistema Integrado",
              description: "Ads + Pages em um único dashboard operacional.",
              href: "#solucoes",
            },
          ],
        },
        {
          heading: "Fonte de Tráfego",
          items: [
            {
              label: "Google Ads",
              description: "Escale campanhas de pesquisa e YouTube com dados limpos.",
              href: "#solucoes",
            },
            {
              label: "Meta Ads",
              description: "Otimize criativos e escale no Facebook e Instagram.",
              href: "#solucoes",
            },
          ],
        },
        {
          heading: "Integrações & IA",
          items: [
            {
              label: "Mais de 70 plataformas",
              description: "Conexão em minutos. Zero retrabalho.",
              href: "#solucoes",
            },
            {
              label: "Geração por IA",
              description: "Crie copys e páginas usando inteligência artificial.",
              href: "#solucoes",
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
              description: "Respostas para dúvidas frequentes.",
              href: "#materiais",
            },
            {
              label: "Grupo de Comunicados",
              description: "Novidades e atualizações da plataforma.",
              href: "#materiais",
            },
          ],
        },
        {
          heading: "Ratoeira ADS",
          items: [
            {
              label: "Privacidade",
              description: "Políticas de privacidade do Ads.",
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
              description: "Políticas de privacidade do Pages.",
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

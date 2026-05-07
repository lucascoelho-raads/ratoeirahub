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
              href: "#empresa",
            },
          ],
        },
        {
          heading: "Carreira e Cultura",
          accent: true,
          items: [
            {
              label: "Carreiras",
              description: "Faca parte do time que escala afiliados no Brasil.",
              href: "#fale-conosco",
            },
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
          heading: "Por Objetivo",
          items: [
            {
              label: "Reduzir Desperdicio",
              description: "Corte cliques invalidos e aumente eficiencia.",
              href: "#solucoes",
            },
            {
              label: "Escalar Campanhas",
              description: "Otimize com dados reais de venda confirmada.",
              href: "#solucoes",
            },
            {
              label: "Aumentar Conversao",
              description: "Suba paginas e funis sem depender de codigo.",
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
    href: "#planos",
  },
  {
    label: "Parcerias",
    href: "#parcerias",
    menu: {
      id: "parcerias",
      columns: [
        {
          heading: "Programa de Canais",
          items: [
            {
              label: "Torne-se Parceiro",
              description: "Amplie receita com o ecossistema Ratoeira Hub.",
              href: "#parcerias",
            },
            {
              label: "Beneficios do Programa",
              description: "Comissao, suporte e materiais comerciais.",
              href: "#parcerias",
            },
          ],
        },
        {
          heading: "Recursos",
          accent: true,
          items: [
            {
              label: "Kit de Vendas",
              description: "Apresente a plataforma com argumentos prontos.",
              href: "#materiais",
            },
            {
              label: "Onboarding",
              description: "Guia de inicio rapido para novos parceiros.",
              href: "#materiais",
            },
          ],
        },
      ],
    },
  },
  {
    label: "Cases",
    href: "#cases",
  },
  {
    label: "Materiais",
    href: "#materiais",
    menu: {
      id: "materiais",
      columns: [
        {
          heading: "Aprendizado",
          items: [
            {
              label: "Documentacao",
              description: "Tudo para configurar sua operacao no Hub.",
              href: "#materiais",
            },
            {
              label: "FAQ",
              description: "Respostas para duvidas frequentes.",
              href: "#materiais",
            },
          ],
        },
        {
          heading: "Conteudos",
          items: [
            {
              label: "Blog",
              description: "Estrategias de trafego e escala com dados reais.",
              href: "#materiais",
            },
            {
              label: "Comunicados",
              description: "Novidades e atualizacoes da plataforma.",
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

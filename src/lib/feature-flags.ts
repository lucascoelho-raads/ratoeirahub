/**
 * Feature flags do projeto.
 *
 * Centraliza flags que controlam a visibilidade de blocos/funcionalidades
 * na aplicação sem precisar excluir arquivos do projeto.
 *
 * Para reativar um bloco oculto, basta alterar a flag para `false`.
 */

/**
 * Quando `true`, oculta toda a visualização que remete a
 * "Ratoeira Hub" e "Ratoeira Pages" — na Home e em qualquer página
 * que renderize o Hero (que é onde o painel do Ratoeira Pages aparece).
 *
 * Os arquivos/páginas continuam existindo no projeto — apenas a UI deixa
 * de exibir referências a essas soluções.
 */
export const HIDE_HUB_PAGES_ON_HOME = false;

/**
 * Detecta se o pathname atual é a página Home (`/`).
 */
export function isHomePath(pathname: string | null | undefined): boolean {
  if (!pathname) return false;
  return pathname === "/" || pathname === "";
}

/**
 * Helper composto: deve ocultar Ratoeira Hub / Ratoeira Pages na Home?
 */
export function shouldHideHubPages(pathname: string | null | undefined): boolean {
  return HIDE_HUB_PAGES_ON_HOME && isHomePath(pathname);
}

/**
 * Helper usado pelo Hero: oculta o painel 2 (Ratoeira Pages) em qualquer
 * página que renderize o componente, sempre que a flag estiver ativa.
 *
 * O painel 1 (Ratoeira Ads) continua sendo exibido normalmente.
 */
export function shouldHideHeroPagesPanel(): boolean {
  return HIDE_HUB_PAGES_ON_HOME;
}

/**
 * Quando `true`, oculta a seção "MCP RATOEIRA PAGES" da página
 * /integracoes/conexoes-com-ia.
 *
 * A flag é independente de HIDE_HUB_PAGES_ON_HOME para permitir reativar
 * a Home sem reativar essa seção, e vice-versa.
 */
export const HIDE_MCP_PAGES_SECTION = false;

/**
 * Quando `true`, oculta o player de vídeo (Vturb) na página /planos.
 */
export const HIDE_PLANOS_VIDEO_PLAYER = false;

/**
 * Quando `true`, oculta os planos "Ratoeira Hub" e "Ratoeira Pages"
 * na página /planos — tanto nos cards de preços quanto na tabela "Compare
 * os Planos" (seções rows-pgs e rows-hub).
 */
export const HIDE_PLANOS_HUB_PAGES = false;

/**
 * Quando a flag está ativa, substitui menções visuais a
 * "Ratoeira Hub" / "Ratoeira Pages" por "Ratoeira Ads".
 *
 * Útil para textos traduzidos (ex.: t("cta.button") = "Quero Acessar a Ratoeira Hub").
 */
export function swapHubPagesBrand(text: string, hideHubPages: boolean): string {
  if (!hideHubPages) return text;
  return text
    .replace(/Ratoeira\s*Hub/gi, "Ratoeira Ads")
    .replace(/Ratoeira\s*Pages/gi, "Ratoeira Ads");
}
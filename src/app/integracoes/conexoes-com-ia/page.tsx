import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { SplineSceneBasic } from "@/components/ui/spline-scene-basic"
import { BentoGrid, type BentoItem } from "@/components/ui/bento-grid"
import { RadialGlowBackground } from "@/components/ui/radial-glow-background"
import { ArrowRight, BarChart3, ListChecks, MessageSquareText } from "lucide-react"
import Link from "next/link"
import type { CSSProperties } from "react"

export const metadata = {
  title: "Conexões com IA | Ratoeira Hub",
  description: "Sua operação de anúncios, acessível para o Claude e o ChatGPT. Consulte, decida e execute — sem abrir o painel.",
}

export default function ConexoesComIAPage() {
  const mcpPagesOrangeStyle = {
    "--color-brand-primary": "var(--color-brand-secondary)",
    "--color-brand-primary-hover": "#E86B3B",
  } as unknown as CSSProperties

  const mcpAdsItems: BentoItem[] = [
    {
      status: "01",
      title: "Consulte qualquer métrica",
      description:
        "“Qual campanha teve o melhor ROAS essa semana?” A resposta vem com os dados reais da sua conta — sem abrir uma aba sequer.",
      iconKey: "analytics",
      tags: ["ROAS", "CPA", "Performance"],
      colSpan: 2,

    },
    {
      status: "02",
      title: "Decida de qualquer lugar",
      description:
        "No celular, em reunião, no meio de uma viagem. Se você tem o Claude ou o ChatGPT na mão, tem a sua operação na mão.",
      iconKey: "decision",
      tags: ["Mobile", "Velocidade"],
    },
    {
      status: "03",
      title: "Execute ações direto pelo chat",
      description:
        "Pause uma campanha, duplique um anúncio, altere o orçamento diário ou ajuste o CPA alvo — tudo com um comando em texto.",
      iconKey: "execute",
      tags: ["Automação", "Operação"],
    },
    {
      status: "04",
      title: "Ações disponíveis via MCP",
      description: "Atalhos prontos para consultar, decidir e executar — em tempo real.",
      iconKey: "actions",
      tags: [
        "Pausar / ativar campanha",
        "Duplicar campanha ou anúncio",
        "Alterar orçamento diário",
        "Alterar CPA alvo",
        "Consultar performance por período",
        "Listar campanhas ativas",
        "Ver IPs bloqueados",
      ],
      colSpan: 2,
      cta: "Ver exemplos →",
    },
  ]

  const mcpPagesItems: BentoItem[] = [
    {
      status: "01",
      title: "Crie páginas em linguagem natural",
      description:
        "“Cria uma Flash Page de presell para suplemento masculino com foco em energia, tom direto e CTA para WhatsApp.” O Claude interpreta, a Ratoeira Pages constrói.",
      icon: <MessageSquareText className="h-4 w-4 text-brand-secondary" />,
      iconKey: "execute",
      tags: ["Briefing", "Template", "CTA"],
      colSpan: 2,

    },
    {
      status: "02",
      title: "Analytics das suas páginas",
      description:
        "Quantas visitas, de onde vieram, qual página converte mais. Pergunte e receba os dados diretamente no chat — sem trocar de ferramenta.",
      icon: <BarChart3 className="h-4 w-4 text-brand-secondary" />,
      iconKey: "analytics",
      tags: ["Visitas", "Fonte", "Conversão"],
    },
    {
      status: "03",
      title: "Clone páginas em escala",
      description:
        "Precisa de 10 variações do mesmo template para testar ofertas diferentes? Um comando — e estão prontas para publicar.",
      icon: <ListChecks className="h-4 w-4 text-brand-secondary" />,
      iconKey: "actions",
      tags: ["Variações", "Teste", "Escala"],
    },
    {
      status: "04",
      title: "Ações disponíveis via MCP",
      description: "Comandos prontos para criar, clonar, publicar, medir e gerenciar domínios — sem abrir painel.",
      icon: <ListChecks className="h-4 w-4 text-brand-secondary" />,
      iconKey: "actions",
      tags: [
        "Criar página a partir de descrição",
        "Clonar página existente",
        "Publicar / despublicar página",
        "Consultar analytics por página",
        "Listar domínios conectados",
        "Renomear ou mover página",
      ],
      colSpan: 2,
      cta: "Ver comandos →",
    },
  ]

  return (
    <main className="flex flex-col flex-1 min-h-screen bg-[#050505] text-white">
      <Navbar />

      <section>
        <SplineSceneBasic />
      </section>

      <section className="relative py-14 sm:py-20">
        <RadialGlowBackground sizePx={760} position={{ x: "50%", y: "180px" }} color="rgba(255,184,0,0.18)" />
        <div className="relative z-10 max-w-7xl 2xl:max-w-[90rem] 4xl:max-w-[120rem] 5xl:max-w-[140rem] 6xl:max-w-[160rem] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 4xl:px-20 5xl:px-28 6xl:px-36">
          <div className="relative z-10 grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="flex flex-col gap-4 lg:col-span-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center rounded-full bg-[#FFB800]/15 px-3 py-1 text-xs font-semibold tracking-wide text-[#FFB800]">
                  MCP RATOEIRA ADS
                </span>
                <span className="text-xs text-gray-400/60">Compatível com Claude · ChatGPT</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white text-center lg:text-left">
                Controle suas campanhas sem abrir o painel.
              </h2>

              <p className="text-base sm:text-lg text-gray-400/70 leading-relaxed max-w-3xl 2xl:max-w-[60rem] 4xl:max-w-[80rem] text-center lg:text-left">
                Com o MCP do Ratoeira Ads instalado, o Claude e o ChatGPT têm acesso direto à sua operação. Você pergunta
                em linguagem natural — eles consultam, analisam e executam em tempo real.
              </p>

              <BentoGrid className="mt-2" items={mcpAdsItems} hideStatus hideCta />

              <div className="pt-2">
                <Link
                  href="/#fale-conosco"
                  className="inline-flex items-center justify-center gap-2 rounded-button bg-brand-primary px-8 py-4 font-black text-white transition-colors hover:bg-brand-primary-hover"
                >
                  Conectar Ratoeira Ads com IA
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-14 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black -z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_700px_at_50%_200px,rgba(180,83,9,0.25),transparent)] -z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_400px_at_70%_500px,rgba(234,88,12,0.3),transparent)] -z-10" />
        <div className="relative z-10 max-w-7xl 2xl:max-w-[90rem] 4xl:max-w-[120rem] 5xl:max-w-[140rem] 6xl:max-w-[160rem] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 4xl:px-20 5xl:px-28 6xl:px-36">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0b0b0b] px-8 py-12 sm:px-12 sm:py-14">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_20%,rgba(255,184,0,0.18),rgba(11,11,11,0))]" />
            <div className="relative mx-auto max-w-3xl 2xl:max-w-[60rem] 4xl:max-w-[80rem] text-center">
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white">
                Sua operação, onde você estiver.
              </h2>
              <p className="mt-4 text-base sm:text-lg text-gray-400/70 leading-relaxed">
                O MCP da Ratoeira conecta seus dados e suas páginas diretamente ao Claude e ao ChatGPT. Sem API manual, sem
                planilha, sem painel aberto. Você pergunta — a IA age.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-14 sm:py-20">
        <RadialGlowBackground sizePx={760} position={{ x: "50%", y: "180px" }} color="rgba(251,147,60,0.18)" />
        <div className="relative z-10 max-w-7xl 2xl:max-w-[90rem] 4xl:max-w-[120rem] 5xl:max-w-[140rem] 6xl:max-w-[160rem] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 4xl:px-20 5xl:px-28 6xl:px-36">
          <div
            style={mcpPagesOrangeStyle}
            className="grid gap-10 lg:grid-cols-2 lg:items-center"
          >
            <div className="flex flex-col gap-4 lg:col-span-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center rounded-full bg-brand-secondary/15 px-3 py-1 text-xs font-semibold tracking-wide text-brand-secondary">
                  MCP RATOEIRA PAGES
                </span>
                <span className="text-xs text-gray-400/60">Compatível com Claude</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white text-center lg:text-left">
                Crie qualquer página com um comando.
              </h2>

              <p className="text-base sm:text-lg text-gray-400/70 leading-relaxed max-w-3xl 2xl:max-w-[60rem] 4xl:max-w-[80rem] text-center lg:text-left">
                Com o MCP do Ratoeira Pages instalado no Claude, você descreve a página que quer — e vê ela ser construída
                em tempo real. Analytics, domínios e clones na palma da sua mão.
              </p>

              <BentoGrid className="mt-2" items={mcpPagesItems} hideStatus hideCta />

              <div className="pt-2">
                <Link
                  href="/#fale-conosco"
                  className="inline-flex items-center justify-center gap-2 rounded-button bg-brand-secondary px-8 py-4 font-black text-white transition-colors hover:bg-[#E86B3B]"
                >
                  Conectar Ratoeira Pages com Claude
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

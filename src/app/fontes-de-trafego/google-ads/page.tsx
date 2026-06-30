import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HeroGoogleAds } from "./components/HeroGoogleAds";
import Image from "next/image";
import { LineChart, MousePointerClick, ShieldCheck, Target, Timer, Waypoints } from "lucide-react";
import { ShineBorder } from "@/components/ui/ShineBorder";

export const metadata = {
  title: "Google Ads com Ratoeira Hub | Tracking e Otimização Avançada",
  description: "Escale suas campanhas de pesquisa e YouTube com dados 100% limpos e integração server-side nativa.",
};

function renderNoBreakTitle(title: string) {
  const patterns = ["Google Ads", "Ratoeira Pages", "iOS 14+"];
  const regex = new RegExp(
    `(${patterns.map((p) => p.replace(/[.*+?^${}()|[\\]\\\\]/g, "\\\\$&")).join("|")})`,
    "gi"
  );
  const parts = title.split(regex);
  return parts.map((part, i) =>
    patterns.some((p) => part.toLowerCase() === p.toLowerCase()) ? (
      <span key={i} className="whitespace-nowrap">{part}</span>
    ) : (
      part
    )
  );
}

export default function GoogleAdsPage() {
  return (
    <main className="flex flex-col flex-1 bg-[#050505] text-white">
      <Navbar />
      <HeroGoogleAds />

      <section className="py-16 md:py-24 bg-[#050505]">
        <div className="max-w-7xl 2xl:max-w-[90rem] 4xl:max-w-[120rem] 5xl:max-w-[140rem] 6xl:max-w-[160rem] mx-auto px-6 2xl:px-12 4xl:px-20 5xl:px-28 6xl:px-36">
          <div className="text-center mb-20 max-w-3xl 2xl:max-w-[60rem] 4xl:max-w-[80rem] mx-auto">
            <h2 className="text-h1 font-black text-white mb-6 tracking-tight leading-tight hyphens-none">
              O <span className="text-brand-primary whitespace-nowrap">Google Ads</span> só otimiza tão bem quanto o dado que recebe.
            </h2>
            <p className="text-body-lg text-gray-300 max-w-3xl mx-auto px-4 sm:px-0 hyphens-none">
              Quando apenas parte das suas vendas chega ao Google, o algoritmo aprende errado — e você paga por isso. A Ratoeira garante que cada
              conversão real chegue ao <span className="whitespace-nowrap">Google Ads</span> com qualidade máxima, do clique ao pagamento.
            </p>
          </div>

          <div className="space-y-16 md:space-y-24">
            {[
              {
                icon: Timer,
                title: "Conversões Server-Side via API do Google",
                description:
                  "O pixel no navegador perde entre 25% e 40% das conversões por bloqueadores de anúncio, restrições de iOS e falhas de conexão. A Ratoeira envia os eventos direto pela API de Conversões do Google — server-side, sem depender do navegador do usuário. Cada venda real sobe para o Google Ads. Sem gap. Sem \"o pixel não pegou essa.\"",
                image: "/googleserveraside.png",
              },
              {
                icon: Target,
                title: "GCLID e UTMs preservados — atribuição certa em cada clique",
                description:
                  "O GCLID é o identificador que o Google usa para saber qual anúncio gerou qual conversão. Quando ele se perde — por redirecionamento, cookie expirado ou troca de dispositivo — a atribuição quebra e o algoritmo perde o sinal. A Ratoeira captura e preserva o GCLID e todos os parâmetros UTM, garantindo que cada venda seja corretamente atribuída à campanha, ao conjunto e ao anúncio que a gerou.",
                image: "/gclideutms.png",
              },
              {
                icon: ShieldCheck,
                title: "Bloqueio automático de IPs inválidos",
                description:
                  "Você define o limite de cliques aceitos por IP — a Ratoeira bloqueia automaticamente quem ultrapassa. Concorrentes que clicam nos seus anúncios, bots e tráfego inválido são adicionados à lista de exclusão do Google Ads antes de consumir seu orçamento. Na maioria dos casos, o que você economiza com bloqueio já paga o plano inteiro.",
                image: "/bloqueioips.png",
                badge: "Exclusivo do Google Ads",
              },
              {
                icon: MousePointerClick,
                title: "Saiba exatamente qual campanha gerou cada venda",
                description:
                  "Com rastreamento ~100% e GCLID preservado, você enxerga a jornada completa: qual campanha, qual grupo de anúncios, qual anúncio e qual palavra-chave gerou cada conversão. Chega de otimizar por achismo. Você escala o que gera lucro e pausa o que drena — com dado real.",
                image: "/gerenciadorgoogle.png",
              },
              {
                icon: LineChart,
                title: "O iOS 14+ derrubou o rastreamento de metade do mercado. A Ratoeira recupera o seu GCLID.",
                description:
                  "A partir do iOS 14+, a Apple passou a bloquear identificadores de rastreamento em apps e navegadores mobile — e o GCLID do Google começou a se perder em parte das jornadas. Sem o GCLID, a conversão chega sem atribuição: você vendeu, mas o Google Ads não sabe qual campanha gerou. A Ratoeira contorna essa limitação com captura server-side do GCLID no primeiro clique — antes de qualquer redirecionamento — e o preserva até o momento da venda. Cada conversão volta para o Google com atribuição correta, independente do dispositivo ou do sistema operacional do comprador.",
                image: "/ios14.png",
              },
              {
                icon: Waypoints,
                title: "Google Ads + Ratoeira Pages: trackeamento do clique à venda",
                description:
                  "Quando o Google Ads opera junto com a Ratoeira Pages, a taxa de rastreamento sobe além do que cada produto entrega separado. A página confirma o clique. O clique confirma a conversão. O algoritmo recebe o sinal mais limpo possível — e otimiza para compradores reais, não para clicadores.",
                image: "/dash.png",
              },
            ].map((feature, index) => {
              const isDark = index % 2 === 0;
              return (
                <div
                  key={feature.title}
                  className={`grid gap-10 lg:grid-cols-2 ${feature.image === "/ios14.png" ? "lg:items-stretch" : "lg:items-center"} rounded-3xl p-6 sm:p-8 ${isDark ? "bg-[#0a0a0a]" : "bg-white"} ${feature.badge ? "ring-2 ring-brand-primary" : ""}`}
                >
                  <div
                    className={
                      index % 2 === 1
                        ? `space-y-6 max-w-2xl 2xl:max-w-[50rem] 4xl:max-w-[70rem] lg:order-2 ${feature.image === "/ios14.png" ? "lg:h-full lg:flex lg:flex-col lg:justify-center" : ""}`
                        : `space-y-6 max-w-2xl 2xl:max-w-[50rem] 4xl:max-w-[70rem] lg:order-1 ${feature.image === "/ios14.png" ? "lg:h-full lg:flex lg:flex-col lg:justify-center" : ""}`
                    }
                  >
                    {feature.badge && (
                      <div className="inline-flex items-center rounded-full bg-brand-primary px-3 py-1 text-xs font-black uppercase tracking-wider text-black">
                        {feature.badge}
                      </div>
                    )}
                    <div className="w-16 h-16 rounded-2xl bg-brand-primary/10 flex items-center justify-center">
                      <feature.icon className="w-8 h-8 text-brand-primary" />
                    </div>
                    <h3 className={`text-h2 font-black leading-tight tracking-tight hyphens-none ${isDark ? "text-white" : "text-[#111111]"}`}>
                      {renderNoBreakTitle(feature.title)}
                    </h3>
                    <p className={`text-body leading-relaxed hyphens-none ${isDark ? "text-gray-300" : "text-[#4b5563]"}`}>{feature.description}</p>
                  </div>

                  <div className={index % 2 === 1 ? `w-full lg:order-1 ${feature.image === "/ios14.png" ? "lg:h-full lg:flex lg:items-start" : ""}` : `w-full lg:order-2 ${feature.image === "/ios14.png" ? "lg:h-full lg:flex lg:items-start" : ""}`}>
                    {feature.image === "/ios14.png" ? (
                      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-full lg:max-h-[560px] lg:mt-[100px]">
                        <Image
                          src={feature.image}
                          alt={feature.title}
                          fill
                          sizes="(min-width: 1024px) 50vw, 100vw"
                          className="object-contain object-center"
                          priority={index < 2}
                        />
                      </div>
                    ) : (
                      <div className={`relative overflow-hidden rounded-3xl border ${isDark ? "border-white/10 bg-black/35" : "border-black/10 bg-gray-50"}`}>
                        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_20%,rgba(255,184,0,0.18),rgba(0,0,0,0))]" />
                        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_55%_at_70%_55%,rgba(255,126,74,0.10),rgba(0,0,0,0))]" />
                        <div className={`relative z-10 ${feature.image === "/googleserveraside.png" || feature.image === "/bloqueioips.png" || feature.image === "/gclideutms.png" || feature.image === "/gerenciadorgoogle.png" ? "" : "p-6 sm:p-8"}`}>
                          <div className={`relative ${feature.image === "/googleserveraside.png" || feature.image === "/bloqueioips.png" || feature.image === "/gclideutms.png" || feature.image === "/gerenciadorgoogle.png" ? "h-[clamp(260px,30vh,460px)]" : "h-[clamp(240px,28vh,420px)]"}`}>
                            <Image
                              src={feature.image}
                              alt={feature.title}
                              fill
                              sizes="(min-width: 1024px) 50vw, 100vw"
                              className={feature.image === "/gerenciadorgoogle.png" ? "object-cover object-top" : "object-cover object-center"}
                              priority={index < 2}
                            />
                          </div>
                        </div>
                        <div className={`absolute inset-0 ring-1 ${isDark ? "ring-white/10" : "ring-black/10"}`} />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="como-funciona" className="py-16 md:py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl 2xl:max-w-[90rem] 4xl:max-w-[120rem] 5xl:max-w-[140rem] 6xl:max-w-[160rem] mx-auto px-6 2xl:px-12 4xl:px-20 5xl:px-28 6xl:px-36">
          <div className="text-center mb-16 max-w-3xl 2xl:max-w-[60rem] 4xl:max-w-[80rem] mx-auto">
            <h2 className="text-h1 font-black text-white mb-6 tracking-tight leading-tight hyphens-none">
              Da ativação ao primeiro dado real <span className="whitespace-nowrap">em minutos</span>
            </h2>
            <p className="text-body-lg text-gray-300 max-w-2xl mx-auto hyphens-none">
              Um fluxo simples para transformar cliques em dados acionáveis e decisões com confiança.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: "01",
                title: "Conecte em minutos",
                description:
                  "Integre a Ratoeira Ads com o Google Ads via API de Conversões. Sem pixel no navegador, sem GTM complexo. A configuração leva minutos e os dados começam a fluir imediatamente.",
              },
              {
                number: "02",
                title: "Preserve GCLID e bloqueie fraude automaticamente",
                description:
                  "A Ratoeira captura o GCLID em cada clique e ativa o bloqueio automático de IPs que excedem o limite definido por você. Cada real do seu orçamento vai para quem tem chance real de comprar.",
              },
              {
                number: "03",
                title: "Otimize com conversão real — não com estimativa",
                description:
                  "Com ~100% de conversões rastreadas subindo para o Google Ads, o algoritmo aprende mais rápido e otimiza para quem realmente compra. Você escala com previsibilidade — não no achismo.",
              },
            ].map((step) => (
              <ShineBorder
                key={step.number}
                borderRadius={24}
                borderWidth={2}
                duration={8}
                color={["#FFB800", "#FF7E4A", "#FFB800", "#FF7E4A"]}
                className="w-full"
              >
                <div className="h-full rounded-3xl border border-white/10 bg-[#111111] p-8">
                  <div className="text-xs font-black uppercase tracking-widest text-brand-primary">
                    {step.number}
                  </div>
                  <h3 className="mt-4 text-h2 font-black text-white hyphens-none">{step.title}</h3>
                  <p className="mt-3 text-body text-gray-300 leading-relaxed hyphens-none">{step.description}</p>
                </div>
              </ShineBorder>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

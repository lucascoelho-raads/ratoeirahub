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

export default function GoogleAdsPage() {
  return (
    <main className="flex flex-col flex-1 bg-[#050505] text-white">
      <Navbar />
      <HeroGoogleAds />

      <section className="py-16 md:py-24 bg-[#050505]">
        <div className="max-w-7xl 3xl:max-w-[100rem] 4xl:max-w-[120rem] mx-auto px-6 3xl:px-12 4xl:px-20">
          <div className="text-center mb-20 max-w-3xl 3xl:max-w-[60rem] 4xl:max-w-[80rem] 3xl:max-w-[60rem] 4xl:max-w-[80rem] mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 tracking-tight text-balance">
              O <span className="text-brand-primary">Google Ads</span> só otimiza tão bem quanto o dado que recebe.
            </h2>
            <p className="text-base sm:text-xl text-gray-300 px-4 sm:px-0 text-balance">
              Quando o sinal é incompleto, o algoritmo aprende errado — e você paga por isso. A Ratoeira garante que cada
              conversão real chegue ao Google Ads com qualidade máxima, do clique ao pagamento.
            </p>
          </div>

          <div className="space-y-16 md:space-y-24">
            {[
              {
                icon: Timer,
                title: "Conversões Server-Side via API do Google",
                description:
                  "O pixel no navegador perde entre 25% e 40% das conversões por bloqueadores de anúncio, restrições de iOS e falhas de conexão. A Ratoeira envia os eventos direto pela API de Conversões do Google — server-side, sem depender do navegador do usuário. Cada venda real sobe para o Google Ads. Sem gap. Sem \"o pixel não pegou essa.\"",
                image: "/serveraside.png",
              },
              {
                icon: Target,
                title: "GCLID e UTMs preservados — atribuição certa em cada clique",
                description:
                  "O GCLID é o identificador que o Google usa para saber qual anúncio gerou qual conversão. Quando ele se perde — por redirecionamento, cookie expirado ou troca de dispositivo — a atribuição quebra e o algoritmo perde o sinal. A Ratoeira captura e preserva o GCLID e todos os parâmetros UTM, garantindo que cada venda seja corretamente atribuída à campanha, ao conjunto e ao anúncio que a gerou.",
                image: "/dashboard.png",
              },
              {
                icon: ShieldCheck,
                title: "Bloqueio automático de IPs inválidos",
                description:
                  "Você define o limite de cliques aceitos por IP — a Ratoeira bloqueia automaticamente quem ultrapassa. Concorrentes que clicam nos seus anúncios, bots e tráfego inválido são adicionados à lista de exclusão do Google Ads antes de consumir seu orçamento. Na maioria dos casos, o que você economiza com bloqueio já paga o plano inteiro.",
                image: "/ip_bloqueado.png",
              },
              {
                icon: MousePointerClick,
                title: "Saiba exatamente qual campanha gerou cada venda",
                description:
                  "Com rastreamento ~100% e GCLID preservado, você enxerga a jornada completa: qual campanha, qual grupo de anúncios, qual anúncio e qual termo de pesquisa gerou cada conversão. Chega de otimizar por achismo. Você escala o que gera lucro e pausa o que drena — com dado real.",
                image: "/dashboard.png",
              },
              {
                icon: LineChart,
                title: "Investimento, conversões e ROI. Tudo numa tela.",
                description:
                  "Campanhas do Google Ads, conversões rastreadas, bloqueios ativos e ROI real — consolidados num único dashboard. Sem alternar entre ferramentas, sem exportar relatório, sem esperar o Google processar. Você vê o que está funcionando e age antes de desperdiçar mais verba.",
                image: "/dashboard_resumo.png",
              },
              {
                icon: Waypoints,
                title: "Google Ads + Ratoeira Pages: tracking do clique à venda",
                description:
                  "Quando o Google Ads opera junto com o Ratoeira Pages, a taxa de rastreamento sobe além do que cada produto entrega separado. A página confirma o clique. O clique confirma a conversão. O algoritmo recebe o sinal mais limpo possível — e otimiza para compradores reais, não para clicadores.",
                image: "/dash.png",
              },
            ].map((feature, index) => {
              const isDark = index % 2 === 0;
              return (
                <div
                  key={feature.title}
                  className={`grid gap-10 lg:grid-cols-2 lg:items-center rounded-3xl p-6 sm:p-8 ${isDark ? "bg-[#0a0a0a]" : "bg-white"}`}
                >
                  <div
                    className={
                      index % 2 === 1
                        ? "space-y-6 max-w-2xl 3xl:max-w-[50rem] 4xl:max-w-[70rem] lg:order-2"
                        : "space-y-6 max-w-2xl 3xl:max-w-[50rem] 4xl:max-w-[70rem] lg:order-1"
                    }
                  >
                    <div className="w-16 h-16 rounded-2xl bg-brand-primary/10 flex items-center justify-center">
                      <feature.icon className="w-8 h-8 text-brand-primary" />
                    </div>
                    <h3 className={`text-2xl sm:text-3xl md:text-4xl font-black leading-tight ${isDark ? "text-white" : "text-[#111111]"}`}>
                      {feature.title}
                    </h3>
                    <p className={`text-base sm:text-xl leading-relaxed ${isDark ? "text-gray-300" : "text-[#4b5563]"}`}>{feature.description}</p>
                  </div>

                  <div className={index % 2 === 1 ? "w-full lg:order-1" : "w-full lg:order-2"}>
                    <div className={`relative overflow-hidden rounded-3xl border ${isDark ? "border-white/10 bg-black/35" : "border-black/10 bg-gray-50"}`}>
                      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_20%,rgba(255,184,0,0.18),rgba(0,0,0,0))]" />
                      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_55%_at_70%_55%,rgba(255,126,74,0.10),rgba(0,0,0,0))]" />
                      <div className="relative z-10 p-6 sm:p-8">
                        <div className="relative h-[clamp(240px,28vh,420px)]">
                          <Image
                            src={feature.image}
                            alt={feature.title}
                            fill
                            sizes="(min-width: 1024px) 50vw, 100vw"
                            className={feature.image === "/serveraside.png" ? "object-contain object-center" : "object-cover object-center"}
                            priority={index < 2}
                          />
                        </div>
                      </div>
                      <div className={`absolute inset-0 ring-1 ${isDark ? "ring-white/10" : "ring-black/10"}`} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="como-funciona" className="py-16 md:py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl 3xl:max-w-[100rem] 4xl:max-w-[120rem] mx-auto px-6 3xl:px-12 4xl:px-20">
          <div className="text-center mb-16 max-w-3xl 3xl:max-w-[60rem] 4xl:max-w-[80rem] 3xl:max-w-[60rem] 4xl:max-w-[80rem] mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
              Da ativação ao primeiro dado real em minutos
            </h2>
            <p className="text-xl text-gray-300">
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
                  <h3 className="mt-4 text-2xl font-black text-white">{step.title}</h3>
                  <p className="mt-3 text-gray-300 leading-relaxed">{step.description}</p>
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

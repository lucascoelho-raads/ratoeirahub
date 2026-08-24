"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MousePointerClick, Send, ShoppingCart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ShineBorder } from "@/components/ui/ShineBorder";

const events = [
  "Page View",
  "View Content",
  "Lead",
  "Add to Cart",
  "Initiate Checkout",
  "Purchase",
];

const steps = [
  {
    icon: MousePointerClick,
    title: "Capture cada etapa",
    description: "A Ratoeira identifica os eventos que importam desde a primeira visita à página.",
  },
  {
    icon: Send,
    title: "Envie o sinal certo",
    description: "Os eventos chegam ao TikTok Ads com os dados necessários para a atribuição da campanha.",
  },
  {
    icon: ShoppingCart,
    title: "Otimize para compra",
    description: "Com o funil visível, você reduz desperdício e direciona verba para o que gera resultado.",
  },
];

export default function TikTokAdsPage() {
  return (
    <main className="flex flex-col flex-1 bg-[#050505] text-white">
      <Navbar />

      <section className="relative overflow-hidden bg-[#050505]">
        <div aria-hidden className="pointer-events-none absolute inset-0 hidden opacity-50 lg:block">
          <div className="absolute left-0 top-0 h-[80rem] w-56 -translate-y-1/2 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,184,0,.08),transparent_80%)]" />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-[clamp(7rem,12vh,10rem)] text-center">
          <div className="mx-auto max-w-6xl">
            <h1 className="font-black leading-tight tracking-tight text-white text-[clamp(2rem,3.7vw,3.5rem)]">
              <span className="block">
                <span className="text-brand-primary">TikTok Ads</span> com eventos que mostram
              </span>
              <span className="block">o <span className="text-brand-primary">caminho</span> até a <span className="text-brand-primary">compra</span>.</span>
            </h1>
            <p className="mx-auto my-8 max-w-3xl text-body-lg leading-relaxed text-gray-300">
              Envie os eventos essenciais do seu funil para o TikTok Ads e dê ao algoritmo sinais melhores para encontrar quem realmente converte.
            </p>
            <Button asChild size="lg" className="h-14 px-8 font-bold text-black">
              <Link href="/planos#pricing-cards">
                Assinar Agora <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          <div className="mx-auto mt-12 flex h-28 w-44 items-center justify-center rounded-2xl bg-white p-4 shadow-2xl shadow-black/60 sm:h-32 sm:w-52">
            <Image src="/logos/tiktoklogo - Editado.png" alt="TikTok Ads" width={140} height={140} className="h-full w-full object-contain" priority />
          </div>
        </div>
      </section>

      <section className="bg-[#050505] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <h2 className="text-h1 mb-6 font-black leading-tight tracking-tight text-white">Os eventos que movem seu funil no TikTok Ads.</h2>
            <p className="text-body-lg text-gray-300">Da visita à compra, cada etapa vira um sinal utilizável para acompanhar o que acontece depois do clique.</p>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
            {events.map((event) => (
              <div key={event} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm font-bold text-white sm:text-base">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-primary" />
                {event}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0a0a0a] py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-h1 mb-6 font-black leading-tight tracking-tight text-white">Menos evento perdido. Mais clareza para decidir.</h2>
            <p className="text-body-lg leading-relaxed text-gray-300">Quando Page View, View Content, Lead, Add to Cart, Initiate Checkout e Purchase são enviados de forma consistente, sua operação deixa de depender apenas de cliques e passa a enxergar o avanço real no funil.</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-[#111111] p-8 sm:p-10">
            <p className="text-body leading-relaxed text-gray-300">A Ratoeira organiza os sinais de conversão para que cada campanha tenha uma leitura mais completa — da descoberta do produto até a venda.</p>
          </div>
        </div>
      </section>

      <section className="bg-[#050505] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="text-h1 mb-6 font-black leading-tight tracking-tight text-white">Do clique ao evento certo, em poucos passos.</h2>
            <p className="text-body-lg text-gray-300">Uma estrutura simples para transformar a jornada em dados acionáveis.</p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <ShineBorder key={step.title} borderRadius={24} borderWidth={2} duration={8} color={["#FFB800", "#FF7E4A", "#FFB800", "#FF7E4A"]} className="w-full">
                <div className="h-full rounded-3xl border border-white/10 bg-[#111111] p-8">
                  <div className="text-xs font-black tracking-widest text-brand-primary">0{index + 1}</div>
                  <step.icon className="mt-6 h-8 w-8 text-brand-primary" />
                  <h3 className="mt-6 text-h2 font-black text-white">{step.title}</h3>
                  <p className="mt-3 text-body leading-relaxed text-gray-300">{step.description}</p>
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

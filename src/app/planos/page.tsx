import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PricingHero from "./components/PricingHero";
import PricingTabs from "./components/PricingTabs";

export const metadata = {
  title: "Planos | Ratoeira Hub",
  description: "Escolha o plano ideal para a sua operação. Tracking server-side, páginas de alta conversão ou o ecossistema completo.",
  other: {
    link: [
      {
        rel: "preload",
        href: "https://scripts.converteai.net/aede18a7-d583-4407-85fb-04b064ef8dd8/players/6a3301b51d8db4c8e4a68d8d/v4/player.js",
        as: "script",
      },
      {
        rel: "preload",
        href: "https://scripts.converteai.net/lib/js/smartplayer-wc/v4/smartplayer.js",
        as: "script",
      },
      {
        rel: "preload",
        href: "https://cdn.converteai.net/aede18a7-d583-4407-85fb-04b064ef8dd8/6a3301a664ae5a73406a1594/main.m3u8",
        as: "fetch",
      },
      {
        rel: "dns-prefetch",
        href: "https://cdn.converteai.net",
      },
      {
        rel: "dns-prefetch",
        href: "https://scripts.converteai.net",
      },
      {
        rel: "dns-prefetch",
        href: "https://images.converteai.net",
      },
      {
        rel: "dns-prefetch",
        href: "https://license.vturb.com",
      },
    ],
  },
};

export default function PlanosPage() {
  return (
    <main className="flex flex-col flex-1 min-h-screen bg-[#050505] text-white">
      <Script
        id="vturb-speed-code"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html:
            "!function(i,n){i._plt=i._plt||(n&&n.timeOrigin?n.timeOrigin+n.now():Date.now())}(window,performance);",
        }}
      />

      <Navbar />
      
      <PricingHero />
      
      <PricingTabs />

      <Footer />
    </main>
  );
}

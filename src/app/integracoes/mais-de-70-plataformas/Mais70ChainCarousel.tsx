"use client";

import ChainCarousel, { type ChainItem } from "@/components/ui/chain-carousel";
import { TrendingUp } from "lucide-react";

const LOGO_FILES = [
  "AdCombo-logo.png",
  "CPAOMNI.jpg",
  "Coinzz.png",
  "DigitalManagerGuru.webp",
  "Doppus.jpeg",
  "Eduzz.png",
  "EverAd.png",
  "ImperiumPay.png",
  "Kirvano.webp",
  "MonadLead.jpeg",
  "SHARK-Platform-logo.png",
  "adexico_logo.jpg",
  "adsinsider.png",
  "adtech.webp",
  "aff1.png",
  "affbay.png",
  "affiliateworld.jpeg",
  "ambalaya.jpeg",
  "appmax.avif",
  "blcok2.png",
  "blitzads_limited_logo.jpeg",
  "block1.png",
  "braip.webp",
  "buygoods.png",
  "cahsfactories.webp",
  "cartpanda.png",
  "click_hunts.png",
  "clickbank.svg",
  "clickdealerltd_logo.jpeg",
  "clickhunts.png",
  "clicksadv.jpeg",
  "cpa_house.png",
  "cpacombo.webp",
  "cpagetti.png",
  "cpapro.png",
  "digistore.png",
  "drcash.png",
  "eliteaffiliates.png",
  "everflow.png",
  "gasmobi.webp",
  "giant_mobi.png",
  "gurumedia.png",
  "health_trader.png",
  "hebreus.png",
  "hotmart.jpg",
  "jvzoo.png",
  "kawailogo.png",
  "keedpay.jpeg",
  "kiwify.png",
  "kma.png",
  "lead_reaktor.png",
  "leadbeat.png",
  "leadrock.png",
  "lemonad.png",
  "logzz.png",
  "manymoney.png",
  "marketeershub.png",
  "maxbounty.png",
  "maxweb.png",
  "mediascalers.png",
  "metacpa.jpg",
  "monetizze.png",
  "moreniche.png",
  "mylead.png",
  "nutrabank.png",
  "nutrahub.jpeg",
  "nutriprofits.png",
  "offersify.png",
  "orbio.png",
  "pagtrust.png",
  "payt.png",
  "perfectpay.png",
  "profitin.png",
  "profitnxt.png",
  "profitpay.png",
  "sellhealth.png",
  "shakespro.png",
  "skylead_logo.png",
  "smartadv_logo.png",
  "smashloud.png",
  "terraleads.png",
  "ticto.png",
  "traffic_light.png",
  "webvork.png",
  "yampi.png",
] as const;

function humanizeLogoName(fileName: string) {
  const withoutExt = fileName.replace(/\.[^.]+$/, "");
  if (withoutExt.toLowerCase() === "kawailogo" || withoutExt.toLowerCase() === "kwailogo") return "Kwai";
  if (withoutExt.toLowerCase() === "adcombo-logo") return "AdCombo";
  if (withoutExt.toLowerCase() === "adexico_logo") return "Adexico";
  if (withoutExt.toLowerCase() === "blitzads_limited_logo") return "Blitzads Limited";
  if (withoutExt.toLowerCase() === "clickdealerltd_logo") return "Clickdealerltd";
  if (withoutExt.toLowerCase() === "shark-platform-logo") return "SHARK Platform";
  return withoutExt
    .replace(/[_-]+/g, " ")
    .replace(/\b\w/g, (m) => m.toUpperCase())
    .trim();
}

export default function Mais70ChainCarousel() {
  const safeFiles = LOGO_FILES.filter((name) => !name.includes(" "));
  const items: ChainItem[] = safeFiles.slice(0, 70).map((file, idx) => ({
    id: `${idx}-${file}`,
    name: humanizeLogoName(file),
    icon: TrendingUp,
    logo: `/logos/${file}`,
  }));

  return (
    <section className="py-20 bg-[#050505]">
      <div className="max-w-7xl 2xl:max-w-[92%] 4xl:max-w-[120rem] 5xl:max-w-[140rem] 6xl:max-w-[160rem] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 4xl:px-20 5xl:px-28 6xl:px-36">
        <h2 className="text-center text-2xl md:text-4xl font-black text-[#FFB800] tracking-tight">
          Conexão em minutos. Zero retrabalho.
        </h2>
        <div className="h-10" />
        <ChainCarousel items={items} visibleItemCount={9} scrollSpeedMs={1200} />
      </div>
    </section>
  );
}

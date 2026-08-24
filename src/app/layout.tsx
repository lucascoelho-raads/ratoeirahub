import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import TrackingProvider from "@/components/TrackingProvider";
import { LanguageProvider } from "@/contexts/LanguageContext";
import MotionProvider from "@/components/MotionProvider";
import OffscreenAnimationPauser from "@/components/OffscreenAnimationPauser";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Ratoeira Pages — Tracking ~100% e páginas que convertem para Google e Meta Ads",
  description:
    "Ecossistema integrado de tracking server-side e landing pages para quem anuncia com Tráfego Pago. Rastreie ~100% das conversões, bloqueie cliques fraudulentos e construa páginas que vendem — tudo num único dashboard, em tempo real.",
  keywords:
    "tracking server-side, API de conversões, Meta Ads, Google Ads, bloqueio de fraude, landing pages, Flash Pages, Ratoeira Pages, Ratoeira Ads, rastreamento de conversões",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Ratoeira Pages — Tracking ~100% e páginas que convertem",
    description:
      "Tracking server-side, bloqueio de fraude e landing pages integradas — para quem anuncia no Google Ads e Meta Ads.",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} h-full scroll-smooth`}>
      <head />
      <body className="min-h-full flex flex-col antialiased">
        <LanguageProvider>
          <MotionProvider>
            <TrackingProvider />
            {children}
            <OffscreenAnimationPauser />
          </MotionProvider>
        </LanguageProvider>
        <WhatsAppButton />
      </body>
      <Script
        id="gtm-bootstrap"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer=window.dataLayer||[];window.dataLayer.push({'gtm.start':Date.now(),event:'gtm.js'});`,
        }}
      />
      <Script
        id="gtm-script"
        src="https://www.googletagmanager.com/gtm.js?id=GTM-W9MQ5VQT"
        strategy="lazyOnload"
      />
      <Script
        defer
        src="https://cdn.radimarkt.com/tag.js"
        data-tag-id="10873-ac52aed3fa31418b859fea83d6f5c68e"
        data-event-host="api.radimarkt.com"
        data-plat-params="src,sck,utm_medium,utm_campaign,utm_content,utm_source"
        strategy="lazyOnload"
      />
    </html>
  );
}

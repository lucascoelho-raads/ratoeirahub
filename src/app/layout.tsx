import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Ratoeira Hub — Atendimento inteligente para sua empresa",
  description:
    "Plataforma de atendimento ao cliente com IA para aumentar conversões e reduzir o tempo de resposta. Integre WhatsApp, Instagram e muito mais.",
  keywords: "atendimento, CRM, chatbot, IA, WhatsApp, suporte ao cliente",
  openGraph: {
    title: "Ratoeira Hub — Atendimento inteligente",
    description: "A plataforma mais completa para atendimento ao cliente com IA",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} h-full scroll-smooth`}>
      <head>
        <Script id="gtm-head" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W9MQ5VQT');`}
        </Script>
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W9MQ5VQT" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}

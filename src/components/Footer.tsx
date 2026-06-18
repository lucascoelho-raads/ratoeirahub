"use client";

import Link from "next/link";
import { Instagram } from "lucide-react";
import SpotlightBackground from "@/components/ui/spotlight-background";

const footerLinks = {
  Produto: [
    { href: "/#solucoes", label: "Funcionalidades" },
    { href: "/integracoes/mais-de-70-plataformas", label: "Integrações" },
    { href: "/planos#pricing-cards", label: "Preços" },
  ],
  Empresa: [
    { href: "/quem-somos", label: "Sobre nós" },
    { href: "/parcerias", label: "Parcerias" },
  ],
  Suporte: [
    { href: "/faq", label: "Central de Ajuda" },
    { href: "/fale-conosco", label: "Falar com vendas" },
  ],
  Legal: [
    { href: "/privacidade/ads", label: "Privacidade" },
    { href: "/termos-de-uso/ads", label: "Termos de uso" },
  ],
};

const socialLinks = [{ href: "#", icon: Instagram, label: "Instagram" }];

export default function Footer() {
  return (
    <>
      <SpotlightBackground>
        <footer className="text-gray-400 safe-area-bottom">
          <div className="max-w-7xl 2xl:max-w-[90rem] 4xl:max-w-[120rem] 5xl:max-w-[140rem] 6xl:max-w-[160rem] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 4xl:px-20 5xl:px-28 6xl:px-36">
            {/* Main footer */}
            <div className="py-12 md:py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-8 text-center sm:text-left">
              {/* Brand column */}
              <div className="col-span-1 sm:col-span-2">
                <Link
                  href="/"
                  className="flex items-center gap-6 group mb-5 w-fit mx-auto sm:mx-0"
                >
                  <div className="h-[40px] w-14 overflow-hidden">
                    <img
                      src="/logohub.png"
                      alt="Ratoeira Hub"
                      className="w-full h-auto shadow-lg shadow-yellow-500/20"
                    />
                  </div>
                  <span className="text-xl font-black text-brand-primary">
                    Ratoeira Hub
                  </span>
                </Link>
                <p className="text-sm text-gray-50 leading-relaxed mb-6 max-w-xs mx-auto sm:mx-0">
                  A plataforma completa de rastreamento e páginas para
                  anunciantes que<br className="md:hidden" /> querem escalar com dado real.
                </p>
                {/* Social */}
                <div className="flex items-center gap-3 justify-center sm:justify-start">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-11 h-11 md:w-9 md:h-9 rounded-button bg-gray-800 hover:bg-yellow-500 border border-gray-700 hover:border-yellow-400 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200 hover:scale-110"
                    >
                      <social.icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>

                {/* Informações Legais */}
                <div className="mt-6 space-y-1 text-[11px] leading-relaxed text-gray-500 text-center sm:text-left">
                  <p>Ratoeira Ads - CNPJ: 55.824.986/0001-06</p>
                  <p>Ratoeira Pages - CNPJ: 62.829.447/0001-25</p>
                  <p>
                    Endereço: Alameda Rio Negro, 503, sala 2020, Alphaville,
                    Barueri/SP, CEP: 06.454-000
                  </p>
                </div>
              </div>

              {/* Links columns — 2-col grid on mobile, 4-col on md */}
              <div className="col-span-1 sm:col-span-2 grid grid-cols-2 gap-8 sm:contents">
                {Object.entries(footerLinks).map(([category, links]) => (
                  <div key={category}>
                    <h4 className="text-white font-bold text-sm mb-4 tracking-wide">
                      {category}
                    </h4>
                    <ul className="space-y-2.5">
                      {links.map((link) => (
                        <li key={link.label}>
                          <Link
                            href={link.href}
                            className="inline-flex min-h-11 items-center text-sm text-gray-50 hover:text-yellow-400 transition-colors duration-200"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-gray-800 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-gray-50">
                © {new Date().getFullYear()} Ratoeira Hub Technologies. Todos os
                direitos reservados.
              </p>
              <div className="flex items-center gap-1.5 text-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-gray-50">
                  Todos os sistemas operacionais
                </span>
              </div>
            </div>
          </div>
        </footer>
      </SpotlightBackground>
    </>
  );
}

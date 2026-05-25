"use client";

import Link from "next/link";
import { ArrowRight, Zap, Twitter, Linkedin, Instagram, Github } from "lucide-react";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import SpotlightBackground from "@/components/ui/spotlight-background";

const footerLinks = {
  Produto: [
    { href: "#plataforma", label: "Funcionalidades" },
    { href: "#integracoes", label: "Integrações" },
    { href: "#precos", label: "Preços" },
    { href: "#", label: "Novidades" },
    { href: "#", label: "API" },
  ],
  Empresa: [
    { href: "#", label: "Sobre nós" },
    { href: "#clientes", label: "Clientes" },
    { href: "#", label: "Blog" },
    { href: "#", label: "Carreiras" },
    { href: "#", label: "Parceiros" },
  ],
  Suporte: [
    { href: "#", label: "Central de Ajuda" },
    { href: "#", label: "Status" },
    { href: "#demo", label: "Falar com vendas" },
    { href: "#", label: "Comunidade" },
    { href: "#", label: "Webinars" },
  ],
  Legal: [
    { href: "/privacidade/ads", label: "Privacidade" },
    { href: "/termos-de-uso/ads", label: "Termos de uso" },
    { href: "#", label: "Cookies" },
    { href: "#", label: "LGPD" },
  ],
};

const socialLinks = [
  { href: "#", icon: Twitter, label: "Twitter" },
  { href: "#", icon: Linkedin, label: "LinkedIn" },
  { href: "#", icon: Instagram, label: "Instagram" },
  { href: "#", icon: Github, label: "GitHub" },
];

export default function Footer() {
  const pathname = usePathname();
  const showTransformSection = true;
  const isLightBackground = pathname === "/design-system";

  const countries = useMemo(
    () => [
      { code: "BR", name: "Brasil", dial: "+55", flag: "🇧🇷" },
      { code: "PT", name: "Portugal", dial: "+351", flag: "🇵🇹" },
      { code: "US", name: "Estados Unidos", dial: "+1", flag: "🇺🇸" },
      { code: "GB", name: "Reino Unido", dial: "+44", flag: "🇬🇧" },
      { code: "ES", name: "Espanha", dial: "+34", flag: "🇪🇸" },
      { code: "MX", name: "México", dial: "+52", flag: "🇲🇽" },
      { code: "AR", name: "Argentina", dial: "+54", flag: "🇦🇷" },
      { code: "CL", name: "Chile", dial: "+56", flag: "🇨🇱" },
      { code: "CO", name: "Colômbia", dial: "+57", flag: "🇨🇴" },
    ],
    [],
  );

  const [step, setStep] = useState<1 | 2>(1);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("BR");
  const [phone, setPhone] = useState("");
  const [mainRole, setMainRole] = useState("");
  const [mainTrafficSource, setMainTrafficSource] = useState("");

  const selectedCountry = useMemo(
    () => countries.find((c) => c.code === countryCode) ?? countries[0],
    [countries, countryCode],
  );

  const sectionClassName = isLightBackground ? "bg-surface-default text-text-primary" : "bg-[#050505] text-white";
  const subtitleClassName = isLightBackground ? "text-gray-600" : "text-gray-300";
  const cardClassName = isLightBackground
    ? "bg-white border border-black/5 shadow-2xl shadow-black/10"
    : "bg-[#0B0B0B] border border-white/10 shadow-2xl shadow-black/40";
  const labelClassName = isLightBackground ? "text-gray-800" : "text-gray-200";
  const inputClassName = isLightBackground
    ? "border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 focus:ring-orange-500/40 focus:border-orange-400"
    : "border-white/10 bg-[#111111] text-white placeholder:text-gray-500 focus:ring-orange-500/30 focus:border-orange-500/60";
  const titleBaseClassName = isLightBackground ? "text-gray-900" : "text-white";

  return (
    <>
      {showTransformSection && (
        <section id="vamos-transformar" className={sectionClassName}>
          <AuroraBackground>
          <div className="max-w-7xl 3xl:max-w-[100rem] 4xl:max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-8 3xl:px-12 4xl:px-20 py-16 md:py-20 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
              <div className="max-w-xl 3xl:max-w-[40rem] 4xl:max-w-[60rem] text-center lg:text-left mx-auto lg:mx-0">
                <h2 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.98] ${titleBaseClassName}`}>
                  Vamos <span className="text-orange-500">estruturar</span> sua operação?
                </h2>
                <p className={`mt-7 text-base sm:text-lg leading-relaxed ${subtitleClassName}`}>
                  Preencha seu cadastro ative agora mesmo seu plano <span className="text-orange-500 font-bold">GRATUITO</span>. Sem cartão, sem pix. Apenas cadastre-se e receba o acesso.
                </p>
              </div>

              <div className={`mx-auto w-full max-w-xl 3xl:max-w-[40rem] 4xl:max-w-[60rem] rounded-[28px] p-8 sm:p-10 ${cardClassName}`}>
                <form
                  noValidate
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (step === 1) {
                      setStep(2);
                      return;
                    }
                    if (!fullName.trim() || !email.trim() || !phone.trim()) return;
                    if (!mainRole || !mainTrafficSource) return;
                  }}
                  className="space-y-6"
                >
                  {step === 1 && (
                    <>
                      <div className="space-y-2">
                        <label className={`text-sm font-bold ${labelClassName}`}>Nome Completo</label>
                        <input
                          type="text"
                          placeholder="Seu nome"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          className={`w-full rounded-2xl border px-5 py-4 text-base outline-none focus:ring-2 ${inputClassName}`}
                        />
                      </div>

                      <div className="space-y-2">
                        <label className={`text-sm font-bold ${labelClassName}`}>E-mail</label>
                        <input
                          type="email"
                          placeholder="seu@email.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className={`w-full rounded-2xl border px-5 py-4 text-base outline-none focus:ring-2 ${inputClassName}`}
                        />
                      </div>

                      <div className="space-y-2">
                        <label className={`text-sm font-bold ${labelClassName}`}>Telefone</label>
                        <div className="flex items-stretch gap-3">
                          <select
                            value={countryCode}
                            onChange={(e) => setCountryCode(e.target.value)}
                            className={`w-[150px] rounded-2xl border px-4 py-4 text-base outline-none focus:ring-2 ${inputClassName}`}
                          >
                            {countries.map((c) => (
                              <option key={c.code} value={c.code}>
                                {c.flag} {c.dial}
                              </option>
                            ))}
                          </select>

                          <input
                            type="tel"
                            inputMode="tel"
                            placeholder={`${selectedCountry.dial} (DDD) 99999-9999`}
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className={`flex-1 rounded-2xl border px-5 py-4 text-base outline-none focus:ring-2 ${inputClassName}`}
                          />
                        </div>
                        <div className={isLightBackground ? "text-xs text-gray-500" : "text-xs text-gray-400"}>
                          {selectedCountry.flag} {selectedCountry.name} · DDI {selectedCountry.dial}
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="w-full rounded-2xl bg-orange-500 text-white font-bold text-lg py-5 shadow-xl shadow-orange-500/20 hover:bg-orange-400 transition-colors flex items-center justify-center gap-3"
                      >
                        Começar Grátis <ArrowRight className="w-5 h-5" />
                      </button>
                    </>
                  )}

                  {step === 2 && (
                    <>
                      <div className="space-y-2">
                        <label className={`text-sm font-bold ${labelClassName}`}>Área de Atuação principal</label>
                        <select
                          value={mainRole}
                          onChange={(e) => setMainRole(e.target.value)}
                          className={`w-full appearance-none rounded-2xl border px-5 py-4 text-base outline-none focus:ring-2 ${inputClassName}`}
                        >
                          <option value="" disabled>
                            Selecione uma opção
                          </option>
                          <option value="Anunciante">Anunciante</option>
                          <option value="Infoprodutor">Infoprodutor</option>
                          <option value="Gestor de Tráfego">Gestor de Tráfego</option>
                          <option value="Agência">Agência</option>
                          <option value="Ainda Não Comecei">Ainda Não Comecei</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className={`text-sm font-bold ${labelClassName}`}>Principal Fonte de Tráfego</label>
                        <select
                          value={mainTrafficSource}
                          onChange={(e) => setMainTrafficSource(e.target.value)}
                          className={`w-full appearance-none rounded-2xl border px-5 py-4 text-base outline-none focus:ring-2 ${inputClassName}`}
                        >
                          <option value="" disabled>
                            Selecione uma opção
                          </option>
                          <option value="Google Ads / YouTube">Google Ads/YouTube</option>
                          <option value="Meta Ads (Facebook/Instagram)">Meta Ads (Facebook/Instagram)</option>
                          <option value="Native Ads (Taboola/Outbrain)">Native Ads (Taboola/Outbrain)</option>
                          <option value="TikTok Ads">Tik Tok Ads</option>
                          <option value="Orgânico">Orgânico</option>
                        </select>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          className={
                            isLightBackground
                              ? "w-full sm:w-auto rounded-2xl border border-black/10 bg-white text-gray-900 font-bold text-base py-4 px-6 hover:bg-black/5 transition-colors"
                              : "w-full sm:w-auto rounded-2xl border border-white/10 bg-white/5 text-white font-bold text-base py-4 px-6 hover:bg-white/10 transition-colors"
                          }
                        >
                          Voltar
                        </button>

                        <button
                          type="submit"
                          className="flex-1 rounded-2xl bg-orange-500 text-white font-bold text-lg py-5 shadow-xl shadow-orange-500/20 hover:bg-orange-400 transition-colors flex items-center justify-center gap-3"
                        >
                          Enviar <ArrowRight className="w-5 h-5" />
                        </button>
                      </div>
                    </>
                  )}
                </form>
              </div>
            </div>
          </div>
          </AuroraBackground>
        </section>
      )}

      <SpotlightBackground>
      <footer className="text-gray-400">
        <div className="max-w-7xl 3xl:max-w-[100rem] 4xl:max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-8 3xl:px-12 4xl:px-20">
          {/* Main footer */}
          <div className="py-12 md:py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-8 text-center sm:text-left">
            {/* Brand column */}
            <div className="col-span-1 sm:col-span-2">
              <Link href="/" className="flex items-center gap-2.5 group mb-5 w-fit mx-auto sm:mx-0">
                <div className="w-9 h-9 rounded-button bg-linear-to-br from-yellow-500 to-orange-500 flex items-center justify-center shadow-lg shadow-yellow-500/20">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-black text-white">Ratoeira Hub</span>
              </Link>
              <p className="text-sm text-gray-500 leading-relaxed mb-6 max-w-xs mx-auto sm:mx-0">
                A plataforma completa de rastreamento e páginas para anunciantes que querem escalar com dado real.
              </p>
              {/* Social */}
              <div className="flex items-center gap-3 justify-center sm:justify-start">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 rounded-button bg-gray-800 hover:bg-yellow-500 border border-gray-700 hover:border-yellow-400 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200 hover:scale-110"
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links columns */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-white font-bold text-sm mb-4 tracking-wide">{category}</h4>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-gray-500 hover:text-yellow-400 transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="border-t border-gray-800 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-600">
              © {new Date().getFullYear()} Ratoeira Hub Technologies. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-1.5 text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-gray-600">Todos os sistemas operacionais</span>
            </div>
          </div>
        </div>
      </footer>
      </SpotlightBackground>
    </>
  );
}

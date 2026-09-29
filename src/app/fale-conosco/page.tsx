"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Clock, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";
import { WHATSAPP_SUPPORT_URL } from "@/components/WhatsAppButton";

export default function FaleConoscoPage() {
  const { t } = useLanguage();
  return (
    <main className="flex flex-col flex-1 min-h-screen bg-white">
      <Navbar />

      {/* Hero pequeno para dar contexto */}
      <section className="pt-28 pb-8 bg-[#050505]">
        <div className="max-w-6xl 2xl:max-w-6xl 4xl:max-w-[110rem] 5xl:max-w-[130rem] 6xl:max-w-[150rem] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 4xl:px-20 5xl:px-28 6xl:px-36 text-center">
          <h1 className="text-display font-black text-white leading-tight text-center" dangerouslySetInnerHTML={{ __html: t("contact.hero.title") }} />
          <p className="mt-4 text-gray-400 text-base sm:text-lg max-w-2xl 2xl:max-w-[50rem] 4xl:max-w-[70rem] mx-auto ">
            {t("contact.hero.subtitle")}
          </p>
        </div>
      </section>

      {/* Horários de Funcionamento */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl 2xl:max-w-4xl 4xl:max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 4xl:px-20">
          <div className="flex items-center justify-center gap-3 mb-12">
            <Clock className="w-8 h-8 text-brand-primary" />
            <h2 className="text-h1 font-black text-gray-900">{t("contact.hours.title")}</h2>
          </div>

          <div className="mx-auto max-w-2xl rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:p-8">
            <div className="space-y-4">
              <div className="flex flex-col gap-1 border-b border-gray-200 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                <span className="font-medium text-gray-600">{t("contact.days.weekdays")}</span>
                <span className="whitespace-nowrap font-bold text-gray-900">{t("contact.hours.weekday")}</span>
              </div>
              <div className="flex flex-col gap-1 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                <span className="font-medium text-gray-600">{t("contact.days.weekend")}</span>
                <span className="whitespace-nowrap font-bold text-gray-900">{t("contact.hours.weekend")}</span>
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <Link href={WHATSAPP_SUPPORT_URL} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-button bg-brand-primary px-6 py-3 font-semibold text-gray-900 transition-colors hover:bg-brand-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2">
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Falar com Suporte
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

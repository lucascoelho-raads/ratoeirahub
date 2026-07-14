"use client";

import { useLanguage } from "@/contexts/LanguageContext";

interface TranslatableTextProps {
  translationKey: string;
  className?: string;
  as?: "span" | "div" | "h1" | "h2" | "h3" | "h4" | "p" | "strong" | "em";
}

/**
 * Componente que renderiza texto traduzido.
 * Detecta automaticamente se a string contém HTML e usa dangerouslySetInnerHTML
 * se necessário. Caso contrário, renderiza como texto puro.
 *
 * @example
 * <T translationKey="about.timeline.header" as="h2" className="text-xl" />
 */
export function T({ translationKey, className, as: Tag = "span" }: TranslatableTextProps) {
  const { t } = useLanguage();
  const value = t(translationKey);

  // Detecta se tem HTML
  const hasHTML = /<[a-z][\s\S]*>/i.test(value);

  if (hasHTML) {
    return <Tag className={className} dangerouslySetInnerHTML={{ __html: value }} />;
  }

  return <Tag className={className}>{value}</Tag>;
}

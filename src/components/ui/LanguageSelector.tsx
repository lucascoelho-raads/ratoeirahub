"use client";

import { useState, useRef, useEffect } from "react";
import { Globe, ChevronDown } from "lucide-react";
import { useLanguage, Language } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

const languages: { code: Language; label: string; flag: string }[] = [
  { code: "pt-BR", label: "Português", flag: "🇧🇷" },
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "es", label: "Español", flag: "🇪🇸" },
];

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLang = languages.find((l) => l.code === language) || languages[0];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex items-center gap-2.5 rounded-button px-4 py-2.5 text-base font-semibold transition-colors",
          "text-[#FFB800] hover:bg-white/10",
          isOpen && "bg-white/10",
        )}
        aria-label="Selecionar idioma"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <Globe className="size-5" strokeWidth={1.6} />
        <span className="hidden sm:inline text-lg leading-none">{currentLang.flag}</span>
        <ChevronDown
          className={cn(
            "size-4 transition-transform duration-200",
            isOpen && "rotate-180",
          )}
          strokeWidth={1.6}
        />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div
            role="listbox"
            className={cn(
              "absolute right-0 top-full mt-2 z-50",
              "min-w-48 rounded-button border border-white/10",
              "bg-[#0a0a0a] backdrop-blur-xl shadow-xl",
              "overflow-hidden",
            )}
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                role="option"
                aria-selected={lang.code === language}
                onClick={() => {
                  setLanguage(lang.code);
                  setIsOpen(false);
                }}
                className={cn(
                  "flex w-full items-center gap-3 px-4 py-3.5 text-base",
                  "transition-colors duration-150",
                  "hover:bg-white/10",
                  lang.code === language && "bg-white/5",
                )}
              >
                <span className="text-xl leading-none">{lang.flag}</span>
                <span className="flex-1 text-left text-[#FFB800]">{lang.label}</span>
                {lang.code === language && (
                  <span className="text-[#FFB800]">✓</span>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

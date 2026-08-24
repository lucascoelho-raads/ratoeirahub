"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    gtag?: (...args: unknown[]) => void;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    google?: any;
  }
}

export function GoogleTranslate() {
  const containerRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);

  useEffect(() => {
    // Avoid re-initializing
    if (initialized.current) return;
    initialized.current = true;

    // Check if already loaded
    if (window.googleTranslateElementInit) return;

    // Define the init callback
    window.googleTranslateElementInit = () => {
      if (window.google && containerRef.current) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "pt-BR",
            includedLanguages: "pt-BR,en,es",
            layout: window.google.translate.TranslateElement.InlineLayout.HORIZONTAL,
            autoDisplay: false,
          },
          containerRef.current,
        );
      }
    };

    // Load the Google Translate script
    const script = document.createElement("script");
    script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.head.appendChild(script);
  }, []);

  return (
    <div className="google-translate-container">
      <div ref={containerRef} id="google_translate_element" />
      <style>{`
        .google-translate-container {
          display: none;
        }
        .goog-te-gadget {
          font-family: inherit !important;
          font-size: inherit !important;
        }
        .goog-te-gadget .goog-te-combo {
          display: none !important;
        }
        .goog-te-gadget-simple {
          background: transparent !important;
          border: none !important;
        }
        .goog-te-gadget-simple .goog-te-menu-value {
          color: #FFB800 !important;
        }
        .goog-te-gadget-simple .goog-te-menu-value span {
          color: #FFB800 !important;
          border-right: none !important;
        }
        .goog-te-gadget-simple .goog-te-menu-value:after {
          color: #FFB800 !important;
        }
        .goog-te-banner-frame {
          display: none !important;
        }
        body {
          top: 0 !important;
        }
        .skiptranslate {
          display: none !important;
        }
        #goog-gt-tt {
          display: none !important;
        }
      `}</style>
    </div>
  );
}

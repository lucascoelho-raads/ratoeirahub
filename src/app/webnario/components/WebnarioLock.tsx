"use client";

import { useEffect } from "react";

export default function WebnarioLock() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Bloqueia o botão "voltar" do navegador ao substituir a entrada atual
    // e empilhar a mesma URL, fazendo com que voltar fique preso nesta página.
    window.history.replaceState({ webnario: true }, "", "/webnario");
    window.history.pushState({ webnario: true }, "", "/webnario");

    function handlePopState(event: PopStateEvent) {
      event.preventDefault();
      window.history.pushState({ webnario: true }, "", "/webnario");
    }

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  return null;
}

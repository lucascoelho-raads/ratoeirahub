"use client";

/**
 * Wrapper de compatibilidade.
 *
 * Este arquivo existia para carregar o player Vturb (Converteai).
 * Agora a página /planos usa YouTubePlayer — este stub é mantido apenas
 * para evitar quebrar imports legados em arquivos não migrados.
 *
 * Se você encontrar um import deste componente, troque por YouTubePlayer.
 */
import YouTubePlayer from "./YouTubePlayer";

export default function VturbPlayer() {
  return <YouTubePlayer videoId="xFSuSYcFTYs" title="Apresentação Ratoeira" />;
}

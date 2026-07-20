"use client";

/**
 * Player nativo do YouTube (iframe com Lite Embed).
 *
 * Substitui o antigo VturbPlayer — usa o ID direto do YouTube em vez de
 * carregar o script do Converteai/Vturb, o que reduz drasticamente o
 * tempo de carregamento da página.
 *
 * Props:
 *  - videoId: ID do vídeo no YouTube (ex.: "dQw4w9WgXcQ")
 *  - title: texto alternativo para acessibilidade
 */
export default function YouTubePlayer({
  videoId,
  title = "Video",
}: {
  videoId: string;
  title?: string;
}) {
  return (
    <iframe
      src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      className="absolute inset-0 w-full h-full"
      loading="lazy"
    />
  );
}
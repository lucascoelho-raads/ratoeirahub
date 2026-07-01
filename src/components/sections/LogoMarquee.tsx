"use client";

const platforms = [
  { name: "Google Ads", logo: "/icons/pricing/google-ads.webp" },
  { name: "Meta Ads", logo: "/icons/pricing/meta-ads.png" },
  { name: "Taboola", logo: "/taboolalogo.png" },
  { name: "NewsBreak", logo: "/newbreaklogo.webp" },
];

export default function LogoMarquee() {
  return (
    <section className="relative bg-[#050505] border-y border-white/5 py-8 md:py-10 overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 z-10 bg-gradient-to-r from-[#050505] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 z-10 bg-gradient-to-l from-[#050505] to-transparent" />

      <div className="logo-marquee-track flex">
        {[0, 1, 2, 3].map((group) => (
          <div key={group} className="flex shrink-0">
            {platforms.map((platform) => (
              <div
                key={`${platform.name}-${group}`}
                className="flex flex-col items-center justify-center gap-2 w-[120px] md:w-[160px] mr-12 md:mr-20"
              >
                <img
                  src={platform.logo}
                  alt={platform.name}
                  className="h-9 md:h-12 w-auto object-contain"
                />
                <span className="text-xs md:text-sm font-semibold text-gray-400 tracking-wide">
                  {platform.name}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes logo-marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-25%);
          }
        }
        .logo-marquee-track {
          animation: logo-marquee 25s linear infinite;
          width: max-content;
        }
      `}</style>
    </section>
  );
}

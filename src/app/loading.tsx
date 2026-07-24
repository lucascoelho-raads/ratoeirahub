export default function Loading() {
  return (
    <div
      role="status"
      aria-label="Carregando"
      className="fixed inset-x-0 top-20 z-40 pointer-events-none"
    >
      <div className="h-0.5 w-full overflow-hidden bg-transparent">
        <div className="h-full w-1/3 bg-brand-primary animate-[loading-bar_1.1s_ease-in-out_infinite]" />
      </div>
      <style>{`
        @keyframes loading-bar {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
      `}</style>
    </div>
  );
}
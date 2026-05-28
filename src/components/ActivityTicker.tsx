"use client";
import { useEffect, useState } from "react";

const ACTIVITIES = [
  { ago: "há 2 dias", what: "Cozinha pintada", where: "Alcochete", rating: "★★★★★" },
  { ago: "há 4 dias", what: "Fachada concluída", where: "Setúbal", rating: "★★★★★" },
  { ago: "há 1 semana", what: "Apartamento T2", where: "Montijo", rating: "★★★★★" },
  { ago: "há 9 dias", what: "Moradia interior", where: "Palmela", rating: "★★★★★" },
  { ago: "há 12 dias", what: "Lacagem de portas", where: "Lisboa", rating: "★★★★★" },
];

export default function ActivityTicker({
  bg = "#0E0E10",
  text = "#F2F0EC",
  accent = "#1F9A9A",
  border = "#2A2A2F",
}: {
  bg?: string;
  text?: string;
  accent?: string;
  border?: string;
}) {
  const [i, setI] = useState(0);
  const [visible, setVisible] = useState(false);

  // Show after small delay so it doesn't fight the loader
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 3500);
    return () => clearTimeout(t);
  }, []);

  // Rotate every 6s
  useEffect(() => {
    if (!visible) return;
    const t = setInterval(() => setI((c) => (c + 1) % ACTIVITIES.length), 6000);
    return () => clearInterval(t);
  }, [visible]);

  const a = ACTIVITIES[i];

  return (
    <div
      className={`hidden md:flex fixed bottom-6 left-6 z-30 items-center gap-3 pl-3 pr-4 py-2.5 rounded-full border backdrop-blur transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"
      }`}
      style={{ background: `${bg}E0`, borderColor: border, color: text }}
    >
      <span className="relative flex h-2 w-2 flex-shrink-0">
        <span className="absolute inset-0 rounded-full animate-ping opacity-60" style={{ background: accent }} />
        <span className="relative rounded-full h-2 w-2" style={{ background: accent }} />
      </span>
      <div key={i} className="flex items-center gap-2 text-xs whitespace-nowrap" style={{ animation: "tickerIn 600ms ease-out" }}>
        <span className="font-mono uppercase tracking-wider opacity-60">{a.ago}</span>
        <span className="opacity-30">·</span>
        <span className="font-medium">{a.what}</span>
        <span className="opacity-30">·</span>
        <span className="opacity-70">{a.where}</span>
        <span className="opacity-30">·</span>
        <span style={{ color: accent }}>{a.rating}</span>
      </div>
      <style>{`
        @keyframes tickerIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

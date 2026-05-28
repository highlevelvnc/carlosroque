"use client";
import { useEffect, useRef, useState } from "react";

export default function AirlessShowcase({
  src = "/portfolio/airless.mp4",
  accent = "#1F9A9A",
  bg = "#16161A",
  text = "#F2F0EC",
  textDim = "#A6A29A",
  border = "#2A2A2F",
  display,
}: {
  src?: string;
  accent?: string;
  bg?: string;
  text?: string;
  textDim?: string;
  border?: string;
  display?: React.CSSProperties;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  // Auto-play when in view; pause when out
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) el.play().catch(() => {});
        else el.pause();
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      className="py-24 lg:py-32 border-y"
      style={{ background: bg, borderColor: border }}
    >
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* Copy left */}
        <div className="lg:col-span-5">
          <div
            className="text-[10px] uppercase tracking-[0.3em] mb-4 font-mono"
            style={{ color: accent }}
          >
            {"// "}sistema airless
          </div>
          <h2
            className="font-display text-4xl lg:text-6xl leading-[0.95]"
            style={{ ...display, color: text }}
          >
            Pintura a <span className="italic" style={{ color: accent }}>pistola airless</span>.
          </h2>
          <p className="mt-6 leading-relaxed" style={{ color: textDim }}>
            Para obras de grande porte usamos equipamento <span style={{ color: text }}>airless profissional</span> — pintura a pistola sem ar comprimido. Acabamento mais uniforme, sem rolo nem pinceladas, 3× mais rápido que a aplicação tradicional.
          </p>

          <ul className="mt-8 space-y-2.5 text-sm">
            {[
              "Acabamento uniforme em fachadas e tectos altos",
              "3× mais rápido que rolo tradicional",
              "Menor desperdício de tinta",
              "Ideal para prédios novos, lojas e moradias grandes",
            ].map((it) => (
              <li key={it} className="flex items-start gap-3" style={{ color: text }}>
                <span className="mt-[7px] w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: accent }} />
                <span>{it}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Video right */}
        <div className="lg:col-span-7">
          <div
            className="relative aspect-[9/16] sm:aspect-video rounded-lg overflow-hidden border"
            style={{ borderColor: border, background: "#0E0E10" }}
          >
            <video
              ref={ref}
              src={src}
              autoPlay
              loop
              muted={muted}
              playsInline
              preload="metadata"
              className="w-full h-full object-cover"
            />

            {/* HUD */}
            <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur font-mono text-[10px] uppercase tracking-widest" style={{ background: "rgba(14,14,16,0.7)", color: text }}>
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inset-0 rounded-full animate-ping opacity-70" style={{ background: accent }} />
                <span className="relative rounded-full h-1.5 w-1.5" style={{ background: accent }} />
              </span>
              em obra · airless
            </div>

            {/* Mute toggle */}
            <button
              type="button"
              onClick={() => setMuted((m) => !m)}
              aria-label={muted ? "Activar som" : "Desactivar som"}
              className="absolute bottom-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition hover:scale-110"
              style={{ background: "rgba(14,14,16,0.75)", color: text, border: `1px solid ${border}` }}
            >
              {muted ? (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M11 5L6 9H2v6h4l5 4V5zM23 9l-6 6M17 9l6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M11 5L6 9H2v6h4l5 4V5zM15.54 8.46a5 5 0 010 7.07M19.07 4.93a10 10 0 010 14.14" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

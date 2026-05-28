"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

type Slide = { img: string; title: string; place: string; scope: string; year: number };

type Theme = {
  bg: string;
  ink: string;
  inkDim: string;
  accent: string;
  surface: string;
};

const DEFAULT_THEME: Theme = {
  bg: "#0F2433",
  ink: "#F4F1EB",
  inkDim: "#A6A29A",
  accent: "#4FB8C9",
  surface: "#16314A",
};

export default function PortfolioCarousel({
  slides,
  theme = DEFAULT_THEME,
  display,
  interval = 5000,
}: {
  slides: Slide[];
  theme?: Theme;
  display?: React.CSSProperties;
  interval?: number;
}) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<number | null>(null);

  const next = useCallback(() => setI((c) => (c + 1) % slides.length), [slides.length]);
  const prev = useCallback(() => setI((c) => (c - 1 + slides.length) % slides.length), [slides.length]);

  useEffect(() => {
    if (paused) return;
    timer.current = window.setInterval(next, interval);
    return () => {
      if (timer.current) window.clearInterval(timer.current);
    };
  }, [paused, next, interval]);

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slide deck */}
      <div className="relative aspect-[16/9] overflow-hidden rounded-lg" style={{ background: theme.bg }}>
        {slides.map((s, idx) => (
          <div
            key={s.img}
            className="absolute inset-0 transition-opacity duration-[1200ms] ease-out"
            style={{ opacity: idx === i ? 1 : 0 }}
            aria-hidden={idx !== i}
          >
            <Image
              src={s.img}
              alt={`${s.title} — ${s.place}`}
              fill
              sizes="(max-width: 1024px) 100vw, 80vw"
              className="object-cover"
              priority={idx === 0}
            />
            <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, transparent 30%, ${theme.bg}EE 100%)` }} />

            {/* caption */}
            <div className="absolute bottom-0 inset-x-0 p-6 lg:p-10">
              <div className="flex items-end justify-between gap-6">
                <div className="min-w-0">
                  <div className="text-[10px] uppercase tracking-[0.25em] mb-2" style={{ color: theme.accent }}>
                    {s.scope} · {s.year}
                  </div>
                  <h3 className="text-3xl lg:text-5xl truncate" style={{ ...display, color: theme.ink }}>
                    {s.title}
                  </h3>
                  <div className="text-sm mt-1.5" style={{ color: theme.inkDim }}>{s.place}</div>
                </div>
                <div
                  className="hidden sm:flex font-mono text-xs flex-shrink-0 px-3 py-1.5 rounded-full"
                  style={{ background: theme.surface, color: theme.inkDim }}
                >
                  {String(i + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Nav arrows */}
        <button
          onClick={prev}
          aria-label="Obra anterior"
          className="absolute left-3 lg:left-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full backdrop-blur flex items-center justify-center text-xl transition hover:scale-110"
          style={{ background: `${theme.surface}CC`, color: theme.ink }}
        >
          ←
        </button>
        <button
          onClick={next}
          aria-label="Próxima obra"
          className="absolute right-3 lg:right-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full backdrop-blur flex items-center justify-center text-xl transition hover:scale-110"
          style={{ background: `${theme.surface}CC`, color: theme.ink }}
        >
          →
        </button>

        {/* Progress bar */}
        <div className="absolute top-0 inset-x-0 h-1" style={{ background: `${theme.surface}88` }}>
          <div
            key={`progress-${i}-${paused}`}
            className="h-full transition-[width] ease-linear"
            style={{
              background: theme.accent,
              width: paused ? "0%" : "100%",
              transitionDuration: paused ? "0ms" : `${interval}ms`,
            }}
          />
        </div>
      </div>

      {/* Dots */}
      <div className="flex items-center justify-center gap-2 mt-5">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            aria-label={`Ir para obra ${idx + 1}`}
            className="h-1.5 rounded-full transition-all"
            style={{
              width: idx === i ? 32 : 8,
              background: idx === i ? theme.accent : theme.inkDim + "55",
            }}
          />
        ))}
      </div>
    </div>
  );
}

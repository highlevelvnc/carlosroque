"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

type Variant = "brush" | "fill";

type Theme = {
  bg: string;
  accent: string;
  ink: string;
  inkDim: string;
};

const THEMES: Record<string, Theme> = {
  v1: { bg: "#0E0E10", accent: "#1F9A9A", ink: "#F2F0EC", inkDim: "#A6A29A" },
  v3: { bg: "#0F2433", accent: "#4FB8C9", ink: "#F4F1EB", inkDim: "#A6B0BA" },
};

export default function LoadingScreen({
  variant,
  themeKey,
  duration = 1600,
  sessionKey,
  tagline = "Acabamentos que duram. Pintores que ouvem.",
}: {
  variant: Variant;
  themeKey: keyof typeof THEMES;
  duration?: number;
  sessionKey: string;
  tagline?: string;
}) {
  const [phase, setPhase] = useState<"loading" | "fadingOut" | "gone">("loading");

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(sessionKey) === "shown") {
      setPhase("gone");
      return;
    }
    sessionStorage.setItem(sessionKey, "shown");
    document.body.style.overflow = "hidden";

    const fadeAt = window.setTimeout(() => setPhase("fadingOut"), duration);
    const goneAt = window.setTimeout(() => {
      setPhase("gone");
      document.body.style.overflow = "";
    }, duration + 600);

    return () => {
      window.clearTimeout(fadeAt);
      window.clearTimeout(goneAt);
      document.body.style.overflow = "";
    };
  }, [duration, sessionKey]);

  if (phase === "gone") return null;

  const theme = THEMES[themeKey];

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-500"
      style={{
        background: theme.bg,
        opacity: phase === "fadingOut" ? 0 : 1,
        pointerEvents: phase === "fadingOut" ? "none" : "auto",
      }}
      aria-hidden={phase === "fadingOut"}
    >
      {variant === "brush" ? (
        <BrushVariant theme={theme} duration={duration} tagline={tagline} />
      ) : (
        <FillVariant theme={theme} duration={duration} tagline={tagline} />
      )}
    </div>
  );
}

/* ─────────── V1 — Brush stroke + logo paint reveal ─────────── */

function BrushVariant({ theme, duration, tagline }: { theme: Theme; duration: number; tagline: string }) {
  return (
    <div className="relative w-full max-w-md px-8 flex flex-col items-center gap-8">
      {/* Brush stroke SVG behind logo */}
      <div className="relative">
        <svg
          viewBox="0 0 400 120"
          className="absolute -inset-x-6 -inset-y-4 w-[calc(100%+48px)] h-auto pointer-events-none"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="brushGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor={theme.accent} stopOpacity="0" />
              <stop offset="50%" stopColor={theme.accent} stopOpacity="0.85" />
              <stop offset="100%" stopColor={theme.accent} stopOpacity="0" />
            </linearGradient>
            <filter id="brushBlur"><feGaussianBlur stdDeviation="2.5" /></filter>
          </defs>
          {/* Brush sweep */}
          <path
            d="M -50 60 Q 100 30 200 65 T 450 55"
            stroke="url(#brushGrad)"
            strokeWidth="42"
            fill="none"
            strokeLinecap="round"
            filter="url(#brushBlur)"
            style={{
              strokeDasharray: 700,
              strokeDashoffset: 700,
              animation: `brushSweep ${duration}ms cubic-bezier(0.65, 0, 0.35, 1) forwards`,
            }}
          />
        </svg>

        {/* Logo — reveals via clip-path top-down */}
        <div
          className="relative"
          style={{
            animation: `logoReveal ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) 200ms both`,
          }}
        >
          <Image
            src="/carlosroque.png"
            alt="Carlos Roque Pinturas"
            width={320}
            height={213}
            className="w-56 h-auto object-contain"
            style={{ filter: "brightness(1.4) drop-shadow(0 4px 16px rgba(31,154,154,0.5))" }}
            priority
          />
        </div>
      </div>

      <div
        className="text-center"
        style={{ animation: `fadeUp 600ms ease-out ${duration - 400}ms both` }}
      >
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] mb-2" style={{ color: theme.inkDim }}>
          a abrir o atelier
        </p>
        <p className="text-sm italic" style={{ color: theme.ink, fontFamily: "var(--font-fraunces), serif" }}>
          {tagline}
        </p>
      </div>

      <style>{`
        @keyframes brushSweep {
          to { stroke-dashoffset: 0; }
        }
        @keyframes logoReveal {
          from {
            clip-path: inset(0 100% 0 0);
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            clip-path: inset(0 0 0 0);
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

/* ─────────── V3 — Paint fill rising + progress ─────────── */

function FillVariant({ theme, duration, tagline }: { theme: Theme; duration: number; tagline: string }) {
  return (
    <>
      {/* Paint rising from bottom */}
      <div
        className="absolute inset-x-0 bottom-0 pointer-events-none"
        style={{
          height: "100vh",
          background: `linear-gradient(to top, ${theme.accent}40, ${theme.accent}10 50%, transparent 70%)`,
          animation: `paintRise ${duration}ms cubic-bezier(0.65, 0, 0.35, 1) forwards`,
          transformOrigin: "bottom",
          transform: "scaleY(0)",
        }}
      />

      {/* Subtle ambient glow */}
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: `radial-gradient(circle, ${theme.accent}, transparent 70%)` }}
      />

      <div className="relative w-full max-w-md px-8 flex flex-col items-center gap-8">
        <Image
          src="/carlosroque.png"
          alt="Carlos Roque Pinturas"
          width={320}
          height={213}
          className="w-56 h-auto object-contain"
          style={{
            filter: "brightness(1.4) drop-shadow(0 4px 18px rgba(79,184,201,0.55))",
            animation: `logoIn 700ms cubic-bezier(0.16, 1, 0.3, 1) both`,
          }}
          priority
        />

        <div
          className="w-full flex flex-col items-center gap-3"
          style={{ animation: `fadeIn 500ms ease-out 200ms both` }}
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.3em]" style={{ color: theme.inkDim }}>
            a preparar o seu orçamento
          </p>

          {/* Progress bar */}
          <div className="w-full h-[3px] rounded-full overflow-hidden" style={{ background: `${theme.inkDim}25` }}>
            <div
              className="h-full"
              style={{
                background: theme.accent,
                animation: `progress ${duration - 200}ms cubic-bezier(0.65, 0, 0.35, 1) forwards`,
                transformOrigin: "left",
                transform: "scaleX(0)",
              }}
            />
          </div>

          <p className="text-sm font-medium text-center" style={{ color: theme.ink }}>
            {tagline}
          </p>
        </div>
      </div>

      <style>{`
        @keyframes paintRise {
          to { transform: scaleY(1); }
        }
        @keyframes logoIn {
          from { opacity: 0; transform: translateY(12px) scale(0.96); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes progress {
          to { transform: scaleX(1); }
        }
      `}</style>
    </>
  );
}

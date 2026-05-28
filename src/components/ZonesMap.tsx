"use client";
import { useState } from "react";

const PINS = [
  { id: "alcochete", label: "Alcochete", x: 470, y: 200, primary: true },
  { id: "montijo", label: "Montijo", x: 410, y: 250 },
  { id: "pinhal", label: "Pinhal Novo", x: 480, y: 305 },
  { id: "palmela", label: "Palmela", x: 560, y: 305 },
  { id: "setubal", label: "Setúbal", x: 530, y: 380 },
  { id: "barreiro", label: "Barreiro", x: 340, y: 290 },
  { id: "moita", label: "Moita", x: 395, y: 320 },
  { id: "lisboa", label: "Lisboa", x: 230, y: 195 },
];

export default function ZonesMap({
  accent = "#4FB8C9",
  text = "#F4F1EB",
  textDim = "#A6B0BA",
  surface = "#16314A",
  bg = "#0F2433",
  display,
}: {
  accent?: string;
  text?: string;
  textDim?: string;
  surface?: string;
  bg?: string;
  display?: React.CSSProperties;
}) {
  const [hover, setHover] = useState<string | null>(null);

  return (
    <section className="py-20 lg:py-24" style={{ background: bg }}>
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-4">
          <div className="text-[11px] uppercase tracking-[0.25em] mb-4" style={{ color: accent }}>
            cobertura · margem sul + lisboa
          </div>
          <h3 className="text-3xl lg:text-5xl leading-[0.95]" style={{ ...display, color: text }}>
            Onde <span style={{ color: accent }}>trabalhamos</span>.
          </h3>
          <p className="mt-6 leading-relaxed" style={{ color: textDim }}>
            Sede em Alcochete. Cobrimos toda a margem sul do Tejo e a área metropolitana de Lisboa sem custo de deslocação.
          </p>

          <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
            {PINS.map((p) => (
              <li
                key={p.id}
                onMouseEnter={() => setHover(p.id)}
                onMouseLeave={() => setHover(null)}
                className="flex items-center gap-2 cursor-default transition"
                style={{ color: hover === p.id || p.primary ? accent : text }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: p.primary ? accent : `${textDim}80` }} />
                {p.label}{p.primary ? " · sede" : ""}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-8 relative">
          <svg viewBox="0 0 720 480" className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
            <defs>
              <radialGradient id="zonesGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor={accent} stopOpacity="0.18" />
                <stop offset="60%" stopColor={accent} stopOpacity="0.04" />
                <stop offset="100%" stopColor={accent} stopOpacity="0" />
              </radialGradient>
              <filter id="zonesPinShadow">
                <feGaussianBlur stdDeviation="3" />
              </filter>
            </defs>

            {/* Soft glow */}
            <rect x="0" y="0" width="720" height="480" fill="url(#zonesGlow)" />

            {/* Stylized land mass — Margem Sul + Lisboa area */}
            <g fill={surface} stroke={`${accent}40`} strokeWidth="1">
              {/* Lisboa peninsula north */}
              <path d="M 90 80 Q 120 60 180 70 Q 230 75 280 100 Q 310 130 290 165 Q 250 195 200 195 Q 170 180 150 165 Q 130 170 110 155 Q 80 130 90 80 Z" />
              {/* Margem Sul main body */}
              <path d="M 300 220 Q 350 195 420 200 Q 480 195 550 220 Q 620 250 640 320 Q 620 380 570 410 Q 510 425 450 415 Q 380 420 340 400 Q 290 380 280 330 Q 270 280 300 220 Z" />
              {/* Setúbal peninsula */}
              <path d="M 460 390 Q 500 380 530 395 Q 555 410 540 430 Q 510 445 480 440 Q 460 425 460 390 Z" />
            </g>

            {/* Tagus river (the gap) */}
            <path
              d="M 100 195 Q 180 215 280 220"
              stroke={`${accent}60`}
              strokeWidth="2"
              fill="none"
              strokeDasharray="4 6"
            />
            <text x="180" y="210" fontSize="9" fill={textDim} fontFamily="monospace" letterSpacing="2">
              RIO TEJO
            </text>

            {/* Pins */}
            {PINS.map((p) => {
              const isHover = hover === p.id;
              const radius = p.primary ? 9 : 6;
              return (
                <g
                  key={p.id}
                  onMouseEnter={() => setHover(p.id)}
                  onMouseLeave={() => setHover(null)}
                  style={{ cursor: "pointer" }}
                >
                  {/* Pulse ring */}
                  {p.primary && (
                    <circle cx={p.x} cy={p.y} r={radius} fill={accent} opacity="0.3">
                      <animate attributeName="r" values={`${radius};${radius + 14};${radius}`} dur="2.4s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.45;0;0.45" dur="2.4s" repeatCount="indefinite" />
                    </circle>
                  )}
                  <circle
                    cx={p.x}
                    cy={p.y}
                    r={radius}
                    fill={p.primary || isHover ? accent : surface}
                    stroke={accent}
                    strokeWidth={p.primary ? 0 : 2}
                    filter="url(#zonesPinShadow)"
                  />
                  {p.primary && (
                    <circle cx={p.x} cy={p.y} r={3} fill={bg} />
                  )}
                  <text
                    x={p.x + radius + 6}
                    y={p.y + 4}
                    fontSize={p.primary ? "13" : "11"}
                    fill={isHover || p.primary ? text : textDim}
                    fontWeight={p.primary || isHover ? 700 : 500}
                    style={{ ...display, fontFamily: display?.fontFamily }}
                  >
                    {p.label}
                  </text>
                </g>
              );
            })}
          </svg>

          {/* Legend chip */}
          <div
            className="absolute bottom-4 right-4 inline-flex items-center gap-2 text-[10px] uppercase tracking-widest font-mono px-3 py-1.5 rounded-full"
            style={{ background: `${surface}CC`, color: textDim, border: `1px solid ${accent}30` }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: accent }} />
            sede em Alcochete
          </div>
        </div>
      </div>
    </section>
  );
}

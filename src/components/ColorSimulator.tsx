"use client";
import { useState } from "react";
import { PAINT_SWATCHES, buildWhatsappUrl } from "@/lib/constants";

type Swatch = { name: string; hex: string; mood: string };

export default function ColorSimulator() {
  const [color, setColor] = useState<Swatch>(PAINT_SWATCHES[0]);

  const msg = `Olá Carlos, gostaria de pedir um orçamento de pintura. Tenho interesse na cor "${color.name}" (${color.hex}). Aguardo retorno, obrigado.`;
  const waUrl = buildWhatsappUrl(msg);

  return (
    <section id="cores" className="relative py-24 lg:py-40">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        {/* section header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div data-reveal className="max-w-2xl">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#1F9A9A] font-mono">
              {"// "}simulador interactivo
            </span>
            <h2 className="font-display text-5xl lg:text-7xl mt-4">
              Veja a parede <span className="italic text-[#A6A29A]">antes</span> de a pintar.
            </h2>
          </div>
          <p data-reveal data-reveal-delay="200" className="text-[#A6A29A] max-w-sm">
            Escolha uma cor abaixo. A divisão muda em tempo real. Quando estiver confiante, pedimos o orçamento já com a cor escolhida.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Room preview */}
          <div data-reveal className="lg:col-span-8 relative rounded-2xl overflow-hidden border border-[#2A2A2F] aspect-[16/11] bg-[#1A1A1E]">
            <RoomSvg wallColor={color.hex} />
            {/* HUD */}
            <div className="absolute top-5 left-5 right-5 flex items-center justify-between text-xs font-mono uppercase tracking-[0.2em] text-[#F2F0EC]/80">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#1F9A9A]" />
                preview ao vivo
              </span>
              <span className="hidden sm:inline">sala · 18m² · 4 paredes</span>
            </div>
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
              <div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-[#F2F0EC]/70 font-mono">cor seleccionada</div>
                <div className="font-display text-3xl lg:text-4xl text-[#F2F0EC] mt-1">{color.name}</div>
                <div className="font-mono text-xs text-[#F2F0EC]/70 mt-1">{color.hex} · {color.mood}</div>
              </div>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener"
                className="btn-primary !py-3 !px-5 text-sm"
              >
                Quero esta cor →
              </a>
            </div>
          </div>

          {/* Swatch picker */}
          <div data-reveal data-reveal-delay="200" className="lg:col-span-4 flex flex-col gap-3">
            <div className="text-[10px] uppercase tracking-[0.3em] text-[#A6A29A] font-mono mb-2">
              06 cores em destaque
            </div>
            {PAINT_SWATCHES.map((s) => {
              const active = s.hex === color.hex;
              return (
                <button
                  key={s.hex}
                  onClick={() => setColor(s)}
                  className={`group flex items-center gap-4 p-3 rounded-xl border transition-all text-left ${
                    active
                      ? "border-[#1F9A9A] bg-[#1A1A1E]"
                      : "border-[#2A2A2F] hover:border-[#A6A29A] bg-transparent"
                  }`}
                >
                  <span
                    className="w-14 h-14 rounded-lg flex-shrink-0 border border-black/20"
                    style={{ background: s.hex }}
                  />
                  <span className="flex-1">
                    <span className="block text-[#F2F0EC] font-medium">{s.name}</span>
                    <span className="block text-xs text-[#A6A29A] mt-0.5">{s.mood}</span>
                  </span>
                  <span className={`font-mono text-[10px] uppercase tracking-wider transition-opacity ${active ? "text-[#1F9A9A]" : "text-[#A6A29A] opacity-0 group-hover:opacity-100"}`}>
                    {active ? "activa" : "ver"}
                  </span>
                </button>
              );
            })}
            <p className="text-xs text-[#A6A29A] mt-3 leading-relaxed">
              Tem uma cor específica em mente? <a href={buildWhatsappUrl("Olá Carlos, tenho uma cor específica em mente. Posso enviar uma foto?")} target="_blank" rel="noopener" className="text-[#F2F0EC] link-underline">Envie-nos uma foto</a> — combinamos qualquer tinta de catálogo CIN, Robbialac ou Sotinco.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function RoomSvg({ wallColor }: { wallColor: string }) {
  return (
    <svg viewBox="0 0 1600 1100" className="w-full h-full block" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="floor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3a2e25" />
          <stop offset="1" stopColor="#1a130d" />
        </linearGradient>
        <linearGradient id="lightWall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={wallColor} stopOpacity="1" />
          <stop offset="1" stopColor={wallColor} stopOpacity="0.78" />
        </linearGradient>
        <linearGradient id="sideWall" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor={wallColor} stopOpacity="0.55" />
          <stop offset="1" stopColor={wallColor} stopOpacity="0.85" />
        </linearGradient>
        <linearGradient id="rightWall" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor={wallColor} stopOpacity="0.85" />
          <stop offset="1" stopColor={wallColor} stopOpacity="0.55" />
        </linearGradient>
        <radialGradient id="sunbeam" cx="0.7" cy="0.3" r="0.6">
          <stop offset="0" stopColor="#ffe9c4" stopOpacity="0.4" />
          <stop offset="1" stopColor="#ffe9c4" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* back wall */}
      <polygon points="280,160 1320,160 1320,820 280,820" fill="url(#lightWall)" style={{ transition: "fill 0.6s" }} />
      {/* left wall (perspective) */}
      <polygon points="0,0 280,160 280,820 0,1000" fill="url(#sideWall)" style={{ transition: "fill 0.6s" }} />
      {/* right wall */}
      <polygon points="1320,160 1600,0 1600,1000 1320,820" fill="url(#rightWall)" style={{ transition: "fill 0.6s" }} />
      {/* ceiling */}
      <polygon points="0,0 1600,0 1320,160 280,160" fill="#1f1f23" />
      {/* floor */}
      <polygon points="0,1000 280,820 1320,820 1600,1000 1600,1100 0,1100" fill="url(#floor)" />

      {/* baseboard */}
      <polygon points="280,800 1320,800 1320,820 280,820" fill="#0E0E10" opacity="0.5" />

      {/* window */}
      <rect x="900" y="280" width="320" height="380" fill="#e8eef5" opacity="0.85" />
      <rect x="900" y="280" width="320" height="380" fill="none" stroke="#0E0E10" strokeWidth="6" />
      <line x1="1060" y1="280" x2="1060" y2="660" stroke="#0E0E10" strokeWidth="4" />
      <line x1="900" y1="470" x2="1220" y2="470" stroke="#0E0E10" strokeWidth="4" />
      {/* sunlight overlay */}
      <rect x="0" y="0" width="1600" height="1100" fill="url(#sunbeam)" />

      {/* frame on wall */}
      <rect x="420" y="320" width="220" height="280" fill="#1a1a1e" stroke="#0E0E10" strokeWidth="6" />
      <rect x="440" y="340" width="180" height="240" fill="#1F9A9A" opacity="0.85" />

      {/* sofa */}
      <rect x="430" y="700" width="420" height="120" rx="14" fill="#2a2422" />
      <rect x="430" y="690" width="420" height="40" rx="14" fill="#3a322f" />
      <rect x="430" y="700" width="80" height="120" rx="14" fill="#332b29" />
      <rect x="770" y="700" width="80" height="120" rx="14" fill="#332b29" />
      {/* sofa shadow */}
      <ellipse cx="640" cy="830" rx="240" ry="14" fill="#000" opacity="0.4" />

      {/* plant */}
      <rect x="1240" y="700" width="80" height="100" rx="6" fill="#3a322f" />
      <path d="M 1280 700 Q 1240 600 1260 540 Q 1290 600 1280 700 Z" fill="#3d5141" />
      <path d="M 1280 700 Q 1320 620 1310 550 Q 1280 620 1280 700 Z" fill="#46604b" />
      <path d="M 1280 700 Q 1260 640 1280 580 Q 1300 640 1280 700 Z" fill="#324736" />

      {/* floor lamp */}
      <rect x="340" y="500" width="6" height="320" fill="#1a1a1e" />
      <ellipse cx="343" cy="500" rx="40" ry="14" fill="#1a1a1e" />
      <path d="M 303 500 L 383 500 L 365 460 L 321 460 Z" fill="#C9A961" />
      <ellipse cx="343" cy="820" rx="50" ry="6" fill="#000" opacity="0.4" />
    </svg>
  );
}

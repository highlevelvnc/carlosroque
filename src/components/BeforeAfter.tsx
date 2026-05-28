"use client";
import { useRef, useState, useCallback } from "react";

export default function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updateFromEvent = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, x)));
  }, []);

  return (
    <section className="py-24 lg:py-40 bg-[#16161A] border-y border-[#2A2A2F]">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-8 mb-12">
          <div data-reveal className="lg:col-span-6">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#FF5B2E] font-mono">
              {"// "}antes / depois
            </span>
            <h2 className="font-display text-5xl lg:text-7xl mt-4">
              Arrasta. <span className="italic text-[#A6A29A]">Vê a diferença.</span>
            </h2>
          </div>
          <p data-reveal data-reveal-delay="200" className="lg:col-span-5 lg:col-start-8 text-[#A6A29A] self-end text-lg">
            Sala em Alcochete, antes da nossa intervenção e depois. 3 dias de trabalho, tintas CIN Vinylsilk + reparação de fissuras.
          </p>
        </div>

        <div
          ref={ref}
          className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-[#2A2A2F] select-none cursor-ew-resize"
          onMouseDown={(e) => { dragging.current = true; updateFromEvent(e.clientX); }}
          onMouseMove={(e) => dragging.current && updateFromEvent(e.clientX)}
          onMouseUp={() => (dragging.current = false)}
          onMouseLeave={() => (dragging.current = false)}
          onTouchStart={(e) => { dragging.current = true; updateFromEvent(e.touches[0].clientX); }}
          onTouchMove={(e) => dragging.current && updateFromEvent(e.touches[0].clientX)}
          onTouchEnd={() => (dragging.current = false)}
          data-reveal
        >
          {/* BEFORE: dingy beige with cracks */}
          <div className="absolute inset-0">
            <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
              <defs>
                <linearGradient id="oldwall" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#8a7a64" />
                  <stop offset="1" stopColor="#5a4d3d" />
                </linearGradient>
              </defs>
              <rect width="1600" height="900" fill="url(#oldwall)" />
              {/* stains */}
              <ellipse cx="400" cy="300" rx="180" ry="120" fill="#3a2e22" opacity="0.4" />
              <ellipse cx="1200" cy="600" rx="220" ry="140" fill="#3a2e22" opacity="0.35" />
              <ellipse cx="900" cy="180" rx="140" ry="80" fill="#2a1e15" opacity="0.3" />
              {/* cracks */}
              <path d="M 200 100 Q 250 400 240 700 Q 260 800 220 880" stroke="#1a1208" strokeWidth="2" fill="none" />
              <path d="M 1400 50 Q 1380 300 1420 500 Q 1450 700 1410 880" stroke="#1a1208" strokeWidth="2" fill="none" />
              <path d="M 700 50 L 720 200 L 690 400" stroke="#1a1208" strokeWidth="1.5" fill="none" />
              {/* peeling paint */}
              <path d="M 500 500 L 580 510 L 600 580 L 520 600 Z" fill="#a89678" opacity="0.6" />
              <path d="M 1000 350 L 1080 360 L 1070 420 L 990 410 Z" fill="#a89678" opacity="0.5" />
            </svg>
            <div className="absolute top-5 left-5 font-mono text-xs uppercase tracking-[0.25em] bg-[#0E0E10]/80 backdrop-blur px-3 py-1.5 rounded-full">
              Antes
            </div>
          </div>

          {/* AFTER: clean wall in linho cru */}
          <div className="absolute inset-0" style={{ clipPath: `inset(0 0 0 ${pos}%)` }}>
            <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
              <defs>
                <linearGradient id="newwall" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#E8E1D3" />
                  <stop offset="1" stopColor="#d4cab8" />
                </linearGradient>
              </defs>
              <rect width="1600" height="900" fill="url(#newwall)" />
              {/* subtle texture */}
              <rect width="1600" height="900" fill="#000" opacity="0.02" />
              {/* light from window */}
              <ellipse cx="1100" cy="200" rx="500" ry="400" fill="#ffffff" opacity="0.25" />
            </svg>
            <div className="absolute top-5 right-5 font-mono text-xs uppercase tracking-[0.25em] bg-[#FF5B2E] text-[#0E0E10] px-3 py-1.5 rounded-full">
              Depois
            </div>
          </div>

          {/* divider */}
          <div
            className="absolute top-0 bottom-0 w-px bg-[#F2F0EC] pointer-events-none"
            style={{ left: `${pos}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#FF5B2E] border-4 border-[#F2F0EC] flex items-center justify-center text-[#0E0E10] font-bold">
              ⇆
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

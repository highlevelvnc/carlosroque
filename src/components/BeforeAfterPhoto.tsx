"use client";
import { useCallback, useRef, useState } from "react";
import Image from "next/image";

export default function BeforeAfterPhoto({
  before,
  after,
  beforeLabel = "Antes",
  afterLabel = "Depois",
  accent = "#4FB8C9",
  surface = "#16314A",
  text = "#F4F1EB",
  textDim = "#A6B0BA",
  display,
  bg = "#0F2433",
  caption,
}: {
  before: string;
  after: string;
  beforeLabel?: string;
  afterLabel?: string;
  accent?: string;
  surface?: string;
  text?: string;
  textDim?: string;
  display?: React.CSSProperties;
  bg?: string;
  caption?: string;
}) {
  const [pos, setPos] = useState(48);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const update = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, x)));
  }, []);

  return (
    <section className="py-24 lg:py-32" style={{ background: bg }}>
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-8 mb-10">
          <div className="lg:col-span-7">
            <div className="text-[11px] uppercase tracking-[0.25em] mb-4" style={{ color: accent }}>
              transformação real
            </div>
            <h2 className="text-4xl lg:text-6xl leading-[0.95]" style={{ ...display, color: text }}>
              Arraste. Veja a <span style={{ color: accent }}>diferença</span>.
            </h2>
          </div>
          <p className="lg:col-span-4 lg:col-start-9 self-end text-base lg:text-lg" style={{ color: textDim }}>
            {caption ||
              "Uma cozinha antes da nossa intervenção e depois. Tinta CIN Vinylsilk + iluminação LED integrada."}
          </p>
        </div>

        <div
          ref={ref}
          className="relative aspect-[16/9] rounded-lg overflow-hidden select-none cursor-ew-resize"
          style={{ border: `1px solid ${accent}30` }}
          onMouseDown={(e) => { dragging.current = true; update(e.clientX); }}
          onMouseMove={(e) => dragging.current && update(e.clientX)}
          onMouseUp={() => (dragging.current = false)}
          onMouseLeave={() => (dragging.current = false)}
          onTouchStart={(e) => { dragging.current = true; update(e.touches[0].clientX); }}
          onTouchMove={(e) => dragging.current && update(e.touches[0].clientX)}
          onTouchEnd={() => (dragging.current = false)}
        >
          {/* BEFORE — full bleed */}
          <div className="absolute inset-0">
            <Image src={before} alt={beforeLabel} fill className="object-cover" sizes="100vw" priority />
            <div className="absolute inset-0" style={{ background: `${bg}1A` }} />
          </div>

          {/* AFTER — clipped */}
          <div className="absolute inset-0" style={{ clipPath: `inset(0 0 0 ${pos}%)` }}>
            <Image src={after} alt={afterLabel} fill className="object-cover" sizes="100vw" priority />
          </div>

          {/* Labels */}
          <div
            className="absolute top-5 left-5 px-3 py-1.5 rounded-full font-mono text-xs uppercase tracking-[0.25em] backdrop-blur"
            style={{ background: `${bg}CC`, color: text }}
          >
            {beforeLabel}
          </div>
          <div
            className="absolute top-5 right-5 px-3 py-1.5 rounded-full font-mono text-xs uppercase tracking-[0.25em]"
            style={{ background: accent, color: bg }}
          >
            {afterLabel}
          </div>

          {/* Divider + handle */}
          <div
            className="absolute top-0 bottom-0 pointer-events-none"
            style={{ left: `${pos}%`, width: "2px", background: text, boxShadow: `0 0 14px ${accent}80` }}
          >
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full flex items-center justify-center text-2xl font-bold"
              style={{
                background: accent,
                color: bg,
                boxShadow: `0 6px 20px ${accent}55, 0 0 0 4px ${text}`,
              }}
            >
              ⇆
            </div>
          </div>

          {/* drag hint pill */}
          <div
            className="absolute bottom-5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full font-mono text-[10px] uppercase tracking-widest backdrop-blur"
            style={{ background: `${surface}CC`, color: textDim }}
          >
            arraste para comparar
          </div>
        </div>
      </div>
    </section>
  );
}

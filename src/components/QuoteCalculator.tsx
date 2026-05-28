"use client";
import { useMemo, useState } from "react";
import { buildWhatsappUrl } from "@/lib/constants";

const TYPOLOGIES = [
  { id: "t0", label: "Estúdio · T0", sqm: 45 },
  { id: "t1", label: "T1", sqm: 60 },
  { id: "t2", label: "T2", sqm: 85 },
  { id: "t3", label: "T3", sqm: 110 },
  { id: "t4", label: "T4 / Moradia", sqm: 160 },
] as const;

const SERVICES = [
  { id: "interior", label: "Apenas interior", rate: [7, 11] },
  { id: "exterior", label: "Apenas exterior", rate: [12, 18] },
  { id: "both", label: "Interior + exterior", rate: [10, 16] },
] as const;

type Typology = (typeof TYPOLOGIES)[number]["id"];
type Service = (typeof SERVICES)[number]["id"];

const fmt = (n: number) =>
  n.toLocaleString("pt-PT", { maximumFractionDigits: 0 });

export default function QuoteCalculator({
  accent = "#4FB8C9",
  highlight = "#E8B86A",
  text = "#F4F1EB",
  textDim = "#A6B0BA",
  surface = "#16314A",
  bg = "#0F2433",
  display,
}: {
  accent?: string;
  highlight?: string;
  text?: string;
  textDim?: string;
  surface?: string;
  bg?: string;
  display?: React.CSSProperties;
}) {
  const [typ, setTyp] = useState<Typology>("t2");
  const [svc, setSvc] = useState<Service>("interior");

  const { sqm, low, high, msg } = useMemo(() => {
    const t = TYPOLOGIES.find((x) => x.id === typ)!;
    const s = SERVICES.find((x) => x.id === svc)!;
    const lo = Math.round((t.sqm * s.rate[0]) / 10) * 10;
    const hi = Math.round((t.sqm * s.rate[1]) / 10) * 10;
    const m = `Olá Carlos, fiz a estimativa no vosso site: ${t.label} · ${s.label}. Gostaria de marcar visita para orçamento detalhado.`;
    return { sqm: t.sqm, low: lo, high: hi, msg: m };
  }, [typ, svc]);

  return (
    <section className="py-24 lg:py-32" style={{ background: bg }}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left — copy */}
          <div className="lg:col-span-5">
            <div className="text-[11px] uppercase tracking-[0.25em] mb-4" style={{ color: accent }}>
              calculadora · estimativa
            </div>
            <h2 className="text-4xl lg:text-6xl leading-[0.95]" style={{ ...display, color: text }}>
              Veja a <span style={{ color: accent }}>estimativa</span> em 10 segundos.
            </h2>
            <p className="mt-6 leading-relaxed" style={{ color: textDim }}>
              Escolha a tipologia e o tipo de serviço. Devolvemos um intervalo de preço aproximado para si poder planear. O orçamento final só fica fechado depois da visita à sua casa.
            </p>
            <div className="mt-8 flex items-start gap-3 text-xs leading-relaxed" style={{ color: textDim }}>
              <span style={{ color: accent }}>ℹ</span>
              <span>
                Valores indicativos para uma demão de tinta de marca + preparação standard. Não inclui reparações estruturais nem lacagem de portas.
              </span>
            </div>
          </div>

          {/* Right — widget */}
          <div className="lg:col-span-7">
            <div className="rounded-lg p-6 lg:p-10 border" style={{ background: surface, borderColor: `${accent}30` }}>
              {/* Typology */}
              <div>
                <label className="text-[10px] uppercase tracking-widest font-mono mb-3 block" style={{ color: textDim }}>
                  01 · Tipologia
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                  {TYPOLOGIES.map((t) => {
                    const active = t.id === typ;
                    return (
                      <button
                        key={t.id}
                        onClick={() => setTyp(t.id)}
                        className="text-sm rounded px-3 py-3 transition border text-center"
                        style={{
                          background: active ? accent : "transparent",
                          borderColor: active ? accent : `${textDim}40`,
                          color: active ? bg : text,
                          fontWeight: active ? 600 : 500,
                        }}
                      >
                        {t.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Service */}
              <div className="mt-8">
                <label className="text-[10px] uppercase tracking-widest font-mono mb-3 block" style={{ color: textDim }}>
                  02 · Tipo de serviço
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {SERVICES.map((s) => {
                    const active = s.id === svc;
                    return (
                      <button
                        key={s.id}
                        onClick={() => setSvc(s.id)}
                        className="text-sm rounded px-4 py-3 transition border text-center"
                        style={{
                          background: active ? accent : "transparent",
                          borderColor: active ? accent : `${textDim}40`,
                          color: active ? bg : text,
                          fontWeight: active ? 600 : 500,
                        }}
                      >
                        {s.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Result */}
              <div
                className="mt-10 pt-8 border-t flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6"
                style={{ borderColor: `${textDim}30` }}
              >
                <div>
                  <div className="text-[10px] uppercase tracking-widest font-mono mb-2" style={{ color: textDim }}>
                    estimativa · {sqm} m² aprox.
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl lg:text-6xl" style={{ ...display, color: text }}>
                      €{fmt(low)}
                    </span>
                    <span className="text-2xl" style={{ color: textDim }}>—</span>
                    <span className="text-4xl lg:text-6xl" style={{ ...display, color: highlight }}>
                      €{fmt(high)}
                    </span>
                  </div>
                </div>
                <a
                  href={buildWhatsappUrl(msg)}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded font-semibold text-sm transition hover:-translate-y-0.5"
                  style={{ background: highlight, color: bg }}
                >
                  Marcar visita gratuita →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

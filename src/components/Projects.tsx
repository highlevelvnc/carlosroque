"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { PROJECTS } from "@/lib/constants";

export default function Projects() {
  const [hover, setHover] = useState<number | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // Vertical-scroll-as-horizontal-scroll effect for the list (desktop)
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let raf = 0;
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) < Math.abs(e.deltaX)) return;
      if (el.scrollLeft <= 0 && e.deltaY < 0) return;
      if (el.scrollLeft >= el.scrollWidth - el.clientWidth && e.deltaY > 0) return;
      e.preventDefault();
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.scrollLeft += e.deltaY;
      });
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      el.removeEventListener("wheel", onWheel);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="obras" className="py-24 lg:py-40 border-y border-[#2A2A2F]">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 mb-16">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div data-reveal>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#1F9A9A] font-mono">
              {"// "}índice de obras
            </span>
            <h2 className="font-display text-5xl lg:text-7xl mt-4 max-w-[18ch]">
              Obras recentes. <span className="italic text-[#A6A29A]">Reais.</span>
            </h2>
          </div>
          <p data-reveal data-reveal-delay="200" className="text-[#A6A29A] max-w-md">
            Cada linha é uma obra que pintámos. Passe o rato (ou toque) para ver o resultado. Sem stock photos, sem render — clientes reais que aceitaram partilhar.
          </p>
        </div>
      </div>

      {/* Desktop: horizontal index */}
      <div ref={trackRef} className="lane hidden lg:block overflow-x-auto overflow-y-hidden">
        <div className="min-w-max px-12 flex gap-px bg-[#2A2A2F]">
          {PROJECTS.map((p, i) => {
            const isHover = hover === i;
            return (
              <div
                key={p.n}
                onMouseEnter={() => setHover(i)}
                onMouseLeave={() => setHover(null)}
                className={`relative bg-[#0E0E10] overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col justify-between cursor-pointer ${
                  isHover ? "w-[640px]" : "w-[320px]"
                }`}
                style={{ height: "560px" }}
              >
                <Image
                  src={p.img}
                  alt={`${p.title} — ${p.place}`}
                  fill
                  sizes="640px"
                  className={`object-cover transition-all duration-1000 ${
                    isHover ? "scale-105 opacity-80" : "scale-100 opacity-40"
                  }`}
                />
                <div
                  className="absolute inset-0 transition-opacity duration-700"
                  style={{
                    background: isHover
                      ? "linear-gradient(180deg, rgba(14,14,16,0.2) 0%, rgba(14,14,16,0.85) 100%)"
                      : "linear-gradient(180deg, rgba(14,14,16,0.6) 0%, rgba(14,14,16,0.95) 100%)",
                  }}
                />
                <div className="relative p-8 flex justify-between items-start">
                  <span className="font-mono text-xs text-[#A6A29A]">{p.n}</span>
                  <span className="font-mono text-xs text-[#A6A29A]">{p.year}</span>
                </div>
                <div className="relative p-8">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-[#1F9A9A] font-mono mb-3">
                    {p.scope}
                  </div>
                  <h3 className={`font-display transition-all duration-500 ${isHover ? "text-5xl" : "text-3xl"}`}>
                    {p.title}
                  </h3>
                  <div className="text-sm text-[#A6A29A] mt-2">{p.place}</div>
                </div>
              </div>
            );
          })}
          {/* end card */}
          <div className="bg-[#0E0E10] w-[400px] flex flex-col justify-center items-center p-12 text-center">
            <div className="font-mono text-xs text-[#A6A29A] mb-4">··· e mais 306 obras</div>
            <h3 className="font-display text-3xl mb-4">A próxima pode ser a sua.</h3>
            <a href="#contacto" className="btn-primary mt-4">Falar com o Carlos →</a>
          </div>
        </div>
      </div>

      {/* Mobile: stacked grid */}
      <div className="lg:hidden grid grid-cols-1 gap-px bg-[#2A2A2F] mx-0">
        {PROJECTS.map((p) => (
          <div key={p.n} className="relative bg-[#0E0E10] overflow-hidden h-[280px] flex flex-col justify-between">
            <Image src={p.img} alt={p.title} fill sizes="100vw" className="object-cover opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0E0E10]/60 to-[#0E0E10]/95" />
            <div className="relative p-8 flex justify-between font-mono text-xs text-[#A6A29A]">
              <span>{p.n}</span><span>{p.year}</span>
            </div>
            <div className="relative p-8">
              <div className="text-[10px] uppercase tracking-[0.25em] text-[#1F9A9A] font-mono mb-2">{p.scope}</div>
              <h3 className="font-display text-3xl">{p.title}</h3>
              <div className="text-sm text-[#A6A29A] mt-1">{p.place}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

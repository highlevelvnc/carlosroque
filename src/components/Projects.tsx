"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { PROJECTS } from "@/lib/constants";
import Lightbox, { LightboxImage } from "@/components/Lightbox";

export default function Projects() {
  const [hover, setHover] = useState<number | null>(null);
  const [openProjectIdx, setOpenProjectIdx] = useState<number | null>(null);
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

  // Lightbox images for the currently open project
  const open = openProjectIdx !== null ? PROJECTS[openProjectIdx] : null;
  const lightboxImages: LightboxImage[] = open
    ? (open.gallery && open.gallery.length > 0
        ? open.gallery.map((src) => ({ src, title: open.title, place: open.place, year: open.year, scope: open.scope }))
        : [{ src: open.img, title: open.title, place: open.place, year: open.year, scope: open.scope }])
    : [];

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
            Cada linha é uma obra que pintámos. Clique para ver todas as fotos em ecrã cheio.
          </p>
        </div>
      </div>

      {/* Desktop: horizontal index */}
      <div ref={trackRef} className="lane hidden lg:block overflow-x-auto overflow-y-hidden">
        <div className="min-w-max px-12 flex gap-px bg-[#2A2A2F]">
          {PROJECTS.map((p, i) => {
            const isHover = hover === i;
            const photoCount = p.gallery?.length ?? 1;
            return (
              <button
                type="button"
                key={p.n}
                onClick={() => setOpenProjectIdx(i)}
                onMouseEnter={() => setHover(i)}
                onMouseLeave={() => setHover(null)}
                className={`relative bg-[#0E0E10] overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col justify-between cursor-zoom-in text-left ${
                  isHover ? "w-[640px]" : "w-[320px]"
                }`}
                style={{ height: "560px" }}
                aria-label={`Abrir galeria: ${p.title}, ${p.place}`}
              >
                <Image
                  src={p.img}
                  alt={`${p.title} — ${p.place}`}
                  fill
                  sizes="640px"
                  className={`object-cover transition-all duration-1000 ${
                    isHover ? "scale-105 opacity-100" : "scale-100 opacity-75"
                  }`}
                />
                {/* Gradient only at bottom — keeps top of photo visible */}
                <div
                  className="absolute inset-0 transition-opacity duration-700 pointer-events-none"
                  style={{
                    background: isHover
                      ? "linear-gradient(180deg, rgba(14,14,16,0) 40%, rgba(14,14,16,0.75) 100%)"
                      : "linear-gradient(180deg, rgba(14,14,16,0.15) 0%, rgba(14,14,16,0.85) 100%)",
                  }}
                />
                <div className="relative p-8 flex justify-between items-start z-10">
                  <span className="font-mono text-xs text-white/85">{p.n}</span>
                  <span className="font-mono text-xs text-white/85 flex items-center gap-2">
                    {p.year}
                    {photoCount > 1 && (
                      <span className="inline-flex items-center gap-1 bg-[#1F9A9A] text-[#0E0E10] px-2 py-0.5 rounded-full text-[9px] font-semibold">
                        <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><rect x="3" y="3" width="18" height="14" rx="1" /><path d="M21 17l-3-3-4 4-3-3-8 8" /></svg>
                        {photoCount}
                      </span>
                    )}
                  </span>
                </div>
                <div className="relative p-8 z-10">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-[#1F9A9A] font-mono mb-3">
                    {p.scope}
                  </div>
                  <h3 className={`font-display transition-all duration-500 ${isHover ? "text-5xl" : "text-3xl"}`}>
                    {p.title}
                  </h3>
                  <div className="text-sm text-white/75 mt-2">{p.place}</div>
                </div>
                {/* Click hint when hovering */}
                <span
                  className={`absolute top-5 right-5 px-3 py-1.5 rounded-full backdrop-blur text-[10px] uppercase tracking-widest font-mono z-10 transition-opacity duration-300 ${
                    isHover ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ background: "rgba(14,14,16,0.7)", color: "#F2F0EC" }}
                >
                  ⤢ ver galeria
                </span>
              </button>
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
        {PROJECTS.map((p, i) => {
          const photoCount = p.gallery?.length ?? 1;
          return (
            <button
              type="button"
              key={p.n}
              onClick={() => setOpenProjectIdx(i)}
              className="relative bg-[#0E0E10] overflow-hidden h-[280px] flex flex-col justify-between text-left active:scale-[0.99] transition-transform"
              aria-label={`Abrir galeria: ${p.title}`}
            >
              <Image src={p.img} alt={p.title} fill sizes="100vw" className="object-cover opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-b from-[#0E0E10]/30 to-[#0E0E10]/90 pointer-events-none" />
              <div className="relative p-6 flex justify-between font-mono text-xs text-white/85 z-10">
                <span>{p.n}</span>
                <span className="flex items-center gap-2">
                  {p.year}
                  {photoCount > 1 && (
                    <span className="inline-flex items-center gap-1 bg-[#1F9A9A] text-[#0E0E10] px-2 py-0.5 rounded-full text-[9px] font-semibold">
                      <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><rect x="3" y="3" width="18" height="14" rx="1" /><path d="M21 17l-3-3-4 4-3-3-8 8" /></svg>
                      {photoCount}
                    </span>
                  )}
                </span>
              </div>
              <div className="relative p-6 z-10">
                <div className="text-[10px] uppercase tracking-[0.25em] text-[#1F9A9A] font-mono mb-2">{p.scope}</div>
                <h3 className="font-display text-3xl">{p.title}</h3>
                <div className="text-sm text-white/75 mt-1">{p.place}</div>
              </div>
            </button>
          );
        })}
      </div>

      <Lightbox images={lightboxImages} openAt={openProjectIdx !== null ? 0 : null} onClose={() => setOpenProjectIdx(null)} />
    </section>
  );
}

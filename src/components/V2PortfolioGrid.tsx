"use client";
import { useState } from "react";
import Image from "next/image";
import { PROJECTS } from "@/lib/constants";
import Lightbox, { LightboxImage } from "@/components/Lightbox";

const LAYOUTS = [
  "col-span-12 lg:col-span-8 aspect-[16/9]",
  "col-span-12 lg:col-span-4 aspect-[4/5]",
  "col-span-6 lg:col-span-4 aspect-square",
  "col-span-6 lg:col-span-4 aspect-square",
  "col-span-12 lg:col-span-4 aspect-square",
  "col-span-12 lg:col-span-8 aspect-[16/9]",
  "col-span-12 lg:col-span-5 aspect-[4/5]",
  "col-span-12 lg:col-span-7 aspect-[16/9]",
];

export default function V2PortfolioGrid() {
  const [open, setOpen] = useState<number | null>(null);
  const slides: LightboxImage[] = PROJECTS.slice(0, 8).map((p) => ({
    src: p.img, title: p.title, place: p.place, year: p.year, scope: p.scope,
  }));

  return (
    <section id="obras" className="bg-[#F5F2EC]">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 pb-12 lg:pb-20">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div>
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#0E0E10]/60 font-mono">obras recentes</span>
            <h2 className="font-display text-5xl lg:text-7xl mt-4 max-w-[14ch] leading-[0.95]">
              Trabalho que <span className="italic text-[#156B6B]">fala</span> por nós.
            </h2>
          </div>
          <p className="text-[#0E0E10]/70 max-w-md">
            Cada foto, uma obra real. Toque para ver em grande. Use as setas ou o teclado para navegar.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-2 lg:gap-3 px-2 lg:px-3 pb-3">
        {slides.map((s, i) => (
          <figure key={s.src} className={`relative overflow-hidden group cursor-zoom-in ${LAYOUTS[i] || "col-span-6 aspect-square"}`}>
            <button
              type="button"
              onClick={() => setOpen(i)}
              className="absolute inset-0 w-full h-full"
              aria-label={`Ampliar: ${s.title}, ${s.place}`}
            >
              <Image
                src={s.src}
                alt={`${s.title} — ${s.place}`}
                fill
                className="object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 text-left">
                <div className="text-[10px] uppercase tracking-[0.25em] font-mono opacity-80 mb-1">{s.scope}</div>
                <div className="font-display text-2xl lg:text-3xl">{s.title}</div>
                <div className="text-xs opacity-80 mt-1">{s.place} · {s.year}</div>
              </figcaption>
              {/* Zoom indicator on hover */}
              <span className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/15 backdrop-blur border border-white/40 text-white flex items-center justify-center text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                ⤢
              </span>
            </button>
          </figure>
        ))}
      </div>

      <Lightbox images={slides} openAt={open} onClose={() => setOpen(null)} />
    </section>
  );
}

"use client";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

export type LightboxImage = { src: string; title: string; place: string; year: number; scope: string };

export default function Lightbox({
  images,
  openAt,
  onClose,
}: {
  images: LightboxImage[];
  openAt: number | null;
  onClose: () => void;
}) {
  const [i, setI] = useState(openAt ?? 0);

  useEffect(() => {
    if (openAt !== null) setI(openAt);
  }, [openAt]);

  const next = useCallback(() => setI((c) => (c + 1) % images.length), [images.length]);
  const prev = useCallback(() => setI((c) => (c - 1 + images.length) % images.length), [images.length]);

  useEffect(() => {
    if (openAt === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [openAt, next, prev, onClose]);

  if (openAt === null) return null;
  const img = images[i];

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[9998] flex flex-col bg-black/95 backdrop-blur"
      onClick={onClose}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 py-4 text-white" onClick={(e) => e.stopPropagation()}>
        <div className="font-mono text-xs uppercase tracking-[0.25em] opacity-70">
          {String(i + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")} · {img.scope}
        </div>
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition text-xl"
        >
          ×
        </button>
      </div>

      {/* Image */}
      <div className="relative flex-1 flex items-center justify-center px-4 sm:px-12" onClick={(e) => e.stopPropagation()}>
        <div className="relative w-full max-w-6xl aspect-[16/10]">
          <Image src={img.src} alt={img.title} fill className="object-contain" sizes="100vw" priority />
        </div>

        <button
          onClick={prev}
          aria-label="Anterior"
          className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 border border-white/30 backdrop-blur flex items-center justify-center text-white text-2xl hover:bg-white/20 transition"
        >
          ←
        </button>
        <button
          onClick={next}
          aria-label="Próxima"
          className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 border border-white/30 backdrop-blur flex items-center justify-center text-white text-2xl hover:bg-white/20 transition"
        >
          →
        </button>
      </div>

      {/* Caption */}
      <div className="px-6 py-5 text-center text-white" onClick={(e) => e.stopPropagation()}>
        <div className="text-2xl sm:text-3xl font-medium" style={{ fontFamily: "var(--font-fraunces), serif" }}>
          {img.title}
        </div>
        <div className="text-sm opacity-70 mt-1">
          {img.place} · {img.year}
        </div>
      </div>
    </div>
  );
}

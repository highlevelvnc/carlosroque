"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { COMPANY, NAV_LINKS, WHATSAPP_URL } from "@/lib/constants";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
        scrolled ? "bg-[#0E0E10]/85 backdrop-blur-xl border-b border-[#2A2A2F]" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <span className="relative w-14 h-14 flex items-center justify-center">
            <span className="absolute inset-0 rounded-full bg-[#1F9A9A]/20 blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
            <Image
              src="/logo.png"
              alt={COMPANY.name}
              width={56}
              height={56}
              className="relative w-14 h-14 object-contain"
              priority
            />
          </span>
          <span className="hidden sm:block leading-tight">
            <span className="block text-sm font-medium tracking-tight">{COMPANY.short}</span>
            <span className="block text-[10px] uppercase tracking-[0.2em] text-[#A6A29A]">Pinturas · est. {COMPANY.founded}</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-10">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-[#A6A29A] hover:text-[#F2F0EC] transition-colors link-underline">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="hidden md:inline-flex btn-primary !py-3 !px-5 text-sm">
            Orçamento grátis
          </a>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden w-10 h-10 rounded-full border border-[#2A2A2F] flex items-center justify-center"
          >
            <span className="block w-4 h-px bg-[#F2F0EC] relative before:content-[''] before:absolute before:-top-1.5 before:w-4 before:h-px before:bg-[#F2F0EC] after:content-[''] after:absolute after:top-1.5 after:w-4 after:h-px after:bg-[#F2F0EC]" />
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-[#2A2A2F] bg-[#0E0E10]/95 backdrop-blur-xl">
          <div className="px-6 py-6 flex flex-col gap-5">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-lg font-display text-[#F2F0EC]">
                {l.label}
              </a>
            ))}
            <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="btn-primary justify-center mt-2">
              Pedir orçamento
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

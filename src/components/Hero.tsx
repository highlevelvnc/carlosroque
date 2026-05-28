"use client";
import Image from "next/image";
import { WHATSAPP_URL } from "@/lib/constants";
import CountUp from "@/components/CountUp";
import Magnetic from "@/components/Magnetic";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex flex-col justify-end pb-12 lg:pb-20 overflow-hidden">
      {/* Background: real photo + heavy dark overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/portfolio/hero-cozinha.jpeg"
          alt="Cozinha pintada pela Carlos Roque Pinturas"
          fill
          priority
          className="object-cover object-center scale-110"
          sizes="100vw"
        />
        {/* Dark gradient overlay for readability — left strong, right reveals photo */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E0E10] via-[#0E0E10]/70 to-[#0E0E10]/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E10] via-[#0E0E10]/40 to-[#0E0E10]/10" />
        {/* Accent glows */}
        <div
          className="absolute -top-32 -right-32 w-[700px] h-[700px] rounded-full opacity-25 blur-3xl"
          style={{ background: "radial-gradient(circle, #1F9A9A 0%, transparent 60%)" }}
        />
        <div
          className="absolute -bottom-40 -left-20 w-[600px] h-[600px] rounded-full opacity-15 blur-3xl"
          style={{ background: "radial-gradient(circle, #C9A961 0%, transparent 70%)" }}
        />
      </div>

      <div className="max-w-[1600px] mx-auto w-full px-6 lg:px-12 pt-40">
        {/* top meta line */}
        <div
          data-reveal data-reveal-delay="100"
          className="flex items-center justify-between text-[11px] uppercase tracking-[0.25em] text-[#A6A29A] mb-16 lg:mb-24"
        >
          <span className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1F9A9A] animate-pulse" />
            Alcochete · Montijo · Setúbal · Lisboa
          </span>
          <span className="hidden md:inline">15+ anos · 312 obras concluídas</span>
        </div>

        {/* The headline */}
        <h1 className="font-display text-[clamp(3.5rem,12vw,12rem)] leading-[0.9] tracking-tight max-w-[14ch]">
          <span data-reveal data-reveal-delay="200" className="block">
            Paredes
          </span>
          <span data-reveal data-reveal-delay="350" className="block italic text-[#A6A29A]">
            que duram.
          </span>
          <span data-reveal data-reveal-delay="500" className="block">
            Pintores que <span className="text-[#C9A961] italic">ouvem.</span>
          </span>
        </h1>

        {/* sub + CTA row */}
        <div className="mt-14 lg:mt-20 grid lg:grid-cols-12 gap-10 items-end">
          <p
            data-reveal data-reveal-delay="700"
            className="lg:col-span-5 text-lg lg:text-xl text-[#A6A29A] leading-relaxed max-w-prose"
          >
            Acabamentos profissionais para a tua casa, escritório ou loja. Orçamento honesto em 48h,
            garantia escrita até <span className="text-[#F2F0EC]">5 anos</span>. Tratamos da pintura para
            tu tratares do resto.
          </p>

          <div data-reveal data-reveal-delay="850" className="lg:col-span-4 flex flex-wrap items-center gap-4">
            <Magnetic strength={0.3}>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="btn-primary">
                Pedir orçamento
                <span aria-hidden>→</span>
              </a>
            </Magnetic>
            <a href="#cores" className="btn-ghost">
              Simular cor da parede
            </a>
          </div>

          <div data-reveal data-reveal-delay="1000" className="lg:col-span-3 font-mono text-xs text-[#A6A29A] grid grid-cols-2 gap-y-2">
            <CountUp to={15} suffix="+" className="text-[#F2F0EC] text-2xl font-display" />
            <CountUp to={312} className="text-[#F2F0EC] text-2xl font-display" />
            <span>anos a pintar</span>
            <span>obras entregues</span>
            <span className="text-[#F2F0EC] text-2xl font-display">48h</span>
            <span className="text-[#F2F0EC] text-2xl font-display">5★</span>
            <span>tempo de resposta</span>
            <span>média Google</span>
          </div>
        </div>

        {/* scroll cue */}
        <div className="mt-16 flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-[#A6A29A]">
          <span className="w-12 h-px bg-[#A6A29A]" />
          scroll · ver simulador
        </div>
      </div>
    </section>
  );
}

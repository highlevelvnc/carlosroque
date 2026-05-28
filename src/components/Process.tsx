import { PROCESS_STEPS } from "@/lib/constants";

export default function Process() {
  return (
    <section id="processo" className="py-24 lg:py-40">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          <div data-reveal className="lg:col-span-7">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#FF5B2E] font-mono">
              {"// "}como trabalhamos
            </span>
            <h2 className="font-display text-5xl lg:text-7xl mt-4">
              Quatro passos. <span className="italic text-[#A6A29A]">Sem surpresas.</span>
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#2A2A2F] border border-[#2A2A2F]">
          {PROCESS_STEPS.map((s, i) => (
            <div
              key={s.n}
              data-reveal
              data-reveal-delay={String(i * 120)}
              className="bg-[#0E0E10] p-8 lg:p-10 min-h-[320px] flex flex-col justify-between relative"
            >
              <div className="font-mono text-xs text-[#FF5B2E]">{s.n}</div>
              <div>
                <h3 className="font-display text-4xl mb-3">{s.title}</h3>
                <p className="text-sm text-[#A6A29A] leading-relaxed">{s.body}</p>
              </div>
              {i < PROCESS_STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-3 h-3 rotate-45 border-r border-t border-[#FF5B2E] z-10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

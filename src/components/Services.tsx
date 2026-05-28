import { SERVICES } from "@/lib/constants";

export default function Services() {
  return (
    <section id="servicos" className="py-24 lg:py-40">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          <div data-reveal className="lg:col-span-5">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#1F9A9A] font-mono">
              {"// "}o que fazemos
            </span>
            <h2 className="font-display text-5xl lg:text-7xl mt-4">
              Tudo o que tem <span className="italic text-[#A6A29A]">tinta</span>.
            </h2>
          </div>
          <p data-reveal data-reveal-delay="200" className="lg:col-span-5 lg:col-start-8 text-[#A6A29A] text-lg leading-relaxed self-end">
            Trabalhamos em casas particulares, escritórios e espaços comerciais. Sempre com tinta de marca (CIN, Robbialac, Dyrup) e garantia escrita no orçamento.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#2A2A2F] border border-[#2A2A2F]">
          {SERVICES.map((s, i) => (
            <article
              key={s.n}
              data-reveal
              data-reveal-delay={String(i * 80)}
              className="group bg-[#0E0E10] p-8 lg:p-10 min-h-[280px] flex flex-col justify-between hover:bg-[#16161A] transition-colors duration-500 relative overflow-hidden"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-xs text-[#A6A29A]">{s.n}</span>
                <span className="w-8 h-8 rounded-full border border-[#2A2A2F] flex items-center justify-center text-[#A6A29A] group-hover:bg-[#1F9A9A] group-hover:border-[#1F9A9A] group-hover:text-[#0E0E10] transition-all duration-300">
                  →
                </span>
              </div>
              <div>
                <h3 className="font-display text-3xl lg:text-4xl mb-3">{s.title}</h3>
                <p className="text-sm text-[#A6A29A] leading-relaxed">{s.body}</p>
              </div>
              <div className="absolute -bottom-1 left-0 right-0 h-px bg-[#1F9A9A] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

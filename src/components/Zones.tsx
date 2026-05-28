import { ZONES, COMPANY } from "@/lib/constants";

export default function Zones() {
  return (
    <section className="py-24 lg:py-32 bg-[#16161A] border-y border-[#2A2A2F]">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12">
          <div data-reveal className="lg:col-span-5">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#1F9A9A] font-mono">
              {"// "}onde trabalhamos
            </span>
            <h2 className="font-display text-5xl lg:text-6xl mt-4">
              Margem sul <span className="italic text-[#A6A29A]">e Lisboa</span>.
            </h2>
            <p className="text-[#A6A29A] mt-6 leading-relaxed">
              Sede em {COMPANY.address}. Vamos a qualquer ponto num raio de 40 km sem custo de deslocação. Para fora desta área, fale connosco — costumamos encontrar uma solução.
            </p>
          </div>

          <div data-reveal data-reveal-delay="200" className="lg:col-span-7">
            <div className="flex flex-wrap gap-3">
              {ZONES.map((z, i) => (
                <span
                  key={z}
                  className="font-display text-2xl lg:text-4xl px-5 py-3 rounded-full border border-[#2A2A2F] hover:border-[#1F9A9A] hover:text-[#1F9A9A] transition-colors"
                  data-reveal
                  data-reveal-delay={String(i * 60)}
                >
                  {z}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

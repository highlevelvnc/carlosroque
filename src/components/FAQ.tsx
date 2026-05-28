"use client";
import { useState } from "react";

const FAQS = [
  {
    q: "Fazem orçamento gratuito?",
    a: "Sim, sempre. Vamos a sua casa, medimos paredes, ouvimos o que pretende e entregamos proposta por escrito em 48h. Sem custo, sem compromisso.",
  },
  {
    q: "Quanto tempo demora um serviço de pintura?",
    a: "Depende do m² e do tipo de trabalho. Um apartamento T2 interior leva 3 a 5 dias; uma fachada de moradia entre 5 e 10 dias. O prazo exacto vem por escrito no orçamento e é cumprido.",
  },
  {
    q: "Os materiais estão incluídos?",
    a: "Sim. Todos os orçamentos incluem tinta de marca (CIN, Robbialac, Sotinco), primário, massa, fitas, plásticos de protecção e mão-de-obra. Sem extras escondidos.",
  },
  {
    q: "Fazem pinturas exteriores em prédios?",
    a: "Sim, com equipamento de altura próprio (andaimes, plataformas elevatórias). Fachadas até 4 andares fazemos sem subcontratar.",
  },
  {
    q: "Em que zonas trabalham?",
    a: "Alcochete, Montijo, Pinhal Novo, Palmela, Setúbal, Lisboa, Barreiro e Moita. Para fora desta área falamos consigo — costumamos encontrar uma solução.",
  },
  {
    q: "O serviço tem garantia?",
    a: "2 anos de garantia escrita em qualquer acabamento interior. 5 anos em fachadas. Tudo no papel, no orçamento — não na conversa.",
  },
];

export default function FAQ({
  accent = "#4FB8C9",
  text = "#F4F1EB",
  textDim = "#A6B0BA",
  surface = "#16314A",
  border = "rgba(255,255,255,0.08)",
  display,
}: {
  accent?: string;
  text?: string;
  textDim?: string;
  surface?: string;
  border?: string;
  display?: React.CSSProperties;
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 lg:py-32" style={{ background: surface, borderTop: `1px solid ${border}`, borderBottom: `1px solid ${border}` }}>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="text-[11px] uppercase tracking-[0.25em] mb-4" style={{ color: accent }}>
              perguntas frequentes
            </div>
            <h2 className="text-4xl lg:text-6xl leading-[0.95]" style={{ ...display, color: text }}>
              Tudo o que <span style={{ color: accent }}>perguntam</span> antes.
            </h2>
            <p className="mt-6 leading-relaxed" style={{ color: textDim }}>
              Se a sua dúvida não está aqui,{" "}
              <a
                href="https://wa.me/351968952656?text=Ol%C3%A1%2C%20tenho%20uma%20d%C3%BAvida%20sobre%20pintura"
                target="_blank"
                rel="noopener"
                className="underline underline-offset-4"
                style={{ color: text }}
              >
                pergunte pelo WhatsApp
              </a>{" "}
              — respondemos em menos de 4 horas.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="divide-y" style={{ borderColor: border }}>
              {FAQS.map((f, i) => {
                const isOpen = open === i;
                return (
                  <div key={f.q} className="py-1" style={{ borderColor: border, borderTopWidth: i === 0 ? 0 : "1px" }}>
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="w-full text-left py-5 flex items-start justify-between gap-6 group"
                    >
                      <span
                        className="text-lg lg:text-xl pr-4 transition-colors"
                        style={{ color: isOpen ? accent : text, fontWeight: 600 }}
                      >
                        {f.q}
                      </span>
                      <span
                        className="flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center text-lg transition-transform duration-300"
                        style={{
                          borderColor: isOpen ? accent : border,
                          color: isOpen ? accent : textDim,
                          transform: isOpen ? "rotate(45deg)" : "rotate(0)",
                        }}
                      >
                        +
                      </span>
                    </button>
                    <div
                      className="overflow-hidden transition-all duration-500"
                      style={{
                        maxHeight: isOpen ? 400 : 0,
                        opacity: isOpen ? 1 : 0,
                      }}
                    >
                      <p className="pb-6 pr-12 leading-relaxed" style={{ color: textDim }}>
                        {f.a}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

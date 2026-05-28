import type { Metadata } from "next";
import Image from "next/image";
import { COMPANY, buildWhatsappUrl } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Escolha a sua versão · Carlos Roque Pinturas",
  description: "Duas propostas de site, dois universos visuais. Escolha aquele com que mais se identifica e pintamos a sua casa.",
};

const OLD_URL = "https://carlos-roque-pinturas-convers-o-pro.vercel.app";
const NEW_URL = "/";

const VERSIONS = [
  {
    tag: "Versão 01",
    name: "Conversão Pro",
    subtitle: "Clássico · directo · provado",
    description:
      "Layout limpo, fotos das obras em destaque, secções claras. Foco máximo em converter quem chega ao site num pedido de orçamento. Tom corporativo, fácil de ler em qualquer ecrã.",
    bullets: [
      "Hero directo com botão WhatsApp",
      "Portfolio em grid com fotos reais",
      "Testemunhos Google verificados",
      "Pronto a indexar no Google",
    ],
    palette: ["#FFFFFF", "#1F4E79", "#E5E7EB"],
    paletteNames: ["Branco", "Azul corporate", "Cinza"],
    iframeUrl: OLD_URL,
    liveUrl: OLD_URL,
    waMessage: `Olá Carlos, gostei da versão 01 (Conversão Pro) do site. Queria avançar com esta. Quando podemos falar?`,
    accent: "#1F4E79",
  },
  {
    tag: "Versão 02",
    name: "Atelier Showroom",
    subtitle: "Editorial · dark · interactivo",
    description:
      "Tipografia serif gigante, dark mode premium, e um simulador onde o cliente escolhe a cor e a parede muda em tempo real. Posiciona-o no segmento alto. Único no nicho de pintura em Portugal.",
    bullets: [
      "Simulador de cor interactivo no hero",
      "Antes/depois com slider arrastável",
      "Scroll horizontal nas obras",
      "WhatsApp pré-formatado com a cor escolhida",
    ],
    palette: ["#0E0E10", "#FF5B2E", "#1F9A9A"],
    paletteNames: ["Off-black", "Laranja eléctrico", "Teal da marca"],
    iframeUrl: NEW_URL,
    liveUrl: NEW_URL,
    waMessage: `Olá Carlos, gostei da versão 02 (Atelier Showroom) do site — a do simulador de cor. Queria avançar com esta. Quando podemos falar?`,
    accent: "#FF5B2E",
  },
];

export default function EscolhaPage() {
  return (
    <main className="min-h-screen bg-[#0E0E10] text-[#F2F0EC]">
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 lg:px-12 overflow-hidden">
        <div
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, #1F9A9A 0%, transparent 60%)" }}
        />
        <div className="max-w-[1600px] mx-auto relative">
          <div className="flex items-center gap-4 mb-12">
            <Image src="/logo.png" alt={COMPANY.name} width={64} height={64} className="w-16 h-16 object-contain" />
            <div className="leading-tight">
              <div className="text-sm font-medium">{COMPANY.short}</div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-[#A6A29A]">apresentação · privado</div>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#FF5B2E] font-mono">
                {"// "}duas propostas, uma decisão
              </span>
              <h1 className="font-display text-[clamp(3rem,9vw,8rem)] mt-4 leading-[0.9]">
                Carlos, <span className="italic text-[#A6A29A]">qual</span> levas?
              </h1>
            </div>
            <p className="lg:col-span-4 text-[#A6A29A] text-lg leading-relaxed">
              Construímos duas direcções para o seu site. Veja ambas em baixo, lado a lado, e escolha aquela com que mais se identifica. A decisão é sua — nós executamos.
            </p>
          </div>

          <div className="hairline mt-16 pt-6 flex flex-wrap items-center gap-x-10 gap-y-3 text-[11px] uppercase tracking-[0.25em] font-mono text-[#A6A29A]">
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#1F9A9A] animate-pulse" /> ambas funcionais</span>
            <span>·</span>
            <span>previews ao vivo</span>
            <span>·</span>
            <span>scroll dentro de cada janela</span>
          </div>
        </div>
      </section>

      {/* Comparativo */}
      <section className="px-6 lg:px-12 pb-32">
        <div className="max-w-[1800px] mx-auto grid lg:grid-cols-2 gap-8">
          {VERSIONS.map((v, i) => (
            <article
              key={v.name}
              className="rounded-2xl border border-[#2A2A2F] overflow-hidden bg-[#16161A] flex flex-col"
            >
              {/* header */}
              <div className="p-8 border-b border-[#2A2A2F]">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="font-mono text-xs uppercase tracking-[0.25em] text-[#A6A29A]">{v.tag}</div>
                    <h2 className="font-display text-4xl lg:text-5xl mt-2">{v.name}</h2>
                    <div className="text-sm text-[#A6A29A] mt-2">{v.subtitle}</div>
                  </div>
                  <span
                    className="text-[10px] uppercase tracking-[0.2em] font-mono px-3 py-1.5 rounded-full border"
                    style={{ borderColor: v.accent, color: v.accent }}
                  >
                    {i === 0 ? "actual" : "proposta nova"}
                  </span>
                </div>
                <p className="text-[#A6A29A] leading-relaxed">{v.description}</p>
              </div>

              {/* iframe preview */}
              <div className="relative bg-[#0E0E10] border-b border-[#2A2A2F]">
                <div className="px-4 py-2.5 flex items-center gap-2 border-b border-[#2A2A2F]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#3A3A3F]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#3A3A3F]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#3A3A3F]" />
                  <span className="ml-3 font-mono text-[10px] text-[#A6A29A] truncate">
                    {v.iframeUrl.startsWith("http") ? v.iframeUrl : "carlosroquepinturas.pt"}
                  </span>
                </div>
                <div className="relative w-full h-[520px] overflow-hidden">
                  <iframe
                    src={v.iframeUrl}
                    title={v.name}
                    className="absolute top-0 left-0"
                    style={{
                      width: "166%",
                      height: "166%",
                      transform: "scale(0.6)",
                      transformOrigin: "0 0",
                      border: 0,
                    }}
                    loading={i === 0 ? "eager" : "lazy"}
                  />
                </div>
              </div>

              {/* features */}
              <div className="p-8 flex-1 flex flex-col">
                <div className="text-[10px] uppercase tracking-[0.25em] text-[#A6A29A] font-mono mb-4">o que tem</div>
                <ul className="space-y-3 mb-8">
                  {v.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: v.accent }} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="text-[10px] uppercase tracking-[0.25em] text-[#A6A29A] font-mono mb-3">paleta</div>
                <div className="flex items-center gap-3 mb-8">
                  {v.palette.map((c, idx) => (
                    <div key={c} className="flex flex-col items-center gap-1.5">
                      <span className="w-10 h-10 rounded-full border border-[#2A2A2F]" style={{ background: c }} />
                      <span className="text-[9px] text-[#A6A29A] font-mono">{v.paletteNames[idx]}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap gap-3">
                  <a
                    href={v.liveUrl}
                    target="_blank"
                    rel="noopener"
                    className="btn-ghost !py-3 !px-5 text-sm"
                  >
                    Ver em ecrã cheio ↗
                  </a>
                  <a
                    href={buildWhatsappUrl(v.waMessage)}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-medium text-sm transition-transform hover:-translate-y-0.5"
                    style={{ background: v.accent, color: "#0E0E10" }}
                  >
                    Escolho esta →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* footer note */}
        <div className="max-w-[1600px] mx-auto mt-20 pt-10 border-t border-[#2A2A2F] grid lg:grid-cols-3 gap-6 text-sm text-[#A6A29A]">
          <div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-[#FF5B2E] font-mono mb-2">decidiu?</div>
            <p>Clique no botão da versão escolhida. Abre o WhatsApp directamente com a mensagem certa, basta enviar.</p>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-[#FF5B2E] font-mono mb-2">não tem a certeza?</div>
            <p>Sem stress. <a href={buildWhatsappUrl("Olá, vi as duas versões mas tenho dúvidas. Podemos falar?")} target="_blank" rel="noopener" className="text-[#F2F0EC] link-underline">Fale connosco</a> e tiramos qualquer dúvida sobre cores, secções ou prazos.</p>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-[#FF5B2E] font-mono mb-2">e depois?</div>
            <p>48h após a sua escolha: domínio próprio (carlosroquepinturas.pt), email profissional, e site online.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

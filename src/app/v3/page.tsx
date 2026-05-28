import Image from "next/image";
import Link from "next/link";
import {
  COMPANY, NAV_LINKS, PROJECTS, SERVICES, TESTIMONIALS, ZONES,
  WHATSAPP_URL, buildWhatsappUrl,
} from "@/lib/constants";
import PortfolioCarousel from "@/components/PortfolioCarousel";
import BrandStrip from "@/components/BrandStrip";
import LoadingScreen from "@/components/LoadingScreen";
import CountUp from "@/components/CountUp";
import FAQ from "@/components/FAQ";
import { ScrollProgress, BackToTop } from "@/components/ScrollUtils";

// V3 palette — navy/azul corporate
// Primary: #0F2433 (deep navy, do logo slate)
// Surface: #16314A (navy raised)
// Accent: #4FB8C9 (teal claro, da logo)
// Ink: #F4F1EB (cream)
// Highlight: #E8B86A (mostarda quente para CTAs)

const DISPLAY = { fontFamily: "var(--font-inter-tight-v3)", letterSpacing: "-0.04em", fontWeight: 800 } as const;

export default function V3Page() {
  return (
    <main>
      <LoadingScreen variant="fill" themeKey="v3" sessionKey="cr-v3-loaded" tagline="A pintura que a sua casa merece." />
      <ScrollProgress color="#4FB8C9" />
      <Header />
      <Hero />
      <KPIBand />
      <BrandStrip
        bg="#0F2433"
        text="#F4F1EB"
        accent="#4FB8C9"
        border="#16314A"
        display={{ ...DISPLAY }}
      />
      <SignaturePiece />
      <Services />
      <Showcase />
      <Process />
      <ZonesSection />
      <Testimonials />
      <FAQ
        accent="#4FB8C9"
        text="#F4F1EB"
        textDim="#A6B0BA"
        surface="#16314A"
        border="rgba(255,255,255,0.08)"
        display={DISPLAY}
      />
      <CTA />
      <Footer />
      <BackToTop bg="#4FB8C9" ink="#0F2433" />
    </main>
  );
}

function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-30 bg-[#0F2433]/90 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <Link href="/v3" className="flex items-center gap-3">
          <Image src="/carlosroque.png" alt={COMPANY.name} width={320} height={160} className="h-11 w-auto object-contain" style={{ filter: "brightness(1.4) contrast(1.05) drop-shadow(0 2px 10px rgba(79,184,201,0.4))" }} priority />
          <div className="hidden md:inline-flex items-center text-[10px] uppercase tracking-[0.2em] text-[#4FB8C9]/80 border-l border-white/15 pl-3">
            desde {COMPANY.founded}
          </div>
        </Link>
        <nav className="hidden lg:flex items-center gap-8 text-sm">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-[#F4F1EB]/70 hover:text-[#F4F1EB] transition">{l.label}</a>
          ))}
        </nav>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="hidden md:inline-flex items-center gap-2 bg-[#E8B86A] text-[#0F2433] px-5 py-2.5 rounded text-sm font-semibold hover:bg-[#f0c47e] transition">
          Pedir orçamento
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative pt-28 lg:pt-32 pb-16 lg:pb-24 overflow-hidden bg-[#0F2433]">
      {/* Ambient glow */}
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl pointer-events-none" style={{ background: "radial-gradient(circle, #4FB8C9 0%, transparent 70%)" }} />

      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* LEFT — text */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex self-start items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-[#4FB8C9] mb-6 border border-[#4FB8C9]/30 rounded-full px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4FB8C9] animate-pulse" />
              Alcochete · Montijo · Setúbal · Lisboa
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-[7.5rem] leading-[0.95]" style={DISPLAY}>
              A pintura<br />
              que a sua casa<br />
              <span className="text-[#4FB8C9]">merece</span>.
            </h1>

            <p className="mt-8 lg:mt-10 text-base lg:text-lg text-[#F4F1EB]/75 max-w-xl leading-relaxed">
              Há mais de 15 anos a transformar casas, apartamentos e fachadas no concelho de Alcochete. Trabalho rigoroso, prazos cumpridos, tinta de marca e garantia escrita até 5 anos.
            </p>

            <div className="mt-8 lg:mt-10 flex flex-wrap gap-3 items-center">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="inline-flex items-center gap-2 bg-[#E8B86A] text-[#0F2433] px-7 py-4 rounded font-semibold hover:bg-[#f0c47e] hover:-translate-y-0.5 transition">
                Orçamento grátis →
              </a>
              <a href="#obras" className="inline-flex items-center gap-2 border border-[#F4F1EB]/30 text-[#F4F1EB] px-7 py-4 rounded hover:border-[#F4F1EB]/70 transition">
                Ver obras
              </a>
            </div>
          </div>

          {/* RIGHT — photo collage */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] lg:aspect-auto lg:h-full lg:min-h-[640px] rounded-lg overflow-hidden">
              <Image
                src="/portfolio/hero-cozinha.jpeg"
                alt="Cozinha pintada pela Carlos Roque Pinturas"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F2433]/60 via-transparent to-transparent" />
              {/* Floating spec card */}
              <div className="absolute bottom-5 left-5 right-5 lg:bottom-6 lg:left-6 lg:right-6 bg-[#0F2433]/85 backdrop-blur border border-white/10 rounded-md p-4 lg:p-5">
                <div className="text-[10px] uppercase tracking-widest text-[#4FB8C9] mb-1">obra recente</div>
                <div className="text-lg lg:text-2xl text-[#F4F1EB]" style={DISPLAY}>Cozinha moderna · Alcochete</div>
                <div className="flex items-center gap-4 mt-3 text-xs text-[#F4F1EB]/70">
                  <span>2024</span>
                  <span className="w-px h-3 bg-white/20" />
                  <span>4 dias de obra</span>
                  <span className="w-px h-3 bg-white/20" />
                  <span>CIN Vinylsilk</span>
                </div>
              </div>
            </div>

            {/* Stat sticker */}
            <div className="hidden lg:flex absolute -left-6 top-8 bg-[#E8B86A] text-[#0F2433] rounded-md px-5 py-4 flex-col rotate-[-3deg] shadow-2xl">
              <span className="text-3xl" style={DISPLAY}>5★</span>
              <span className="text-[10px] uppercase tracking-widest">no Google</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function KPIBand() {
  const items = [
    { value: 15, suffix: "+", label: "anos no terreno" },
    { value: 312, suffix: "", label: "obras entregues" },
    { value: 48, suffix: "h", label: "para orçamento" },
    { value: 5, suffix: "★", label: "média Google" },
  ];
  return (
    <section className="bg-[#16314A] border-y border-white/10">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-10 grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
        {items.map((it, i) => (
          <div key={it.label} className={`${i === 0 ? "pl-0" : "pl-6 lg:pl-12"} flex flex-col gap-1`}>
            <CountUp to={it.value} suffix={it.suffix} className="text-4xl lg:text-6xl text-[#4FB8C9]" style={DISPLAY} />
            <div className="text-xs uppercase tracking-widest text-[#F4F1EB]/60">{it.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SignaturePiece() {
  return (
    <section className="py-24 lg:py-32 bg-[#0F2433]">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-7 relative aspect-[4/3] overflow-hidden rounded">
          <Image src="/portfolio/hero-cozinha.jpeg" alt="Cozinha pintada" fill className="object-cover" sizes="(max-width:1024px) 100vw, 60vw" />
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
            <div className="text-[10px] uppercase tracking-widest text-[#4FB8C9]">obra recente · alcochete · 2024</div>
            <div className="text-2xl mt-1" style={DISPLAY}>Cozinha moderna com iluminação LED</div>
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="text-[11px] uppercase tracking-[0.25em] text-[#4FB8C9] mb-4">por que escolher-nos</div>
          <h2 className="text-4xl lg:text-6xl mb-6 leading-[0.95]" style={DISPLAY}>
            Qualidade e <span className="text-[#4FB8C9]">confiança</span> em cada pincelada.
          </h2>
          <p className="text-[#F4F1EB]/75 leading-relaxed mb-8">
            Não somos os mais baratos — somos os que fazem direito à primeira. Cliente que escolhe a {COMPANY.name} é cliente que escolhe tranquilidade, qualidade e resultado final impecável.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-sm">
            {[
              "Profissionalismo e pontualidade",
              "Acabamentos de alta qualidade",
              "Materiais duráveis e certificados",
              "Preços justos e transparentes",
              "Cumprimento rigoroso de prazos",
              "Foco total na satisfação do cliente",
            ].map((it) => (
              <li key={it} className="flex items-start gap-3 text-[#F4F1EB]/85">
                <span className="mt-1 text-[#4FB8C9]">✓</span>
                <span>{it}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="servicos" className="py-24 lg:py-32 bg-[#16314A]">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-8 mb-14">
          <div className="lg:col-span-6">
            <div className="text-[11px] uppercase tracking-[0.25em] text-[#4FB8C9] mb-4">serviços</div>
            <h2 className="text-4xl lg:text-6xl leading-[0.95]" style={DISPLAY}>
              Cobrimos tudo o que tem <span className="text-[#4FB8C9]">tinta</span>.
            </h2>
          </div>
          <p className="lg:col-span-5 lg:col-start-8 self-end text-[#F4F1EB]/70">
            Da pequena reparação ao chave-na-mão. Sempre com tinta de marca (CIN, Robbialac, Dyrup) e garantia escrita.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.slice(0, 6).map((s) => (
            <article key={s.n} className="group bg-[#0F2433] p-8 rounded border border-white/5 hover:border-[#4FB8C9]/40 transition">
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] uppercase tracking-widest text-[#4FB8C9]">{s.n}</span>
                <span className="w-7 h-7 rounded-full border border-white/20 group-hover:border-[#4FB8C9] group-hover:text-[#4FB8C9] flex items-center justify-center text-xs transition">→</span>
              </div>
              <h3 className="text-2xl mb-3" style={DISPLAY}>{s.title}</h3>
              <p className="text-sm text-[#F4F1EB]/65 leading-relaxed">{s.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Showcase() {
  return (
    <section id="obras" className="py-24 lg:py-32 bg-[#0F2433]">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 mb-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <div className="text-[11px] uppercase tracking-[0.25em] text-[#4FB8C9] mb-4">portfólio</div>
            <h2 className="text-4xl lg:text-6xl leading-[0.95]" style={DISPLAY}>
              Obras recentes. <span className="text-[#4FB8C9]">Fotos reais.</span>
            </h2>
          </div>
          <p className="text-[#F4F1EB]/65 max-w-md">
            Cada projecto é entregue com fotos antes/depois e relatório por escrito. Nada fica por explicar.
          </p>
        </div>
      </div>
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <PortfolioCarousel
          slides={PROJECTS.slice(0, 8).map((p) => ({
            img: p.img, title: p.title, place: p.place, scope: p.scope, year: p.year,
          }))}
          theme={{ bg: "#0F2433", surface: "#16314A", ink: "#F4F1EB", inkDim: "#A6A29A", accent: "#4FB8C9" }}
          display={DISPLAY}
          interval={5500}
        />
      </div>

      {/* Thumbnails strip below carousel */}
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 mt-6 grid grid-cols-4 lg:grid-cols-8 gap-2 lg:gap-3">
        {PROJECTS.slice(0, 8).map((p) => (
          <div key={p.n + "-thumb"} className="relative aspect-square overflow-hidden rounded opacity-60 hover:opacity-100 transition">
            <Image src={p.img} alt="" fill sizes="120px" className="object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { n: "01", title: "Visita à casa", body: "Vamos a sua casa, medimos paredes e ouvimos o que pretende. Sem custo, sem compromisso." },
    { n: "02", title: "Orçamento em 48h", body: "Proposta por escrito com tudo detalhado: m², tintas, prazo e preço fechado." },
    { n: "03", title: "Execução cuidada", body: "Protegemos móveis e pavimentos. Cumprimos o prazo. Limpamos antes de sair." },
    { n: "04", title: "Garantia escrita", body: "2 anos em interior, 5 anos em fachada. Por escrito no orçamento — não na conversa." },
  ];
  return (
    <section id="processo" className="py-24 lg:py-32 bg-[#16314A] border-y border-white/10">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="text-[11px] uppercase tracking-[0.25em] text-[#4FB8C9] mb-4">como trabalhamos</div>
        <h2 className="text-4xl lg:text-6xl leading-[0.95] mb-16 max-w-3xl" style={DISPLAY}>
          Quatro passos. <span className="text-[#4FB8C9]">Sem surpresas.</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          {steps.map((s) => (
            <div key={s.n} className="bg-[#16314A] p-8 min-h-[260px] flex flex-col">
              <div className="text-3xl text-[#4FB8C9] mb-6" style={DISPLAY}>{s.n}</div>
              <h3 className="text-2xl mb-3" style={DISPLAY}>{s.title}</h3>
              <p className="text-sm text-[#F4F1EB]/65 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ZonesSection() {
  return (
    <section className="py-20 bg-[#0F2433]">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4">
          <div className="text-[11px] uppercase tracking-[0.25em] text-[#4FB8C9] mb-4">cobertura</div>
          <h3 className="text-3xl lg:text-5xl leading-[0.95]" style={DISPLAY}>
            Onde <span className="text-[#4FB8C9]">trabalhamos</span>.
          </h3>
        </div>
        <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {ZONES.map((z) => (
            <div key={z} className="border border-white/10 rounded px-4 py-3 text-sm text-[#F4F1EB]/85 hover:bg-[#16314A] hover:border-[#4FB8C9]/40 transition">
              {z}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-[#0F2433]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-14">
          <div className="text-[11px] uppercase tracking-[0.25em] text-[#4FB8C9] mb-4">clientes verificados</div>
          <h2 className="text-4xl lg:text-6xl leading-[0.95]" style={DISPLAY}>
            5★ no <span className="text-[#4FB8C9]">Google</span>. E merecidas.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t) => (
            <article key={t.name} className="bg-[#16314A] p-8 rounded border border-white/5">
              <div className="text-[#E8B86A] tracking-widest text-lg mb-4">★★★★★</div>
              <p className="text-[#F4F1EB]/90 leading-relaxed mb-6">&ldquo;{t.body}&rdquo;</p>
              <div className="pt-5 border-t border-white/10 flex items-center justify-between text-sm">
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-[#F4F1EB]/60 text-xs">{t.place}</div>
                </div>
                <div className="text-[10px] uppercase tracking-widest text-[#4FB8C9]">Google</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contacto" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <Image src="/portfolio/02-edificio-moderno.jpg" alt="" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2433] via-[#0F2433]/85 to-[#0F2433]/60" />
      </div>
      <div className="relative max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="max-w-3xl">
          <div className="text-[11px] uppercase tracking-[0.25em] text-[#4FB8C9] mb-4">vamos a isto?</div>
          <h2 className="text-5xl lg:text-8xl leading-[0.95]" style={DISPLAY}>
            Próximo passo: <span className="text-[#4FB8C9]">uma conversa</span>.
          </h2>
          <p className="text-lg text-[#F4F1EB]/80 mt-8 max-w-xl">
            Envie uma mensagem. Respondemos em menos de 4 horas em dia útil. Visita à sua casa em 48h, orçamento por escrito no mesmo dia.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="inline-flex items-center gap-2 bg-[#E8B86A] text-[#0F2433] px-7 py-4 rounded font-semibold hover:bg-[#f0c47e] transition">
              WhatsApp · {COMPANY.phone}
            </a>
            <a href={`tel:+${COMPANY.phone.replace(/\D/g, "")}`} className="inline-flex items-center gap-2 border border-white/30 px-7 py-4 rounded text-[#F4F1EB] hover:bg-white/5 transition">
              Ligar agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0A1A26] py-16 border-t border-white/10">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 grid lg:grid-cols-3 gap-10">
        <div>
          <Image src="/carlosroque.png" alt={COMPANY.name} width={360} height={180} className="h-14 w-auto object-contain mb-4" style={{ filter: "brightness(1.4) contrast(1.05) drop-shadow(0 2px 10px rgba(79,184,201,0.4))" }} />
          <div>
            <div className="text-base font-semibold" style={DISPLAY}>{COMPANY.short}</div>
            <div className="text-[10px] uppercase tracking-widest text-[#4FB8C9]/80">desde {COMPANY.founded}</div>
          </div>
          <p className="text-sm text-[#F4F1EB]/60 max-w-xs">
            Pintura interior e exterior em Alcochete, Margem Sul e Lisboa. Garantia escrita em todas as obras.
          </p>
        </div>
        <div className="text-sm space-y-2">
          <div className="text-[10px] uppercase tracking-widest text-[#4FB8C9] mb-3">Contacto</div>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="block text-[#F4F1EB]/85 hover:text-[#4FB8C9]">WhatsApp · {COMPANY.phone}</a>
          <a href={`mailto:${COMPANY.email}`} className="block text-[#F4F1EB]/85 hover:text-[#4FB8C9]">{COMPANY.email}</a>
          <div className="text-[#F4F1EB]/65">{COMPANY.address}</div>
          <div className="text-[#F4F1EB]/65">{COMPANY.hours}</div>
        </div>
        <div className="text-sm">
          <div className="text-[10px] uppercase tracking-widest text-[#4FB8C9] mb-3">Zonas servidas</div>
          <div className="text-[#F4F1EB]/85 mb-6">{ZONES.join(" · ")}</div>
          <a href={buildWhatsappUrl()} target="_blank" rel="noopener" className="inline-flex items-center gap-2 bg-[#E8B86A] text-[#0F2433] px-5 py-2.5 rounded text-sm font-semibold">
            Pedir orçamento →
          </a>
        </div>
      </div>
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 mt-10 pt-6 border-t border-white/10 text-xs text-[#F4F1EB]/45 flex flex-col md:flex-row justify-between gap-2">
        <span>© {new Date().getFullYear()} {COMPANY.name}</span>
        <span>Pintura profissional · PT</span>
      </div>
    </footer>
  );
}

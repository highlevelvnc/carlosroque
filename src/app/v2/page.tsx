import Image from "next/image";
import Link from "next/link";
import { COMPANY, NAV_LINKS, PROJECTS, SERVICES, TESTIMONIALS, ZONES, WHATSAPP_URL, buildWhatsappUrl } from "@/lib/constants";
import BrandStrip from "@/components/BrandStrip";

const HERO_IMG = "/portfolio/hero-cozinha.jpeg";
const SECTION_IMG = "/portfolio/05-moradia-amarela.jpg";

export default function V2Page() {
  return (
    <main>
      <Header />
      <Hero />
      <Strip />
      <About />
      <BrandStrip
        bg="#F5F2EC"
        text="#0E0E10"
        accent="#156B6B"
        border="#0E0E10"
        display={{ fontFamily: "var(--font-fraunces)" }}
      />
      <PortfolioGrid />
      <ServicesV2 />
      <TestimonialsV2 />
      <CTAV2 />
      <FooterV2 />
    </main>
  );
}

function Header() {
  return (
    <header className="absolute top-0 inset-x-0 z-20 text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-transparent pointer-events-none" />
      <div className="relative max-w-[1600px] mx-auto px-6 lg:px-12 h-24 flex items-center justify-between">
        <Link href="/v2" className="flex items-center gap-3">
          <span className="inline-flex items-center bg-white/95 backdrop-blur rounded-full px-3 py-1.5 shadow-lg">
            <Image src="/logocertacr.png" alt={COMPANY.name} width={240} height={120} className="h-8 w-auto object-contain" priority />
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-10 text-sm">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="opacity-90 hover:opacity-100 transition">{l.label}</a>
          ))}
        </nav>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="hidden md:inline-flex items-center gap-2 bg-white text-[#0E0E10] px-5 py-3 rounded-full text-sm font-medium">
          Pedir orçamento →
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative h-screen min-h-[720px] overflow-hidden">
      <Image src={HERO_IMG} alt="Interior pintado pela Carlos Roque" fill priority className="object-cover" sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
      <div className="absolute inset-x-0 bottom-0 px-6 lg:px-12 pb-16 lg:pb-24">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 items-end text-white">
            <div className="lg:col-span-9">
              <span className="text-[11px] uppercase tracking-[0.3em] opacity-80 font-mono">
                Alcochete · Margem Sul · Lisboa
              </span>
              <h1
                className="font-display mt-6 leading-[0.92] tracking-tight"
                style={{ fontSize: "clamp(3rem, 9vw, 9rem)" }}
              >
                Acabamentos<br />
                <span className="italic opacity-90">para a casa</span><br />
                que sonhou.
              </h1>
            </div>
            <div className="lg:col-span-3 lg:pl-8 lg:border-l lg:border-white/20">
              <p className="text-base lg:text-lg leading-relaxed opacity-90">
                Mais de 15 anos a pintar interiores e fachadas. Orçamento honesto em 48h, garantia escrita até 5 anos.
              </p>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="inline-flex items-center gap-2 mt-6 text-sm font-medium border-b border-white pb-1 hover:opacity-80 transition">
                Falar pelo WhatsApp →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Strip() {
  return (
    <section className="bg-[#0E0E10] text-white py-8 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12">
        {[
          { n: "15+", label: "anos de experiência" },
          { n: "312", label: "obras concluídas" },
          { n: "48h", label: "tempo de resposta" },
          { n: "5★", label: "média no Google" },
        ].map((s) => (
          <div key={s.label} className="flex items-baseline gap-3">
            <span className="font-display text-4xl lg:text-6xl">{s.n}</span>
            <span className="text-xs uppercase tracking-widest opacity-60">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="py-24 lg:py-40 bg-[#F5F2EC]">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <div className="lg:col-span-5">
          <div className="aspect-[4/5] relative overflow-hidden">
            <Image src={SECTION_IMG} alt="Moradia pintada" fill className="object-cover" sizes="(max-width:1024px) 100vw, 40vw" />
          </div>
        </div>
        <div className="lg:col-span-7">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#0E0E10]/60 font-mono">
            sobre nós
          </span>
          <h2 className="font-display text-5xl lg:text-7xl mt-4 leading-[0.95]">
            Qualidade e confiança em cada <span className="italic text-[#156B6B]">pincelada</span>.
          </h2>
          <p className="text-lg leading-relaxed mt-8 max-w-2xl">
            Há mais de 15 anos a transformar espaços com profissionalismo e dedicação. Escolher a {COMPANY.name} é escolher tranquilidade, qualidade e um resultado final impecável — desde o pequeno apartamento à fachada da moradia.
          </p>
          <ul className="grid sm:grid-cols-2 gap-y-3 gap-x-8 mt-10 text-sm">
            {[
              "Profissionalismo e pontualidade",
              "Acabamentos de alta qualidade",
              "Materiais duráveis e certificados",
              "Preços justos e transparentes",
              "Cumprimento rigoroso de prazos",
              "Foco total na satisfação do cliente",
            ].map((p) => (
              <li key={p} className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#156B6B] flex-shrink-0" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function PortfolioGrid() {
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
            Cada foto, uma obra real. Sem renders, sem stock. Carregue para ver em grande.
          </p>
        </div>
      </div>

      {/* Asymmetric editorial grid */}
      <div className="grid grid-cols-12 gap-2 lg:gap-3 px-2 lg:px-3 pb-3">
        {PROJECTS.slice(0, 8).map((p, i) => {
          // Custom layout pattern: tall, wide, square, etc.
          const layouts = [
            "col-span-12 lg:col-span-8 aspect-[16/9]",
            "col-span-12 lg:col-span-4 aspect-[4/5]",
            "col-span-6 lg:col-span-4 aspect-square",
            "col-span-6 lg:col-span-4 aspect-square",
            "col-span-12 lg:col-span-4 aspect-square",
            "col-span-12 lg:col-span-8 aspect-[16/9]",
            "col-span-12 lg:col-span-5 aspect-[4/5]",
            "col-span-12 lg:col-span-7 aspect-[16/9]",
          ];
          return (
            <figure key={p.n} className={`relative overflow-hidden group ${layouts[i] || "col-span-6 aspect-square"}`}>
              <Image
                src={p.img}
                alt={`${p.title} — ${p.place}`}
                fill
                className="object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <figcaption className="absolute bottom-0 left-0 p-6 text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <div className="text-[10px] uppercase tracking-[0.25em] font-mono opacity-80 mb-1">{p.scope}</div>
                <div className="font-display text-2xl lg:text-3xl">{p.title}</div>
                <div className="text-xs opacity-80 mt-1">{p.place} · {p.year}</div>
              </figcaption>
            </figure>
          );
        })}
      </div>
    </section>
  );
}

function ServicesV2() {
  return (
    <section id="servicos" className="bg-[#0E0E10] text-white py-24 lg:py-40">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-6">
            <span className="text-[11px] uppercase tracking-[0.3em] text-white/50 font-mono">o que fazemos</span>
            <h2 className="font-display text-5xl lg:text-7xl mt-4 leading-[0.95]">
              Cinco <span className="italic text-[#1F9A9A]">especialidades</span>. Uma equipa.
            </h2>
          </div>
          <p className="lg:col-span-5 lg:col-start-8 self-end text-lg text-white/70 leading-relaxed">
            Trabalhamos em casas, apartamentos, escritórios e lojas. Sempre com tinta de marca (CIN, Robbialac, Dyrup) e garantia escrita.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
          {SERVICES.slice(0, 6).map((s) => (
            <article key={s.n} className="bg-[#0E0E10] p-8 lg:p-10 min-h-[260px] flex flex-col justify-between hover:bg-white/5 transition">
              <div className="flex justify-between items-start">
                <span className="font-mono text-xs text-white/50">{s.n}</span>
              </div>
              <div>
                <h3 className="font-display text-3xl lg:text-4xl mb-3">{s.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{s.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsV2() {
  const bgs = [
    "/portfolio/01-moradia-tradicional.jpg",
    "/portfolio/06-hall-moderno.jpg",
    "/portfolio/04-moradia-moderna.jpg",
  ];
  return (
    <section className="py-24 lg:py-40 bg-[#F5F2EC]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#0E0E10]/60 font-mono">clientes verificados Google</span>
          <h2 className="font-display text-5xl lg:text-7xl mt-4">
            <span className="italic text-[#156B6B]">5</span> estrelas. Merecidas.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
          {TESTIMONIALS.map((t, i) => (
            <article
              key={t.name}
              className="relative overflow-hidden rounded-lg p-7 lg:p-8 min-h-[340px] flex flex-col group"
            >
              {/* photo backdrop */}
              <Image src={bgs[i]} alt="" fill className="object-cover transition-transform duration-[1200ms] group-hover:scale-105" sizes="(max-width:768px) 100vw, 33vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E10] via-[#0E0E10]/85 to-[#0E0E10]/60" />

              <div className="relative flex flex-col h-full text-white">
                <div className="flex items-center justify-between mb-5">
                  <div className="text-[#1F9A9A] text-lg tracking-widest">★★★★★</div>
                  <div className="text-[9px] uppercase tracking-[0.25em] font-mono opacity-60">Google</div>
                </div>
                <p className="font-display text-xl lg:text-2xl leading-snug mb-6">&ldquo;{t.body}&rdquo;</p>
                <div className="mt-auto pt-5 border-t border-white/15 text-sm flex items-center justify-between">
                  <div>
                    <div className="font-medium">{t.name}</div>
                    <div className="text-xs opacity-70 mt-0.5">{t.place}</div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#156B6B] flex items-center justify-center text-xs font-bold">
                    {t.name.charAt(0)}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTAV2() {
  return (
    <section id="contacto" className="relative py-32 lg:py-48 bg-[#156B6B] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <Image src="/portfolio/02-edificio-moderno.jpg" alt="" fill className="object-cover" sizes="100vw" />
      </div>
      <div className="relative max-w-[1200px] mx-auto px-6 lg:px-12 text-center">
        <span className="text-[11px] uppercase tracking-[0.3em] opacity-70 font-mono">próximo passo</span>
        <h2 className="font-display text-5xl lg:text-8xl mt-6 leading-[0.95]">
          Vamos pintar a <span className="italic">sua casa</span>?
        </h2>
        <p className="text-lg lg:text-xl opacity-80 mt-8 max-w-xl mx-auto">
          Visita gratuita à sua casa em 48h. Orçamento por escrito no mesmo dia. Sem compromisso, sem pressão.
        </p>
        <div className="mt-12 flex flex-wrap gap-4 justify-center">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="inline-flex items-center gap-3 bg-white text-[#156B6B] px-8 py-5 rounded-full font-semibold hover:scale-105 transition">
            WhatsApp · {COMPANY.phone}
          </a>
          <a href={`tel:+${COMPANY.phone.replace(/\D/g, "")}`} className="inline-flex items-center gap-3 border-2 border-white/40 px-8 py-5 rounded-full hover:bg-white/10 transition">
            Ligar agora
          </a>
        </div>
      </div>
    </section>
  );
}

function FooterV2() {
  return (
    <footer id="contacto-footer" className="bg-[#0E0E10] text-white py-16">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 grid lg:grid-cols-3 gap-12">
        <div>
          <span className="inline-flex items-center bg-white rounded-full px-4 py-2 mb-4 shadow-lg">
            <Image src="/logocertacr.png" alt={COMPANY.name} width={280} height={140} className="h-10 w-auto object-contain" />
          </span>
          <div className="font-display text-3xl">{COMPANY.short}</div>
          <div className="text-sm opacity-60 mt-1">Pintura interior e exterior · desde {COMPANY.founded}</div>
        </div>
        <div className="text-sm space-y-2">
          <div className="text-[10px] uppercase tracking-widest opacity-50 mb-3">Contacto</div>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="block hover:underline">WhatsApp · {COMPANY.phone}</a>
          <a href={`mailto:${COMPANY.email}`} className="block hover:underline">{COMPANY.email}</a>
          <div className="opacity-70">{COMPANY.address}</div>
          <div className="opacity-70">{COMPANY.hours}</div>
        </div>
        <div className="text-sm">
          <div className="text-[10px] uppercase tracking-widest opacity-50 mb-3">Zonas servidas</div>
          <div className="flex flex-wrap gap-x-3 gap-y-1 opacity-80">
            {ZONES.map((z) => <span key={z}>{z}</span>)}
          </div>
          <a href={buildWhatsappUrl("Olá, gostaria de pedir orçamento de pintura.")} target="_blank" rel="noopener" className="inline-flex mt-6 items-center gap-2 bg-[#1F9A9A] text-white px-5 py-3 rounded-full text-sm font-medium hover:bg-[#156B6B] transition">
            Pedir orçamento →
          </a>
        </div>
      </div>
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between gap-2 text-xs opacity-50">
        <span>© {new Date().getFullYear()} {COMPANY.name}</span>
        <span>Feito em Portugal</span>
      </div>
    </footer>
  );
}

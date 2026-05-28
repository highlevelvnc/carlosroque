export const PHONE_DISPLAY = "+351 968 952 656";
export const PHONE_RAW = "351968952656";

export const baseWhatsappMessage =
  "Olá Carlos, vi o vosso site e gostaria de pedir um orçamento de pintura.";

export const buildWhatsappUrl = (msg: string = baseWhatsappMessage) =>
  `https://wa.me/${PHONE_RAW}?text=${encodeURIComponent(msg)}`;

export const WHATSAPP_URL = buildWhatsappUrl();

export const COMPANY = {
  name: "Carlos Roque Pinturas",
  short: "Carlos Roque",
  tagline: "Acabamentos que duram. Pintores que ouvem.",
  fullName: "Carlos Roque — Pinturas Interiores e Exteriores",
  region: "Alcochete · Montijo · Setúbal · Lisboa",
  email: "carlosroquepinturas@gmail.com",
  phone: PHONE_DISPLAY,
  address: "R. do MFA, 2890-100 Alcochete",
  hours: "Seg–Sex · 08:00 – 17:00",
  founded: 2009,
} as const;

export const NAV_LINKS = [
  { href: "#obras", label: "Obras" },
  { href: "#servicos", label: "Serviços" },
  { href: "#cores", label: "Simulador" },
  { href: "#processo", label: "Processo" },
  { href: "#contacto", label: "Contacto" },
] as const;

export const PAINT_SWATCHES = [
  { name: "Linho Cru", hex: "#E8E1D3", mood: "Sala · luz natural" },
  { name: "Terracota", hex: "#C8623E", mood: "Acento · parede destaque" },
  { name: "Azul Tejo", hex: "#2F4A6B", mood: "Escritório · foco" },
  { name: "Verde Salva", hex: "#7A8A6E", mood: "Quarto · descanso" },
  { name: "Carvão", hex: "#2A2A2C", mood: "Dramático · pé-direito alto" },
  { name: "Manteiga", hex: "#F2D9A0", mood: "Cozinha · acolhedor" },
] as const;

export const SERVICES = [
  {
    n: "01",
    title: "Pintura interior",
    body: "Apartamentos, moradias, escritórios. Preparação completa de paredes, massas, lixagens, primário e duas demãos de tinta lavável. Aplicação a rolo ou com sistema airless quando há grandes áreas.",
  },
  {
    n: "02",
    title: "Pintura exterior",
    body: "Fachadas, varandas e muros. Tintas com proteção UV e anti-fungo, garantia de aderência mesmo em zona ribeirinha. Pintura a pistola airless para acabamento uniforme em obras de grande porte.",
  },
  {
    n: "03",
    title: "Reparações para pintar",
    body: "Reparação de fissuras e pequenas reparações nas paredes e tectos para deixar tudo pronto para a pintura.",
  },
  {
    n: "04",
    title: "Lacagem de portas",
    body: "Portas, rodapés e armários lacados a pistola. Acabamento liso sem pinceladas, secagem rápida.",
  },
  {
    n: "05",
    title: "Cores técnicas",
    body: "Tintas anti-condensação para casas de banho, tintas térmicas para sótãos, vernizes para madeira exterior.",
  },
  {
    n: "06",
    title: "Acompanhamento de obra",
    body: "Acompanhamos a obra na nossa área — pintura, do início ao fim. Para outras especialidades, encaminhamos para profissionais de confiança.",
  },
] as const;

export const PROJECTS = [
  { n: "001", title: "Loja Sandro", place: "Av. da Liberdade, Lisboa", year: 2024, scope: "Comercial · Interior", img: "/portfolio/sandro-lisboa-1.jpg" },
  { n: "002", title: "Loja Maje Paris", place: "Lisboa", year: 2026, scope: "Comercial · Interior", img: "/portfolio/maje-lisboa-1.jpg" },
  { n: "003", title: "Prédios novos", place: "Margem Sul", year: 2026, scope: "Pintura com airless · em curso", img: "/portfolio/predios-completo.jpg" },
  { n: "004", title: "Cozinha moderna", place: "Alcochete", year: 2024, scope: "Interior + LED", img: "/portfolio/hero-cozinha.jpeg" },
  { n: "005", title: "Moradia tradicional", place: "Setúbal", year: 2024, scope: "Exterior", img: "/portfolio/01-moradia-tradicional.jpg" },
  { n: "006", title: "Edifício moderno", place: "Lisboa", year: 2025, scope: "Fachada", img: "/portfolio/02-edificio-moderno.jpg" },
  { n: "007", title: "Apartamento T3", place: "Montijo", year: 2024, scope: "Interior completo", img: "/portfolio/03-apartamento-interior.jpg" },
  { n: "008", title: "Moradia moderna com piscina", place: "Palmela", year: 2023, scope: "Exterior · 2 fachadas", img: "/portfolio/moradia-moderna-completa.jpg" },
  { n: "009", title: "Vivenda clássica", place: "Pinhal Novo", year: 2023, scope: "Fachada + Telhado", img: "/portfolio/05-moradia-amarela.jpg" },
  { n: "010", title: "Hall de entrada", place: "Alcochete", year: 2023, scope: "Interior", img: "/portfolio/06-hall-moderno.jpg" },
] as const;

export const PROCESS_STEPS = [
  { n: "01", title: "Visita", body: "Vamos a sua casa, ouvimos o que pretende. Sem custo, sem compromisso." },
  { n: "02", title: "Orçamento", body: "Em 48h recebe o seu orçamento: tintas escolhidas, m², prazo e preço fechado por escrito." },
  { n: "03", title: "Execução", body: "Protegemos móveis e pavimentos. Pintamos. Limpamos. Entregamos a sua casa como a recebemos." },
  { n: "04", title: "Garantia", body: "2 anos de garantia escrita em qualquer acabamento interior. 5 anos em fachadas." },
] as const;

export const ZONES = [
  "Alcochete", "Montijo", "Pinhal Novo", "Palmela", "Setúbal", "Lisboa", "Barreiro", "Moita",
] as const;

export const TESTIMONIALS = [
  { name: "Fátima", place: "Alcochete", body: "Pintura exterior, portões e corrimões realizada com profissionalismo, pontualidade e dentro do prazo acordado. Excelente equipa. Recomendo." },
  { name: "Alex", place: "Montijo", body: "O melhor da zona! Pintámos um T3 e não podíamos ter ficado mais contentes." },
  { name: "João", place: "Setúbal", body: "Serviço de pintura exterior 5★ de uma moradia e isolamento do telhado, deixaram tudo impecável. Equipa atenciosa e muito rápidos a terminar o trabalho. Recomendo." },
] as const;

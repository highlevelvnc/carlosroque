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
    body: "Apartamentos, moradias, escritórios. Preparação completa de paredes, massas, lixagens, primário e duas demãos de tinta lavável.",
  },
  {
    n: "02",
    title: "Pintura exterior",
    body: "Fachadas, varandas e muros. Tintas com proteção UV e anti-fungo, garantia de aderência mesmo em zona ribeirinha.",
  },
  {
    n: "03",
    title: "Estuque e reparações",
    body: "Tapamento de fissuras, nivelamento de paredes, reparação de tectos com infiltrações antes da pintura.",
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
    body: "Coordenação com pedreiro, electricista e canalizador. Tu falas connosco, nós tratamos do resto.",
  },
] as const;

export const PROJECTS = [
  { n: "001", title: "Moradia T4", place: "Alcochete", year: 2024, scope: "Interior + Exterior", img: "/portfolio/01.jpg" },
  { n: "002", title: "Apartamento T2", place: "Montijo", year: 2024, scope: "Interior", img: "/portfolio/02.jpg" },
  { n: "003", title: "Escritório", place: "Lisboa", year: 2024, scope: "Interior + Lacagem", img: "/portfolio/03.jpg" },
  { n: "004", title: "Vivenda", place: "Setúbal", year: 2023, scope: "Fachada", img: "/portfolio/04.jpg" },
  { n: "005", title: "Loja", place: "Pinhal Novo", year: 2023, scope: "Interior", img: "/portfolio/05.jpg" },
  { n: "006", title: "Moradia geminada", place: "Palmela", year: 2023, scope: "Interior + Exterior", img: "/portfolio/06.jpg" },
] as const;

export const PROCESS_STEPS = [
  { n: "01", title: "Visita", body: "Vamos a tua casa, medimos paredes, ouvimos o que queres. Sem custo, sem compromisso." },
  { n: "02", title: "Orçamento", body: "Em 48h recebes proposta detalhada: m², tintas escolhidas, prazo e preço fechado." },
  { n: "03", title: "Execução", body: "Protegemos móveis e pavimentos. Pintamos. Limpamos. Entregas a casa como a recebemos." },
  { n: "04", title: "Garantia", body: "2 anos de garantia escrita em qualquer acabamento interior. 5 anos em fachadas." },
] as const;

export const ZONES = [
  "Alcochete", "Montijo", "Pinhal Novo", "Palmela", "Setúbal", "Lisboa", "Barreiro", "Moita",
] as const;

export const TESTIMONIALS = [
  { name: "Fátima G.", place: "Alcochete", body: "Pintaram a casa toda em 5 dias, sem sujar nada e o resultado é impecável. Recomendo sem hesitar." },
  { name: "Alex M.", place: "Montijo", body: "Profissionais a sério. Vieram à hora marcada, deram orçamento honesto e cumpriram tudo." },
  { name: "João P.", place: "Lisboa", body: "Pintaram o escritório num fim-de-semana para não parar o trabalho. Acabamento perfeito." },
] as const;

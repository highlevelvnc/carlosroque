const ITEMS = [
  "Pintura interior", "Pintura exterior", "Fachadas", "Lacagem", "Estuque",
  "Moradias", "Apartamentos", "Escritórios", "Lojas", "Garantia 5 anos",
];

export default function Marquee() {
  const loop = [...ITEMS, ...ITEMS];
  return (
    <div className="border-y border-[#2A2A2F] overflow-hidden py-6 bg-[#0E0E10]">
      <div className="flex marquee-track whitespace-nowrap">
        {loop.map((item, i) => (
          <span key={i} className="flex items-center gap-10 px-6">
            <span className="font-display text-3xl lg:text-5xl text-[#F2F0EC]">{item}</span>
            <span className="text-[#1F9A9A] text-2xl">✺</span>
          </span>
        ))}
      </div>
    </div>
  );
}

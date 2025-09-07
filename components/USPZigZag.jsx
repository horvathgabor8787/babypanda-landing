import { Sparkles, BadgeCheck, ShieldCheck, Gift } from "lucide-react";

export default function USPZigZag() {
  const items = [
    {
      icon: Sparkles,
      title: "Csak neki készül",
      text: "Minden ajándék névre szóló – személyes élmény, nem tömegcikk."
    },
    {
      icon: Gift,
      title: "Emlékezetes meglepetés",
      text: "Ajándék, amire mindenki emlékezni fog – első pillanattól különleges."
    },
    {
      icon: BadgeCheck,
      title: "Gyors, egyszerű rendelés",
      text: "Válaszd ki és rendeld meg – a személyességet mi hozzátesszük."
    },
    {
      icon: ShieldCheck,
      title: "Minőség és biztonság",
      text: "Gondosan válogatott, bababarát alapanyagokkal dolgozunk."
    }
  ];

  return (
    <section className="relative mt-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="title-wave wave-animate text-2xl md:text-3xl font-extrabold mb-5 shine-text">Miért minket válassz?</h2>

        {/* Kicsi, kompakt kártyák – ikon + szöveg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 flex items-start gap-3"
            >
              <span className="shrink-0 mt-1 rounded-lg bg-black/50 border border-white/10 p-2">
                <Icon size={18} className="text-accent" />
              </span>
              <div>
                <p className="font-semibold">{title}</p>
                <p className="text-sm text-neutral-300">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

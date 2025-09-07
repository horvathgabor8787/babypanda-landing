export default function USPZigZag() {
  const items = [
    {
      title: "Csak neki készül",
      text: "Minden ajándék névre szóló – nem tömegcikk, hanem személyes élmény, amire mindenki emlékezni fog."
    },
    {
      title: "Holografikus csomagolás élmény",
      text: "Prémium, látványos megjelenés már a kicsomagolás pillanatától. Egyedi élmény a kezdetektől."
    },
    {
      title: "Gyors és egyszerű rendelés",
      text: "Válaszd ki, rendeld meg – ennyi. A személyességet mi vállaljuk, te pedig begyűjtöd a mosolyokat."
    },
    {
      title: "Minőség, ami kitűnik",
      text: "Nem a mennyiség, hanem az egyediség számít. Ajándék, ami kiemel a tömegből."
    }
  ];
  return (
    <section className="relative mt-16 space-y-12">
      {items.map((x, i) => (
        <div key={x.title} className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className={i % 2 === 0 ? "" : "md:order-2"}>
            <div className="holo-border p-6 glow-card">
              <h3 className="text-xl md:text-2xl font-extrabold mb-3">{x.title}</h3>
              <p className="text-neutral-300">{x.text}</p>
            </div>
          </div>
          <div className={i % 2 === 0 ? "" : "md:order-1"}>
            <div className="holo-border p-2">
              <div className="img-wrap aspect-[4/3]">
                <div className="w-full h-full flex items-center justify-center">
                  {/* Holografikus placeholder illusztráció */}
                  <div className="w-2/3 h-2/3 rounded-xl bg-gradient-to-tr from-accent/40 via-white/20 to-sky-300/40 animate-pulse-soft" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

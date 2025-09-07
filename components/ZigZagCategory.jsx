import Image from "next/image";
import PrimaryButton from "./PrimaryButton";

export default function ZigZagCategory({ items = [] }) {
  return (
    <section className="relative mt-16 space-y-12">
      {items.map((it, idx) => {
        const leftImage = idx % 2 === 0;
        return (
          <div key={it.title} className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* Image side */}
            <div className={leftImage ? "" : "md:order-2"}>
              <div className="holo-border p-2">
                <div className="img-wrap aspect-[4/3]">
                  <Image
                    src={it.image}
                    alt={it.title}
                    width={1200}
                    height={900}
                    className="img-fit"
                  />
                </div>
              </div>
            </div>
            {/* Text side */}
            <div className={leftImage ? "" : "md:order-1"}>
              <h3 className="text-xl md:text-2xl font-extrabold mb-3">{it.title}</h3>
              <p className="text-neutral-300 max-w-prose mb-4">{it.desc}</p>
              <PrimaryButton href={it.href} target="_blank" rel="noopener noreferrer">
                Fedezd fel →
              </PrimaryButton>
            </div>
          </div>
        );
      })}
    </section>
  );
}

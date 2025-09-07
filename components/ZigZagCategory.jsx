import Image from "next/image";
import PrimaryButton from "./PrimaryButton";

export default function ZigZagCategory({ items = [] }) {
  return (
    <section className="relative mt-16">
      <div className="max-w-6xl mx-auto space-y-10">
        {items.map((it, idx) => {
          const leftImage = idx % 2 === 0;
          return (
            <div key={it.title} className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              {/* Kép oldal – kompakt, középre igazított */}
              <div className={leftImage ? "" : "md:order-2"}>
                <div className="holo-border p-2 mx-auto w-full max-w-md md:max-w-lg">
                  <div className="img-wrap w-full cat-img">
                    <Image
                      src={it.image}
                      alt={it.title}
                      width={960}
                      height={720}
                      className="img-fit"
                    />
                  </div>
                </div>
              </div>

              {/* Szöveg oldal */}
              <div className={leftImage ? "" : "md:order-1"}>
                <div className="mx-auto w-full max-w-md">
                  <h3 className="text-xl md:text-2xl font-extrabold mb-3">{it.title}</h3>
                  <p className="text-neutral-300 mb-4">{it.desc}</p>
                  <PrimaryButton href={it.href} target="_blank" rel="noopener noreferrer">
                    Fedezd fel →
                  </PrimaryButton>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

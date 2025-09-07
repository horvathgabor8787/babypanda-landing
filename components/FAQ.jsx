import { useState } from "react";

const FAQS = [
  {
    q: "Mennyi idő alatt készül el az egyedi, névre szóló ajándék?",
    a: "A legtöbb rendelést 1–3 munkanap alatt készítjük és adjuk fel. A szállítási idő a futárszolgálattól függ."
  },
  {
    q: "Biztonságos anyagokból készülnek a termékek?",
    a: "Igen, gondosan válogatott, biztonságos alapanyagokat használunk. A fókusz a személyességen és a minőségen van."
  },
  {
    q: "Hogyan tudok rendelni?",
    a: "Válaszd ki a neked tetsző terméket, add meg a nevet a termékoldalon, és tedd a kosárba. A többit mi intézzük."
  },
  {
    q: "Van garancia?",
    a: "Természetesen. Ha bármilyen probléma van, írj nekünk és megoldjuk – a cél az, hogy mosolyt vigyünk az ajándékozásba."
  }
];

export default function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <section className="relative mt-16">
      <h2 className="shine-text text-2xl md:text-3xl font-extrabold shine-text">
    Gyakori kérdések
  </h2>
      <div className="divide-y divide-white/10">
        {FAQS.map((f, i) => (
          <div key={f.q} className="faq-item">
            <button className="faq-q w-full" onClick={() => setOpen(open === i ? null : i)}>
              <span>{f.q}</span>
              <span>{open === i ? "−" : "+"}</span>
            </button>
            {open === i && <div className="faq-a">{f.a}</div>}
          </div>
        ))}
      </div>

      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": FAQS.map(x => ({
              "@type": "Question",
              "name": x.q,
              "acceptedAnswer": { "@type": "Answer", "text": x.a }
            }))
          })
        }}
      />
    </section>
  );
}

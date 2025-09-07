import { useEffect, useState } from "react";
import PrimaryButton from "./PrimaryButton";
import { supabase } from "@/lib/supabaseClient";

export default function TopProducts() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      setLoading(true);
      const { data, error } = await supabase
        .from("products")
        .select("id, name, price, image_url, product_url, stock, category")
        .gt("stock", 0)
        .limit(20);
      if (error) {
        console.error("Supabase error:", error);
        setItems([]);
      } else {
        const shuffled = shuffleArray(data || []).slice(0, 4);
        if (!cancelled) setItems(shuffled);
      }
      if (!cancelled) setLoading(false);
    }
    load();
    return () => { cancelled = true; };
  }, []);

  return (
    <section className="relative mt-16">
      <h2 className="text-2xl md:text-3xl font-extrabold mb-6 shine-text">
        Legnépszerűbb névre szóló ajándékaink
      </h2>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="holo-border p-2">
              <div className="img-wrap aspect-[4/3]">
                <div className="w-full h-full animate-pulse bg-white/5" />
              </div>
              <div className="mt-3 h-4 bg-white/10 rounded w-2/3" />
              <div className="mt-2 h-3 bg-white/10 rounded w-1/3" />
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {items.map(p => (
            <article key={p.id} className="holo-border p-3 glow-card">
              <div className="img-wrap aspect-[4/3]">
                {p.image_url ? (
                  <img src={p.image_url} alt={p.name} className="img-fit" loading="lazy" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-neutral-400 text-sm">
                    Kép hamarosan
                  </div>
                )}
              </div>
              <h3 className="mt-3 text-base font-semibold">{p.name}</h3>
              <p className="text-sm text-neutral-300">{Number(p.price).toLocaleString("hu-HU")} Ft</p>
              <div className="mt-3">
                <PrimaryButton href={p.product_url} target="_blank" rel="noopener noreferrer">
                  Válaszd ki most
                </PrimaryButton>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

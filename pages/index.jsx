import Head from "next/head";
import PrimaryButton from "@/components/PrimaryButton";
import ZigZagCategory from "@/components/ZigZagCategory";
import USPZigZag from "@/components/USPZigZag";
import TopProducts from "@/components/TopProducts";
import ShareBlocks from "@/components/ShareBlocks";
import FAQ from "@/components/FAQ";

export default function Home() {
  const shareUrl = typeof window !== "undefined" ? window.location.href : "https://www.babypanda.hu";

  const categories = [
    {
      title: "Cumilánc – névre szóló, csak neki",
      href: "https://www.babypanda.hu/baba-ajandekok/cumilanc",
      image: "https://happybabysss.myshoprenter.hu/custom/happybabysss/image/data/Cumilanc/1000020447.png",
      desc: "Válaszd ki a kedvenc stílust és add meg a nevet – egyedi ajándék, ami minden pillanatot különlegessé tesz."
    },
    {
      title: "Rágcsalánc – az első fogacskák mellé",
      href: "https://www.babypanda.hu/baba-ajandekok/baba-ajandekokragcsalanc",
      image: "https://happybabysss.myshoprenter.hu/custom/happybabysss/image/data/Cumilanc/ragcsalancok/1000025046.png",
      desc: "Egyedi, figyelemfelkeltő és praktikus – az ajándék, amire emlékezni fognak."
    },
    {
      title: "Egyedi kulcstartó – a mindennapok emléke",
      href: "https://www.babypanda.hu/baba-ajandekok/egyedi-kulcstarto",
      image: "https://happybabysss.myshoprenter.hu/custom/happybabysss/image/data/Kulcstartok/20250319_143851_0000.png",
      desc: "Apró, mégis személyes meglepetés – mert a részletek teszik egyedivé a napokat."
    },
    {
      title: "Rágóka (Marokrágcsa) – bababarát élmény",
      href: "https://www.babypanda.hu/baba-ajandekok/ragoka",
      image: "https://happybabysss.myshoprenter.hu/custom/happybabysss/image/data/Cumilanc/Marokragcsa/image3.jpeg",
      desc: "Kényelmes, cuki és egyedi – válassz olyan rágókát, ami passzol a babához."
    },
    {
      title: "Emlékőrző dobozok – pillanatok a dobozban",
      href: "https://www.babypanda.hu/httpswwwbabypandahunevreszolo-babaajandek-csomagok",
      image: "https://happybabysss.myshoprenter.hu/custom/happybabysss/image/data/Landighoz/image01.jpeg",
      desc: "Őrizd meg stílusosan a legszebb első pillanatokat – névre szóló emlékőrzés."
    },
    {
      title: "Hónapkártya – minden mérföldkő különleges",
      href: "https://www.babypanda.hu/babanaplo-kiegeszitok/honapkartyak-1077",
      image: "https://happybabysss.myshoprenter.hu/custom/happybabysss/image/data/Honap_kartyak/20250721_123751_0000.png",
      desc: "Egyedi névvel személyessé tett fotók – készíts maradandó emlékeket."
    }
  ];

  return (
    <main className="relative min-h-screen">
      <Head>
        <title>Baby Panda – Névre szóló, egyedi babaajándékok</title>
        <meta name="description" content="Egyedi, névre szóló ajándékok babáknak – különleges, emlékezetes és eladós. Válaszd ki most a tökéletes meglepetést!" />
        <meta property="og:title" content="Baby Panda – Névre szóló, egyedi babaajándékok" />
        <meta property="og:description" content="Fedezd fel a legnépszerűbb névre szóló ajándékokat. Egyedi, különleges – csak neki." />
        <meta property="og:image" content="https://happybabysss.myshoprenter.hu/custom/happybabysss/image/data/Cumilanc/1000020447.png" />
        <meta property="og:type" content="website" />
      </Head>

      {/* Background layers */}
      <div className="absolute inset-0 bg-animated" />
      <span className="bg-grid absolute inset-0" />

      {/* HERO */}
      <section className="relative z-10 pt-16 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
         <h1 className="hero-title text-3xl sm:text-4xl md:text-6xl font-extrabold shine-text">
          <p className="mt-4 text-base md:text-lg text-neutral-300 max-w-prose mx-auto">
            Ne adj át tömegcikket. Lepd meg őt olyan ajándékkal, ami <strong>egyedi</strong>, <strong>személyes</strong> és <strong>emlékezetes</strong>.
          </p>
          <div className="mt-6 flex justify-center">
            <PrimaryButton href="#products">Válaszd ki most</PrimaryButton>
          </div>
        </div>
      </section>

      {/* CATEGORIES – ZigZag storytelling */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-4 shine-text">Fedezd fel fő kategóriáinkat</h2>
        <ZigZagCategory items={categories} />
      </section>

      {/* USP – ZigZag cards */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8">
        <USPZigZag />
      </section>

      {/* TOP PRODUCTS */}
      <section id="products" className="relative z-10 px-4 sm:px-6 lg:px-8">
        <TopProducts />
      </section>

      {/* CALCULATOR iframe */}
      <section className="relative z-10 mt-16 px-4 sm:px-6 lg:px-8">
        <div className="holo-border p-2">
          <div className="rounded-xl overflow-hidden border border-white/10">
            <div className="bg-neutral-900/40 px-4 py-4 flex items-center justify-between">
              <h3 className="text-lg md:text-xl font-bold">Nézd meg, mit ajánl a kalkulátor a baba nevéhez</h3>
              <span className="text-accent hidden sm:block">Holografikus console</span>
            </div>
            <iframe
              src="https://nevvarazs.babypanda.hu"
              title="Baby Panda – Névvarázs Kalkulátor"
              className="w-full"
              style={{ height: "75vh", minHeight: 520, background: "linear-gradient(180deg, rgba(255,255,255,.02), rgba(255,255,255,.01))" }}
            />
          </div>
        </div>
      </section>

      {/* SHARE BLOCKS */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8">
        <ShareBlocks shareUrl={shareUrl} pinterestMedia={"https://happybabysss.myshoprenter.hu/custom/happybabysss/image/data/Cumilanc/1000020447.png"} />
      </section>

      {/* FAQ */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8">
        <FAQ />
      </section>

      {/* FINAL CTA */}
      <section className="relative z-10 mt-16 px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold shine-text">Válaszd ki most az egyedi ajándékot</h2>
          <p className="mt-3 text-neutral-300">Ajándék, ami kitűnik a tömegből – és csak neki szól.</p>
          <div className="mt-6 flex justify-center">
            <PrimaryButton href="https://www.babypanda.hu/baba-ajandekok" target="_blank" rel="noopener noreferrer">
              Fedezd fel most
            </PrimaryButton>
          </div>
        </div>
      </section>
    </main>
  );
}

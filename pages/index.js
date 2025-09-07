import Head from "next/head";
import FXSpotlight from "@/components/FXSpotlight";
import Advantages from "@/components/Advantages";
import PinnedGrid from "@/components/PinnedGrid";
import DynamicGrid from "@/components/DynamicGrid";
import PrimaryButton from "@/components/PrimaryButton";
import FAQ from "@/components/FAQ";
import SocialInvite from "@/components/SocialInvite";
import CalculatorEmbed from "@/components/CalculatorEmbed";

const SITE_URL = "https://babypanda.hu";
const CANONICAL = SITE_URL + "/";

export default function Home(){
  return (<>
    <Head>
      <title>Baby Panda – Névválasztó ajándék-kalkulátor</title>
      <link rel="canonical" href={CANONICAL} />
      <meta name="description" content="Névre szóló cumiláncok, rágcsaláncok és emlékőrző dobozok – kalkulátorral segítünk választani. Nézd meg, mit ajánl a Panda!" />
    </Head>

    <FXSpotlight />

    <header className="section">
      <div className="container text-center">
        <h1 className="hero-title text-4xl md:text-6xl">Nézd meg, melyik ajándék illik a babád nevéhez</h1>
        <p className="subtle mt-3 text-lg md:text-xl">Válassz a névre szóló cumiláncok és rágcsaláncok közül – a kalkulátor segít megtalálni a legjobbat.</p>
        <div className="mt-6 flex flex-wrap gap-3 justify-center">
          <PrimaryButton href="#pinned">Kiemelt ajánlatok</PrimaryButton>
          <PrimaryButton href="#recommended">Dinamikus ajánlók</PrimaryButton>
          <PrimaryButton href="#calc">Kalkulátor</PrimaryButton>
        </div>
      </div>
    </header>

    <Advantages />
    <SocialInvite />
    <PinnedGrid />
    <DynamicGrid />
    <CalculatorEmbed />
    <FAQ />

    <div style={{position:"sticky",bottom:14,zIndex:40,background:"linear-gradient(180deg,transparent,rgba(255,255,255,.90))",backdropFilter:"blur(6px)"}}>
      <div className="container"><PrimaryButton className="w-full" href="#pinned">Nézd meg most</PrimaryButton></div>
    </div>
  </>);
}
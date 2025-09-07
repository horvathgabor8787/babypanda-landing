import {
  FacebookShareButton,
  PinterestShareButton,
  LinkedinShareButton,
  FacebookIcon,
  PinterestIcon,
  LinkedinIcon
} from "react-share";
import { FaInstagram, FaTiktok } from "react-icons/fa";

export default function ShareBlocks({ shareUrl, pinterestMedia, text = "Nézd meg, mit ajánl a kalkulátor!" }) {
  const urlUtm = addUtm(shareUrl, "landing", "social", "namecalc");
  const mailto = `mailto:?subject=${encodeURIComponent("Baby Panda ajánló")}&body=${encodeURIComponent(text + " " + urlUtm)}`;
  const messenger = `https://m.me/?link=${encodeURIComponent(urlUtm)}`;
  const whatsapp = `https://api.whatsapp.com/send?text=${encodeURIComponent(text + " " + urlUtm)}`;

  return (
    <section className="relative mt-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="title-wave wave-animate text-2xl md:text-3xl font-extrabold mb-6 shine-text">
          Oszd meg a varázslatot
        </h2>

        <div className="grid gap-3 sm:grid-cols-2">
          <a className="btn-primary" href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(urlUtm)}`} target="_blank" rel="noopener noreferrer">Facebook poszt</a>
          <a className="btn-primary" href={messenger} target="_blank" rel="noopener noreferrer">Messenger megosztás</a>
          <a className="btn-primary" href={mailto}>E-mail továbbítás</a>
          <a className="btn-primary" href={whatsapp} target="_blank" rel="noopener noreferrer">Megosztás WhatsApp-on</a>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <FacebookShareButton url={urlUtm}>
            <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-[#1877F2] text-white font-semibold shadow hover:scale-105 transition-transform duration-300">
              <FacebookIcon size={28} round /> Facebook poszt
            </div>
          </FacebookShareButton>

          <a
            href="https://www.instagram.com/babypanda_hu/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white font-semibold shadow hover:scale-105 transition-transform duration-300"
          >
            <FaInstagram size={22} /> Instagram profil
          </a>

          <a
            href="https://www.tiktok.com/@babypanda_hu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 rounded-full bg-black text-white font-semibold shadow hover:scale-105 transition-transform duration-300"
          >
            <FaTiktok size={22} className="text-[#69C9D0]" /> TikTok profil
          </a>

          <PinterestShareButton url={urlUtm} media={pinterestMedia} description={text}>
            <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-[#BD081C] text-white font-semibold shadow hover:scale-105 transition-transform duration-300">
              <PinterestIcon size={28} round /> Pinterest pin
            </div>
          </PinterestShareButton>

          <LinkedinShareButton url={urlUtm} title="Baby Panda – Névre szóló ajándékok" summary={text}>
            <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-[#0A66C2] text-white font-semibold shadow hover:scale-105 transition-transform duration-300">
              <LinkedinIcon size={28} round /> LinkedIn megosztás
            </div>
          </LinkedinShareButton>
        </div>
      </div>
    </section>
  );
}

function addUtm(url, source, medium, campaign) {
  try {
    const u = new URL(url);
    u.searchParams.set("utm_source", source);
    u.searchParams.set("utm_medium", medium);
    u.searchParams.set("utm_campaign", campaign);
    return u.toString();
  } catch {
    return url;
  }
}

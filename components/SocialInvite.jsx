"use client";
import { useState } from "react";
import { FacebookShareButton, WhatsappShareButton, TelegramShareButton, LinkedinShareButton } from "react-share";

export default function SocialInvite(){
  const [copied,setCopied]=useState(false);
  const url = typeof window!=="undefined" ? window.location.href : "";

  const FB="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;"; const IG="https://www.instagram.com/babypanda_hu/"; const TT="https://www.tiktok.com/@babypanda_hu?is_from_webapp=1&sender_device=pc"; const PIN="#"; const IN="#";

  const copy = async ()=>{ try{ await navigator.clipboard.writeText(url); setCopied(true); setTimeout(()=>setCopied(false),1800); }catch{} };

  return (<section className="section"><div className="container">
    <div className="text-center mb-6 md:mb-8"><h2 className="text-2xl md:text-3xl font-semibold">Oszd meg vagy kövess minket</h2><p className="subtle mt-2">Segíts, hogy több szülőhöz eljussunk – köszönjük.</p></div>
    <div className="platform-row justify-center mb-6">
      <button onClick={copy} className="share-btn">Link másolása</button>
      <FacebookShareButton url={url} quote="Baby Panda – névre szóló ajándékok"><span className="share-btn">Facebook megosztás</span></FacebookShareButton>
      <WhatsappShareButton url={url} title="Baby Panda – névre szóló ajándékok"><span className="share-btn">WhatsApp</span></WhatsappShareButton>
      <TelegramShareButton url={url} title="Baby Panda – névre szóló ajándékok"><span className="share-btn">Telegram</span></TelegramShareButton>
      <LinkedinShareButton url={url} title="Baby Panda – névre szóló ajándékok"><span className="share-btn">LinkedIn megosztás</span></LinkedinShareButton>
    </div>
    {copied && <p className="text-center text-sm text-green-700 mb-6">Kimásoltuk a linket.</p>}
    <div className="platform-row justify-center">
      <a href={FB} target="_blank" rel="noopener noreferrer" className="platform-btn" style={{ background:"#1877F2", color:"#fff", borderColor:"#1877F2" }}>Facebook oldal</a>
      <a href={IG} target="_blank" rel="noopener noreferrer" className="platform-btn ig-gradient" style={{ color:"#fff", border:"none" }}>Instagram</a>
      <a href={TT} target="_blank" rel="noopener noreferrer" className="platform-btn" style={{ background:"#000", color:"#69C9D0", borderColor:"#111" }}>TikTok</a>
      <a href={PIN} target="_blank" rel="noopener noreferrer" className="platform-btn" style={{ background:"#BD081C", color:"#fff", borderColor:"#BD081C" }}>Pinterest</a>
      <a href={IN} target="_blank" rel="noopener noreferrer" className="platform-btn" style={{ background:"#0A66C2", color:"#fff", borderColor:"#0A66C2" }}>LinkedIn</a>
    </div>
  </div></section>);
}
"use client";
import { useEffect, useState } from "react"; import ProductCard from "./ProductCard";
export default function PinnedGrid(){
  const [items,setItems]=useState([]); const [err,setErr]=useState(""); const [loading,setLoading]=useState(true);
  useEffect(()=>{(async()=>{ try{ setLoading(true); const res=await fetch("/api/pinned",{cache:"no-store"}); const json=await res.json(); if(!res.ok) throw new Error(json?.error||"Hiba"); setItems(json.items||[]);}catch(e){setErr(e.message)} finally{setLoading(false)} })();},[]);
  return (<section id="pinned" className="section anchor-offset"><div className="container">
    <div className="mb-6 md:mb-8 text-center"><h2 className="text-2xl md:text-3xl font-semibold">Kiemelt ajánlatok</h2><p className="subtle mt-2">A négy fixen rögzített termék.</p></div>
    {err && <p className="text-sm text-red-600 text-center mb-4">{err}</p>}
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{loading ? Array.from({length:4}).map((_,i)=><div key={i} className="card h-[380px] animate-pulse" />) : items.map((p,i)=><ProductCard key={p.id||i} {...p} />)}</div>
  </div></section>);
}
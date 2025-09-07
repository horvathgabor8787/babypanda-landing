"use client";
import { useEffect, useState } from "react"; import ProductCard from "./ProductCard";
export default function DynamicGrid(){
  const [items,setItems]=useState([]); const [err,setErr]=useState(""); const [loading,setLoading]=useState(true);
  useEffect(()=>{(async()=>{ try{ setLoading(true); const res=await fetch("/api/products",{cache:"no-store"}); const json=await res.json(); if(!res.ok) throw new Error(json?.error||"Hiba"); setItems(json.items||[]);}catch(e){setErr(e.message)} finally{setLoading(false)} })();},[]);
  return (<section id="recommended" className="section anchor-offset"><div className="container">
    <div className="mb-6 md:mb-8 text-center"><h2 className="text-2xl md:text-3xl font-semibold">Dinamikus ajánlók</h2><p className="subtle mt-2">Supabase-ből érkező 4 termék.</p></div>
    {err && <p className="text-sm text-red-600 text-center mb-4">{err}</p>}
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{loading ? Array.from({length:4}).map((_,i)=><div key={i} className="card h-[380px] animate-pulse" />) : items.map((p)=><ProductCard key={p.id} {...p} />)}</div>
  </div></section>);
}
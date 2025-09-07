import { useEffect } from "react";
export default function FXSpotlight(){
  useEffect(()=>{ const root=document.documentElement; const onMove=e=>{root.style.setProperty("--mx",e.clientX+"px");root.style.setProperty("--my",e.clientY+"px");}; window.addEventListener("pointermove",onMove); return ()=>window.removeEventListener("pointermove",onMove);},[]);
  return <div className="spotlight" aria-hidden />;
}
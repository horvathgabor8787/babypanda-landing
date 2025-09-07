export default function Advantages(){ const items=[
  {t:"Gyors gyártás",d:"Névvel kérhető, 24–48 órán belül indul a csomag."},
  {t:"Prémium csomagolás",d:"Emlékőrző doboz, igényes kártyák – ajándéknak is tökéletes."},
  {t:"Biztonság & minőség",d:"Ellenőrzött alapanyagok, gondos kézműves kivitel."},
  {t:"Panda-támogatás",d:"Kérdésed van? Gyors, emberi segítség."}
]; return (<section className="section"><div className="container grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
{items.map((x,i)=>(<div key={i} className="adv-card"><h3 className="font-semibold">{x.t}</h3><p className="subtle mt-1">{x.d}</p></div>))}</div></section>); }

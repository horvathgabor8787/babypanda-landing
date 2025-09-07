export default function FAQ(){ const faqs=[
  {q:"Hogyan működik a kalkulátor?", a:"Megadod a baba nevét, a rendszer pedig ajánl névre szóló termékeket."},
  {q:"Tényleg #E1A4EF a gomb felirata?", a:"Igen. A fekete alaphoz ez az akcentus szín került beállításra."},
  {q:"Mikor kapom meg a csomagot?", a:"Általában 2–5 munkanap belföldön. A névre szóló gyártás 24–48 órán belül indul."}
]; return (<section className="section"><div className="container">
<h2 className="text-2xl md:text-3xl font-semibold text-center">Gyakori kérdések</h2>
<div className="mt-6 grid gap-4">{faqs.map((f,i)=>(<details key={i} className="bg-white rounded-xl border border-gray-100 p-4 open:shadow-sm"><summary className="cursor-pointer font-medium">{f.q}</summary><p className="subtle mt-2">{f.a}</p></details>))}</div>
</div></section>); }
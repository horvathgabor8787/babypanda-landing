import fs from "node:fs"; import path from "node:path";
export default function handler(req,res){
  if(req.method!=="GET") return res.status(405).json({error:"Method not allowed"});
  try{
    const p = path.join(process.cwd(),"public","pinned.json");
    const arr = JSON.parse(fs.readFileSync(p,"utf8"));
    const items = (Array.isArray(arr)?arr:[]).map(x=>({ id:x.product_url||x.title, title:x.title||"Ismeretlen termék", price:x.price??null, link:x.product_url||"#", image:x.image_url||"" }));
    res.status(200).json({items: items.slice(0,4)});
  }catch(e){ res.status(500).json({error:"pinned.json nem található vagy hibás"}); }
}

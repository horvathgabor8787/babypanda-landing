import { supabaseServer } from "@/lib/supabaseServer";
export default async function handler(req,res){
  if(req.method!=="GET") return res.status(405).json({error:"Method not allowed"});
  if(!supabaseServer) return res.status(500).json({error:"Supabase not configured"});
  const { data, error } = await supabaseServer.from("products").select("id, name, price, category, image_url, product_url, stock").order("id",{ascending:false}).limit(4);
  if(error) return res.status(500).json({error:error.message});
  const items=(data||[]).map(p=>({id:p.id,title:p.name,price:p.price??null,image:p.image_url||"",link:p.product_url||"#",stock:p.stock??null,category:p.category||null}));
  res.status(200).json({items});
}
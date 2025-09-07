"use client";
import PrimaryButton from "./PrimaryButton";
export default function ProductCard({title, price, image, link}){
  return (<div className="card h-full flex flex-col">
    <div className="card-media">{image ? <img src={image} alt={title} loading="lazy" /> : <div className="subtle text-sm p-6">Kép hamarosan</div>}</div>
    <div className="p-5 flex flex-col flex-1">
      <h3 className="text-lg font-semibold text-center">{title}</h3>
      {price != null && <p className="text-sm subtle mt-1 text-center">{Number(price).toLocaleString("hu-HU")} Ft</p>}
      <div className="mt-auto flex justify-center pt-4"><PrimaryButton href={link || "#"} target="_blank" rel="noopener noreferrer">Részletek</PrimaryButton></div>
    </div></div>);
}
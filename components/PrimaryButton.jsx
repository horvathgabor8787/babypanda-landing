"use client";
export default function PrimaryButton({children, href, onClick, target, rel, className=""}){
  const Tag = href ? "a" : "button"; const props = href ? { href, target, rel, onClick } : { onClick, type:"button" };
  return (<Tag {...props} className={`btn-black ${className}`}><span>{children}</span><span className="dot" aria-hidden>→</span></Tag>);
}
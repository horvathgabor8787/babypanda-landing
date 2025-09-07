export default function PrimaryButton({ children, href, onClick, target, rel, className = "" }) {
  const Tag = href ? "a" : "button";
  const props = href ? { href, target, rel } : { onClick, type: "button" };
  return (
    <Tag {...props} className={`btn-primary transition-transform duration-300 hover:scale-[1.03] ${className}`}>
      <span className="truncate">{children}</span>
      <span className="arrow" aria-hidden>→</span>
    </Tag>
  );
}

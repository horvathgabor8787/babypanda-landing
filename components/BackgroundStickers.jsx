// components/BackgroundStickers.jsx
// Finom, #E1A4EF színű háttér-ikonok (mobilon kevesebb, desktopon több)

const COLOR = "#E1A4EF";

function Icon({ kind, size = 96 }) {
  const common = { width: size, height: size, viewBox: "0 0 100 100", fill: "none" };
  const stroke = { stroke: COLOR, strokeWidth: 3, strokeLinecap: "round", strokeLinejoin: "round" };
  const fill = { fill: COLOR, opacity: 0.2 };

  switch (kind) {
    case "panda":
      return (
        <svg {...common}>
          <circle cx="50" cy="55" r="28" {...fill} />
          <circle cx="30" cy="28" r="10" {...fill} />
          <circle cx="70" cy="28" r="10" {...fill} />
          <circle cx="40" cy="50" r="6" {...stroke} />
          <circle cx="60" cy="50" r="6" {...stroke} />
          <path d="M40 68c6 4 14 4 20 0" {...stroke} />
          <circle cx="50" cy="55" r="28" {...stroke} />
          <circle cx="30" cy="28" r="10" {...stroke} />
          <circle cx="70" cy="28" r="10" {...stroke} />
        </svg>
      );
    case "heart":
      return (
        <svg {...common}>
          <path
            d="M50 78S22 60 22 40c0-10 8-18 18-18 6 0 12 3 16 8 4-5 10-8 16-8 10 0 18 8 18 18 0 20-28 38-40 38Z"
            {...fill}
          />
          <path
            d="M50 78S22 60 22 40c0-10 8-18 18-18 6 0 12 3 16 8 4-5 10-8 16-8 10 0 18 8 18 18 0 20-28 38-40 38Z"
            {...stroke}
          />
        </svg>
      );
    case "bottle":
      return (
        <svg {...common}>
          <rect x="38" y="24" width="24" height="12" rx="4" {...fill} />
          <rect x="38" y="24" width="24" height="12" rx="4" {...stroke} />
          <rect x="34" y="36" width="32" height="46" rx="8" {...fill} />
          <rect x="34" y="36" width="32" height="46" rx="8" {...stroke} />
          <path d="M44 44h12M44 52h12M44 60h12M44 68h12" {...stroke} />
        </svg>
      );
    case "chain": // gyöngyös cumilánc sziluett
      return (
        <svg {...common}>
          <path d="M14 60c12-12 26-18 36-18s24 6 36 18" {...stroke} />
          {[22,30,38,46,54,62,70].map((cx,i)=>(
            <circle key={i} cx={cx} cy={60 - Math.abs(50-cx)/3} r="4" {...fill}/>
          ))}
          {[22,30,38,46,54,62,70].map((cx,i)=>(
            <circle key={`s${i}`} cx={cx} cy={60 - Math.abs(50-cx)/3} r="4" {...stroke}/>
          ))}
        </svg>
      );
    case "stroller":
      return (
        <svg {...common}>
          <path d="M18 48h40a18 18 0 0 1 18 18v2H36" {...stroke} />
          <path d="M18 48V22l28 26" {...stroke} />
          <circle cx="32" cy="72" r="8" {...fill} />
          <circle cx="32" cy="72" r="8" {...stroke} />
          <circle cx="62" cy="72" r="8" {...fill} />
          <circle cx="62" cy="72" r="8" {...stroke} />
        </svg>
      );
    case "woodbox": // fadoboz / emlékőrző
      return (
        <svg {...common}>
          <rect x="20" y="34" width="60" height="40" rx="6" {...fill} />
          <rect x="20" y="34" width="60" height="40" rx="6" {...stroke} />
          <path d="M20 48h60" {...stroke} />
          <path d="M34 34v40M50 34v40M66 34v40" opacity=".5" {...stroke} />
        </svg>
      );
    case "gift":
      return (
        <svg {...common}>
          <rect x="22" y="42" width="56" height="38" rx="6" {...fill} />
          <rect x="22" y="42" width="56" height="38" rx="6" {...stroke} />
          <rect x="22" y="42" width="56" height="10" {...stroke} />
          <path d="M50 42v38" {...stroke} />
          <path d="M38 42c-6-2-10-6-10-10 0-6 8-8 14 2 6-10 14-8 14-2 0 4-4 8-10 10" {...stroke} />
        </svg>
      );
    case "seal":
      return (
        <svg {...common}>
          <circle cx="50" cy="54" r="20" {...fill} />
          <circle cx="50" cy="54" r="20" {...stroke} />
          <path d="M42 54h16M50 46v16" opacity=".6" {...stroke} />
        </svg>
      );
    case "card":
      return (
        <svg {...common}>
          <rect x="20" y="34" width="60" height="40" rx="6" {...fill} />
          <rect x="20" y="34" width="60" height="40" rx="6" {...stroke} />
          <path d="M20 40l30 16 30-16" {...stroke} />
        </svg>
      );
    default:
      return null;
  }
}

export default function BackgroundStickers() {
  // Mobilon kevesebb, desktopon több dísz
  const items = [
    // --- Mobil + Desktop ---
    { k: "panda",    t: "6%",  l: "6%",   s: 90,  a: "float-slow" },
    { k: "heart",    t: "18%", l: "78%",  s: 64,  a: "float-slow delay-2000" },
    { k: "bottle",   t: "70%", l: "12%",  s: 80,  a: "float-slow delay-1000" },
    { k: "chain",    t: "82%", l: "62%",  s: 120, a: "sway-slower" },
    // --- Csak desktop (md+) ---
    { k: "stroller", t: "36%", l: "88%",  s: 88,  a: "float-slow hidden md:block" },
    { k: "woodbox",  t: "55%", l: "42%",  s: 110, a: "sway-slower hidden md:block" },
    { k: "gift",     t: "74%", l: "26%",  s: 100, a: "float-slow hidden md:block" },
    { k: "seal",     t: "28%", l: "50%",  s: 70,  a: "pulse-soft hidden md:block" },
    { k: "card",     t: "86%", l: "10%",  s: 90,  a: "sway-slower hidden md:block" },
  ];

  return (
    <div className="sticker-layer">
      {items.map((it, i) => (
        <div
          key={`${it.k}-${i}`}
          className={`sticker ${it.a || ""}`}
          style={{
            top: it.t,
            left: it.l,
            filter: "drop-shadow(0 4px 18px rgba(225,164,239,0.25))",
          }}
        >
          <Icon kind={it.k} size={it.s} />
        </div>
      ))}
    </div>
  );
}

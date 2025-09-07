// components/BackgroundStickers.jsx
// Gazdag, #E1A4EF kitöltésű (fill), halk glow-os háttérikonok
const COLOR = "#E1A4EF";

function Icon({ kind, size = 96 }) {
  const common = { width: size, height: size, viewBox: "0 0 100 100" };
  const fill = { fill: COLOR };
  const stroke = { stroke: COLOR, strokeWidth: 3, strokeLinecap: "round", strokeLinejoin: "round", fill: "none" };

  switch (kind) {
    case "panda": // pandafej
      return (
        <svg {...common}>
          <circle cx="50" cy="55" r="30" {...fill} opacity=".22"/>
          <circle cx="30" cy="30" r="11" {...fill} opacity=".22"/>
          <circle cx="70" cy="30" r="11" {...fill} opacity=".22"/>
          <circle cx="50" cy="55" r="30" {...stroke} opacity=".35"/>
          <circle cx="30" cy="30" r="11" {...stroke} opacity=".35"/>
          <circle cx="70" cy="30" r="11" {...stroke} opacity=".35"/>
          <circle cx="40" cy="52" r="6" {...stroke} opacity=".45"/>
          <circle cx="60" cy="52" r="6" {...stroke} opacity=".45"/>
          <path d="M40 70c6 4 14 4 20 0" {...stroke} opacity=".45"/>
        </svg>
      );
    case "heart":
      return (
        <svg {...common}>
          <path d="M50 80S22 62 22 42c0-10 8-18 18-18 7 0 13 3 16 8 3-5 9-8 16-8 10 0 18 8 18 18 0 20-28 38-40 38Z" {...fill} opacity=".22"/>
          <path d="M50 80S22 62 22 42c0-10 8-18 18-18 7 0 13 3 16 8 3-5 9-8 16-8 10 0 18 8 18 18 0 20-28 38-40 38Z" {...stroke} opacity=".35"/>
        </svg>
      );
    case "star":
      return (
        <svg {...common}>
          <path d="M50 15l9 17 19 3-14 13 3 19-17-9-17 9 3-19-14-13 19-3z" {...fill} opacity=".18"/>
        </svg>
      );
    case "bottle": // cumisüveg
      return (
        <svg {...common}>
          <rect x="38" y="24" width="24" height="12" rx="4" {...fill} opacity=".22"/>
          <rect x="34" y="36" width="32" height="46" rx="8" {...fill} opacity=".18"/>
          <rect x="38" y="24" width="24" height="12" rx="4" {...stroke} opacity=".35"/>
          <rect x="34" y="36" width="32" height="46" rx="8" {...stroke} opacity=".35"/>
          <path d="M44 44h12M44 52h12M44 60h12M44 68h12" {...stroke} opacity=".35"/>
        </svg>
      );
    case "pacifier": // cumi
      return (
        <svg {...common}>
          <circle cx="50" cy="52" r="14" {...fill} opacity=".18"/>
          <path d="M30 52h40" {...stroke} opacity=".35"/>
          <path d="M42 68c4-6 12-6 16 0" {...stroke} opacity=".35"/>
          <circle cx="50" cy="52" r="10" {...stroke} opacity=".35"/>
        </svg>
      );
    case "rattle": // csörgő
      return (
        <svg {...common}>
          <circle cx="60" cy="40" r="16" {...fill} opacity=".2"/>
          <circle cx="60" cy="40" r="16" {...stroke} opacity=".35"/>
          <path d="M52 48l-18 18" {...stroke} opacity=".35"/>
          <circle cx="32" cy="68" r="8" {...fill} opacity=".2"/>
          <circle cx="32" cy="68" r="8" {...stroke} opacity=".35"/>
        </svg>
      );
    case "teddy": // mackó feje
      return (
        <svg {...common}>
          <circle cx="50" cy="54" r="22" {...fill} opacity=".22"/>
          <circle cx="34" cy="36" r="9" {...fill} opacity=".22"/>
          <circle cx="66" cy="36" r="9" {...fill} opacity=".22"/>
          <circle cx="50" cy="54" r="22" {...stroke} opacity=".35"/>
          <circle cx="34" cy="36" r="9" {...stroke} opacity=".35"/>
          <circle cx="66" cy="36" r="9" {...stroke} opacity=".35"/>
          <circle cx="44" cy="52" r="4" {...stroke} opacity=".45"/>
          <circle cx="56" cy="52" r="4" {...stroke} opacity=".45"/>
          <path d="M44 64c4 3 8 3 12 0" {...stroke} opacity=".45"/>
        </svg>
      );
    case "beadarch": // gyöngysor ív (cumilánc-szerű)
      return (
        <svg {...common}>
          <path d="M14 62c12-12 26-18 36-18s24 6 36 18" {...stroke} opacity=".35"/>
          {[22,30,38,46,54,62,70,78].map((cx,i)=>(
            <circle key={i} cx={cx} cy={62 - Math.abs(50-cx)/3} r="4.5" {...fill} opacity=".2"/>
          ))}
        </svg>
      );
    case "stroller":
      return (
        <svg {...common}>
          <path d="M18 48h40a18 18 0 0 1 18 18v2H36" {...stroke} opacity=".35"/>
          <path d="M18 48V22l28 26" {...stroke} opacity=".35"/>
          <circle cx="32" cy="72" r="8" {...fill} opacity=".2"/>
          <circle cx="62" cy="72" r="8" {...fill} opacity=".2"/>
          <circle cx="32" cy="72" r="8" {...stroke} opacity=".35"/>
          <circle cx="62" cy="72" r="8" {...stroke} opacity=".35"/>
        </svg>
      );
    case "woodbox": // fadoboz
      return (
        <svg {...common}>
          <rect x="20" y="36" width="60" height="38" rx="6" {...fill} opacity=".18"/>
          <rect x="20" y="36" width="60" height="38" rx="6" {...stroke} opacity=".35"/>
          <path d="M20 50h60" {...stroke} opacity=".35"/>
          <path d="M34 36v38M50 36v38M66 36v38" {...stroke} opacity=".2"/>
        </svg>
      );
    case "gift":
      return (
        <svg {...common}>
          <rect x="22" y="44" width="56" height="36" rx="6" {...fill} opacity=".18"/>
          <rect x="22" y="44" width="56" height="10" {...stroke} opacity=".35"/>
          <path d="M50 44v36" {...stroke} opacity=".35"/>
          <path d="M38 44c-6-2-10-6-10-10 0-6 8-8 14 2 6-10 14-8 14-2 0 4-4 8-10 10" {...stroke} opacity=".35"/>
          <rect x="22" y="44" width="56" height="36" rx="6" {...stroke} opacity=".35"/>
        </svg>
      );
    case "seal":
      return (
        <svg {...common}>
          <circle cx="50" cy="54" r="22" {...fill} opacity=".18"/>
          <circle cx="50" cy="54" r="22" {...stroke} opacity=".35"/>
          <path d="M42 54h16M50 46v16" {...stroke} opacity=".35"/>
        </svg>
      );
    case "card":
      return (
        <svg {...common}>
          <rect x="20" y="36" width="60" height="38" rx="6" {...fill} opacity=".18"/>
          <rect x="20" y="36" width="60" height="38" rx="6" {...stroke} opacity=".35"/>
          <path d="M20 42l30 16 30-16" {...stroke} opacity=".35"/>
        </svg>
      );
    default:
      return null;
  }
}

export default function BackgroundStickers() {
  // Mobil + desktop alapok (11 elem), desktopon + több kiegészítő
  const base = [
    { k: "panda",    t: "6%",  l: "6%",   s: 92,  a: "float-slow" },
    { k: "heart",    t: "16%", l: "78%",  s: 68,  a: "float-slow delay-1500" },
    { k: "bottle",   t: "68%", l: "12%",  s: 86,  a: "float-slow delay-500" },
    { k: "beadarch", t: "82%", l: "62%",  s: 140, a: "sway-slower" },
    { k: "rattle",   t: "38%", l: "12%",  s: 90,  a: "float-slow" },
    { k: "pacifier", t: "28%", l: "52%",  s: 80,  a: "float-slow delay-1000" },
    { k: "teddy",    t: "60%", l: "80%",  s: 90,  a: "float-slow" },
    { k: "star",     t: "24%", l: "26%",  s: 46,  a: "pulse-soft" },
    { k: "star",     t: "74%", l: "46%",  s: 36,  a: "pulse-soft delay-2000" },
    { k: "heart",    t: "90%", l: "10%",  s: 56,  a: "float-slow delay-2500" },
    { k: "beadarch", t: "94%", l: "8%",   s: 120, a: "sway-slower" },
  ];

  const desktopExtra = [
    { k: "stroller", t: "36%", l: "88%",  s: 96,  a: "float-slow" },
    { k: "woodbox",  t: "54%", l: "42%",  s: 120, a: "sway-slower" },
    { k: "gift",     t: "74%", l: "26%",  s: 110, a: "float-slow delay-500" },
    { k: "seal",     t: "28%", l: "50%",  s: 78,  a: "pulse-soft" },
    { k: "card",     t: "86%", l: "14%",  s: 96,  a: "sway-slower" },
    { k: "teddy",    t: "8%",  l: "32%",  s: 70,  a: "float-slow" },
    { k: "pacifier", t: "44%", l: "66%",  s: 80,  a: "float-slow" },
    { k: "bottle",   t: "12%", l: "86%",  s: 72,  a: "float-slow" },
  ];

  return (
    <div className="sticker-layer">
      {[...base].map((it, i) => (
        <div
          key={`m-${i}`}
          className={`sticker ${it.a}`}
          style={{
            top: it.t,
            left: it.l,
            filter: "drop-shadow(0 8px 26px rgba(225,164,239,0.35))",
          }}
        >
          <Icon kind={it.k} size={it.s} />
        </div>
      ))}

      {/* Csak md+-on látszanak ezek a pluszok */}
      <div className="hidden md:block">
        {desktopExtra.map((it, i) => (
          <div
            key={`d-${i}`}
            className={`sticker ${it.a}`}
            style={{
              top: it.t,
              left: it.l,
              filter: "drop-shadow(0 10px 30px rgba(225,164,239,0.35))",
            }}
          >
            <Icon kind={it.k} size={it.s} />
          </div>
        ))}
      </div>
    </div>
  );
}

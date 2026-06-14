import './SwordDivider.css'

export default function SwordDivider({ className = '' }) {
  const gripBands = [70, 81, 92, 103, 114, 125, 136, 147, 158, 169, 180, 191, 202, 213]

  return (
    <div className={`sword-divider ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 720 68"
        xmlns="http://www.w3.org/2000/svg"
        className="sword-divider-svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Blade gradient — dark edges, bright center highlight */}
          <linearGradient id="sd-blade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#1A1208" />
            <stop offset="18%"  stopColor="#9A7535" />
            <stop offset="42%"  stopColor="#E8D5A0" />
            <stop offset="58%"  stopColor="#E8D5A0" />
            <stop offset="82%"  stopColor="#9A7535" />
            <stop offset="100%" stopColor="#1A1208" />
          </linearGradient>

          {/* Guard gradient */}
          <linearGradient id="sd-guard" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#1A1208" />
            <stop offset="25%"  stopColor="#C4A46B" />
            <stop offset="50%"  stopColor="#E8D5A0" />
            <stop offset="75%"  stopColor="#C4A46B" />
            <stop offset="100%" stopColor="#1A1208" />
          </linearGradient>

          {/* Pommel gradient */}
          <radialGradient id="sd-pommel" cx="38%" cy="35%" r="65%">
            <stop offset="0%"   stopColor="#E8D5A0" />
            <stop offset="45%"  stopColor="#9A7535" />
            <stop offset="100%" stopColor="#1A1208" />
          </radialGradient>

          {/* Grip gradient */}
          <linearGradient id="sd-grip" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#0D0905" />
            <stop offset="30%"  stopColor="#5C3E1A" />
            <stop offset="50%"  stopColor="#7A5525" />
            <stop offset="70%"  stopColor="#5C3E1A" />
            <stop offset="100%" stopColor="#0D0905" />
          </linearGradient>
        </defs>

        {/* ── POMMEL (left) ── */}
        <ellipse cx="34" cy="34" rx="22" ry="22" fill="url(#sd-pommel)" />
        {/* Pommel ring */}
        <ellipse cx="34" cy="34" rx="22" ry="22" fill="none" stroke="#9A7535" strokeWidth="0.8" opacity="0.7" />
        {/* Inner detail ring */}
        <ellipse cx="34" cy="34" rx="13" ry="13" fill="none" stroke="#C4A46B" strokeWidth="0.6" opacity="0.5" />
        {/* Center diamond gem */}
        <polygon points="34,26 39,34 34,42 29,34" fill="#C4A46B" opacity="0.85" />
        <polygon points="34,27 38,34 34,41 30,34" fill="none" stroke="#E8D5A0" strokeWidth="0.5" opacity="0.7" />

        {/* ── GRIP ── */}
        {/* Main grip body */}
        <rect x="56" y="28" width="165" height="12" rx="5" fill="url(#sd-grip)" />
        {/* Grip wrapping bands */}
        {gripBands.map(x => (
          <line key={x} x1={x} y1="28" x2={x} y2="40" stroke="#9A7535" strokeWidth="1.1" opacity="0.45" />
        ))}
        {/* Top and bottom edge highlights */}
        <line x1="57" y1="28.5" x2="220" y2="28.5" stroke="#C4A46B" strokeWidth="0.5" opacity="0.4" />
        <line x1="57" y1="39.5" x2="220" y2="39.5" stroke="#C4A46B" strokeWidth="0.5" opacity="0.4" />
        {/* Grip collar (ricasso end) */}
        <rect x="218" y="25" width="10" height="18" rx="2" fill="#9A7535" opacity="0.8" />
        <rect x="219" y="26" width="8" height="16" rx="1" fill="#C4A46B" opacity="0.3" />

        {/* ── CROSSGUARD ── */}
        {/* Main guard bar — vertical */}
        <rect x="226" y="4" width="13" height="60" rx="3" fill="url(#sd-guard)" />
        {/* Guard end caps */}
        <ellipse cx="232.5" cy="5"  rx="8" ry="4.5" fill="#C4A46B" />
        <ellipse cx="232.5" cy="63" rx="8" ry="4.5" fill="#C4A46B" />
        {/* Guard center accent */}
        <rect x="228" y="28" width="9" height="12" rx="1.5" fill="#E8D5A0" opacity="0.35" />
        {/* Guard highlight edge */}
        <line x1="232.5" y1="6" x2="232.5" y2="62" stroke="#E8D5A0" strokeWidth="0.6" opacity="0.25" />

        {/* ── BLADE ── */}
        {/* Main blade body — tapers to point */}
        <polygon points="239,28 706,34 239,40" fill="url(#sd-blade)" />
        {/* Fuller groove (center line, slightly recessed) */}
        <line x1="242" y1="34" x2="695" y2="34" stroke="#0A0705" strokeWidth="1.2" opacity="0.55" />
        {/* Top edge bevel highlight */}
        <polygon points="239,28.5 695,34 239,30.5" fill="#E8D5A0" opacity="0.18" />
        {/* Bottom edge bevel highlight */}
        <polygon points="239,39.5 695,34 239,37.5" fill="#E8D5A0" opacity="0.18" />
        {/* Tip shine */}
        <polygon points="695,34 710,34 700,33.2" fill="#E8D5A0" opacity="0.5" />
      </svg>
    </div>
  )
}

import './WireDivider.css'

const BARB_XS = [60, 140, 220, 300, 380, 460, 540, 620, 700, 780]
const Y = 20

export default function WireDivider({ className = '' }) {
  return (
    <div className={`wire-divider ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 840 40"
        xmlns="http://www.w3.org/2000/svg"
        className="wire-divider-svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="wd-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"   stopColor="#1A1208" />
            <stop offset="12%"  stopColor="#9A7535" />
            <stop offset="50%"  stopColor="#C4A46B" />
            <stop offset="88%"  stopColor="#9A7535" />
            <stop offset="100%" stopColor="#1A1208" />
          </linearGradient>
        </defs>

        {/* Back strand — opposite phase, darker */}
        <path
          d="M0,20 Q20,27 40,20 Q60,13 80,20 Q100,27 120,20 Q140,13 160,20 Q180,27 200,20 Q220,13 240,20 Q260,27 280,20 Q300,13 320,20 Q340,27 360,20 Q380,13 400,20 Q420,27 440,20 Q460,13 480,20 Q500,27 520,20 Q540,13 560,20 Q580,27 600,20 Q620,13 640,20 Q660,27 680,20 Q700,13 720,20 Q740,27 760,20 Q780,13 800,20 Q820,27 840,20"
          stroke="#5C3E1A"
          strokeWidth="1.6"
          fill="none"
        />
        {/* Front strand — lighter */}
        <path
          d="M0,20 Q20,13 40,20 Q60,27 80,20 Q100,13 120,20 Q140,27 160,20 Q180,13 200,20 Q220,27 240,20 Q260,13 280,20 Q300,27 320,20 Q340,13 360,20 Q380,27 400,20 Q420,13 440,20 Q460,27 480,20 Q500,13 520,20 Q540,27 560,20 Q580,13 600,20 Q620,27 640,20 Q660,13 680,20 Q700,27 720,20 Q740,13 760,20 Q780,27 800,20 Q820,13 840,20"
          stroke="url(#wd-grad)"
          strokeWidth="1.8"
          fill="none"
        />

        {/* Barbs */}
        {BARB_XS.map(x => (
          <g key={x} transform={`translate(${x}, ${Y})`}>
            {/* Barb wrap — center knot */}
            <ellipse cx="0" cy="0" rx="3.5" ry="3.5" fill="#9A7535" />

            {/* 4 barb points — upper-left, upper-right, lower-left, lower-right */}
            {/* Upper-left */}
            <line x1="-2" y1="-2" x2="-10" y2="-10" stroke="#C4A46B" strokeWidth="2.2" strokeLinecap="butt"/>
            <polygon points="-10,-10 -14,-9 -9,-14" fill="#E8D5A0" />

            {/* Upper-right */}
            <line x1="2" y1="-2" x2="10" y2="-10" stroke="#C4A46B" strokeWidth="2.2" strokeLinecap="butt"/>
            <polygon points="10,-10 14,-9 9,-14" fill="#E8D5A0" />

            {/* Lower-left */}
            <line x1="-2" y1="2" x2="-10" y2="10" stroke="#C4A46B" strokeWidth="2.2" strokeLinecap="butt"/>
            <polygon points="-10,10 -14,9 -9,14" fill="#E8D5A0" />

            {/* Lower-right */}
            <line x1="2" y1="2" x2="10" y2="10" stroke="#C4A46B" strokeWidth="2.2" strokeLinecap="butt"/>
            <polygon points="10,10 14,9 9,14" fill="#E8D5A0" />
          </g>
        ))}
      </svg>
    </div>
  )
}

import './ChainDivider.css'

function ChainLink({ x, centerY, w = 58, h = 26, spiked = false }) {
  const rx = h / 2
  const holeW = w - 10
  const holeH = h - 10
  const holeRx = holeH / 2
  const top = centerY - h / 2
  const spikeH = 11

  return (
    <g>
      {/* Spikes on select links */}
      {spiked && (
        <>
          <polygon
            points={`${x + w * 0.35},${top - spikeH} ${x + w * 0.35 - 3},${top} ${x + w * 0.35 + 3},${top}`}
            fill="#C4A46B"
          />
          <polygon
            points={`${x + w * 0.65},${top - spikeH + 3} ${x + w * 0.65 - 2.5},${top} ${x + w * 0.65 + 2.5},${top}`}
            fill="#9A7535"
          />
          <polygon
            points={`${x + w * 0.35},${top + h + spikeH} ${x + w * 0.35 - 3},${top + h} ${x + w * 0.35 + 3},${top + h}`}
            fill="#C4A46B"
          />
          <polygon
            points={`${x + w * 0.65},${top + h + spikeH - 3} ${x + w * 0.65 - 2.5},${top + h} ${x + w * 0.65 + 2.5},${top + h}`}
            fill="#9A7535"
          />
        </>
      )}

      {/* Link body — outer */}
      <rect x={x} y={top} width={w} height={h} rx={rx} fill="#2C1F0A" stroke="#1A1208" strokeWidth="1.2" />

      {/* Upper face — lighter */}
      <rect x={x + 1.5} y={top + 1.5} width={w - 3} height={h * 0.55} rx={rx - 1} fill="#7A5520" />

      {/* Top highlight strip */}
      <rect x={x + 7} y={top + 2.5} width={w - 20} height={3.5} rx="1.5" fill="#E8D5A0" opacity="0.35" />

      {/* Side highlights */}
      <rect x={x + 1} y={top + 3} width={3} height={h - 8} rx="1.5" fill="#C4A46B" opacity="0.2" />
      <rect x={x + w - 4} y={top + 3} width={3} height={h - 8} rx="1.5" fill="#C4A46B" opacity="0.2" />

      {/* Center hole */}
      <rect x={x + 5} y={top + 5} width={holeW} height={holeH} rx={holeRx} fill="#0A0A0A" />

      {/* Hole inner shadow top */}
      <rect x={x + 5} y={top + 5} width={holeW} height={4} rx={holeRx} fill="#000" opacity="0.5" />
    </g>
  )
}

function ConnectorLink({ x, centerY, h = 26 }) {
  const w = 16
  const top = centerY - h / 2
  return (
    <g>
      {/* Perpendicular link — appears as two bars */}
      {/* Left bar */}
      <rect x={x} y={top + 2} width={5} height={h - 4} rx="2.5" fill="#5C3E1A" stroke="#1A1208" strokeWidth="0.8" />
      <rect x={x + 1} y={top + 3} width={2} height={h - 8} rx="1" fill="#9A7535" opacity="0.5" />

      {/* Right bar */}
      <rect x={x + w - 5} y={top + 2} width={5} height={h - 4} rx="2.5" fill="#5C3E1A" stroke="#1A1208" strokeWidth="0.8" />
      <rect x={x + w - 3} y={top + 3} width={2} height={h - 8} rx="1" fill="#9A7535" opacity="0.5" />
    </g>
  )
}

const LINK_W = 58
const CONNECTOR_W = 16
const UNIT = LINK_W + CONNECTOR_W   // one link + one connector = 74px
const VIEWBOX_W = 888               // 12 units * 74 = 888
const CENTER_Y = 28
const SPIKED_INDICES = new Set([1, 4, 7, 10])

export default function ChainDivider({ className = '' }) {
  const units = Math.ceil(VIEWBOX_W / UNIT) + 1

  return (
    <div className={`chain-divider ${className}`} aria-hidden="true">
      <svg
        viewBox={`0 0 ${VIEWBOX_W} 56`}
        xmlns="http://www.w3.org/2000/svg"
        className="chain-divider-svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <filter id="cd-glow">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g filter="url(#cd-glow)">
          {Array.from({ length: units }).map((_, i) => {
            const linkX = i * UNIT
            const connX = linkX + LINK_W
            return (
              <g key={i}>
                <ChainLink
                  x={linkX}
                  centerY={CENTER_Y}
                  spiked={SPIKED_INDICES.has(i % 12)}
                />
                {connX + CONNECTOR_W <= VIEWBOX_W && (
                  <ConnectorLink x={connX} centerY={CENTER_Y} />
                )}
              </g>
            )
          })}
        </g>
      </svg>
    </div>
  )
}

interface Strand {
  label: string;
  concepts: string[];
}

interface StrandMapSVGProps {
  subject: string;
  color: string;
  bg: string;
  strands: Strand[];
  title?: string;
  caption?: string;
  className?: string;
}

export function StrandMapSVG({
  subject,
  color,
  bg,
  strands,
  title,
  caption,
  className = "",
}: StrandMapSVGProps) {
  const strandCount = strands.length;
  const svgHeight = 80 + strandCount * 90;
  const centerX = 160;
  const subjectY = 40;
  const strandStartY = 100;
  const strandSpacing = 85;
  const strandX = 160;

  return (
    <figure className={`mx-auto max-w-[560px] ${className}`} role="img" aria-label={title || `${subject} strand map`}>
      {title && (
        <figcaption className="text-center mb-4">
          <span className="text-[13px] font-semibold uppercase tracking-[0.08em]" style={{ color }}>
            {title}
          </span>
        </figcaption>
      )}

      <div className="rounded-2xl border border-sand bg-paper-alt p-4 md:p-6">
        <svg
          viewBox={`-20 0 380 ${svgHeight}`}
          className="w-full h-auto"
        >
          {/* Subject root node */}
          <circle cx={centerX} cy={subjectY} r="30" fill={bg} stroke={color} strokeWidth="2.5" />
          <text
            x={centerX}
            y={subjectY + 1}
            textAnchor="middle"
            dominantBaseline="central"
            fill={color}
            fontSize="13"
            fontWeight="700"
            fontFamily="var(--font-body)"
          >
            {subject}
          </text>

          {/* Vertical trunk line from subject to strands */}
          <line
            x1={centerX}
            y1={subjectY + 30}
            x2={centerX}
            y2={strandStartY + (strandCount - 1) * strandSpacing}
            stroke={color}
            strokeWidth="2"
            opacity="0.2"
          />

          {/* Strand nodes with concept branches */}
          {strands.map((strand, i) => {
            const y = strandStartY + i * strandSpacing;
            const conceptCount = strand.concepts.length;
            // Alternate strands left and right
            const side = i % 2 === 0 ? 1 : -1;

            return (
              <g key={strand.label}>
                {/* Connection from trunk to strand */}
                <line
                  x1={centerX}
                  y1={y}
                  x2={centerX}
                  y2={y}
                  stroke={color}
                  strokeWidth="2"
                  opacity="0.3"
                />

                {/* Horizontal branch line */}
                <line
                  x1={centerX}
                  y1={y}
                  x2={centerX + side * 60}
                  y2={y}
                  stroke={color}
                  strokeWidth="1.5"
                  opacity="0.25"
                />

                {/* Strand circle */}
                <circle cx={strandX} cy={y} r="6" fill={color} opacity="0.3" />

                {/* Strand label */}
                <text
                  x={centerX + side * 70}
                  y={y - 8}
                  textAnchor={side === 1 ? "start" : "end"}
                  fill={color}
                  fontSize="12"
                  fontWeight="700"
                  fontFamily="var(--font-body)"
                >
                  {strand.label}
                </text>

                {/* Concept items */}
                {strand.concepts.map((concept, ci) => (
                  <text
                    key={ci}
                    x={centerX + side * 70}
                    y={y + 6 + ci * 15}
                    textAnchor={side === 1 ? "start" : "end"}
                    fill="#52616D"
                    fontSize="10"
                    fontFamily="var(--font-body)"
                  >
                    {concept}
                  </text>
                ))}
              </g>
            );
          })}
        </svg>
      </div>

      {caption && (
        <p className="text-center mt-3 text-[13px] text-slate leading-relaxed max-w-[400px] mx-auto">
          {caption}
        </p>
      )}
    </figure>
  );
}

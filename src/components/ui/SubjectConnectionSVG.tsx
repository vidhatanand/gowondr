interface SubjectConnectionSVGProps {
  className?: string;
}

const subjects = [
  { label: "Reading", short: "R", color: "#6A4E73", bg: "#EDE8E9", x: 190, y: 48 },
  { label: "Math", short: "M", color: "#2A6E73", bg: "#E5ECE9", x: 298, y: 100 },
  { label: "Science", short: "S", color: "#4B744F", bg: "#EAEDE5", x: 325, y: 200 },
  { label: "World", short: "W", color: "#886328", bg: "#F4EDE1", x: 285, y: 295 },
  { label: "Personal", short: "P", color: "#94536C", bg: "#F4EAEA", x: 190, y: 330 },
  { label: "Arts", short: "A", color: "#7A5AA6", bg: "#EFE9EF", x: 95, y: 295 },
  { label: "Digital", short: "D", color: "#4966A8", bg: "#E9EBEF", x: 55, y: 200 },
  { label: "Inquiry", short: "I", color: "#9E563C", bg: "#F6EAE3", x: 82, y: 100 },
];

// Connections between subjects (index pairs)
const connections = [
  [0, 1], // Reading - Math
  [1, 2], // Math - Science
  [2, 3], // Science - World
  [3, 4], // World - Personal
  [4, 5], // Personal - Arts
  [5, 6], // Arts - Digital
  [6, 7], // Digital - Inquiry
  [7, 0], // Inquiry - Reading (completing the circle)
  [0, 2], // Reading - Science (cross-connection)
  [1, 3], // Math - World (cross-connection)
  [7, 2], // Inquiry - Science (cross-connection)
];

export function SubjectConnectionSVG({ className = "" }: SubjectConnectionSVGProps) {
  return (
    <figure className={`mx-auto max-w-[560px] ${className}`} role="img" aria-label="How subjects connect">
      <figcaption className="text-center mb-4">
        <span className="text-[13px] font-semibold uppercase tracking-[0.08em] text-teal">
          HOW 8 SUBJECTS CONNECT
        </span>
      </figcaption>

      <div className="rounded-2xl border border-sand bg-paper-alt p-4 md:p-6">
        <svg viewBox="0 0 380 380" className="w-full h-auto">
          {/* Outer circle path */}
          <circle cx="190" cy="190" r="140" fill="none" stroke="#EFE6D8" strokeWidth="1.5" />

          {/* Cross connections (drawn first, behind nodes) */}
          {connections.filter((_, i) => i >= 8).map(([a, b], i) => (
            <line
              key={`cross-${i}`}
              x1={subjects[a].x}
              y1={subjects[a].y}
              x2={subjects[b].x}
              y2={subjects[b].y}
              stroke="#E6D5C3"
              strokeWidth="1"
              strokeDasharray="4 3"
            />
          ))}

          {/* Primary connections along the ring */}
          {connections.filter((_, i) => i < 8).map(([a, b], i) => (
            <line
              key={`conn-${i}`}
              x1={subjects[a].x}
              y1={subjects[a].y}
              x2={subjects[b].x}
              y2={subjects[b].y}
              stroke="#E6D5C3"
              strokeWidth="1.5"
            />
          ))}

          {/* Subject nodes */}
          {subjects.map((s) => (
            <g key={s.label}>
              <circle cx={s.x} cy={s.y} r="28" fill={s.bg} stroke={s.color} strokeWidth="2" />
              <text
                x={s.x}
                y={s.y + 1}
                textAnchor="middle"
                dominantBaseline="central"
                fill={s.color}
                fontSize="12"
                fontWeight="700"
                fontFamily="var(--font-body)"
              >
                {s.label}
              </text>
            </g>
          ))}
        </svg>
      </div>

      <p className="text-center mt-3 text-[13px] text-slate leading-relaxed max-w-[400px] mx-auto">
        No subject stands alone. Language supports all learning, inquiry connects every domain, and real-world context gives meaning to every concept.
      </p>
    </figure>
  );
}

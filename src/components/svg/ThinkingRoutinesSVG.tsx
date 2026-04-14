interface Props {
  className?: string;
}

export function ThinkingRoutinesSVG({ className = "" }: Props) {
  return (
    <div className={`rounded-2xl border border-sand bg-paper p-4 md:p-6 ${className}`}>
      <svg viewBox="0 0 500 300" className="w-full h-auto" role="img" aria-label="A magnifying glass revealing colorful thinking inside a child's thought cloud, while a parent watches and sees the revealed patterns" preserveAspectRatio="xMidYMid meet">
        <rect width="500" height="300" fill="#FFFDF9" />

        {/* === Child figure (left) — filled === */}
        <circle cx="90" cy="155" r="7" fill="#4B7A5B" />
        <line x1="90" y1="162" x2="90" y2="190" stroke="#4B7A5B" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="90" y1="172" x2="80" y2="182" stroke="#4B7A5B" strokeWidth="2" strokeLinecap="round" />
        <line x1="90" y1="172" x2="100" y2="182" stroke="#4B7A5B" strokeWidth="2" strokeLinecap="round" />
        <line x1="90" y1="190" x2="84" y2="210" stroke="#4B7A5B" strokeWidth="2" strokeLinecap="round" />
        <line x1="90" y1="190" x2="96" y2="210" stroke="#4B7A5B" strokeWidth="2" strokeLinecap="round" />

        {/* Thought cloud above child (opaque/grey — hidden thinking) */}
        <ellipse cx="125" cy="100" rx="48" ry="35" fill="#52616D" opacity="0.1" />
        <ellipse cx="120" cy="95" rx="40" ry="28" fill="#52616D" opacity="0.08" />
        {/* Cloud bumps */}
        <circle cx="95" cy="90" r="16" fill="#52616D" opacity="0.07" />
        <circle cx="150" cy="85" r="18" fill="#52616D" opacity="0.07" />
        <circle cx="120" cy="72" r="15" fill="#52616D" opacity="0.08" />
        <circle cx="140" cy="78" r="12" fill="#52616D" opacity="0.06" />
        {/* Thought bubble trail from head */}
        <circle cx="98" cy="140" r="3.5" fill="#52616D" opacity="0.12" />
        <circle cx="106" cy="125" r="5" fill="#52616D" opacity="0.1" />

        {/* Question marks inside cloud (opaque thinking) */}
        <text x="115" y="95" fontFamily="var(--font-body)" fontSize="16" fontWeight="700" fill="#52616D" opacity="0.12" textAnchor="middle">?</text>
        <text x="140" y="88" fontFamily="var(--font-body)" fontSize="12" fontWeight="700" fill="#52616D" opacity="0.08" textAnchor="middle">?</text>
        <text x="100" y="102" fontFamily="var(--font-body)" fontSize="10" fontWeight="700" fill="#52616D" opacity="0.08" textAnchor="middle">?</text>

        {/* === Magnifying glass (center) — detailed === */}
        {/* Glass outer ring */}
        <circle cx="255" cy="118" r="62" fill="none" stroke="#235A5F" strokeWidth="3.5" opacity="0.5" />
        {/* Glass inner ring */}
        <circle cx="255" cy="118" r="58" fill="#FFFDF9" opacity="0.6" />
        {/* Metallic rim detail */}
        <circle cx="255" cy="118" r="60" fill="none" stroke="#235A5F" strokeWidth="1" opacity="0.15" />

        {/* Handle */}
        <line x1="298" y1="160" x2="340" y2="202" stroke="#235A5F" strokeWidth="4.5" strokeLinecap="round" opacity="0.45" />
        {/* Handle grip */}
        <line x1="335" y1="197" x2="348" y2="210" stroke="#A4582E" strokeWidth="6" strokeLinecap="round" opacity="0.35" />
        <line x1="337" y1="199" x2="346" y2="208" stroke="#A4582E" strokeWidth="4" strokeLinecap="round" opacity="0.2" />

        {/* Inside the magnifying glass: colorful connected thinking nodes */}
        {/* Node 1 — teal */}
        <circle cx="230" cy="95" r="10" fill="#235A5F" opacity="0.2" />
        <circle cx="230" cy="95" r="10" fill="none" stroke="#235A5F" strokeWidth="1.5" opacity="0.3" />
        {/* Node 2 — terracotta */}
        <circle cx="268" cy="85" r="8" fill="#A4582E" opacity="0.2" />
        <circle cx="268" cy="85" r="8" fill="none" stroke="#A4582E" strokeWidth="1.5" opacity="0.3" />
        {/* Node 3 — green */}
        <circle cx="280" cy="115" r="9" fill="#4B7A5B" opacity="0.2" />
        <circle cx="280" cy="115" r="9" fill="none" stroke="#4B7A5B" strokeWidth="1.5" opacity="0.3" />
        {/* Node 4 — teal small */}
        <circle cx="235" cy="135" r="7" fill="#235A5F" opacity="0.15" />
        <circle cx="235" cy="135" r="7" fill="none" stroke="#235A5F" strokeWidth="1" opacity="0.25" />
        {/* Node 5 — terracotta small */}
        <circle cx="260" cy="145" r="7" fill="#A4582E" opacity="0.15" />
        <circle cx="260" cy="145" r="7" fill="none" stroke="#A4582E" strokeWidth="1" opacity="0.25" />
        {/* Node 6 — green small */}
        <circle cx="248" cy="108" r="6" fill="#4B7A5B" opacity="0.15" />

        {/* Connections between nodes */}
        <line x1="237" y1="100" x2="262" y2="88" stroke="#235A5F" strokeWidth="1.5" strokeLinecap="round" opacity="0.25" />
        <line x1="272" y1="91" x2="278" y2="108" stroke="#A4582E" strokeWidth="1.5" strokeLinecap="round" opacity="0.25" />
        <line x1="275" y1="120" x2="264" y2="140" stroke="#4B7A5B" strokeWidth="1.5" strokeLinecap="round" opacity="0.25" />
        <line x1="240" y1="131" x2="255" y2="141" stroke="#235A5F" strokeWidth="1.2" strokeLinecap="round" opacity="0.2" />
        <line x1="234" y1="102" x2="237" y2="129" stroke="#52616D" strokeWidth="1" strokeLinecap="round" opacity="0.15" />
        <line x1="252" y1="110" x2="265" y2="90" stroke="#4B7A5B" strokeWidth="1" strokeLinecap="round" opacity="0.15" />
        <line x1="248" y1="112" x2="240" y2="130" stroke="#52616D" strokeWidth="0.8" strokeLinecap="round" opacity="0.12" />

        {/* Sparkle/star shapes around glass rim where transformation happens */}
        <path d="M205 78 l2 -5 l2 5 l-5 -2 l5 0Z" fill="#A4582E" opacity="0.3" />
        <path d="M295 88 l1.5 -4 l1.5 4 l-4 -1.5 l4 0Z" fill="#235A5F" opacity="0.25" />
        <path d="M210 145 l1.5 -4 l1.5 4 l-4 -1.5 l4 0Z" fill="#4B7A5B" opacity="0.25" />
        <path d="M290 140 l1 -3 l1 3 l-3 -1 l3 0Z" fill="#A4582E" opacity="0.2" />
        <path d="M225 68 l1 -3 l1 3 l-3 -1 l3 0Z" fill="#4B7A5B" opacity="0.2" />
        <path d="M280 70 l1 -2.5 l1 2.5 l-2.5 -1 l2.5 0Z" fill="#235A5F" opacity="0.18" />

        {/* Glass lens sheen highlight */}
        <path d="M220 85 Q232 72 252 74" fill="none" stroke="#FFFDF9" strokeWidth="2" strokeLinecap="round" opacity="0.55" />
        <path d="M218 92 Q225 85 235 83" fill="none" stroke="#FFFDF9" strokeWidth="1" strokeLinecap="round" opacity="0.3" />

        {/* === Parent figure (right) — filled === */}
        <circle cx="410" cy="145" r="9" fill="#A4582E" />
        <line x1="410" y1="154" x2="410" y2="188" stroke="#A4582E" strokeWidth="3" strokeLinecap="round" />
        <line x1="410" y1="165" x2="398" y2="177" stroke="#A4582E" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="410" y1="165" x2="422" y2="177" stroke="#A4582E" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="410" y1="188" x2="403" y2="210" stroke="#A4582E" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="410" y1="188" x2="417" y2="210" stroke="#A4582E" strokeWidth="2.5" strokeLinecap="round" />
        {/* Parent warm smile */}
        <path d="M406 148 Q410 151 414 148" fill="none" stroke="#FFFDF9" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />

        {/* Parent's "seeing" dashed lines — looking at magnified content */}
        <path d="M401 147 Q370 135 318 122" fill="none" stroke="#235A5F" strokeWidth="1" strokeLinecap="round" opacity="0.2" strokeDasharray="4 3" />
        <path d="M401 150 Q372 142 318 135" fill="none" stroke="#235A5F" strokeWidth="0.8" strokeLinecap="round" opacity="0.15" strokeDasharray="4 3" />

        {/* Labels */}
        <text x="90" y="228" fontFamily="var(--font-body)" fontSize="10" fontWeight="700" fill="#1E2A34" opacity="0.7" textAnchor="middle">Hidden thinking</text>

        <text x="255" y="198" fontFamily="var(--font-body)" fontSize="12" fontWeight="700" fill="#235A5F" opacity="0.8" textAnchor="middle">Thinking routine reveals</text>

        <text x="410" y="228" fontFamily="var(--font-body)" fontSize="10" fontWeight="700" fill="#A4582E" opacity="0.7" textAnchor="middle">Parent can now support</text>

        {/* Bottom process labels */}
        <text x="130" y="272" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" fill="#52616D" opacity="0.4" textAnchor="middle">&quot;What do you notice?&quot;</text>
        <text x="255" y="272" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" fill="#235A5F" opacity="0.45" textAnchor="middle">Draw, explain, connect</text>
        <text x="385" y="272" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" fill="#4B7A5B" opacity="0.45" textAnchor="middle">Better evidence, better support</text>

        {/* Flow arrows at bottom */}
        <path d="M185 269 L215 269" fill="none" stroke="#52616D" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
        <path d="M215 269 l-3 -2.5 l0 5Z" fill="#52616D" opacity="0.3" />
        <path d="M310 269 L340 269" fill="none" stroke="#52616D" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
        <path d="M340 269 l-3 -2.5 l0 5Z" fill="#52616D" opacity="0.3" />
      </svg>
    </div>
  );
}

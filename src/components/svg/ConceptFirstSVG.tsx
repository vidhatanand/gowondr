interface Props {
  className?: string;
}

export function ConceptFirstSVG({ className = "" }: Props) {
  return (
    <div className={`rounded-2xl border border-sand bg-paper p-4 md:p-6 ${className}`}>
      <svg viewBox="0 0 600 280" className="w-full h-auto" role="img" aria-label="Two gardens compared: a messy scattered garden of random activities versus a neat structured garden of concept-first design" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="gardenSky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFFDF9" />
            <stop offset="100%" stopColor="#F8F4ED" />
          </linearGradient>
        </defs>
        <rect width="600" height="280" fill="url(#gardenSky)" />

        {/* Dividing line */}
        <line x1="300" y1="30" x2="300" y2="250" stroke="#52616D" strokeWidth="1" strokeDasharray="5 4" opacity="0.25" />

        {/* Ground lines */}
        <path d="M10 210 Q80 212 150 208 Q200 214 290 210" fill="none" stroke="#A4582E" strokeWidth="0.8" opacity="0.2" />
        <path d="M310 210 L590 210" stroke="#A4582E" strokeWidth="0.8" opacity="0.2" />

        {/* === LEFT GARDEN: Random Activities === */}
        {/* Messy uneven soil */}
        <path d="M10 210 Q40 206 70 213 Q100 205 130 214 Q160 204 190 212 Q220 207 250 214 Q270 206 290 210 L290 250 L10 250Z" fill="#A4582E" opacity="0.08" />
        {/* Dead leaves on ground */}
        <path d="M50 212 q3 2 5 -1 q-1 3 -5 1" fill="#52616D" opacity="0.12" />
        <path d="M120 214 q2 3 5 0 q-2 2 -5 0" fill="#52616D" opacity="0.1" />
        <path d="M200 211 q4 1 3 -2 q0 3 -3 2" fill="#52616D" opacity="0.1" />
        <path d="M260 213 q2 2 4 -1 q-1 3 -4 1" fill="#52616D" opacity="0.08" />

        {/* Wilting plant 1 - leaning badly left */}
        <line x1="42" y1="210" x2="35" y2="178" stroke="#52616D" strokeWidth="1.5" strokeLinecap="round" opacity="0.25" />
        <path d="M35 178 q-6 -1 -8 3" fill="none" stroke="#52616D" strokeWidth="1" strokeLinecap="round" opacity="0.2" />
        <path d="M37 185 q-4 0 -6 3" fill="none" stroke="#52616D" strokeWidth="0.8" strokeLinecap="round" opacity="0.15" />

        {/* Wilting plant 2 - tiny, stunted */}
        <line x1="88" y1="210" x2="90" y2="198" stroke="#52616D" strokeWidth="1.2" strokeLinecap="round" opacity="0.2" />
        <circle cx="90" cy="196" r="2" fill="#52616D" opacity="0.12" />

        {/* Wilting plant 3 - tilted right */}
        <line x1="132" y1="210" x2="142" y2="175" stroke="#52616D" strokeWidth="1.5" strokeLinecap="round" opacity="0.25" />
        <path d="M142 175 q5 -2 6 2" fill="none" stroke="#52616D" strokeWidth="1" strokeLinecap="round" opacity="0.18" />
        <path d="M138 185 q-4 -1 -5 2" fill="none" stroke="#52616D" strokeWidth="0.8" strokeLinecap="round" opacity="0.12" />

        {/* Wilting plant 4 - drooping */}
        <line x1="178" y1="210" x2="175" y2="185" stroke="#52616D" strokeWidth="1.2" strokeLinecap="round" opacity="0.22" />
        <path d="M175 185 q-3 -4 -7 0" fill="none" stroke="#52616D" strokeWidth="0.8" strokeLinecap="round" opacity="0.15" />

        {/* Wilting plant 5 - barely visible */}
        <line x1="218" y1="210" x2="220" y2="200" stroke="#52616D" strokeWidth="1" strokeLinecap="round" opacity="0.15" />

        {/* Wilting plant 6 - falling over */}
        <line x1="262" y1="210" x2="252" y2="182" stroke="#52616D" strokeWidth="1.5" strokeLinecap="round" opacity="0.22" />
        <path d="M252 182 q-5 -4 -10 0" fill="none" stroke="#52616D" strokeWidth="1" strokeLinecap="round" opacity="0.15" />
        <path d="M255 190 q4 -2 6 1" fill="none" stroke="#52616D" strokeWidth="0.8" strokeLinecap="round" opacity="0.12" />

        {/* Scattered worksheets/shapes (random clutter) */}
        <rect x="58" y="168" width="11" height="8" rx="1" fill="#52616D" opacity="0.08" stroke="#52616D" strokeWidth="0.6" transform="rotate(22, 64, 172)" />
        <rect x="155" y="158" width="9" height="7" rx="1" fill="#52616D" opacity="0.07" stroke="#52616D" strokeWidth="0.6" transform="rotate(-15, 160, 162)" />
        <circle cx="108" cy="172" r="3.5" fill="#52616D" opacity="0.07" stroke="#52616D" strokeWidth="0.6" />
        <polygon points="238,168 242,157 246,168" fill="#52616D" opacity="0.07" stroke="#52616D" strokeWidth="0.6" />

        {/* Confused parent figure in the chaos */}
        <circle cx="150" cy="145" r="8" fill="#A4582E" />
        <line x1="150" y1="153" x2="150" y2="180" stroke="#A4582E" strokeWidth="2.5" strokeLinecap="round" />
        {/* Arms out in confusion */}
        <line x1="150" y1="162" x2="138" y2="170" stroke="#A4582E" strokeWidth="2" strokeLinecap="round" />
        <line x1="150" y1="162" x2="162" y2="170" stroke="#A4582E" strokeWidth="2" strokeLinecap="round" />
        <line x1="150" y1="180" x2="144" y2="198" stroke="#A4582E" strokeWidth="2" strokeLinecap="round" />
        <line x1="150" y1="180" x2="156" y2="198" stroke="#A4582E" strokeWidth="2" strokeLinecap="round" />
        {/* Question mark */}
        <text x="150" y="135" fontFamily="var(--font-body)" fontSize="11" fontWeight="700" fill="#52616D" opacity="0.35" textAnchor="middle">?</text>

        {/* === RIGHT GARDEN: Concept-First === */}
        {/* Neat even soil */}
        <path d="M310 210 L590 210 L590 250 L310 250Z" fill="#A4582E" opacity="0.1" />

        {/* Stepping stones path */}
        <ellipse cx="340" cy="225" rx="8" ry="3" fill="#E6D5C3" opacity="0.5" />
        <ellipse cx="380" cy="224" rx="8" ry="3" fill="#E6D5C3" opacity="0.45" />
        <ellipse cx="420" cy="225" rx="8" ry="3" fill="#E6D5C3" opacity="0.5" />
        <ellipse cx="460" cy="224" rx="8" ry="3" fill="#E6D5C3" opacity="0.45" />
        <ellipse cx="500" cy="225" rx="8" ry="3" fill="#E6D5C3" opacity="0.5" />
        <ellipse cx="540" cy="224" rx="8" ry="3" fill="#E6D5C3" opacity="0.45" />
        {/* Dotted path connecting stepping stones */}
        <path d="M340 225 Q360 222 380 224 Q400 222 420 225 Q440 222 460 224 Q480 222 500 225 Q520 222 540 224" fill="none" stroke="#235A5F" strokeWidth="1" strokeLinecap="round" opacity="0.2" strokeDasharray="3 3" />

        {/* Plant 1 — short */}
        <line x1="340" y1="210" x2="340" y2="182" stroke="#4B7A5B" strokeWidth="2" strokeLinecap="round" opacity="0.55" />
        <circle cx="340" cy="177" r="6" fill="#4B7A5B" opacity="0.25" />
        <path d="M340 195 q-5 -4 -8 0" fill="none" stroke="#4B7A5B" strokeWidth="1" strokeLinecap="round" opacity="0.35" />
        <path d="M340 188 q5 -4 8 0" fill="none" stroke="#4B7A5B" strokeWidth="1" strokeLinecap="round" opacity="0.35" />

        {/* Plant 2 — medium */}
        <line x1="390" y1="210" x2="390" y2="170" stroke="#4B7A5B" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
        <circle cx="390" cy="165" r="7" fill="#4B7A5B" opacity="0.28" />
        <path d="M390 192 q-6 -5 -9 0" fill="none" stroke="#4B7A5B" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
        <path d="M390 182 q6 -5 9 0" fill="none" stroke="#4B7A5B" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
        <path d="M390 198 q5 -3 7 1" fill="none" stroke="#4B7A5B" strokeWidth="1" strokeLinecap="round" opacity="0.3" />

        {/* Plant 3 — taller */}
        <line x1="440" y1="210" x2="440" y2="158" stroke="#4B7A5B" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
        <circle cx="440" cy="152" r="8" fill="#4B7A5B" opacity="0.3" />
        <path d="M440 188 q-7 -5 -10 -1" fill="none" stroke="#4B7A5B" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
        <path d="M440 178 q7 -5 10 -1" fill="none" stroke="#4B7A5B" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
        <path d="M440 195 q-5 -3 -7 1" fill="none" stroke="#4B7A5B" strokeWidth="1" strokeLinecap="round" opacity="0.3" />

        {/* Plant 4 — tallest */}
        <line x1="490" y1="210" x2="490" y2="150" stroke="#4B7A5B" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
        <circle cx="490" cy="145" r="9" fill="#4B7A5B" opacity="0.3" />
        <path d="M490 185 q-7 -6 -10 0" fill="none" stroke="#4B7A5B" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
        <path d="M490 175 q7 -6 10 0" fill="none" stroke="#4B7A5B" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
        <path d="M490 195 q5 -3 8 1" fill="none" stroke="#4B7A5B" strokeWidth="1" strokeLinecap="round" opacity="0.3" />

        {/* Plant 5 — tall */}
        <line x1="540" y1="210" x2="540" y2="155" stroke="#4B7A5B" strokeWidth="2" strokeLinecap="round" opacity="0.55" />
        <circle cx="540" cy="150" r="8" fill="#4B7A5B" opacity="0.28" />
        <path d="M540 188 q-6 -5 -9 0" fill="none" stroke="#4B7A5B" strokeWidth="1.2" strokeLinecap="round" opacity="0.35" />
        <path d="M540 178 q6 -5 9 0" fill="none" stroke="#4B7A5B" strokeWidth="1.2" strokeLinecap="round" opacity="0.35" />

        {/* Connecting arcs between plants */}
        <path d="M340 198 Q365 188 390 198" fill="none" stroke="#235A5F" strokeWidth="1.2" strokeLinecap="round" opacity="0.25" strokeDasharray="3 2" />
        <path d="M390 192 Q415 182 440 192" fill="none" stroke="#235A5F" strokeWidth="1.2" strokeLinecap="round" opacity="0.25" strokeDasharray="3 2" />
        <path d="M440 190 Q465 178 490 190" fill="none" stroke="#235A5F" strokeWidth="1.2" strokeLinecap="round" opacity="0.25" strokeDasharray="3 2" />
        <path d="M490 195 Q515 185 540 195" fill="none" stroke="#235A5F" strokeWidth="1.2" strokeLinecap="round" opacity="0.25" strokeDasharray="3 2" />

        {/* Small plant stakes with labels */}
        <line x1="365" y1="210" x2="365" y2="200" stroke="#A4582E" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
        <text x="365" y="198" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" fill="#A4582E" opacity="0.45" textAnchor="middle">Strand 1</text>
        <line x1="465" y1="210" x2="465" y2="200" stroke="#A4582E" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
        <text x="465" y="198" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" fill="#A4582E" opacity="0.45" textAnchor="middle">Strand 2</text>

        {/* Confident parent + child walking the path */}
        {/* Parent */}
        <circle cx="420" cy="120" r="8" fill="#A4582E" />
        <line x1="420" y1="128" x2="420" y2="155" stroke="#A4582E" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="420" y1="137" x2="410" y2="147" stroke="#A4582E" strokeWidth="2" strokeLinecap="round" />
        <line x1="420" y1="137" x2="432" y2="142" stroke="#A4582E" strokeWidth="2" strokeLinecap="round" />
        <line x1="420" y1="155" x2="414" y2="172" stroke="#A4582E" strokeWidth="2" strokeLinecap="round" />
        <line x1="420" y1="155" x2="426" y2="172" stroke="#A4582E" strokeWidth="2" strokeLinecap="round" />
        {/* Child next to parent */}
        <circle cx="438" cy="132" r="6" fill="#4B7A5B" />
        <line x1="438" y1="138" x2="438" y2="160" stroke="#4B7A5B" strokeWidth="2" strokeLinecap="round" />
        <line x1="438" y1="146" x2="430" y2="153" stroke="#4B7A5B" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="438" y1="146" x2="446" y2="152" stroke="#4B7A5B" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="438" y1="160" x2="434" y2="175" stroke="#4B7A5B" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="438" y1="160" x2="442" y2="175" stroke="#4B7A5B" strokeWidth="1.5" strokeLinecap="round" />

        {/* Soil texture right side */}
        {[325,355,385,415,445,475,505,535,565].map((x, i) => (
          <circle key={`rd${i}`} cx={x} cy={235 + (i % 3) * 4} r="0.7" fill="#A4582E" opacity="0.08" />
        ))}

        {/* Labels */}
        <text x="150" y="50" fontFamily="var(--font-body)" fontSize="12" fontWeight="700" fill="#52616D" opacity="0.8" textAnchor="middle">Random activities</text>
        <text x="150" y="65" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" fill="#52616D" opacity="0.4" textAnchor="middle">Scattered, no structure, no revisit</text>

        <text x="450" y="50" fontFamily="var(--font-body)" fontSize="12" fontWeight="700" fill="#235A5F" opacity="0.8" textAnchor="middle">Concept-first</text>
        <text x="450" y="65" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" fill="#235A5F" opacity="0.45" textAnchor="middle">Connected, sequenced, revisited</text>

        {/* Outcome labels */}
        <text x="150" y="268" fontFamily="var(--font-body)" fontSize="10" fontWeight="600" fill="#52616D" opacity="0.45" textAnchor="middle">Gaps grow unseen</text>
        <text x="450" y="268" fontFamily="var(--font-body)" fontSize="10" fontWeight="600" fill="#4B7A5B" opacity="0.55" textAnchor="middle">Understanding grows together</text>
      </svg>
    </div>
  );
}

interface Props {
  className?: string;
}

export function ParentChildSVG({ className = "" }: Props) {
  return (
    <div className={`rounded-2xl border border-sand bg-paper p-4 md:p-6 max-w-md mx-auto ${className}`}>
      <svg viewBox="0 0 400 520" className="w-full h-auto" role="img" aria-label="A seed growing into a tree, showing how responsive interaction grows into learning outcomes through language, safety, and attention" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="soilGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#A4582E" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#A4582E" stopOpacity="0.15" />
          </linearGradient>
          <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFFDF9" />
            <stop offset="60%" stopColor="#F8F4ED" />
            <stop offset="100%" stopColor="#EFE6D8" stopOpacity="0.3" />
          </linearGradient>
          <radialGradient id="canopyGrad" cx="0.5" cy="0.6" r="0.5">
            <stop offset="0%" stopColor="#4B7A5B" stopOpacity="0.35" />
            <stop offset="70%" stopColor="#4B7A5B" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#4B7A5B" stopOpacity="0.05" />
          </radialGradient>
        </defs>

        {/* Background */}
        <rect width="400" height="520" fill="url(#skyGrad)" />

        {/* Subtle clouds */}
        <ellipse cx="80" cy="60" rx="50" ry="18" fill="#EFE6D8" opacity="0.3" />
        <ellipse cx="60" cy="55" rx="30" ry="14" fill="#EFE6D8" opacity="0.25" />
        <ellipse cx="320" cy="80" rx="45" ry="15" fill="#EFE6D8" opacity="0.25" />
        <ellipse cx="340" cy="75" rx="28" ry="12" fill="#EFE6D8" opacity="0.2" />

        {/* Soil layer */}
        <path d="M0 410 Q30 406 60 409 Q100 404 140 408 Q200 402 260 407 Q320 404 360 408 Q380 406 400 410 L400 520 L0 520Z" fill="url(#soilGrad)" />
        {/* Soil texture dots */}
        {[25,55,85,115,145,175,205,235,265,295,325,355,385].map((x, i) => (
          <circle key={`s${i}`} cx={x} cy={430 + (i % 5) * 10} r={1 + (i % 3) * 0.3} fill="#A4582E" opacity={0.08 + (i % 3) * 0.04} />
        ))}
        {[40,80,120,160,200,240,280,320,360].map((x, i) => (
          <circle key={`s2${i}`} cx={x} cy={450 + (i % 4) * 8} r="0.8" fill="#A4582E" opacity="0.06" />
        ))}
        {/* Small rocks */}
        <ellipse cx="70" cy="445" rx="4" ry="2.5" fill="#A4582E" opacity="0.1" />
        <ellipse cx="180" cy="455" rx="3" ry="2" fill="#A4582E" opacity="0.08" />
        <ellipse cx="310" cy="442" rx="3.5" ry="2" fill="#A4582E" opacity="0.09" />
        <ellipse cx="250" cy="465" rx="2.5" ry="1.5" fill="#A4582E" opacity="0.07" />

        {/* Seed at the base with crack */}
        <ellipse cx="200" cy="420" rx="14" ry="9" fill="#A4582E" opacity="0.4" />
        <ellipse cx="200" cy="420" rx="10" ry="6" fill="#A4582E" opacity="0.25" />
        {/* Crack in seed */}
        <path d="M198 414 Q200 418 197 423" fill="none" stroke="#4B7A5B" strokeWidth="1" strokeLinecap="round" opacity="0.35" />
        {/* Tiny sprout from crack */}
        <path d="M198 414 Q196 410 198 406" fill="none" stroke="#4B7A5B" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
        <path d="M198 408 q-3 -2 -5 0" fill="#4B7A5B" opacity="0.3" />

        {/* Roots spreading down */}
        <path d="M200 427 Q195 442 180 458 Q168 470 150 482" fill="none" stroke="#A4582E" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
        <path d="M155 478 Q145 485 138 490" fill="none" stroke="#A4582E" strokeWidth="1.2" strokeLinecap="round" opacity="0.2" />
        <path d="M200 427 Q208 445 220 460 Q232 472 248 482" fill="none" stroke="#A4582E" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
        <path d="M243 478 Q252 484 258 490" fill="none" stroke="#A4582E" strokeWidth="1.2" strokeLinecap="round" opacity="0.2" />
        <path d="M200 427 Q197 450 193 465 Q189 478 184 495" fill="none" stroke="#A4582E" strokeWidth="1.5" strokeLinecap="round" opacity="0.22" />
        <path d="M200 427 Q203 448 210 465 Q215 478 220 492" fill="none" stroke="#A4582E" strokeWidth="1.5" strokeLinecap="round" opacity="0.22" />
        {/* Root hair tendrils */}
        <path d="M170 468 Q165 472 160 470" fill="none" stroke="#A4582E" strokeWidth="0.8" strokeLinecap="round" opacity="0.15" />
        <path d="M230 468 Q235 472 240 470" fill="none" stroke="#A4582E" strokeWidth="0.8" strokeLinecap="round" opacity="0.15" />

        {/* Trunk growing up — thicker with wood grain */}
        <path d="M200 410 Q198 370 200 330 Q202 290 200 250 Q198 220 200 190" fill="none" stroke="#A4582E" strokeWidth="5" strokeLinecap="round" opacity="0.4" />
        {/* Trunk edges */}
        <path d="M195 410 Q193 370 195 330 Q196 290 195 255" fill="none" stroke="#A4582E" strokeWidth="1.5" strokeLinecap="round" opacity="0.2" />
        <path d="M205 410 Q207 370 205 330 Q204 290 205 255" fill="none" stroke="#A4582E" strokeWidth="1.5" strokeLinecap="round" opacity="0.2" />
        {/* Wood grain horizontal lines */}
        <line x1="196" y1="390" x2="204" y2="390" stroke="#A4582E" strokeWidth="0.5" strokeLinecap="round" opacity="0.12" />
        <line x1="197" y1="365" x2="203" y2="365" stroke="#A4582E" strokeWidth="0.5" strokeLinecap="round" opacity="0.1" />
        <line x1="196" y1="340" x2="204" y2="340" stroke="#A4582E" strokeWidth="0.5" strokeLinecap="round" opacity="0.1" />
        <line x1="197" y1="315" x2="203" y2="315" stroke="#A4582E" strokeWidth="0.5" strokeLinecap="round" opacity="0.08" />
        <line x1="197" y1="290" x2="203" y2="290" stroke="#A4582E" strokeWidth="0.5" strokeLinecap="round" opacity="0.08" />

        {/* Branch 1: Language (left) */}
        <path d="M200 300 Q178 280 150 262 Q128 248 108 232 Q98 222 90 210" fill="none" stroke="#A4582E" strokeWidth="3" strokeLinecap="round" opacity="0.4" />
        <path d="M130 250 Q118 238 108 230" fill="none" stroke="#A4582E" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
        <path d="M150 262 Q138 252 125 246" fill="none" stroke="#A4582E" strokeWidth="1.5" strokeLinecap="round" opacity="0.25" />
        {/* Language branch leaves */}
        <circle cx="88" cy="205" r="12" fill="#4B7A5B" opacity="0.25" />
        <circle cx="78" cy="215" r="9" fill="#4B7A5B" opacity="0.2" />
        <circle cx="100" cy="220" r="10" fill="#4B7A5B" opacity="0.18" />
        <circle cx="108" cy="228" r="7" fill="#4B7A5B" opacity="0.15" />
        <circle cx="122" cy="240" r="8" fill="#4B7A5B" opacity="0.15" />
        <circle cx="95" cy="198" r="8" fill="#4B7A5B" opacity="0.2" />

        {/* Branch 2: Safety (center-up) */}
        <path d="M200 270 Q200 240 200 210 Q200 185 200 160" fill="none" stroke="#A4582E" strokeWidth="3" strokeLinecap="round" opacity="0.4" />
        <path d="M200 220 Q188 208 175 200" fill="none" stroke="#A4582E" strokeWidth="1.5" strokeLinecap="round" opacity="0.25" />
        <path d="M200 220 Q212 208 225 200" fill="none" stroke="#A4582E" strokeWidth="1.5" strokeLinecap="round" opacity="0.25" />
        {/* Safety branch leaves */}
        <circle cx="200" cy="152" r="14" fill="#4B7A5B" opacity="0.25" />
        <circle cx="188" cy="162" r="10" fill="#4B7A5B" opacity="0.2" />
        <circle cx="212" cy="162" r="10" fill="#4B7A5B" opacity="0.2" />
        <circle cx="175" cy="195" r="8" fill="#4B7A5B" opacity="0.15" />
        <circle cx="225" cy="195" r="8" fill="#4B7A5B" opacity="0.15" />
        <circle cx="200" cy="170" r="8" fill="#235A5F" opacity="0.1" />

        {/* Branch 3: Attention (right) */}
        <path d="M200 300 Q222 280 250 262 Q272 248 292 232 Q302 222 310 210" fill="none" stroke="#A4582E" strokeWidth="3" strokeLinecap="round" opacity="0.4" />
        <path d="M270 250 Q282 238 292 230" fill="none" stroke="#A4582E" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
        <path d="M250 262 Q262 252 275 246" fill="none" stroke="#A4582E" strokeWidth="1.5" strokeLinecap="round" opacity="0.25" />
        {/* Attention branch leaves */}
        <circle cx="312" cy="205" r="12" fill="#4B7A5B" opacity="0.25" />
        <circle cx="322" cy="215" r="9" fill="#4B7A5B" opacity="0.2" />
        <circle cx="300" cy="220" r="10" fill="#4B7A5B" opacity="0.18" />
        <circle cx="292" cy="228" r="7" fill="#4B7A5B" opacity="0.15" />
        <circle cx="278" cy="240" r="8" fill="#4B7A5B" opacity="0.15" />
        <circle cx="305" cy="198" r="8" fill="#4B7A5B" opacity="0.2" />

        {/* Full canopy — overlapping circles in different greens */}
        <ellipse cx="200" cy="185" rx="130" ry="75" fill="url(#canopyGrad)" />
        <circle cx="150" cy="195" r="35" fill="#4B7A5B" opacity="0.08" />
        <circle cx="250" cy="195" r="35" fill="#4B7A5B" opacity="0.08" />
        <circle cx="200" cy="170" r="40" fill="#4B7A5B" opacity="0.1" />
        <circle cx="170" cy="180" r="28" fill="#235A5F" opacity="0.05" />
        <circle cx="230" cy="180" r="28" fill="#235A5F" opacity="0.05" />

        {/* Scattered leaf shapes in canopy */}
        {[120,145,170,195,220,245,270].map((x, i) => (
          <path key={`lf${i}`} d={`M${x} ${165 + (i % 3) * 12} q5 -7 10 0 q-5 7 -10 0`} fill="#4B7A5B" opacity={0.18 + (i % 2) * 0.07} />
        ))}
        {[135,165,200,235,260].map((x, i) => (
          <path key={`lf2${i}`} d={`M${x} ${180 + (i % 2) * 15} q4 -5 8 0 q-4 5 -8 0`} fill="#235A5F" opacity={0.12 + (i % 2) * 0.05} />
        ))}

        {/* Parent figure — standing beside trunk, hand on it */}
        {/* Parent: terracotta */}
        <circle cx="245" cy="350" r="9" fill="#A4582E" />
        <line x1="245" y1="359" x2="245" y2="390" stroke="#A4582E" strokeWidth="3" strokeLinecap="round" />
        {/* Left arm reaching to trunk */}
        <line x1="245" y1="368" x2="208" y2="365" stroke="#A4582E" strokeWidth="2.5" strokeLinecap="round" />
        {/* Right arm down */}
        <line x1="245" y1="368" x2="258" y2="380" stroke="#A4582E" strokeWidth="2.5" strokeLinecap="round" />
        {/* Legs */}
        <line x1="245" y1="390" x2="238" y2="410" stroke="#A4582E" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="245" y1="390" x2="252" y2="410" stroke="#A4582E" strokeWidth="2.5" strokeLinecap="round" />

        {/* Child figure — under canopy, arms up in joy */}
        {/* Child: green */}
        <circle cx="155" cy="355" r="7" fill="#4B7A5B" />
        <line x1="155" y1="362" x2="155" y2="388" stroke="#4B7A5B" strokeWidth="2.5" strokeLinecap="round" />
        {/* Arms up in joy */}
        <line x1="155" y1="370" x2="142" y2="358" stroke="#4B7A5B" strokeWidth="2" strokeLinecap="round" />
        <line x1="155" y1="370" x2="168" y2="358" stroke="#4B7A5B" strokeWidth="2" strokeLinecap="round" />
        {/* Legs */}
        <line x1="155" y1="388" x2="149" y2="408" stroke="#4B7A5B" strokeWidth="2" strokeLinecap="round" />
        <line x1="155" y1="388" x2="161" y2="408" stroke="#4B7A5B" strokeWidth="2" strokeLinecap="round" />

        {/* Labels */}
        {/* Soil label */}
        <text x="200" y="465" fontFamily="var(--font-body)" fontSize="16" fontWeight="700" fill="#A4582E" opacity="0.8" textAnchor="middle">Responsive interaction</text>
        <text x="200" y="479" fontFamily="var(--font-body)" fontSize="12" fontWeight="600" fill="#A4582E" opacity="0.5" textAnchor="middle">Notice, respond, talk</text>

        {/* Branch labels — positioned outside branches, horizontal */}
        <text x="55" y="200" fontFamily="var(--font-body)" fontSize="16" fontWeight="700" fill="#235A5F" opacity="0.8" textAnchor="middle">Language</text>
        <text x="200" y="175" fontFamily="var(--font-body)" fontSize="16" fontWeight="700" fill="#235A5F" opacity="0.8" textAnchor="middle">Safety</text>
        <text x="345" y="200" fontFamily="var(--font-body)" fontSize="16" fontWeight="700" fill="#235A5F" opacity="0.8" textAnchor="middle">Attention</text>

        {/* Canopy / outcome label — above the canopy */}
        <text x="200" y="55" fontFamily="var(--font-body)" fontSize="16" fontWeight="700" fill="#4B7A5B" opacity="0.8" textAnchor="middle">Stronger learning</text>
        <text x="200" y="72" fontFamily="var(--font-body)" fontSize="12" fontWeight="600" fill="#4B7A5B" opacity="0.5" textAnchor="middle">Willingness to try, ability to explain</text>

        {/* Soil label */}
        <text x="200" y="505" fontFamily="var(--font-body)" fontSize="12" fontWeight="600" fill="#A4582E" opacity="0.5" textAnchor="middle">Good soil: trust, warmth, presence</text>
      </svg>
    </div>
  );
}

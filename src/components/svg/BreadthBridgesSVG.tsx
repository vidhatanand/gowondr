interface Props {
  className?: string;
}

export function BreadthBridgesSVG({ className = "" }: Props) {
  return (
    <div className={`rounded-2xl border border-sand bg-paper p-4 md:p-6 ${className}`}>
      <svg viewBox="0 0 600 280" className="w-full h-auto" role="img" aria-label="Two bridges: a narrow plank that cannot span the river versus a wide sturdy bridge with eight colored sections spanning safely to the far shore" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="bridgeSky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFFDF9" />
            <stop offset="60%" stopColor="#F8F4ED" />
          </linearGradient>
          <linearGradient id="riverGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#235A5F" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#235A5F" stopOpacity="0.06" />
          </linearGradient>
        </defs>
        <rect width="600" height="280" fill="url(#bridgeSky)" />

        {/* Divider */}
        <line x1="300" y1="30" x2="300" y2="250" stroke="#EFE6D8" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.6" />

        {/* === LEFT: Narrow Bridge === */}
        {/* River / void */}
        <rect x="55" y="162" width="190" height="50" rx="6" fill="url(#riverGrad)" />
        {/* Water ripples */}
        <path d="M70 178 Q90 174 110 178 Q130 182 150 178 Q170 174 190 178 Q210 182 230 178" fill="none" stroke="#235A5F" strokeWidth="0.6" opacity="0.15" />
        <path d="M80 190 Q100 186 120 190 Q140 194 160 190 Q180 186 200 190 Q220 194 240 190" fill="none" stroke="#235A5F" strokeWidth="0.5" opacity="0.1" />
        <path d="M75 200 Q95 197 115 200 Q135 203 155 200 Q175 197 195 200 Q215 203 235 200" fill="none" stroke="#235A5F" strokeWidth="0.4" opacity="0.08" />

        {/* Near bank */}
        <path d="M15 155 Q35 150 55 155 L55 175 L15 175Z" fill="#A4582E" opacity="0.12" />
        <path d="M15 155 Q35 150 55 155" fill="none" stroke="#A4582E" strokeWidth="1" opacity="0.25" />

        {/* Far bank — with gap visible */}
        <path d="M245 155 Q265 150 285 155 L285 175 L245 175Z" fill="#A4582E" opacity="0.12" />
        <path d="M245 155 Q265 150 285 155" fill="none" stroke="#A4582E" strokeWidth="1" opacity="0.25" />

        {/* Narrow plank bridge — two thin planks that don't reach */}
        <rect x="50" y="155" width="110" height="4" rx="1" fill="#2A6E73" opacity="0.2" />
        <text x="105" y="153" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" fill="#2A6E73" opacity="0.5" textAnchor="middle">Math</text>
        <rect x="50" y="160" width="110" height="4" rx="1" fill="#6A4E73" opacity="0.2" />
        <text x="105" y="170" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" fill="#6A4E73" opacity="0.5" textAnchor="middle">Reading</text>

        {/* Gap — plank ends, doesn't reach far bank */}
        <path d="M160 158 L245 158" fill="none" stroke="#52616D" strokeWidth="0.6" opacity="0.15" strokeDasharray="3 4" />
        <path d="M160 162 L245 162" fill="none" stroke="#52616D" strokeWidth="0.6" opacity="0.12" strokeDasharray="3 4" />

        {/* Weak single support */}
        <line x1="105" y1="164" x2="105" y2="180" stroke="#A4582E" strokeWidth="1.2" opacity="0.15" />

        {/* Void label */}
        <text x="150" y="195" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" fill="#235A5F" opacity="0.4" textAnchor="middle">Future challenges</text>

        {/* Hesitant figure at edge of plank */}
        <circle cx="148" cy="138" r="7" fill="#A4582E" />
        <line x1="148" y1="145" x2="148" y2="162" stroke="#A4582E" strokeWidth="2.5" strokeLinecap="round" />
        {/* Arms up in uncertainty */}
        <line x1="148" y1="152" x2="138" y2="146" stroke="#A4582E" strokeWidth="2" strokeLinecap="round" />
        <line x1="148" y1="152" x2="158" y2="146" stroke="#A4582E" strokeWidth="2" strokeLinecap="round" />
        <line x1="148" y1="162" x2="143" y2="172" stroke="#A4582E" strokeWidth="2" strokeLinecap="round" />
        <line x1="148" y1="162" x2="153" y2="172" stroke="#A4582E" strokeWidth="2" strokeLinecap="round" />
        {/* Question mark */}
        <text x="148" y="128" fontFamily="var(--font-body)" fontSize="12" fontWeight="700" fill="#52616D" opacity="0.35" textAnchor="middle">?</text>

        {/* === RIGHT: Broad Bridge === */}
        {/* River */}
        <rect x="355" y="162" width="195" height="50" rx="6" fill="url(#riverGrad)" />
        {/* Water ripples */}
        <path d="M370 178 Q390 174 410 178 Q430 182 450 178 Q470 174 490 178 Q510 182 530 178" fill="none" stroke="#235A5F" strokeWidth="0.6" opacity="0.15" />
        <path d="M375 190 Q395 186 415 190 Q435 194 455 190 Q475 186 495 190 Q515 194 535 190" fill="none" stroke="#235A5F" strokeWidth="0.5" opacity="0.1" />
        <path d="M380 200 Q400 197 420 200 Q440 203 460 200 Q480 197 500 200 Q520 203 540 200" fill="none" stroke="#235A5F" strokeWidth="0.4" opacity="0.08" />

        {/* Near bank */}
        <path d="M315 155 Q335 150 355 155 L355 175 L315 175Z" fill="#A4582E" opacity="0.12" />
        <path d="M315 155 Q335 150 355 155" fill="none" stroke="#A4582E" strokeWidth="1" opacity="0.25" />

        {/* Far bank */}
        <path d="M550 155 Q570 150 590 155 L590 175 L550 175Z" fill="#A4582E" opacity="0.12" />
        <path d="M550 155 Q570 150 590 155" fill="none" stroke="#A4582E" strokeWidth="1" opacity="0.25" />

        {/* Wide bridge deck — 8 colored sections */}
        <rect x="350" y="150" width="205" height="16" rx="3" fill="#EFE6D8" opacity="0.3" />
        {/* 1. Reading */}
        <rect x="350" y="150" width="25" height="16" rx="3" fill="#6A4E73" opacity="0.25" />
        {/* 2. Math */}
        <rect x="375" y="150" width="25" height="16" fill="#2A6E73" opacity="0.25" />
        {/* 3. Science */}
        <rect x="400" y="150" width="26" height="16" fill="#4B744F" opacity="0.25" />
        {/* 4. World */}
        <rect x="426" y="150" width="25" height="16" fill="#886328" opacity="0.2" />
        {/* 5. Personal */}
        <rect x="451" y="150" width="26" height="16" fill="#94536C" opacity="0.2" />
        {/* 6. Arts */}
        <rect x="477" y="150" width="25" height="16" fill="#7A5AA6" opacity="0.2" />
        {/* 7. Digital */}
        <rect x="502" y="150" width="25" height="16" fill="#4966A8" opacity="0.2" />
        {/* 8. Inquiry */}
        <rect x="527" y="150" width="28" height="16" rx="3" fill="#9E563C" opacity="0.2" />

        {/* Subject labels on bridge */}
        <text x="362" y="143" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" fill="#6A4E73" opacity="0.6" textAnchor="middle">Reading</text>
        <text x="387" y="130" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" fill="#2A6E73" opacity="0.6" textAnchor="middle">Math</text>
        <text x="413" y="143" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" fill="#4B744F" opacity="0.6" textAnchor="middle">Science</text>
        <text x="438" y="130" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" fill="#886328" opacity="0.55" textAnchor="middle">World</text>
        <text x="464" y="143" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" fill="#94536C" opacity="0.55" textAnchor="middle">Personal</text>
        <text x="489" y="130" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" fill="#7A5AA6" opacity="0.55" textAnchor="middle">Arts</text>
        <text x="514" y="143" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" fill="#4966A8" opacity="0.55" textAnchor="middle">Digital</text>
        <text x="541" y="130" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" fill="#9E563C" opacity="0.55" textAnchor="middle">Inquiry</text>

        {/* Bridge supports (sturdy) */}
        <line x1="390" y1="166" x2="390" y2="182" stroke="#A4582E" strokeWidth="2" opacity="0.2" />
        <line x1="450" y1="166" x2="450" y2="182" stroke="#A4582E" strokeWidth="2" opacity="0.2" />
        <line x1="510" y1="166" x2="510" y2="182" stroke="#A4582E" strokeWidth="2" opacity="0.2" />

        {/* Bridge railing */}
        <line x1="350" y1="148" x2="555" y2="148" stroke="#A4582E" strokeWidth="1" opacity="0.15" />
        {[365,385,405,425,445,465,485,505,525,545].map((x, i) => (
          <line key={`rl${i}`} x1={x} y1="148" x2={x} y2="151" stroke="#A4582E" strokeWidth="0.6" opacity="0.12" />
        ))}

        {/* Parent + child walking across confidently */}
        {/* Parent */}
        <circle cx="465" cy="128" r="8" fill="#A4582E" />
        <line x1="465" y1="136" x2="465" y2="155" stroke="#A4582E" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="465" y1="144" x2="455" y2="150" stroke="#A4582E" strokeWidth="2" strokeLinecap="round" />
        <line x1="465" y1="144" x2="478" y2="148" stroke="#A4582E" strokeWidth="2" strokeLinecap="round" />
        {/* Child */}
        <circle cx="483" cy="134" r="6" fill="#4B7A5B" />
        <line x1="483" y1="140" x2="483" y2="155" stroke="#4B7A5B" strokeWidth="2" strokeLinecap="round" />
        <line x1="483" y1="146" x2="476" y2="151" stroke="#4B7A5B" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="483" y1="146" x2="490" y2="151" stroke="#4B7A5B" strokeWidth="1.5" strokeLinecap="round" />

        {/* Future challenges label */}
        <text x="450" y="197" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" fill="#235A5F" opacity="0.4" textAnchor="middle">Future challenges</text>

        {/* Far shore label */}
        <text x="570" y="148" fontFamily="var(--font-body)" fontSize="9" fontWeight="700" fill="#4B7A5B" opacity="0.5" textAnchor="middle">Future-ready</text>

        {/* Labels */}
        <text x="150" y="50" fontFamily="var(--font-body)" fontSize="12" fontWeight="700" fill="#52616D" opacity="0.8" textAnchor="middle">Narrow approach</text>
        <text x="150" y="65" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" fill="#52616D" opacity="0.4" textAnchor="middle">Only two subjects, can&apos;t bridge the gap</text>

        <text x="450" y="50" fontFamily="var(--font-body)" fontSize="12" fontWeight="700" fill="#235A5F" opacity="0.8" textAnchor="middle">Breadth approach</text>
        <text x="450" y="65" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" fill="#235A5F" opacity="0.45" textAnchor="middle">Eight subjects span the full river</text>

        {/* Outcome labels */}
        <text x="150" y="240" fontFamily="var(--font-body)" fontSize="10" fontWeight="600" fill="#52616D" opacity="0.4" textAnchor="middle">Gaps in critical areas</text>
        <text x="450" y="240" fontFamily="var(--font-body)" fontSize="10" fontWeight="600" fill="#4B7A5B" opacity="0.55" textAnchor="middle">Future-ready learner</text>
      </svg>
    </div>
  );
}

interface Props {
  className?: string;
}

export function AdaptivePlanningSVG({ className = "" }: Props) {
  return (
    <div className={`rounded-2xl border border-sand bg-paper p-4 md:p-6 ${className}`}>
      <svg viewBox="0 0 600 280" className="w-full h-auto" role="img" aria-label="Two paths through a field: top path is straight with wilting plants behind the walker, bottom path loops back with plants staying green" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="fieldGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFFDF9" />
            <stop offset="70%" stopColor="#F8F4ED" />
            <stop offset="100%" stopColor="#EFE6D8" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        <rect width="600" height="280" fill="url(#fieldGrad)" />

        {/* Horizontal divider between top and bottom */}
        <line x1="30" y1="140" x2="570" y2="140" stroke="#EFE6D8" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.6" />

        {/* === TOP: Without Revisit === */}
        {/* Ground */}
        <path d="M30 115 L570 115" stroke="#A4582E" strokeWidth="0.8" opacity="0.15" />
        <path d="M30 115 Q100 117 200 115 Q350 113 570 115 L570 128 L30 128Z" fill="#A4582E" opacity="0.06" />

        {/* Straight path */}
        <path d="M50 105 L530 105" fill="none" stroke="#A4582E" strokeWidth="2.5" strokeLinecap="round" opacity="0.25" />
        <path d="M50 108 L530 108" fill="none" stroke="#A4582E" strokeWidth="1" strokeLinecap="round" opacity="0.1" />

        {/* 5 plants with decreasing opacity */}
        {/* Plant 1 — nearly gone (opacity 0.1) */}
        <line x1="100" y1="103" x2="97" y2="88" stroke="#52616D" strokeWidth="1.2" strokeLinecap="round" opacity="0.1" />
        <circle cx="96" cy="86" r="3.5" fill="#52616D" opacity="0.06" />
        <path d="M97 93 q-4 -2 -5 1" fill="none" stroke="#52616D" strokeWidth="0.8" strokeLinecap="round" opacity="0.08" />

        {/* Plant 2 — fading (opacity 0.2) */}
        <line x1="175" y1="103" x2="172" y2="82" stroke="#52616D" strokeWidth="1.3" strokeLinecap="round" opacity="0.2" />
        <circle cx="171" cy="79" r="4" fill="#52616D" opacity="0.1" />
        <path d="M172 88 q-5 -3 -7 1" fill="none" stroke="#52616D" strokeWidth="1" strokeLinecap="round" opacity="0.15" />
        <path d="M173 93 q4 -2 6 1" fill="none" stroke="#52616D" strokeWidth="0.8" strokeLinecap="round" opacity="0.1" />

        {/* Plant 3 — wilting (opacity 0.35) */}
        <line x1="255" y1="103" x2="250" y2="78" stroke="#4B7A5B" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
        <circle cx="249" cy="75" r="5" fill="#4B7A5B" opacity="0.15" />
        <path d="M250 85 q-5 -4 -8 0" fill="none" stroke="#4B7A5B" strokeWidth="1" strokeLinecap="round" opacity="0.25" />
        <path d="M251 90 q4 -3 7 0" fill="none" stroke="#4B7A5B" strokeWidth="0.8" strokeLinecap="round" opacity="0.18" />

        {/* Plant 4 — somewhat ok (opacity 0.5) */}
        <line x1="335" y1="103" x2="335" y2="76" stroke="#4B7A5B" strokeWidth="1.5" strokeLinecap="round" opacity="0.45" />
        <circle cx="335" cy="72" r="5.5" fill="#4B7A5B" opacity="0.2" />
        <path d="M335 85 q-5 -4 -8 0" fill="none" stroke="#4B7A5B" strokeWidth="1" strokeLinecap="round" opacity="0.35" />
        <path d="M335 78 q5 -4 8 0" fill="none" stroke="#4B7A5B" strokeWidth="1" strokeLinecap="round" opacity="0.35" />

        {/* Plant 5 — just planted (opacity 0.7) */}
        <line x1="415" y1="103" x2="415" y2="72" stroke="#4B7A5B" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
        <circle cx="415" cy="68" r="6" fill="#4B7A5B" opacity="0.25" />
        <path d="M415 85 q-6 -5 -9 0" fill="none" stroke="#4B7A5B" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
        <path d="M415 78 q6 -5 9 0" fill="none" stroke="#4B7A5B" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />

        {/* Fading label */}
        <text x="138" y="75" fontFamily="var(--font-body)" fontSize="8" fontWeight="600" fill="#52616D" opacity="0.2" textAnchor="middle">fading...</text>
        <text x="215" y="72" fontFamily="var(--font-body)" fontSize="8" fontWeight="600" fill="#52616D" opacity="0.2" textAnchor="middle">fading...</text>

        {/* Walker figure — looking back with concern */}
        <circle cx="490" cy="85" r="7" fill="#A4582E" />
        <line x1="490" y1="92" x2="490" y2="112" stroke="#A4582E" strokeWidth="2.5" strokeLinecap="round" />
        {/* One arm forward, one back (looking back) */}
        <line x1="490" y1="100" x2="480" y2="108" stroke="#A4582E" strokeWidth="2" strokeLinecap="round" />
        <line x1="490" y1="100" x2="500" y2="106" stroke="#A4582E" strokeWidth="2" strokeLinecap="round" />
        <line x1="490" y1="112" x2="485" y2="125" stroke="#A4582E" strokeWidth="2" strokeLinecap="round" />
        <line x1="490" y1="112" x2="496" y2="125" stroke="#A4582E" strokeWidth="2" strokeLinecap="round" />
        {/* Concern: head turned back */}
        <text x="490" y="77" fontFamily="var(--font-body)" fontSize="9" fontWeight="700" fill="#52616D" opacity="0.3" textAnchor="middle">?</text>

        {/* Forward arrow */}
        <path d="M530 105 l10 0 l-4 -3 m4 3 l-4 3" fill="none" stroke="#52616D" strokeWidth="1" strokeLinecap="round" opacity="0.25" />

        {/* === BOTTOM: With Spaced Revisit === */}
        {/* Ground */}
        <path d="M30 225 L570 225" stroke="#A4582E" strokeWidth="0.8" opacity="0.15" />
        <path d="M30 225 Q200 227 400 225 Q500 223 570 225 L570 240 L30 240Z" fill="#A4582E" opacity="0.06" />

        {/* Looping path */}
        <path d="M50 215 Q100 215 140 210 Q165 205 180 210 Q195 218 185 225 Q175 230 165 225 Q160 218 175 210 Q200 200 240 210 Q265 215 280 210 Q300 205 310 210 Q325 218 315 225 Q305 230 295 225 Q288 218 305 210 Q330 200 370 210 Q400 215 420 210 Q440 205 450 210 Q465 218 455 225 Q445 230 435 225 Q428 218 445 210 Q470 200 510 210 L550 215" fill="none" stroke="#A4582E" strokeWidth="2.5" strokeLinecap="round" opacity="0.3" />

        {/* All plants green and growing taller */}
        {/* Plant 1 — short but strong */}
        <line x1="110" y1="213" x2="110" y2="188" stroke="#4B7A5B" strokeWidth="2" strokeLinecap="round" opacity="0.55" />
        <circle cx="110" cy="184" r="5.5" fill="#4B7A5B" opacity="0.25" />
        <path d="M110 198 q-5 -4 -8 0" fill="none" stroke="#4B7A5B" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
        <path d="M110 192 q5 -4 8 0" fill="none" stroke="#4B7A5B" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />

        {/* Plant 2 — medium, stronger */}
        <line x1="220" y1="213" x2="220" y2="182" stroke="#4B7A5B" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
        <circle cx="220" cy="177" r="6.5" fill="#4B7A5B" opacity="0.28" />
        <path d="M220 198 q-6 -5 -9 0" fill="none" stroke="#4B7A5B" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
        <path d="M220 190 q6 -5 9 0" fill="none" stroke="#4B7A5B" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
        <path d="M220 203 q5 -3 7 1" fill="none" stroke="#4B7A5B" strokeWidth="1" strokeLinecap="round" opacity="0.3" />

        {/* Plant 3 — tall */}
        <line x1="340" y1="213" x2="340" y2="175" stroke="#4B7A5B" strokeWidth="2" strokeLinecap="round" opacity="0.65" />
        <circle cx="340" cy="170" r="7.5" fill="#4B7A5B" opacity="0.3" />
        <path d="M340 195 q-6 -5 -10 0" fill="none" stroke="#4B7A5B" strokeWidth="1.2" strokeLinecap="round" opacity="0.45" />
        <path d="M340 185 q6 -5 10 0" fill="none" stroke="#4B7A5B" strokeWidth="1.2" strokeLinecap="round" opacity="0.45" />
        <path d="M340 200 q-5 -3 -7 1" fill="none" stroke="#4B7A5B" strokeWidth="1" strokeLinecap="round" opacity="0.3" />

        {/* Plant 4 — tallest */}
        <line x1="470" y1="213" x2="470" y2="170" stroke="#4B7A5B" strokeWidth="2" strokeLinecap="round" opacity="0.65" />
        <circle cx="470" cy="165" r="8" fill="#4B7A5B" opacity="0.32" />
        <path d="M470 192 q-7 -6 -10 0" fill="none" stroke="#4B7A5B" strokeWidth="1.2" strokeLinecap="round" opacity="0.45" />
        <path d="M470 183 q7 -6 10 0" fill="none" stroke="#4B7A5B" strokeWidth="1.2" strokeLinecap="round" opacity="0.45" />
        <path d="M470 198 q5 -3 8 1" fill="none" stroke="#4B7A5B" strokeWidth="1" strokeLinecap="round" opacity="0.35" />

        {/* Return labels at loop points */}
        <text x="175" y="237" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" fill="#235A5F" opacity="0.4" textAnchor="middle">Return</text>
        <text x="305" y="237" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" fill="#235A5F" opacity="0.4" textAnchor="middle">Return</text>
        <text x="445" y="237" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" fill="#235A5F" opacity="0.4" textAnchor="middle">Return</text>

        {/* Small return arrows at loops */}
        <path d="M168 228 Q175 223 182 228" fill="none" stroke="#235A5F" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
        <path d="M182 228 l-2 -2 l-1 3Z" fill="#235A5F" opacity="0.3" />
        <path d="M298 228 Q305 223 312 228" fill="none" stroke="#235A5F" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
        <path d="M312 228 l-2 -2 l-1 3Z" fill="#235A5F" opacity="0.3" />
        <path d="M438 228 Q445 223 452 228" fill="none" stroke="#235A5F" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
        <path d="M452 228 l-2 -2 l-1 3Z" fill="#235A5F" opacity="0.3" />

        {/* Walker figure — confident */}
        <circle cx="540" cy="195" r="7" fill="#4B7A5B" />
        <line x1="540" y1="202" x2="540" y2="222" stroke="#4B7A5B" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="540" y1="210" x2="532" y2="218" stroke="#4B7A5B" strokeWidth="2" strokeLinecap="round" />
        <line x1="540" y1="210" x2="548" y2="216" stroke="#4B7A5B" strokeWidth="2" strokeLinecap="round" />
        <line x1="540" y1="222" x2="535" y2="238" stroke="#4B7A5B" strokeWidth="2" strokeLinecap="round" />
        <line x1="540" y1="222" x2="546" y2="238" stroke="#4B7A5B" strokeWidth="2" strokeLinecap="round" />

        {/* Soil texture */}
        {[50,100,150,200,250].map((x, i) => (
          <circle key={`ld${i}`} cx={x} cy={122 + (i % 3) * 3} r="0.6" fill="#A4582E" opacity="0.07" />
        ))}
        {[80,160,250,350,450,530].map((x, i) => (
          <circle key={`rd${i}`} cx={x} cy={232 + (i % 3) * 3} r="0.6" fill="#A4582E" opacity="0.07" />
        ))}

        {/* Labels */}
        <text x="150" y="30" fontFamily="var(--font-body)" fontSize="12" fontWeight="700" fill="#52616D" opacity="0.8" textAnchor="middle">Without revisit</text>
        <text x="150" y="45" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" fill="#52616D" opacity="0.4" textAnchor="middle">Straight through, never looking back</text>

        <text x="150" y="158" fontFamily="var(--font-body)" fontSize="12" fontWeight="700" fill="#235A5F" opacity="0.8" textAnchor="middle">With spaced revisit</text>
        <text x="150" y="173" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" fill="#235A5F" opacity="0.45" textAnchor="middle">Looping back keeps knowledge alive</text>

        {/* Outcome labels */}
        <text x="540" y="125" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" fill="#52616D" opacity="0.4" textAnchor="middle">Knowledge fades</text>
        <text x="540" y="252" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" fill="#4B7A5B" opacity="0.55" textAnchor="middle">Knowledge grows</text>
      </svg>
    </div>
  );
}

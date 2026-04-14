interface Props {
  className?: string;
}

export function ForParentsSVG({ className = "" }: Props) {
  return (
    <div className={`rounded-2xl border border-sand bg-paper overflow-hidden ${className}`}>
      <svg viewBox="0 0 600 260" className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
        {/* Sky gradient */}
        <defs>
          <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFFDF9" />
            <stop offset="100%" stopColor="#F8F4ED" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="600" height="170" fill="url(#sky)" />

        {/* Soft clouds */}
        <ellipse cx="120" cy="50" rx="50" ry="14" fill="#F8F4ED" opacity="0.7" />
        <ellipse cx="140" cy="45" rx="35" ry="12" fill="#FBF7F1" opacity="0.6" />
        <ellipse cx="450" cy="35" rx="60" ry="15" fill="#F8F4ED" opacity="0.5" />
        <ellipse cx="475" cy="30" rx="40" ry="12" fill="#FBF7F1" opacity="0.4" />
        <ellipse cx="300" cy="65" rx="30" ry="10" fill="#F8F4ED" opacity="0.3" />

        {/* Birds — simple V shapes */}
        <path d="M 170 70 L 175 65 L 180 70" fill="none" stroke="#52616D" strokeWidth="1" opacity="0.3" />
        <path d="M 190 60 L 195 55 L 200 60" fill="none" stroke="#52616D" strokeWidth="1" opacity="0.25" />
        <path d="M 400 50 L 405 45 L 410 50" fill="none" stroke="#52616D" strokeWidth="1" opacity="0.2" />

        {/* Sun/horizon — warm glow */}
        <ellipse cx="300" cy="155" rx="280" ry="30" fill="#EAF3F2" opacity="0.5" />
        <circle cx="300" cy="120" r="40" fill="#FBF7F1" stroke="#E6D5C3" strokeWidth="1.5" />
        <circle cx="300" cy="120" r="30" fill="#F8F4ED" stroke="#EFE6D8" strokeWidth="1" />
        {/* Sun rays */}
        <line x1="300" y1="72" x2="300" y2="65" stroke="#E6D5C3" strokeWidth="1" opacity="0.5" />
        <line x1="330" y1="92" x2="338" y2="87" stroke="#E6D5C3" strokeWidth="1" opacity="0.4" />
        <line x1="270" y1="92" x2="262" y2="87" stroke="#E6D5C3" strokeWidth="1" opacity="0.4" />
        <line x1="340" y1="115" x2="348" y2="115" stroke="#E6D5C3" strokeWidth="1" opacity="0.3" />
        <line x1="260" y1="115" x2="252" y2="115" stroke="#E6D5C3" strokeWidth="1" opacity="0.3" />
        <text x="300" y="117" textAnchor="middle" fill="#52616D" fontSize="10" fontWeight="600" fontFamily="var(--font-body)">future</text>
        <text x="300" y="129" textAnchor="middle" fill="#52616D" fontSize="9" fontFamily="var(--font-body)">possibilities</text>

        {/* Distant hills */}
        <path d="M 0 170 Q 80 140 160 160 Q 240 175 300 155 Q 360 140 440 158 Q 520 170 600 150 L 600 175 L 0 175 Z" fill="#EAF3F2" opacity="0.4" />

        {/* Ground layer 1 — goPondr structure (teal, deepest) */}
        <path d="M 0 195 Q 100 175 200 185 Q 300 195 400 182 Q 500 175 600 185 L 600 340 L 0 340 Z" fill="#EAF3F2" />
        <path d="M 0 195 Q 100 175 200 185 Q 300 195 400 182 Q 500 175 600 185" fill="none" stroke="#235A5F" strokeWidth="1.5" opacity="0.25" />
        {/* Texture dots in goPondr layer */}
        <circle cx="50" cy="290" r="1.5" fill="#235A5F" opacity="0.1" />
        <circle cx="100" cy="300" r="1.5" fill="#235A5F" opacity="0.1" />
        <circle cx="170" cy="295" r="1.5" fill="#235A5F" opacity="0.08" />
        <circle cx="250" cy="305" r="1.5" fill="#235A5F" opacity="0.1" />
        <circle cx="350" cy="298" r="1.5" fill="#235A5F" opacity="0.08" />
        <circle cx="440" cy="300" r="1.5" fill="#235A5F" opacity="0.1" />
        <circle cx="520" cy="290" r="1.5" fill="#235A5F" opacity="0.08" />
        <circle cx="560" cy="305" r="1.5" fill="#235A5F" opacity="0.1" />

        {/* Ground layer 2 — parent warmth (terracotta, middle) */}
        <path d="M 0 215 Q 100 205 200 210 Q 300 218 400 208 Q 500 202 600 212 L 600 340 L 0 340 Z" fill="#F7ECE4" />

        {/* Learning path — dotted trail across the warm layer */}
        <path d="M 60 240 Q 130 230 200 235 Q 280 242 350 236 Q 430 232 520 228" fill="none" stroke="#A4582E" strokeWidth="2.5" strokeDasharray="8 5" opacity="0.4" strokeLinecap="round" />

        {/* Stepping stones along the path */}
        <ellipse cx="100" cy="239" rx="10" ry="5" fill="#E6D5C3" opacity="0.6" />
        <ellipse cx="180" cy="235" rx="10" ry="5" fill="#E6D5C3" opacity="0.6" />
        <ellipse cx="265" cy="238" rx="10" ry="5" fill="#E6D5C3" opacity="0.6" />
        <ellipse cx="345" cy="236" rx="10" ry="5" fill="#E6D5C3" opacity="0.6" />
        <ellipse cx="430" cy="232" rx="10" ry="5" fill="#E6D5C3" opacity="0.6" />
        <ellipse cx="505" cy="229" rx="10" ry="5" fill="#E6D5C3" opacity="0.6" />

        {/* Small items on stepping stones — book, cube, leaf */}
        <rect x="96" y="233" width="8" height="6" rx="1" fill="#6A4E73" opacity="0.5" />
        <rect x="177" y="229" width="6" height="6" rx="1" fill="#2A6E73" opacity="0.5" />
        <circle cx="267" cy="233" r="3" fill="#4B744F" opacity="0.5" />
        <rect x="342" y="230" width="7" height="5" rx="1" fill="#886328" opacity="0.5" />
        <circle cx="432" cy="227" r="3" fill="#7A5AA6" opacity="0.4" />
        <rect x="502" y="223" width="6" height="6" rx="1" fill="#4966A8" opacity="0.4" />

        {/* Parent figure — detailed stick figure */}
        <circle cx="228" cy="168" r="10" fill="#A4582E" /> {/* head */}
        <line x1="228" y1="178" x2="228" y2="206" stroke="#A4582E" strokeWidth="3" strokeLinecap="round" /> {/* body */}
        <line x1="228" y1="206" x2="218" y2="225" stroke="#A4582E" strokeWidth="2.5" strokeLinecap="round" /> {/* leg left */}
        <line x1="228" y1="206" x2="238" y2="225" stroke="#A4582E" strokeWidth="2.5" strokeLinecap="round" /> {/* leg right */}
        <line x1="228" y1="188" x2="215" y2="200" stroke="#A4582E" strokeWidth="2.5" strokeLinecap="round" /> {/* arm left */}
        <path d="M 228 188 Q 240 182 252 185" fill="none" stroke="#A4582E" strokeWidth="2.5" strokeLinecap="round" /> {/* arm reaching to child */}

        {/* Child figure — smaller, walking with parent */}
        <circle cx="260" cy="180" r="7.5" fill="#4B7A5B" /> {/* head */}
        <line x1="260" y1="188" x2="260" y2="210" stroke="#4B7A5B" strokeWidth="2.5" strokeLinecap="round" /> {/* body */}
        <line x1="260" y1="210" x2="253" y2="225" stroke="#4B7A5B" strokeWidth="2" strokeLinecap="round" /> {/* leg left */}
        <line x1="260" y1="210" x2="267" y2="225" stroke="#4B7A5B" strokeWidth="2" strokeLinecap="round" /> {/* leg right */}
        <path d="M 260 195 Q 252 190 250 186" fill="none" stroke="#4B7A5B" strokeWidth="2" strokeLinecap="round" /> {/* arm to parent */}
        <line x1="260" y1="195" x2="270" y2="200" stroke="#4B7A5B" strokeWidth="2" strokeLinecap="round" /> {/* arm right */}

        {/* Connection between hands — warmth line */}
        <path d="M 250 186 L 252 185" fill="none" stroke="#E6D5C3" strokeWidth="2" strokeLinecap="round" />

        {/* Growing plants — progressive growth left to right */}
        {/* Tiny sprout */}
        <line x1="340" y1="210" x2="340" y2="202" stroke="#4B7A5B" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="340" cy="199" r="3" fill="#EAF3EC" stroke="#4B7A5B" strokeWidth="1" />

        {/* Small plant */}
        <line x1="390" y1="207" x2="390" y2="195" stroke="#4B7A5B" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="390" cy="192" r="4" fill="#EAF3EC" stroke="#4B7A5B" strokeWidth="1" />
        <line x1="390" y1="200" x2="384" y2="196" stroke="#4B7A5B" strokeWidth="1" strokeLinecap="round" />
        <circle cx="382" cy="194" r="2.5" fill="#EAF3EC" stroke="#4B7A5B" strokeWidth="0.8" />

        {/* Medium plant */}
        <line x1="440" y1="204" x2="440" y2="186" stroke="#4B7A5B" strokeWidth="2" strokeLinecap="round" />
        <circle cx="440" cy="183" r="5" fill="#EAF3EC" stroke="#4B7A5B" strokeWidth="1" />
        <line x1="440" y1="195" x2="432" y2="189" stroke="#4B7A5B" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="430" cy="187" r="3.5" fill="#EAF3EC" stroke="#4B7A5B" strokeWidth="0.8" />
        <line x1="440" y1="192" x2="448" y2="188" stroke="#4B7A5B" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="450" cy="186" r="3" fill="#EAF3EC" stroke="#4B7A5B" strokeWidth="0.8" />

        {/* Tall plant — flourishing */}
        <line x1="500" y1="200" x2="500" y2="175" stroke="#4B7A5B" strokeWidth="2" strokeLinecap="round" />
        <circle cx="500" cy="172" r="6" fill="#EAF3EC" stroke="#4B7A5B" strokeWidth="1.2" />
        <line x1="500" y1="190" x2="490" y2="182" stroke="#4B7A5B" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="488" cy="180" r="4.5" fill="#EAF3EC" stroke="#4B7A5B" strokeWidth="1" />
        <line x1="500" y1="185" x2="510" y2="178" stroke="#4B7A5B" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="512" cy="176" r="4" fill="#EAF3EC" stroke="#4B7A5B" strokeWidth="1" />
        <line x1="500" y1="195" x2="492" y2="190" stroke="#4B7A5B" strokeWidth="1" strokeLinecap="round" />
        <circle cx="490" cy="188" r="3" fill="#EAF3EC" stroke="#4B7A5B" strokeWidth="0.8" />

        {/* A tiny flower on the tall plant */}
        <circle cx="500" cy="170" r="2" fill="#A4582E" opacity="0.6" />

        {/* Small background trees — distant, soft */}
        <line x1="540" y1="195" x2="540" y2="170" stroke="#235A5F" strokeWidth="2" opacity="0.15" strokeLinecap="round" />
        <circle cx="540" cy="165" r="10" fill="#235A5F" opacity="0.08" />
        <line x1="560" y1="192" x2="560" y2="172" stroke="#235A5F" strokeWidth="2" opacity="0.12" strokeLinecap="round" />
        <circle cx="560" cy="167" r="8" fill="#235A5F" opacity="0.06" />

        {/* Labels removed — shown in HTML below the SVG */}
      </svg>

      {/* Text below illustration */}
      <div className="px-5 md:px-8 pb-6 pt-4 border-t border-sand bg-paper-alt">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div>
            <div className="w-3 h-3 rounded-full bg-teal-soft border-2 border-teal mx-auto mb-1.5" />
            <p className="font-body font-semibold text-[13px] text-teal">goPondr is the ground</p>
            <p className="text-[12px] text-slate mt-0.5">Curriculum, sequence, review, coaching language</p>
          </div>
          <div>
            <div className="w-3 h-3 rounded-full bg-terracotta-soft border-2 border-terracotta mx-auto mb-1.5" />
            <p className="font-body font-semibold text-[13px] text-terracotta">You are the path</p>
            <p className="text-[12px] text-slate mt-0.5">Warmth, attention, conversation, encouragement</p>
          </div>
          <div>
            <div className="w-3 h-3 rounded-full bg-strong-soft border-2 border-strong-ink mx-auto mb-1.5" />
            <p className="font-body font-semibold text-[13px] text-strong-ink">Your child grows</p>
            <p className="text-[12px] text-slate mt-0.5">Understanding, confidence, curiosity, capability</p>
          </div>
        </div>
      </div>
    </div>
  );
}

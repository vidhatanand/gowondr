interface Props {
  className?: string;
}

export function DigitalLiteracySVG({ className = "" }: Props) {
  return (
    <div className={`rounded-2xl border border-sand bg-paper p-4 md:p-6 ${className}`}>
      <svg viewBox="0 0 600 280" className="w-full h-auto" role="img" aria-label="Two toolboxes: left has a single hammer representing device fluency, right has a full open toolbox with many tools representing digital judgment" preserveAspectRatio="xMidYMid meet">
        <rect width="600" height="280" fill="#FFFDF9" />

        {/* Divider */}
        <line x1="300" y1="30" x2="300" y2="250" stroke="#EFE6D8" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.6" />

        {/* Ground */}
        <line x1="0" y1="220" x2="600" y2="220" stroke="#A4582E" strokeWidth="0.5" opacity="0.1" />

        {/* === LEFT: Single tool (hammer = device fluency) === */}
        {/* Oversized grey hammer */}
        {/* Handle */}
        <line x1="160" y1="115" x2="160" y2="195" stroke="#52616D" strokeWidth="4" strokeLinecap="round" opacity="0.3" />
        {/* Hammer head */}
        <rect x="138" y="100" width="44" height="20" rx="4" fill="#52616D" opacity="0.15" />
        <rect x="138" y="100" width="44" height="20" rx="4" fill="none" stroke="#52616D" strokeWidth="2" opacity="0.3" />
        {/* Handle detail */}
        <line x1="157" y1="145" x2="163" y2="145" stroke="#52616D" strokeWidth="0.8" opacity="0.15" />
        <line x1="157" y1="155" x2="163" y2="155" stroke="#52616D" strokeWidth="0.8" opacity="0.15" />
        <line x1="157" y1="165" x2="163" y2="165" stroke="#52616D" strokeWidth="0.8" opacity="0.15" />

        {/* Different-shaped holes (problems child can't solve with hammer) */}
        {/* Circle hole */}
        <circle cx="70" cy="160" r="10" fill="none" stroke="#52616D" strokeWidth="1.5" opacity="0.2" />
        <text x="70" y="164" fontFamily="var(--font-body)" fontSize="8" fontWeight="600" fill="#52616D" opacity="0.2" textAnchor="middle">O</text>
        {/* Square hole */}
        <rect x="65" y="185" width="18" height="18" rx="2" fill="none" stroke="#52616D" strokeWidth="1.5" opacity="0.2" />
        {/* Triangle hole */}
        <polygon points="80,135 90,120 100,135" fill="none" stroke="#52616D" strokeWidth="1.5" opacity="0.2" />

        {/* Child figure holding the hammer, looking limited */}
        <circle cx="110" cy="148" r="7" fill="#4B7A5B" />
        <line x1="110" y1="155" x2="110" y2="182" stroke="#4B7A5B" strokeWidth="2.5" strokeLinecap="round" />
        {/* One arm reaching toward hammer */}
        <line x1="110" y1="164" x2="125" y2="158" stroke="#4B7A5B" strokeWidth="2" strokeLinecap="round" />
        {/* Other arm hanging */}
        <line x1="110" y1="164" x2="100" y2="175" stroke="#4B7A5B" strokeWidth="2" strokeLinecap="round" />
        <line x1="110" y1="182" x2="104" y2="200" stroke="#4B7A5B" strokeWidth="2" strokeLinecap="round" />
        <line x1="110" y1="182" x2="116" y2="200" stroke="#4B7A5B" strokeWidth="2" strokeLinecap="round" />

        {/* === RIGHT: Full toolbox with 5 tools === */}
        {/* Toolbox body — warm brown */}
        <rect x="380" y="155" width="150" height="55" rx="5" fill="#E6D5C3" opacity="0.5" />
        <rect x="380" y="155" width="150" height="55" rx="5" fill="none" stroke="#A4582E" strokeWidth="2" opacity="0.35" />
        {/* Toolbox inner shadow */}
        <line x1="385" y1="160" x2="525" y2="160" stroke="#A4582E" strokeWidth="0.5" opacity="0.15" />

        {/* Lid — open, angled up */}
        <path d="M380 155 L384 118 L526 118 L530 155" fill="#E6D5C3" opacity="0.25" />
        <path d="M380 155 L384 118 L526 118 L530 155" fill="none" stroke="#A4582E" strokeWidth="1.5" opacity="0.25" />
        {/* Lid handle */}
        <path d="M438 118 Q455 108 472 118" fill="none" stroke="#A4582E" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
        {/* Lid hinge details */}
        <circle cx="385" cy="155" r="2" fill="#A4582E" opacity="0.2" />
        <circle cx="525" cy="155" r="2" fill="#A4582E" opacity="0.2" />

        {/* Tool 1: Understanding — teal wrench */}
        <rect x="394" y="128" width="7" height="30" rx="1.5" fill="#235A5F" opacity="0.3" />
        <circle cx="397" cy="125" r="6" fill="none" stroke="#235A5F" strokeWidth="1.5" opacity="0.35" />
        <circle cx="397" cy="125" r="2.5" fill="#235A5F" opacity="0.15" />
        <text x="397" y="170" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" fill="#235A5F" opacity="0.5" textAnchor="middle">Understand</text>

        {/* Tool 2: Safety — green shield */}
        <path d="M420 122 L427 116 L434 122 L434 138 Q427 144 420 138Z" fill="#4B7A5B" opacity="0.25" stroke="#4B7A5B" strokeWidth="1" />
        <line x1="427" y1="120" x2="427" y2="138" stroke="#4B7A5B" strokeWidth="0.5" opacity="0.2" />
        <text x="427" y="182" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" fill="#4B7A5B" opacity="0.5" textAnchor="middle">Safety</text>

        {/* Tool 3: Logic — terracotta ruler */}
        <rect x="446" y="112" width="6" height="42" rx="1" fill="#A4582E" opacity="0.25" />
        <line x1="447" y1="118" x2="451" y2="118" stroke="#FFFDF9" strokeWidth="0.5" opacity="0.3" />
        <line x1="447" y1="124" x2="451" y2="124" stroke="#FFFDF9" strokeWidth="0.5" opacity="0.3" />
        <line x1="447" y1="130" x2="451" y2="130" stroke="#FFFDF9" strokeWidth="0.5" opacity="0.3" />
        <line x1="447" y1="136" x2="451" y2="136" stroke="#FFFDF9" strokeWidth="0.5" opacity="0.3" />
        <line x1="447" y1="142" x2="451" y2="142" stroke="#FFFDF9" strokeWidth="0.5" opacity="0.3" />
        <text x="449" y="170" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" fill="#A4582E" opacity="0.5" textAnchor="middle">Logic</text>

        {/* Tool 4: Creation — blue pencil */}
        <line x1="472" y1="110" x2="472" y2="152" stroke="#4966A8" strokeWidth="3" strokeLinecap="round" opacity="0.3" />
        <path d="M470.5 110 L472 104 L473.5 110" fill="#A4582E" opacity="0.35" />
        {/* Pencil body stripe */}
        <line x1="472" y1="115" x2="472" y2="148" stroke="#4966A8" strokeWidth="1" strokeLinecap="round" opacity="0.15" />
        <text x="472" y="182" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" fill="#4966A8" opacity="0.5" textAnchor="middle">Creation</text>

        {/* Tool 5: Judgment — gold compass */}
        <circle cx="497" cy="130" r="8" fill="none" stroke="#886328" strokeWidth="1.5" opacity="0.35" />
        <circle cx="497" cy="130" r="2" fill="#886328" opacity="0.25" />
        {/* Compass needle */}
        <line x1="497" y1="124" x2="497" y2="136" stroke="#886328" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
        <line x1="491" y1="130" x2="503" y2="130" stroke="#886328" strokeWidth="0.8" strokeLinecap="round" opacity="0.2" />
        {/* Compass cardinal marks */}
        <circle cx="497" cy="123" r="1" fill="#886328" opacity="0.3" />
        <text x="497" y="170" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" fill="#886328" opacity="0.5" textAnchor="middle">Judgment</text>

        {/* Child figure building a small structure */}
        <circle cx="355" cy="145" r="7" fill="#4B7A5B" />
        <line x1="355" y1="152" x2="355" y2="180" stroke="#4B7A5B" strokeWidth="2.5" strokeLinecap="round" />
        {/* One arm reaching to build */}
        <line x1="355" y1="162" x2="368" y2="158" stroke="#4B7A5B" strokeWidth="2" strokeLinecap="round" />
        {/* Other arm */}
        <line x1="355" y1="162" x2="345" y2="172" stroke="#4B7A5B" strokeWidth="2" strokeLinecap="round" />
        <line x1="355" y1="180" x2="349" y2="198" stroke="#4B7A5B" strokeWidth="2" strokeLinecap="round" />
        <line x1="355" y1="180" x2="361" y2="198" stroke="#4B7A5B" strokeWidth="2" strokeLinecap="round" />

        {/* Small structure being built (stacked blocks) */}
        <rect x="368" y="172" width="9" height="12" rx="1.5" fill="#4B7A5B" opacity="0.25" />
        <rect x="374" y="166" width="9" height="18" rx="1.5" fill="#235A5F" opacity="0.2" />
        <rect x="371" y="162" width="15" height="4" rx="1" fill="#A4582E" opacity="0.2" />
        <rect x="373" y="158" width="10" height="4" rx="1" fill="#4966A8" opacity="0.15" />

        {/* Labels */}
        <text x="130" y="50" fontFamily="var(--font-body)" fontSize="12" fontWeight="700" fill="#52616D" opacity="0.8" textAnchor="middle">Device fluency alone</text>
        <text x="130" y="65" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" fill="#52616D" opacity="0.4" textAnchor="middle">One skill, limited capability</text>

        <text x="450" y="50" fontFamily="var(--font-body)" fontSize="12" fontWeight="700" fill="#235A5F" opacity="0.8" textAnchor="middle">Digital literacy with judgment</text>
        <text x="450" y="65" fontFamily="var(--font-body)" fontSize="9" fontWeight="600" fill="#235A5F" opacity="0.45" textAnchor="middle">Understanding, safety, logic, creation, judgment</text>

        {/* Outcome labels */}
        <text x="130" y="240" fontFamily="var(--font-body)" fontSize="10" fontWeight="600" fill="#52616D" opacity="0.4" textAnchor="middle">Limited</text>
        <text x="450" y="240" fontFamily="var(--font-body)" fontSize="10" fontWeight="600" fill="#4B7A5B" opacity="0.55" textAnchor="middle">Capable</text>
      </svg>
    </div>
  );
}

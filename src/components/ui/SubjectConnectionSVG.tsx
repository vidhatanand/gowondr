interface SubjectConnectionSVGProps {
  className?: string;
}

export function SubjectConnectionSVG({ className = "" }: SubjectConnectionSVGProps) {
  return (
    <figure className={`mx-auto max-w-[700px] ${className}`} role="img" aria-label="How subjects connect">
      <figcaption className="text-center mb-4">
        <span className="text-[13px] font-semibold uppercase tracking-[0.08em] text-teal">
          HOW 8 SUBJECTS CONNECT
        </span>
      </figcaption>

      <div className="rounded-2xl border border-sand bg-paper overflow-hidden">
        <svg viewBox="0 0 700 440" className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
          {/* Sky */}
          <rect x="0" y="0" width="700" height="200" fill="#FFFDF9" />

          {/* Ground line */}
          <path d="M 0 200 Q 175 195 350 198 Q 525 202 700 196" fill="none" stroke="#E6D5C3" strokeWidth="2" />

          {/* 8 subject plants — larger circles (r=22) so text fits */}

          {/* Reading */}
          <line x1="55" y1="198" x2="55" y2="145" stroke="#6A4E73" strokeWidth="2" strokeLinecap="round" />
          <line x1="55" y1="170" x2="43" y2="158" stroke="#6A4E73" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="40" cy="155" r="3.5" fill="#EDE8E9" stroke="#6A4E73" strokeWidth="1" />
          <circle cx="55" cy="138" r="22" fill="#EDE8E9" stroke="#6A4E73" strokeWidth="2" />
          <text x="55" y="142" textAnchor="middle" fill="#6A4E73" fontSize="11" fontWeight="700" fontFamily="var(--font-body)">Reading</text>

          {/* Math */}
          <line x1="145" y1="196" x2="145" y2="128" stroke="#2A6E73" strokeWidth="2" strokeLinecap="round" />
          <line x1="145" y1="162" x2="133" y2="150" stroke="#2A6E73" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="130" cy="148" r="3.5" fill="#E5ECE9" stroke="#2A6E73" strokeWidth="1" />
          <line x1="145" y1="155" x2="158" y2="146" stroke="#2A6E73" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="161" cy="144" r="3" fill="#E5ECE9" stroke="#2A6E73" strokeWidth="1" />
          <circle cx="145" cy="122" r="22" fill="#E5ECE9" stroke="#2A6E73" strokeWidth="2" />
          <text x="145" y="126" textAnchor="middle" fill="#2A6E73" fontSize="11" fontWeight="700" fontFamily="var(--font-body)">Math</text>

          {/* Science */}
          <line x1="240" y1="197" x2="240" y2="112" stroke="#4B744F" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="240" y1="158" x2="226" y2="144" stroke="#4B744F" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="223" cy="142" r="4" fill="#EAEDE5" stroke="#4B744F" strokeWidth="1" />
          <line x1="240" y1="148" x2="254" y2="137" stroke="#4B744F" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="257" cy="135" r="3.5" fill="#EAEDE5" stroke="#4B744F" strokeWidth="1" />
          <circle cx="240" cy="105" r="23" fill="#EAEDE5" stroke="#4B744F" strokeWidth="2" />
          <text x="240" y="109" textAnchor="middle" fill="#4B744F" fontSize="11" fontWeight="700" fontFamily="var(--font-body)">Science</text>

          {/* World */}
          <line x1="335" y1="198" x2="335" y2="138" stroke="#886328" strokeWidth="2" strokeLinecap="round" />
          <line x1="335" y1="168" x2="322" y2="156" stroke="#886328" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="319" cy="154" r="3" fill="#F4EDE1" stroke="#886328" strokeWidth="1" />
          <circle cx="335" cy="130" r="22" fill="#F4EDE1" stroke="#886328" strokeWidth="2" />
          <text x="335" y="134" textAnchor="middle" fill="#886328" fontSize="11" fontWeight="700" fontFamily="var(--font-body)">World</text>

          {/* Personal */}
          <line x1="430" y1="199" x2="430" y2="145" stroke="#94536C" strokeWidth="2" strokeLinecap="round" />
          <line x1="430" y1="172" x2="443" y2="160" stroke="#94536C" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="446" cy="158" r="3" fill="#F4EAEA" stroke="#94536C" strokeWidth="1" />
          <circle cx="430" cy="138" r="22" fill="#F4EAEA" stroke="#94536C" strokeWidth="2" />
          <text x="430" y="142" textAnchor="middle" fill="#94536C" fontSize="10" fontWeight="700" fontFamily="var(--font-body)">Personal</text>

          {/* Arts */}
          <line x1="520" y1="198" x2="520" y2="118" stroke="#7A5AA6" strokeWidth="2" strokeLinecap="round" />
          <line x1="520" y1="158" x2="508" y2="146" stroke="#7A5AA6" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="505" cy="144" r="3.5" fill="#EFE9EF" stroke="#7A5AA6" strokeWidth="1" />
          <line x1="520" y1="148" x2="534" y2="138" stroke="#7A5AA6" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="537" cy="136" r="3" fill="#EFE9EF" stroke="#7A5AA6" strokeWidth="1" />
          <circle cx="520" cy="112" r="22" fill="#EFE9EF" stroke="#7A5AA6" strokeWidth="2" />
          <text x="520" y="116" textAnchor="middle" fill="#7A5AA6" fontSize="11" fontWeight="700" fontFamily="var(--font-body)">Arts</text>

          {/* Digital */}
          <line x1="605" y1="197" x2="605" y2="140" stroke="#4966A8" strokeWidth="2" strokeLinecap="round" />
          <line x1="605" y1="168" x2="618" y2="156" stroke="#4966A8" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="621" cy="154" r="3" fill="#E9EBEF" stroke="#4966A8" strokeWidth="1" />
          <circle cx="605" cy="133" r="22" fill="#E9EBEF" stroke="#4966A8" strokeWidth="2" />
          <text x="605" y="137" textAnchor="middle" fill="#4966A8" fontSize="11" fontWeight="700" fontFamily="var(--font-body)">Digital</text>

          {/* Inquiry */}
          <line x1="670" y1="196" x2="670" y2="148" stroke="#9E563C" strokeWidth="2" strokeLinecap="round" />
          <circle cx="670" cy="142" r="22" fill="#F6EAE3" stroke="#9E563C" strokeWidth="2" />
          <text x="670" y="146" textAnchor="middle" fill="#9E563C" fontSize="11" fontWeight="700" fontFamily="var(--font-body)">Inquiry</text>

          {/* Below ground — the root system / mycelium network */}
          {/* This is where the real connections happen */}

          {/* Underground fill */}
          <path d="M 0 200 Q 175 195 350 198 Q 525 202 700 196 L 700 440 L 0 440 Z" fill="#F8F4ED" />

          {/* Root connections — organic curves linking subjects underground */}

          {/* Reading → Math */}
          <path d="M 55 200 Q 60 235 100 255 Q 145 265 145 225" fill="none" stroke="#6A4E73" strokeWidth="1.5" opacity="0.35" strokeLinecap="round" />

          {/* Math → Science */}
          <path d="M 145 200 Q 155 240 195 260 Q 240 270 240 225" fill="none" stroke="#2A6E73" strokeWidth="1.5" opacity="0.35" strokeLinecap="round" />

          {/* Science → World */}
          <path d="M 240 200 Q 255 245 290 270 Q 335 280 335 235" fill="none" stroke="#4B744F" strokeWidth="1.5" opacity="0.35" strokeLinecap="round" />

          {/* Science → Reading (cross-connection — science needs language) */}
          <path d="M 240 200 Q 210 260 160 300 Q 110 320 80 280 Q 55 250 55 225" fill="none" stroke="#4B744F" strokeWidth="1" opacity="0.2" strokeLinecap="round" strokeDasharray="4 3" />

          {/* World → Personal */}
          <path d="M 335 200 Q 355 248 395 268 Q 430 275 430 230" fill="none" stroke="#886328" strokeWidth="1.5" opacity="0.35" strokeLinecap="round" />

          {/* Personal → Arts */}
          <path d="M 430 200 Q 448 245 485 265 Q 520 270 520 228" fill="none" stroke="#94536C" strokeWidth="1.5" opacity="0.35" strokeLinecap="round" />

          {/* Arts → Digital */}
          <path d="M 520 200 Q 540 240 575 258 Q 605 262 605 225" fill="none" stroke="#7A5AA6" strokeWidth="1.5" opacity="0.35" strokeLinecap="round" />

          {/* Digital → Inquiry */}
          <path d="M 605 200 Q 620 235 650 248 Q 670 252 670 222" fill="none" stroke="#4966A8" strokeWidth="1.5" opacity="0.35" strokeLinecap="round" />

          {/* Inquiry → Reading (big loop — inquiry connects everything) */}
          <path d="M 670 200 Q 665 280 580 330 Q 450 390 350 385 Q 200 375 100 330 Q 55 310 55 245" fill="none" stroke="#9E563C" strokeWidth="1.5" opacity="0.2" strokeLinecap="round" strokeDasharray="5 4" />

          {/* Cross-connections — deeper interdisciplinary roots */}
          {/* Reading ↔ Arts (language feeds expression) */}
          <path d="M 55 245 Q 120 340 300 365 Q 440 370 520 270" fill="none" stroke="#E6D5C3" strokeWidth="1" opacity="0.3" strokeDasharray="3 3" />

          {/* Math ↔ Digital (patterns and logic) */}
          <path d="M 145 240 Q 250 345 420 360 Q 550 350 605 258" fill="none" stroke="#E6D5C3" strokeWidth="1" opacity="0.3" strokeDasharray="3 3" />

          {/* Concept nodes at root intersections */}
          <circle cx="100" cy="255" r="3.5" fill="#E6D5C3" />
          <circle cx="195" cy="262" r="3.5" fill="#E6D5C3" />
          <circle cx="290" cy="272" r="3.5" fill="#E6D5C3" />
          <circle cx="395" cy="270" r="3.5" fill="#E6D5C3" />
          <circle cx="485" cy="265" r="3.5" fill="#E6D5C3" />
          <circle cx="575" cy="258" r="3.5" fill="#E6D5C3" />
          <circle cx="650" cy="248" r="3.5" fill="#E6D5C3" />
          <circle cx="350" cy="383" r="4" fill="#E6D5C3" />
          <circle cx="250" cy="370" r="3" fill="#E6D5C3" />
          <circle cx="450" cy="368" r="3" fill="#E6D5C3" />

          {/* Underground label */}
          <text x="350" y="425" textAnchor="middle" fill="#52616D" fontSize="12" fontWeight="600" fontFamily="var(--font-body)">Shared concepts connect everything beneath the surface</text>
        </svg>
      </div>

      <p className="text-center mt-3 text-[13px] text-slate leading-relaxed max-w-[480px] mx-auto">
        Above ground, subjects look distinct. Below, their roots intertwine — reading supports science, math connects to digital thinking, inquiry runs through everything. goWondr maps these connections so nothing grows in isolation.
      </p>
    </figure>
  );
}

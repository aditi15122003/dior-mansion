type Props = { className?: string };

/** The Medallion Chair — hero silhouette, cannage-backed armchair sketched like a couture croquis */
export function MedallionChair({ className = "" }: Props) {
  return (
    <svg viewBox="0 0 480 560" className={className} aria-hidden="true">
      <defs>
        <pattern
          id="hero-cannage"
          width="18"
          height="18"
          patternTransform="rotate(45)"
          patternUnits="userSpaceOnUse"
        >
          <path d="M0 4.5 H18 M0 13.5 H18" stroke="#8C6E42" strokeWidth="1.1" opacity="0.55" />
          <path d="M4.5 0 V18 M13.5 0 V18" stroke="#8C6E42" strokeWidth="1.1" opacity="0.3" />
        </pattern>
      </defs>
      {/* backrest medallion */}
      <path
        d="M240 40 C130 40 100 140 110 230 C118 300 150 330 170 350 L170 470 C170 490 190 505 240 505 C290 505 310 490 310 470 L310 350 C330 330 362 300 370 230 C380 140 350 40 240 40 Z"
        fill="none"
        stroke="#171512"
        strokeWidth="2.4"
      />
      <path
        d="M240 60 C150 60 128 148 136 226 C143 288 172 312 188 330 L188 340 L292 340 L292 330 C308 312 337 288 344 226 C352 148 330 60 240 60 Z"
        fill="url(#hero-cannage)"
        stroke="#171512"
        strokeWidth="1.4"
      />
      {/* seat */}
      <path d="M150 350 L330 350 L345 450 L135 450 Z" fill="url(#hero-cannage)" stroke="#171512" strokeWidth="2" />
      {/* armrests */}
      <path d="M150 350 C120 350 108 380 112 420 C114 440 128 452 148 452" fill="none" stroke="#171512" strokeWidth="2.2" />
      <path d="M330 350 C360 350 372 380 368 420 C366 440 352 452 332 452" fill="none" stroke="#171512" strokeWidth="2.2" />
      {/* legs */}
      <path d="M150 452 L128 545 M340 452 L362 545 M188 452 L178 545 M300 452 L312 545" stroke="#171512" strokeWidth="2.2" strokeLinecap="round" />
      {/* stitch line accent */}
      <path d="M240 340 L240 505" stroke="#5C1F1A" strokeWidth="1" strokeDasharray="2 5" opacity="0.5" />
    </svg>
  );
}

/** The Trianon Settee — two-seat sofa, sketched in profile */
export function TrianonSettee({ className = "" }: Props) {
  return (
    <svg viewBox="0 0 480 320" className={className} aria-hidden="true">
      <path
        d="M60 200 C60 140 100 120 140 120 L340 120 C380 120 420 140 420 200 L420 240 L60 240 Z"
        fill="none"
        stroke="#171512"
        strokeWidth="2.2"
      />
      <path d="M60 240 L60 280 M420 240 L420 280 M110 240 L110 280 M370 240 L370 280" stroke="#171512" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M140 120 C140 150 150 170 170 178 L170 240" fill="none" stroke="#171512" strokeWidth="1.6" opacity="0.65" />
      <path d="M240 120 C240 150 245 172 240 178 L240 240" fill="none" stroke="#171512" strokeWidth="1.6" opacity="0.65" />
      <path d="M340 120 C340 150 330 170 310 178 L310 240" fill="none" stroke="#171512" strokeWidth="1.6" opacity="0.65" />
      <path d="M80 150 Q240 130 400 150" fill="none" stroke="#5C1F1A" strokeWidth="1" strokeDasharray="2 6" opacity="0.5" />
    </svg>
  );
}

/** The Toile Console — slender occasional table with Toile de Jouy inspired leg turning */
export function ToileConsole({ className = "" }: Props) {
  return (
    <svg viewBox="0 0 320 320" className={className} aria-hidden="true">
      <rect x="40" y="90" width="240" height="14" fill="none" stroke="#171512" strokeWidth="2.2" />
      <path d="M60 104 L60 270 M260 104 L260 270" stroke="#171512" strokeWidth="2.2" />
      <path d="M60 160 C50 160 50 145 60 145 C70 145 70 160 60 160 Z" fill="none" stroke="#8C6E42" strokeWidth="1.4" />
      <path d="M260 160 C250 160 250 145 260 145 C270 145 270 160 260 160 Z" fill="none" stroke="#8C6E42" strokeWidth="1.4" />
      <path d="M60 270 L45 296 M60 270 L75 296 M260 270 L245 296 M260 270 L275 296" stroke="#171512" strokeWidth="2" strokeLinecap="round" />
      <path d="M40 97 Q160 80 280 97" fill="none" stroke="#5C1F1A" strokeWidth="1" strokeDasharray="2 6" opacity="0.55" />
    </svg>
  );
}

/** The Cannage Cabinet — tall storage piece, front woven like a couture bodice */
export function CannageCabinet({ className = "" }: Props) {
  return (
    <svg viewBox="0 0 320 400" className={className} aria-hidden="true">
      <defs>
        <pattern id="cab-weave" width="16" height="16" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
          <path d="M0 4 H16 M0 12 H16" stroke="#8C6E42" strokeWidth="1" opacity="0.5" />
          <path d="M4 0 V16 M12 0 V16" stroke="#8C6E42" strokeWidth="1" opacity="0.28" />
        </pattern>
      </defs>
      <rect x="60" y="40" width="200" height="300" fill="none" stroke="#171512" strokeWidth="2.2" />
      <rect x="76" y="60" width="168" height="120" fill="url(#cab-weave)" stroke="#171512" strokeWidth="1.4" />
      <rect x="76" y="196" width="168" height="120" fill="none" stroke="#171512" strokeWidth="1.4" />
      <circle cx="160" cy="256" r="3.2" fill="#5C1F1A" />
      <path d="M60 340 L45 366 M260 340 L275 366 M120 340 L112 366 M200 340 L208 366" stroke="#171512" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

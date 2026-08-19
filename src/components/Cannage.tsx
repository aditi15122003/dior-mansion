export function CannageSwatch({
  className = "",
  stroke = "#171512",
}: {
  className?: string;
  stroke?: string;
}) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern
          id="cannage-weave"
          width="24"
          height="24"
          patternTransform="rotate(45)"
          patternUnits="userSpaceOnUse"
        >
          <rect width="24" height="24" fill="none" />
          <path d="M0 6 H24 M0 18 H24" stroke={stroke} strokeWidth="1.6" opacity="0.7" />
          <path d="M6 0 V24 M18 0 V24" stroke={stroke} strokeWidth="1.6" opacity="0.4" />
        </pattern>
      </defs>
      <rect width="120" height="120" fill="url(#cannage-weave)" />
    </svg>
  );
}

export function CannageDivider({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 24"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <line x1="0" y1="12" x2="400" y2="12" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <path
        d="M180 12 L190 4 L200 12 L210 20 L220 12"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        opacity="0.7"
      />
    </svg>
  );
}

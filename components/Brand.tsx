type SvgProps = React.SVGProps<SVGSVGElement>;

export function Monogram({ className = "h-10 w-10", ...rest }: SvgProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      aria-hidden
      {...rest}
    >
      <circle
        cx="20"
        cy="20"
        r="19.25"
        stroke="currentColor"
        strokeOpacity="0.22"
        strokeWidth="0.75"
      />
      <circle
        cx="20"
        cy="20"
        r="16.25"
        stroke="currentColor"
        strokeOpacity="0.12"
        strokeWidth="0.5"
      />
      <text
        x="20"
        y="26.5"
        textAnchor="middle"
        fontFamily="'Noto Serif KR', serif"
        fontSize="19"
        fontWeight="500"
        fill="currentColor"
      >
        J
      </text>
      <circle cx="29.5" cy="10.5" r="1.35" fill="#B58A33" />
      <line
        x1="9"
        y1="32"
        x2="13"
        y2="32"
        stroke="#B58A33"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Ornament({
  className = "",
  variant = "light",
}: {
  className?: string;
  variant?: "light" | "dark";
}) {
  const lineColor = variant === "dark" ? "rgba(255,255,255,0.25)" : "rgba(10,16,32,0.22)";
  return (
    <svg
      viewBox="0 0 240 12"
      fill="none"
      className={className}
      aria-hidden
      preserveAspectRatio="xMidYMid meet"
    >
      <line x1="0" y1="6" x2="96" y2="6" stroke={lineColor} strokeWidth="0.75" />
      <circle cx="104" cy="6" r="1.4" fill="#B58A33" />
      <path
        d="M120 1 L126 6 L120 11 L114 6 Z"
        stroke="#B58A33"
        strokeWidth="0.75"
        fill="none"
      />
      <circle cx="136" cy="6" r="1.4" fill="#B58A33" />
      <line x1="144" y1="6" x2="240" y2="6" stroke={lineColor} strokeWidth="0.75" />
    </svg>
  );
}

export function CornerMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      className={className}
      aria-hidden
    >
      <path d="M0 0 L0 28" stroke="#B58A33" strokeWidth="1" />
      <path d="M0 0 L28 0" stroke="#B58A33" strokeWidth="1" />
      <circle cx="6" cy="6" r="2" fill="#B58A33" />
    </svg>
  );
}

export function CornerMarkBR({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" fill="none" className={className} aria-hidden>
      <path d="M80 80 L80 52" stroke="#B58A33" strokeWidth="1" />
      <path d="M80 80 L52 80" stroke="#B58A33" strokeWidth="1" />
      <circle cx="74" cy="74" r="2" fill="#B58A33" />
    </svg>
  );
}

export function CrestMark({ className = "h-12 w-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" fill="none" className={className} aria-hidden>
      <path
        d="M30 4 L52 14 L52 32 C52 44 42 53 30 56 C18 53 8 44 8 32 L8 14 Z"
        stroke="currentColor"
        strokeOpacity="0.35"
        strokeWidth="1"
      />
      <path
        d="M30 12 L46 18 L46 31 C46 39 39 46 30 48 C21 46 14 39 14 31 L14 18 Z"
        stroke="#B58A33"
        strokeOpacity="0.5"
        strokeWidth="0.6"
      />
      <text
        x="30"
        y="36"
        textAnchor="middle"
        fontFamily="'Noto Serif KR', serif"
        fontSize="16"
        fontWeight="500"
        fill="currentColor"
      >
        J
      </text>
      <circle cx="30" cy="44" r="1.2" fill="#B58A33" />
    </svg>
  );
}

/* Decorative SVG icons for features */
export function IconPen({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden>
      <path
        d="M5 27 L5 23 L20 8 L24 12 L9 27 Z"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinejoin="round"
      />
      <path d="M19 9 L23 13" stroke="#B58A33" strokeWidth="1.1" />
      <line
        x1="5"
        y1="27"
        x2="27"
        y2="27"
        stroke="currentColor"
        strokeOpacity="0.5"
        strokeWidth="0.8"
      />
      <circle cx="22" cy="10" r="1" fill="#B58A33" />
    </svg>
  );
}

export function IconTarget({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden>
      <circle
        cx="16"
        cy="16"
        r="11"
        stroke="currentColor"
        strokeWidth="1.1"
      />
      <circle
        cx="16"
        cy="16"
        r="6.5"
        stroke="currentColor"
        strokeOpacity="0.5"
        strokeWidth="0.9"
      />
      <circle cx="16" cy="16" r="2" fill="#B58A33" />
      <line
        x1="16"
        y1="2"
        x2="16"
        y2="6"
        stroke="currentColor"
        strokeWidth="1"
      />
      <line
        x1="16"
        y1="26"
        x2="16"
        y2="30"
        stroke="currentColor"
        strokeWidth="1"
      />
      <line x1="2" y1="16" x2="6" y2="16" stroke="currentColor" strokeWidth="1" />
      <line
        x1="26"
        y1="16"
        x2="30"
        y2="16"
        stroke="currentColor"
        strokeWidth="1"
      />
    </svg>
  );
}

export function IconFree({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden>
      <rect
        x="4"
        y="9"
        width="24"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.1"
      />
      <line
        x1="4"
        y1="14"
        x2="28"
        y2="14"
        stroke="currentColor"
        strokeOpacity="0.4"
        strokeWidth="0.8"
      />
      <text
        x="16"
        y="21"
        textAnchor="middle"
        fontFamily="'Noto Serif KR', serif"
        fontSize="6"
        fontWeight="600"
        fill="#B58A33"
      >
        FREE
      </text>
      <circle cx="8" cy="11.5" r="0.8" fill="#B58A33" />
    </svg>
  );
}

export function IconShield({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden>
      <path
        d="M16 4 L26 8 L26 17 C26 23 21 27 16 28 C11 27 6 23 6 17 L6 8 Z"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinejoin="round"
      />
      <path
        d="M11.5 16.5 L14.5 19.5 L20.5 13.5"
        stroke="#B58A33"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconLock({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect
        x="4"
        y="11"
        width="16"
        height="10"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M8 11 V7 C8 4.8 9.8 3 12 3 C14.2 3 16 4.8 16 7 V11"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <circle cx="12" cy="16" r="1.4" fill="#B58A33" />
    </svg>
  );
}

export function IconScale({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <line x1="12" y1="3" x2="12" y2="21" stroke="currentColor" strokeWidth="1.2" />
      <line x1="6" y1="21" x2="18" y2="21" stroke="currentColor" strokeWidth="1.2" />
      <path d="M6 6 L2 13 L10 13 L6 6 Z" stroke="currentColor" strokeWidth="1.1" />
      <path d="M18 6 L14 13 L22 13 L18 6 Z" stroke="currentColor" strokeWidth="1.1" />
      <circle cx="12" cy="3.5" r="1.2" fill="#B58A33" />
    </svg>
  );
}

export function IconAdvisor({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <circle cx="12" cy="9" r="4" stroke="currentColor" strokeWidth="1.2" />
      <path
        d="M4 21 C4 16.5 7.5 13 12 13 C16.5 13 20 16.5 20 21"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <circle cx="18" cy="6" r="1.5" fill="#B58A33" />
    </svg>
  );
}

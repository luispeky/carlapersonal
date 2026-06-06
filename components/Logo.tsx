type LogoProps = {
  size?: number;
  className?: string;
  /** mostra o texto "Carla.Matos" ao lado da marca */
  withText?: boolean;
};

/** Marca da Carla Matos: monograma + halter em quadrado com gradiente. */
export function LogoMark({ size = 40, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      role="img"
      aria-label="Carla Matos"
      className={className}
    >
      <defs>
        <linearGradient id="cm-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#6a8fde" />
          <stop offset="1" stopColor="#314e96" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill="url(#cm-grad)" />
      <g
        stroke="#ffffff"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      >
        {/* barra */}
        <line x1="26" y1="32" x2="38" y2="32" />
        {/* anilhas esquerda */}
        <line x1="21" y1="23" x2="21" y2="41" />
        <line x1="26" y1="27" x2="26" y2="37" />
        {/* anilhas direita */}
        <line x1="43" y1="23" x2="43" y2="41" />
        <line x1="38" y1="27" x2="38" y2="37" />
      </g>
    </svg>
  );
}

export default function Logo({ size = 40, className = "", withText = true }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark size={size} />
      {withText && (
        <span className="font-display text-xl font-extrabold tracking-tight sm:text-2xl">
          Carla<span className="text-brand-500">.</span>Matos
        </span>
      )}
    </span>
  );
}

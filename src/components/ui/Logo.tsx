import { Link } from 'react-router-dom';

type LogoProps = {
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  showWordmark?: boolean;
  to?: string;
  className?: string;
};

const sizeMap = {
  sm: { px: 36, name: 'text-base', tag: 'text-[9px]', gap: 'gap-2' },
  md: { px: 44, name: 'text-lg sm:text-xl', tag: 'text-[10px] sm:text-[11px]', gap: 'gap-2 sm:gap-3' },
  lg: { px: 64, name: 'text-2xl sm:text-3xl', tag: 'text-xs sm:text-sm', gap: 'gap-3 sm:gap-4' },
};

function LogoMark({ size, isLight }: { size: number; isLight: boolean }) {
  const gold  = '#F39C12';
  const navy  = '#0A3D62';
  const bg    = isLight ? gold : navy;
  const stroke = isLight ? '#FFFFFF' : gold;
  const r     = size * 0.22;
  const v     = 48;

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: size,
        height: size,
        background: isLight
          ? `linear-gradient(145deg, ${gold} 0%, #E67E22 100%)`
          : `linear-gradient(145deg, ${navy} 0%, #0D5A8A 100%)`,
        borderRadius: r,
        flexShrink: 0,
        boxShadow: isLight
          ? '0 4px 14px rgba(243,156,18,0.40)'
          : '0 4px 14px rgba(10,61,98,0.30)',
      }}
      aria-hidden="true"
    >
      <svg
        width={size * 0.7}
        height={size * 0.7}
        viewBox={`0 0 ${v} ${v}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Building body */}
        <rect x="10" y="22" width="22" height="20" rx="1"
          fill={isLight ? 'rgba(255,255,255,0.18)' : 'rgba(255,255,255,0.08)'}
          stroke={stroke} strokeWidth="2.2" />
        {/* Floor lines */}
        <line x1="10" y1="30" x2="32" y2="30" stroke={stroke} strokeWidth="1.6" strokeOpacity="0.7" />
        <line x1="10" y1="37" x2="32" y2="37" stroke={stroke} strokeWidth="1.6" strokeOpacity="0.7" />
        {/* Door */}
        <rect x="18" y="35" width="6" height="7" rx="0.8"
          fill={isLight ? 'rgba(255,255,255,0.35)' : 'rgba(243,156,18,0.35)'}
          stroke={stroke} strokeWidth="1.6" />
        {/* Crane mast */}
        <line x1="21" y1="7" x2="21" y2="22" stroke={stroke} strokeWidth="2.4" strokeLinecap="round" />
        {/* Crane jib */}
        <line x1="9" y1="10" x2="36" y2="10" stroke={stroke} strokeWidth="2.4" strokeLinecap="round" />
        <circle cx="9" cy="10" r="2" fill={stroke} />
        <circle cx="36" cy="10" r="2" fill={stroke} />
        {/* Crane cable + hook */}
        <line x1="32" y1="10" x2="32" y2="19" stroke={stroke} strokeWidth="1.8" strokeDasharray="2 1.5" strokeLinecap="round" />
        <path d="M30 19 Q30 22 32 22 Q34 22 34 19" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" fill="none" />
        {/* Ground line */}
        <line x1="5" y1="43" x2="43" y2="43" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeOpacity="0.65" />
      </svg>
    </span>
  );
}

export function Logo({
  variant = 'dark',
  size = 'md',
  showWordmark = true,
  to = '/',
  className = '',
}: LogoProps) {
  const dims    = sizeMap[size];
  const isLight = variant === 'light';
  const px      = dims.px;

  const nameColor = isLight ? 'text-white'    : 'text-[#0A3D62]';
  const tagColor  = isLight ? 'text-gray-300' : 'text-gray-500';

  const inner = (
    <span className={`inline-flex items-center ${dims.gap}`}>
      <LogoMark size={px} isLight={isLight} />

      {showWordmark && (
        <span className="flex flex-col leading-tight min-w-0">
          <span className={`font-extrabold tracking-tight ${dims.name} ${nameColor}`} style={{ letterSpacing: '-0.01em' }}>
            ATHANASE
          </span>
          <span
            className={`font-semibold uppercase ${dims.tag} ${tagColor} whitespace-nowrap`}
            style={{ letterSpacing: '0.14em' }}
          >
            Engineering &amp; Construction
          </span>
        </span>
      )}
    </span>
  );

  if (to) {
    return (
      <Link
        to={to}
        className={`inline-flex rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F39C12] focus-visible:ring-offset-2 ${className}`}
        aria-label="Athanase Engineering & Construction — home"
      >
        {inner}
      </Link>
    );
  }

  return <span className={className}>{inner}</span>;
}

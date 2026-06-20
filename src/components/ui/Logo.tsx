import { Link } from 'react-router-dom';

type LogoProps = {
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  showWordmark?: boolean;
  to?: string;
  className?: string;
};

const sizeMap = {
  sm: { height: 36 },
  md: { height: 48 },
  lg: { height: 64 },
};

export function Logo({
  size = 'md',
  to = '/',
  className = '',
}: LogoProps) {
  const { height } = sizeMap[size];

  const inner = (
    <img
      src="/images/WhatsApp_Image_2026-06-20_at_10.48.53_(2).jpeg"
      alt="Quality Home Builders"
      style={{ height, width: 'auto', display: 'block', objectFit: 'contain' }}
    />
  );

  if (to) {
    return (
      <Link
        to={to}
        className={`inline-flex items-center rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F39C12] focus-visible:ring-offset-2 ${className}`}
        aria-label="Quality Home Builders — home"
      >
        {inner}
      </Link>
    );
  }

  return <span className={`inline-flex items-center ${className}`}>{inner}</span>;
}

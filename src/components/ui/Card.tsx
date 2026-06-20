import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  to?: string;
  onClick?: () => void;
}

export function Card({ children, className = '', hover = true, to, onClick }: CardProps) {
  const baseStyles = `bg-white rounded-xl shadow-lg overflow-hidden ${hover ? 'transition-all duration-300 hover:shadow-2xl hover:-translate-y-1' : ''} ${className}`;

  const content = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={baseStyles}
    >
      {children}
    </motion.div>
  );

  if (to) {
    return <Link to={to}>{content}</Link>;
  }

  if (onClick) {
    return <button onClick={onClick} className="w-full text-left">{content}</button>;
  }

  return content;
}

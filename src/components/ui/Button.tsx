'use client';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

const variants = {
  primary: 'bg-teal-600 text-white font-bold shadow-lg shadow-teal-500/20 hover:bg-teal-500 hover:shadow-teal-500/30 hover:scale-[1.02]',
  secondary: 'border border-border text-white font-normal hover:bg-card-hover hover:border-teal-500/20 hover:scale-[1.02]',
  ghost: 'text-text-secondary hover:text-white font-normal',
};

export default function Button({ children, href, target, rel, onClick, variant = 'primary', size = 'md', className = '' }: Props) {
  const cls = `inline-flex items-center justify-center rounded-xl transition-all duration-300 cursor-pointer ${sizes[size]} ${variants[variant]} ${className}`;

  const springHover = variant === 'primary'
    ? { scale: 1.04, boxShadow: '0 0 20px rgba(4,184,183,0.3)' }
    : { scale: 1.03 };
  const springTap = { scale: 0.97 };
  const springTransition = { type: 'spring' as const, stiffness: 400, damping: 17 };

  if (onClick) {
    return (
      <motion.button className={cls} whileHover={springHover} whileTap={springTap} transition={springTransition} onClick={onClick}>
        {children}
      </motion.button>
    );
  }

  if (href) {
    return (
      <motion.a href={href} target={target} rel={rel} className={cls} whileHover={springHover} whileTap={springTap} transition={springTransition}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button className={cls} whileHover={springHover} whileTap={springTap} transition={springTransition}>
      {children}
    </motion.button>
  );
}

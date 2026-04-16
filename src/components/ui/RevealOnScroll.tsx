'use client';
import { motion, useInView, Variants } from 'framer-motion';
import { useRef, ReactNode } from 'react';
import { fadeInUp } from '@/lib/animations';

interface Props {
  children: ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
  once?: boolean;
}

export default function RevealOnScroll({ children, variants = fadeInUp, className = '', delay = 0, once = true }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: '-50px 0px' });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      className={className}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

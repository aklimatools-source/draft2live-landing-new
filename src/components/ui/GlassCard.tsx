'use client';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { ReactNode, MouseEvent } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({ children, className = '', hover = true }: Props) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouse(e: MouseEvent<HTMLDivElement>) {
    if (!hover) return;
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  const bg = useMotionTemplate`radial-gradient(300px circle at ${mouseX}px ${mouseY}px, rgba(4, 184, 183, 0.06), transparent 80%)`;

  return (
    <motion.div
      onMouseMove={handleMouse}
      className={`glass-card relative overflow-hidden p-6 md:p-8 ${className}`}
      style={hover ? { background: bg } : undefined}
    >
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

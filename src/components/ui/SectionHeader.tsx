'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { fadeInUp, staggerContainer } from '@/lib/animations';

interface Props {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeader({ badge, title, subtitle, centered = true, light = false }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={staggerContainer}
      className={`${centered ? 'text-center' : ''} max-w-3xl ${centered ? 'mx-auto' : ''}`}
    >
      {badge && (
        <motion.div variants={fadeInUp} className="inline-block mb-5">
          <span className={`inline-flex items-center gap-2 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] rounded-lg border ${
            light ? 'text-teal-700 border-teal-200 bg-teal-50' : 'text-teal-300 border-teal-500/20 bg-teal-500/[0.06]'
          }`}>
            <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60" />
            {badge}
          </span>
        </motion.div>
      )}
      <motion.h2
        variants={fadeInUp}
        className={`text-3xl sm:text-4xl md:text-5xl font-black font-heading leading-tight ${
          light ? 'text-gray-900' : 'text-white'
        }`}
        style={{ letterSpacing: '-0.025em', textWrap: 'balance' }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeInUp}
          className={`mt-5 text-lg md:text-xl leading-relaxed ${light ? 'text-gray-600' : 'text-text-secondary'}`}
          style={{ textWrap: 'pretty' }}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}

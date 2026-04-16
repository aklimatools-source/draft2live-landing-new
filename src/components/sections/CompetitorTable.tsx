'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { staggerContainer, fadeInUp, staggerFast } from '@/lib/animations';
import SectionHeader from '@/components/ui/SectionHeader';

const competitors = ['Draft2Live', 'Semrush', 'SurferSEO', 'Jasper', 'ChatGPT'] as const;

type RowValue = string | boolean;

interface ComparisonRow {
  feature: string;
  values: Record<(typeof competitors)[number], RowValue>;
}

const rows: ComparisonRow[] = [
  {
    feature: 'Ціна/міс',
    values: { Draft2Live: '€49', Semrush: '€129', SurferSEO: '€89', Jasper: '€59', ChatGPT: '€20' },
  },
  {
    feature: 'SERP аналіз',
    values: { Draft2Live: true, Semrush: true, SurferSEO: true, Jasper: false, ChatGPT: false },
  },
  {
    feature: 'AI написання',
    values: { Draft2Live: true, Semrush: true, SurferSEO: false, Jasper: true, ChatGPT: true },
  },
  {
    feature: 'SEO аудит',
    values: { Draft2Live: true, Semrush: true, SurferSEO: true, Jasper: false, ChatGPT: false },
  },
  {
    feature: 'CMS публікація',
    values: { Draft2Live: true, Semrush: false, SurferSEO: false, Jasper: false, ChatGPT: false },
  },
  {
    feature: 'Brand Voice',
    values: { Draft2Live: true, Semrush: false, SurferSEO: false, Jasper: true, ChatGPT: false },
  },
  {
    feature: 'Knowledge Base',
    values: { Draft2Live: true, Semrush: false, SurferSEO: false, Jasper: true, ChatGPT: true },
  },
  {
    feature: 'White-label',
    values: { Draft2Live: true, Semrush: false, SurferSEO: false, Jasper: false, ChatGPT: false },
  },
];

function CheckIcon() {
  return (
    <>
      <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
      <span className="sr-only">Так</span>
    </>
  );
}

function CrossIcon() {
  return (
    <>
      <svg className="w-5 h-5 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
      <span className="sr-only">Ні</span>
    </>
  );
}

function CellContent({ value }: { value: RowValue }) {
  if (typeof value === 'boolean') {
    return value ? <CheckIcon /> : <CrossIcon />;
  }
  return <span className="text-sm font-normal text-white">{value}</span>;
}

export default function CompetitorTable() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section id="competitors" className="relative py-20 md:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
        >
          <SectionHeader badge="ПОВНЕ ПОРІВНЯННЯ" title="Draft2Live замінює 4 окремих сервіси" />

          <motion.div variants={fadeInUp} className="mt-12 -mx-4 sm:mx-0 overflow-x-auto">
            <table className="min-w-[640px] w-full glass-card overflow-hidden rounded-2xl border-separate border-spacing-0">
              <thead>
                <tr className="bg-surface/80 border-b border-border">
                  <th scope="col" className="p-4 text-left text-text-muted text-xs font-bold uppercase tracking-wider">
                    Функція
                  </th>
                  {competitors.map((name) => (
                    <th
                      key={name}
                      scope="col"
                      className={`p-4 text-center text-xs font-bold uppercase tracking-wider ${
                        name === 'Draft2Live'
                          ? 'bg-teal-500/5 border-l border-r border-teal-500/20 text-primary'
                          : 'text-text-muted'
                      }`}
                    >
                      {name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={i < rows.length - 1 ? 'border-b border-border/50' : ''}
                  >
                    <td className="p-4 text-sm text-text-secondary">
                      {row.feature}
                    </td>
                    {competitors.map((name) => (
                      <td
                        key={name}
                        className={`p-4 text-center ${
                          name === 'Draft2Live'
                            ? 'bg-teal-500/5 border-l border-r border-teal-500/20'
                            : ''
                        }`}
                      >
                        <span className="flex items-center justify-center">
                          <CellContent value={row.values[name]} />
                        </span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

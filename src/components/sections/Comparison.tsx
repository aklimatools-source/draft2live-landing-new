'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { staggerContainer, fadeInUp, staggerFast } from '@/lib/animations';
import SectionHeader from '@/components/ui/SectionHeader';

const features = [
  'Аналіз ТОП-10 Google у вашій країні',
  'Структура статті на основі конкурентів',
  'SEO-аудит з 8 метрик перед публікацією',
  'Brand Voice: пише вашим стилем',
  'Публікація в WordPress/Drupal одним кліком',
  'Knowledge Base: фактична точність',
  '45 мов із гео-таргетингом',
  'Зображення, мета-теги, alt-тексти, перелінковка',
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

export default function Comparison() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section id="comparison" className="relative py-20 md:py-28 overflow-hidden section-darker">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
        >
          <SectionHeader badge="DRAFT2LIVE VS CHATGPT" title="ChatGPT пише текст. Draft2Live створює контент, що ранжується." />

          <motion.div variants={fadeInUp} className="mt-12">
            <table className="w-full glass-card overflow-hidden rounded-2xl border-separate border-spacing-0">
              <thead>
                <tr className="border-b border-border">
                  <th scope="col" className="p-4 md:p-5 text-left text-text-muted text-sm font-normal">Функція</th>
                  <th scope="col" className="p-4 md:p-5 text-center bg-teal-500/5 border-l border-r border-teal-500/20">
                    <span className="text-sm font-bold text-teal-400">Draft2Live</span>
                  </th>
                  <th scope="col" className="p-4 md:p-5 text-center text-text-muted text-sm font-normal">ChatGPT</th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, i) => (
                  <tr
                    key={feature}
                    className={i < features.length - 1 ? 'border-b border-border/50' : ''}
                  >
                    <td className="p-4 md:p-5 text-sm text-text-secondary">
                      {feature}
                    </td>
                    <td className="p-4 md:p-5 text-center bg-teal-500/5 border-l border-r border-teal-500/20">
                      <span className="flex items-center justify-center"><CheckIcon /></span>
                    </td>
                    <td className="p-4 md:p-5 text-center">
                      <span className="flex items-center justify-center"><CrossIcon /></span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          {/* Bottom quote card */}
          <motion.div variants={fadeInUp} className="mt-8">
            <div className="glass-card p-6 md:p-8 text-center">
              <p className="text-text-secondary text-base md:text-lg leading-relaxed italic">
                &ldquo;ChatGPT це калькулятор. Draft2Live це бухгалтер, який знає вашу галузь, перевіряє цифри і сам подає звіт.{' '}
                <span className="text-primary font-bold not-italic">Різниця у результаті, а не у процесі</span>.&rdquo;
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

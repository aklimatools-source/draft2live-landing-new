'use client';

import { useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { staggerContainer, fadeInUp } from '@/lib/animations';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import { useEarlyAccess } from '@/lib/EarlyAccessContext';

interface PlanFeature {
  text: string;
}

interface Plan {
  name: string;
  badge?: string;
  monthlyPrice: number;
  annualPrice: number;
  description: string;
  features: PlanFeature[];
  ctaText: string;
  ctaHref: string;
  featured?: boolean;
  ctaVariant: 'primary' | 'secondary';
}

const planMeta: {
  name: string;
  monthlyPrice: number;
  annualPrice: number;
  ctaHref: string;
  featured?: boolean;
  ctaVariant: 'primary' | 'secondary';
  hasBadge?: boolean;
}[] = [
  {
    name: 'Free',
    monthlyPrice: 0,
    annualPrice: 0,
    ctaHref: 'https://app.draft2live.ai/signup',
    ctaVariant: 'secondary',
  },
  {
    name: 'Connect',
    monthlyPrice: 49,
    annualPrice: 39,
    ctaHref: 'https://app.draft2live.ai/signup?plan=connect',
    ctaVariant: 'secondary',
  },
  {
    name: 'Team',
    monthlyPrice: 149,
    annualPrice: 119,
    ctaHref: 'https://app.draft2live.ai/signup?plan=team',
    featured: true,
    ctaVariant: 'primary',
    hasBadge: true,
  },
  {
    name: 'Pro',
    monthlyPrice: 399,
    annualPrice: 319,
    ctaHref: 'https://app.draft2live.ai/signup?plan=pro',
    ctaVariant: 'secondary',
  },
];

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-accent shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function Pricing() {
  const t = useTranslations('pricing');
  const [isAnnual, setIsAnnual] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const { open: openEarlyAccess } = useEarlyAccess();

  const plans: Plan[] = planMeta.map((meta, i) => ({
    name: meta.name,
    monthlyPrice: meta.monthlyPrice,
    annualPrice: meta.annualPrice,
    ctaHref: meta.ctaHref,
    ctaVariant: meta.ctaVariant,
    featured: meta.featured,
    badge: meta.hasBadge ? t(`plans.${i}.badge`) : undefined,
    description: t(`plans.${i}.description`),
    features: (t.raw(`plans.${i}.features`) as string[]).map((text) => ({ text })),
    ctaText: t(`plans.${i}.ctaText`),
  }));

  return (
    <section id="pricing" className="relative py-28 md:py-40 overflow-hidden section-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
        >
          <SectionHeader
            badge={t('header.badge')}
            title={t('header.title')}
          />

          {/* Billing toggle */}
          <motion.div variants={fadeInUp} className="flex items-center justify-center gap-4 mt-8 mb-12">
            <span
              className={`text-sm font-normal transition-colors ${
                !isAnnual ? 'text-white' : 'text-text-muted'
              }`}
            >
              {t('billing.monthly')}
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-14 h-7 rounded-full bg-surface border border-border transition-colors hover:border-primary/30 cursor-pointer"
              aria-label={t('billing.toggleAriaLabel')}
            >
              <motion.div
                className="absolute top-0.5 w-6 h-6 rounded-full bg-teal-500"
                animate={{ left: isAnnual ? '30px' : '2px' }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            </button>
            <span
              className={`text-sm font-normal transition-colors flex items-center gap-2 ${
                isAnnual ? 'text-white' : 'text-text-muted'
              }`}
            >
              {t('billing.annual')}
              <span className="px-2 py-0.5 text-xs font-bold rounded-full bg-hot/10 text-hot border border-hot/20">
                {t('billing.discount')}
              </span>
            </span>
          </motion.div>

          {/* Pricing cards */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6"
          >
            {plans.map((plan) => (
              <motion.div key={plan.name} variants={fadeInUp} className={`pt-4 ${plan.featured ? 'scale-[1.03] z-10' : ''}`}>
                <div
                  className={`relative h-full flex flex-col rounded-2xl ${
                    plan.featured
                      ? 'pricing-featured p-8 md:p-10'
                      : 'glass-card p-6 md:p-8'
                  }`}
                >
                  {/* Badge */}
                  {plan.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
                      <span className="px-4 py-1.5 text-xs font-bold rounded-full bg-teal-600 text-white whitespace-nowrap shadow-lg shadow-teal-500/20">
                        {plan.badge}
                      </span>
                    </div>
                  )}

                  {/* Plan header — fixed height for alignment */}
                  <div className="mb-6 min-h-[72px]">
                    <h3 className="text-lg font-heading font-bold text-white" style={{ letterSpacing: '-0.01em' }}>{plan.name}</h3>
                    <p className="text-text-muted text-sm mt-1" style={{ textWrap: 'pretty' }}>{plan.description}</p>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={isAnnual ? 'annual' : 'monthly'}
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="text-4xl font-heading font-black text-white"
                          style={{ letterSpacing: '-0.03em' }}
                        >
                          ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                        </motion.span>
                      </AnimatePresence>
                      <span className="text-text-muted text-sm">{t('perMonth')}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((feature) => (
                      <li key={feature.text} className="flex items-start gap-2.5">
                        <CheckIcon />
                        <span className="text-text-secondary text-sm">{feature.text}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button
                    onClick={() => openEarlyAccess(plan.name)}
                    variant={plan.ctaVariant}
                    className="w-full justify-center"
                  >
                    {plan.ctaText}
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

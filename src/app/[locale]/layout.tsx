import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { routing } from '@/i18n/routing';
import { EarlyAccessProvider } from '@/lib/EarlyAccessContext';
import EarlyAccessModal from '@/components/ui/EarlyAccessModal';
import LangSync from '@/components/ui/LangSync';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `/${locale}/`,
      languages: {
        uk: '/uk/',
        en: '/en/',
      },
    },
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: `https://draft2live.ai/${locale}/`,
      siteName: 'Draft2Live',
      locale: locale === 'uk' ? 'uk_UA' : 'en_US',
      type: 'website',
      images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('twitterTitle'),
      description: t('twitterDescription'),
      images: ['/og-image.png'],
    },
  };
}

// Locale-specific JSON-LD schemas. FAQ questions are pulled from translations so each
// locale emits its own structured data.
async function getJsonLd(locale: string) {
  const t = await getTranslations({ locale, namespace: 'jsonLd' });
  const faq = await getTranslations({ locale, namespace: 'faq.items' });

  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Draft2Live',
    url: 'https://draft2live.ai',
    logo: 'https://draft2live.ai/logo.svg',
    description: t('orgDescription'),
  };

  const appSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Draft2Live',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'AggregateOffer', lowPrice: '0', highPrice: '399', priceCurrency: 'USD', offerCount: '4' },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.8', ratingCount: '127' },
  };

  // Read the 6 FAQ items from translations
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [0, 1, 2, 3, 4, 5].map((i) => ({
      '@type': 'Question',
      name: faq(`${i}.q`),
      acceptedAnswer: { '@type': 'Answer', text: faq(`${i}.aPlain`) },
    })),
  };

  return { orgSchema, appSchema, faqSchema };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  const { orgSchema, appSchema, faqSchema } = await getJsonLd(locale);

  return (
    <NextIntlClientProvider>
      <LangSync locale={locale} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <EarlyAccessProvider>
        {children}
        <EarlyAccessModal />
      </EarlyAccessProvider>
    </NextIntlClientProvider>
  );
}

'use client';
import { useTranslations } from 'next-intl';

const productHrefs = ['#features', '#pricing', '#', '#', '#'];
const companyHrefs = ['#', '#', 'mailto:info@draft2live.ai', '#'];
const languageHrefs = ['/uk/', '/en/', '/ru/', '/pl/'];
const legalHrefs = ['/terms', '/privacy', '/cookies'];

function LinkedInIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.492-1.302.48-.428-.013-1.252-.242-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}

export default function Footer() {
  const t = useTranslations('footer');
  const productLabels = t.raw('product.links') as string[];
  const companyLabels = t.raw('company.links') as string[];
  const languageLabels = t.raw('languages.links') as string[];
  const legalLabels = t.raw('legal.links') as string[];
  const productLinks = productLabels.map((label, i) => ({ label, href: productHrefs[i] }));
  const companyLinks = companyLabels.map((label, i) => ({ label, href: companyHrefs[i] }));
  const languages = languageLabels.map((label, i) => ({ label, href: languageHrefs[i] }));
  const legalLinks = legalLabels.map((label, i) => ({ label, href: legalHrefs[i] }));

  return (
    <footer className="bg-darker border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand column — wider */}
          <div className="md:col-span-5">
            <a href="/" className="inline-block mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo-white.svg" alt="Draft2Live" className="h-10" />
            </a>
            <p className="text-text-secondary text-sm leading-relaxed mb-6 max-w-sm">
              {t('brand.description')}
            </p>
            {/* Newsletter inline */}
            <div className="flex w-full max-w-sm mb-6">
              <input
                type="email"
                placeholder={t('brand.newsletterPlaceholder')}
                aria-label={t('brand.newsletterAriaLabel')}
                className="flex-1 min-w-0 px-4 py-2.5 bg-transparent border border-white/20 rounded-l-xl text-white text-sm placeholder-text-muted focus:outline-none focus:border-primary/50 transition-colors"
              />
              <button className="px-5 py-2.5 bg-teal-600 hover:bg-teal-500 text-white text-sm font-bold rounded-r-xl hover:shadow-lg hover:shadow-teal-500/20 transition-all cursor-pointer shrink-0">
                {t('brand.subscribe')}
              </button>
            </div>
            <div className="flex items-center gap-3">
              {[
                { icon: <LinkedInIcon />, href: '#', label: 'LinkedIn' },
                { icon: <XIcon />, href: '#', label: 'X' },
                { icon: <YouTubeIcon />, href: '#', label: 'YouTube' },
                { icon: <TelegramIcon />, href: '#', label: 'Telegram' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg border border-border bg-card flex items-center justify-center text-text-muted hover:text-white hover:border-primary/30 hover:bg-card-hover transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Product column */}
          <div className="md:col-span-2 md:col-start-7">
            <h4 className="text-white font-semibold text-sm mb-4">
              {t('product.title')}
            </h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-text-secondary text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div className="md:col-span-2">
            <h4 className="text-white font-semibold text-sm mb-4">
              {t('company.title')}
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-text-secondary text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Languages column */}
          <div className="md:col-span-2">
            <h4 className="text-white font-semibold text-sm mb-4">
              {t('languages.title')}
            </h4>
            <ul className="space-y-3">
              {languages.map((lang) => (
                <li key={lang.label}>
                  <a
                    href={lang.href}
                    className="text-text-secondary text-sm hover:text-white transition-colors"
                  >
                    {lang.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-sm">{t('copyright')}</p>
          <div className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-text-muted text-sm hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

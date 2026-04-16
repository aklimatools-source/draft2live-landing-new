'use client';
import { useEffect } from 'react';

// Sets <html lang="..."> on the client to match the current locale. Required because
// the root layout hardcodes lang="uk" (static export can't mutate html from nested
// layouts at build time). Accessibility/SEO crawlers that execute JS will see the
// correct value; pure-HTML crawlers see "uk" which is acceptable for the default
// locale and a minor compromise for /en/.
export default function LangSync({ locale }: { locale: string }) {
  useEffect(() => {
    if (document.documentElement.lang !== locale) {
      document.documentElement.lang = locale;
    }
  }, [locale]);
  return null;
}

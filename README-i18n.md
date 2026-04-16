# i18n Setup — Draft2Live Landing

This branch (`i18n/setup`) adds [next-intl](https://next-intl.dev/) to the project so the landing page can be served in multiple languages. Ukrainian (`uk`) is the default; English (`en`) is currently a placeholder copy of Ukrainian that you need to translate.

## What's already done

- `next-intl` installed and configured for Next.js 16 static export.
- All hardcoded Ukrainian strings from 15 components extracted into `messages/uk.json`.
- Components now call `useTranslations()` instead of literal text.
- Routes restructured under `src/app/[locale]/` so build outputs `/uk/` and `/en/` statically.
- Root `/` redirects to `/uk/` (client-side).
- Build passes: `npm run build` → 9 static pages generated.

## Adding a new language (e.g. Polish)

1. **Add the locale code** to `src/i18n/routing.ts`:
   ```ts
   locales: ['uk', 'en', 'pl'],
   ```
2. **Create `messages/pl.json`** by copying `messages/uk.json` and translating all string values. Do NOT change keys — only values.
3. **Update `<html lang>`** — nothing to do, `LangSync.tsx` handles it via client-side effect.
4. **Update metadata in `src/app/[locale]/layout.tsx`** if you want a locale-specific OG URL, etc. The existing `generateMetadata()` already reads from `messages/*.json:metadata.*`.
5. **Run `npm run build`** — the build will generate `/pl/` automatically thanks to `generateStaticParams()`.
6. **Add a language switcher option** (see below).

## Translating `uk.json` → `en.json`

Open `messages/en.json`. It's currently a copy of Ukrainian. Translate **only the values** (the text after `:`), keeping all keys exactly as they are.

### Rules

- **Keep keys unchanged** — `"title": "Українською"` → `"title": "In English"` (key `title` stays).
- **Keep brand names as-is**: `Draft2Live`, `WordPress`, `Drupal`, `Brand Voice`, `Knowledge Base`, `SERP`, `SEO`, `CMS`, `ChatGPT`, `Google`.
- **Keep email addresses and URLs as-is**: `hello@draft2live.ai`, `draft2live.ai`.
- **Keep `{placeholders}` untouched**: `"progress": "{current} з {total}"` → `"progress": "{current} of {total}"`. The `{current}` and `{total}` names must stay exactly.
- **Numbers are numeric in code** — if you see `"price": "$49"` that's fine, don't convert to local currency; that's handled elsewhere.
- **JSON arrays stay arrays** — don't change structure, only text inside.

### Testing your translation locally

```bash
npm install
npm run dev
# Open http://localhost:3000/uk/ and http://localhost:3000/en/
```

If you see a raw key like `hero.title` instead of actual text in the browser, it means that key is missing or misspelled in your JSON file.

### Building for production

```bash
npm run build
# Output: ./out/ — static HTML/CSS/JS, deployable to any static host
```

## Project structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout, html/body, fonts
│   ├── page.tsx                # / — redirects to /uk/
│   ├── [locale]/
│   │   ├── layout.tsx          # Locale layout — NextIntlClientProvider, JSON-LD, providers
│   │   └── page.tsx            # Home page (Hero, Features, etc)
│   ├── cookies/                # Legal pages (currently UA-only, wrapped in hardcoded uk provider)
│   ├── privacy/
│   └── terms/
├── i18n/
│   ├── routing.ts              # Supported locales, default
│   ├── request.ts              # getRequestConfig — loads messages per locale
│   └── navigation.ts           # Locale-aware Link/redirect helpers
├── components/
│   ├── Navigation.tsx          # Uses useTranslations('nav')
│   ├── sections/*.tsx          # Hero, Features, Pricing, etc — all use useTranslations
│   └── ui/
│       ├── EarlyAccessModal.tsx  # Uses useTranslations('earlyAccess')
│       ├── LangSync.tsx          # Client effect to set <html lang>
│       └── ...
messages/
├── uk.json                     # Source of truth (Ukrainian)
└── en.json                     # Translation target (currently = uk.json)
```

## Legal pages note

`src/app/cookies/`, `/privacy/`, `/terms/` are NOT under `[locale]/`. They render in Ukrainian regardless of locale, wrapped in a hardcoded `uk` provider. This is intentional because legal content requires lawyer review and shouldn't be community-translated. When you have lawyer-approved English versions, move these pages under `[locale]/` and add `en` variants.

## Language switcher

Not yet implemented. To add one in `src/components/Navigation.tsx`:

```tsx
import { useLocale } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';

function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  return (
    <div className="flex gap-2">
      {['uk', 'en'].map(l => (
        <Link key={l} href={pathname} locale={l}
          className={locale === l ? 'text-white' : 'text-text-muted'}>
          {l.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
```

Drop that inside Navigation.tsx where you want it visible.

## Troubleshooting

- **`Error: Couldn't find next-intl config file`** → make sure `src/i18n/request.ts` exists and `next.config.ts` wraps config with `withNextIntl('./src/i18n/request.ts')`.
- **Missing key errors during build** → a string is missing in `en.json`. Either add it or copy the uk value as a temporary placeholder.
- **`hasLocale` import error** → import from `'next-intl'`, not `'next-intl/server'` (next-intl 4.x).
- **Build fails with `notFound()` during prerender** → check that `routing.locales` contains the locale you're generating, and that `generateStaticParams()` returns all locales.

## Current build command

```bash
npm run build     # Produces static output in ./out/
```

Deploy `./out/*` to any static host (nginx, Caddy, Netlify, Vercel, Cloudflare Pages, etc).

Current production: `http://91.98.76.51:8890/` (Hetzner static server).

## Questions

Ask in Slack/email if anything is unclear. The i18n infrastructure is designed to be simple: translate JSON, add locale code, build, deploy. No component code changes needed for new languages unless you're adding new features with new strings.

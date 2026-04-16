'use client';
import { useEffect } from 'react';
import { routing } from '@/i18n/routing';

// Root "/" path — redirects to the default locale. Required for static export
// because there's no server middleware to rewrite the request.
export default function RootRedirect() {
  useEffect(() => {
    window.location.replace(`/${routing.defaultLocale}/`);
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#031931',
      color: '#fff',
      fontFamily: 'sans-serif',
      fontSize: '14px',
    }}>
      <noscript>
        <meta httpEquiv="refresh" content={`0; url=/${routing.defaultLocale}/`} />
        <a href={`/${routing.defaultLocale}/`} style={{ color: '#04b8b7' }}>
          Continue to {routing.defaultLocale}
        </a>
      </noscript>
    </div>
  );
}

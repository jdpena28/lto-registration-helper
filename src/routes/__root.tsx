import {
  HeadContent,
  Link,
  Scripts,
  createRootRoute,
} from '@tanstack/react-router'
import type { ReactNode } from 'react'
import { A11yProvider } from '../components/common/A11yContext'
import { FontSizeToggle } from '../components/common/FontSizeToggle'
import { ContrastToggle } from '../components/common/ContrastToggle'
import { JsonLd } from '../components/common/JsonLd'
import { copy } from '../config/copy'
import { meta } from '../config/meta'
import { siteMeta, SITE_URL } from '../config/seo'
import appCss from '../styles/globals.css?url'

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: siteMeta.siteName,
      description: siteMeta.defaultDescription,
      inLanguage: 'fil-PH',
      publisher: { '@id': `${SITE_URL}/#organization` },
    },
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: siteMeta.siteName,
      url: SITE_URL,
      areaServed: 'Philippines',
      knowsAbout: [
        'LTO registration Philippines',
        'motor vehicle registration renewal',
        'LTO fees Philippines',
      ],
    },
  ],
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'robots', content: 'index, follow' },
      { title: siteMeta.defaultTitle },
      { name: 'description', content: siteMeta.defaultDescription },
      { property: 'og:site_name', content: siteMeta.siteName },
      { property: 'og:locale', content: siteMeta.locale },
      { property: 'og:image', content: siteMeta.ogImage },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { name: 'twitter:card', content: siteMeta.twitterCard },
      { name: 'twitter:image', content: siteMeta.ogImage },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="fil">
      <head>
        <HeadContent />
      </head>
      <body>
        <A11yProvider>
          <Header />
          <main id="main" className="mx-auto max-w-2xl px-4 pb-16">
            {children}
          </main>
          <Footer />
        </A11yProvider>
        <JsonLd data={websiteJsonLd} />
        <Scripts />
      </body>
    </html>
  )
}

function Header() {
  return (
    <header
      className="sticky top-0 z-40 border-b-2 py-3 px-4"
      style={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border-color)' }}
    >
      <div className="mx-auto max-w-2xl">
        <div className="flex items-start justify-between gap-2 mb-3">
          <div>
            <Link to="/" className="block hover:opacity-80 transition-opacity">
              <h1
                className="text-xl font-black leading-tight"
                style={{ color: 'var(--text-primary)' }}
              >
                🚗 {copy.appTitle}
              </h1>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                {copy.appSubtitle}
              </p>
            </Link>
          </div>
          <div className="flex items-center gap-2 shrink-0 flex-wrap justify-end">
            <FontSizeToggle />
            <ContrastToggle />
          </div>
        </div>

        <nav aria-label="Mga seksyon" className="flex gap-2 flex-wrap">
          {[
            { to: '/renewal-schedule' as const, label: copy.nav.schedule },
            { to: '/registration-fees' as const, label: copy.nav.fees },
            { to: '/memos' as const, label: copy.nav.memos },
            { to: '/faq' as const, label: 'FAQ' },
            { to: '/guides' as const, label: 'Mga Gabay' },
          ].map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="rounded-lg bg-red-600 px-4 py-2 text-sm font-bold text-white hover:bg-red-700 active:bg-red-800 transition-colors"
              activeProps={{ className: 'rounded-lg bg-red-800 px-4 py-2 text-sm font-bold text-white' }}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer
      className="border-t-2 mt-12 px-4 py-8"
      style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-secondary)' }}
    >
      <div className="mx-auto max-w-2xl space-y-4">
        <div className="rounded-lg border border-yellow-300 bg-yellow-50 p-3">
          <p className="text-sm font-semibold text-yellow-700">⚠️ {meta.disclaimer}</p>
        </div>

        <div>
          <p className="text-sm font-bold mb-2" style={{ color: 'var(--text-secondary)' }}>
            {copy.footer.sources}:
          </p>
          <ul className="space-y-1">
            {meta.sources.map((src) => (
              <li key={src.url}>
                <a
                  href={src.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 underline hover:text-blue-800"
                >
                  {src.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Site links" className="flex flex-wrap gap-3 text-sm">
          {[
            { to: '/' as const, label: 'Home' },
            { to: '/renewal-schedule' as const, label: 'Renewal Schedule' },
            { to: '/registration-fees' as const, label: 'Registration Fees' },
            { to: '/memos' as const, label: 'LTO Memos' },
            { to: '/faq' as const, label: 'FAQ' },
            { to: '/guides' as const, label: 'Mga Gabay' },
          ].map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="text-blue-600 underline hover:text-blue-800"
            >
              {label}
            </Link>
          ))}
        </nav>

        <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
          {copy.footer.lastUpdated}: {meta.lastUpdated}
        </p>
      </div>
    </footer>
  )
}

import { createFileRoute, Link } from '@tanstack/react-router'
import { JsonLd } from '../components/common/JsonLd'
import { buildRouteMeta, buildCanonical, SITE_URL } from '../config/seo'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: buildRouteMeta('/'),
    links: buildCanonical('/'),
  }),
  component: HomePage,
})

const webAppJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'LTO Registration Helper',
  url: SITE_URL,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web Browser',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'PHP' },
  description:
    'Libre at madaling gamitin na tool para malaman ang LTO renewal schedule, kalkulahin ang registration fees, at basahin ang LTO memos sa Pilipinas.',
  inLanguage: 'fil-PH',
  areaServed: 'Philippines',
}

function HomePage() {
  return (
    <>
      <JsonLd data={webAppJsonLd} />
      <div className="space-y-10 pt-8">
        <section aria-labelledby="home-heading">
          <h1
            id="home-heading"
            className="text-3xl font-black mb-3 leading-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            LTO Registration Helper
          </h1>
          <p className="text-lg mb-2" style={{ color: 'var(--text-secondary)' }}>
            Gabay sa pagpapatala at pag-renew ng sasakyan sa Pilipinas.
          </p>
          <p style={{ color: 'var(--text-secondary)' }}>
            Piliin ang tool na kailangan mo:
          </p>
        </section>

        <div className="grid gap-4 sm:grid-cols-2">
          <ToolCard
            to="/renewal-schedule"
            emoji="📅"
            title="Kailan Mag-renew?"
            description="Alamin ang iyong LTO renewal schedule batay sa plate number. Para sa kotse, SUV, motorsiklo, at lahat ng sasakyan."
            cta="Tingnan ang Schedule"
          />
          <ToolCard
            to="/registration-fees"
            emoji="💰"
            title="Magkano ang Bayad?"
            description="Kalkulahin ang LTO registration fees — MVUC, computer fee, sticker, CTPL insurance, at multa para sa late renewal."
            cta="Kalkulahin ang Fees"
          />
          <ToolCard
            to="/memos"
            emoji="📋"
            title="LTO Memos at Patakaran"
            description="Plain-language na buod ng mga opisyal na LTO memorandum: renewal schedule, penalties, EV discount, at advance renewal."
            cta="Basahin ang Memos"
          />
          <ToolCard
            to="/faq"
            emoji="❓"
            title="Mga Madalas Itanong"
            description="Sagot sa mga karaniwang tanong tungkol sa LTO registration renewal sa Pilipinas."
            cta="Tingnan ang FAQ"
          />
        </div>

        <section aria-labelledby="guides-heading">
          <h2
            id="guides-heading"
            className="text-xl font-black mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            📖 Mga Gabay
          </h2>
          <ul className="space-y-3">
            {[
              {
                to: '/guides/how-to-renew-lto-registration' as const,
                title: 'Paano Mag-renew ng LTO Registration (2026 Guide)',
                desc: 'Hakbang-hakbang na proseso, requirements, at mga tip.',
              },
              {
                to: '/guides/lto-plate-number-schedule-explained' as const,
                title: 'Paano Basahin ang LTO Plate Number Schedule',
                desc: 'Paliwanag kung paano matukoy ang buwan at linggo ng renewal.',
              },
              {
                to: '/guides/lto-late-registration-penalty' as const,
                title: 'LTO Late Registration Penalty — Magkano ang Multa?',
                desc: 'Ang mga surcharge at kung paano maiwasan ang malaking multa.',
              },
            ].map(({ to, title, desc }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="block rounded-lg border-2 p-4 hover:border-red-400 transition-colors"
                  style={{ borderColor: 'var(--border-color)' }}
                >
                  <p className="font-bold text-blue-700 underline">{title}</p>
                  <p className="text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>
                    {desc}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-3">
            <Link
              to="/guides"
              className="text-sm text-blue-600 underline hover:text-blue-800"
            >
              Tingnan ang lahat ng gabay →
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}

function ToolCard({
  to,
  emoji,
  title,
  description,
  cta,
}: {
  to: '/renewal-schedule' | '/registration-fees' | '/memos' | '/faq'
  emoji: string
  title: string
  description: string
  cta: string
}) {
  return (
    <Link
      to={to}
      className="block rounded-xl border-2 p-5 hover:border-red-400 transition-colors group"
      style={{ borderColor: 'var(--border-color)' }}
    >
      <div className="text-2xl mb-2">{emoji}</div>
      <h2
        className="text-lg font-black mb-2 group-hover:text-red-700 transition-colors"
        style={{ color: 'var(--text-primary)' }}
      >
        {title}
      </h2>
      <p className="text-sm mb-3" style={{ color: 'var(--text-secondary)' }}>
        {description}
      </p>
      <span className="text-sm font-bold text-red-600 group-hover:text-red-700">
        {cta} →
      </span>
    </Link>
  )
}

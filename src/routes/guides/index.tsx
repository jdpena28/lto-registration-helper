import { createFileRoute, Link } from '@tanstack/react-router'
import { Breadcrumbs } from '../../components/common/Breadcrumbs'
import { buildRouteMeta, buildCanonical } from '../../config/seo'

export const Route = createFileRoute('/guides/')({
  head: () => ({
    meta: buildRouteMeta('/guides'),
    links: buildCanonical('/guides'),
  }),
  component: GuidesIndexPage,
})

const guides = [
  {
    to: '/guides/how-to-renew-lto-registration' as const,
    emoji: '🔄',
    title: 'Paano Mag-renew ng LTO Registration (2026 Guide)',
    desc: 'Kumpleto na hakbang-hakbang na gabay sa pag-renew ng LTO registration sa Pilipinas. Kasama ang requirements, proseso, fees, at mga tip.',
    category: 'Proseso',
  },
  {
    to: '/guides/lto-plate-number-schedule-explained' as const,
    emoji: '🔢',
    title: 'Paano Basahin ang LTO Plate Number Schedule',
    desc: 'Detalyadong paliwanag kung paano matukoy ang buwan at linggo ng renewal batay sa format ng plate number sa Pilipinas.',
    category: 'Schedule',
  },
  {
    to: '/guides/lto-late-registration-penalty' as const,
    emoji: '⚠️',
    title: 'LTO Late Registration Penalty — Magkano ang Multa?',
    desc: 'Alamin ang lahat ng surcharge at penalty para sa late LTO registration renewal at kung paano maiwasan ang mataas na bayad.',
    category: 'Multa',
  },
]

function GuidesIndexPage() {
  return (
    <div className="pt-6 space-y-6">
      <Breadcrumbs items={[{ label: 'Mga Gabay', href: '/guides' }]} />

      <section aria-labelledby="guides-heading">
        <h1
          id="guides-heading"
          className="text-2xl font-black mb-2"
          style={{ color: 'var(--text-primary)' }}
        >
          📖 Mga Gabay sa LTO Registration
        </h1>
        <p className="mb-8" style={{ color: 'var(--text-secondary)' }}>
          Mga detalyadong gabay tungkol sa LTO registration renewal sa Pilipinas para 2026.
        </p>

        <ul className="space-y-4">
          {guides.map(({ to, emoji, title, desc, category }) => (
            <li key={to}>
              <Link
                to={to}
                className="block rounded-xl border-2 p-5 hover:border-red-400 transition-colors group"
                style={{ borderColor: 'var(--border-color)' }}
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl shrink-0">{emoji}</span>
                  <div>
                    <span
                      className="inline-block text-xs font-bold px-2 py-0.5 rounded-full mb-2"
                      style={{ backgroundColor: 'var(--bg-secondary)', color: 'var(--text-secondary)' }}
                    >
                      {category}
                    </span>
                    <h2
                      className="font-black text-lg leading-tight mb-2 group-hover:text-red-700 transition-colors"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {title}
                    </h2>
                    <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                      {desc}
                    </p>
                    <p className="text-sm font-bold text-red-600 mt-2 group-hover:text-red-700">
                      Basahin →
                    </p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

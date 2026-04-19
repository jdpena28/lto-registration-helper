import { createFileRoute, Link } from '@tanstack/react-router'
import { Breadcrumbs } from '../../components/common/Breadcrumbs'
import { JsonLd } from '../../components/common/JsonLd'
import { buildRouteMeta, buildCanonical, SITE_URL } from '../../config/seo'

export const Route = createFileRoute('/guides/lto-late-registration-penalty')({
  head: () => ({
    meta: buildRouteMeta('/guides/lto-late-registration-penalty'),
    links: buildCanonical('/guides/lto-late-registration-penalty'),
  }),
  component: LatePenaltyGuidePage,
})

function LatePenaltyGuidePage() {
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'LTO Late Registration Penalty 2026 — Magkano ang Multa?',
    description:
      'Alamin ang mga multa para sa late LTO registration renewal sa Pilipinas 2026. Kasama ang surcharge, MVUC penalty, at kung paano maiwasan ang mataas na bayad.',
    url: `${SITE_URL}/guides/lto-late-registration-penalty`,
    inLanguage: 'fil-PH',
    datePublished: '2026-04-19',
    dateModified: '2026-04-19',
    publisher: {
      '@type': 'Organization',
      name: 'LTO Registration Helper',
      url: SITE_URL,
    },
    author: {
      '@type': 'Organization',
      name: 'LTO Registration Helper',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/guides/lto-late-registration-penalty`,
    },
  }

  return (
    <>
      <JsonLd data={articleJsonLd} />
      <article className="pt-6 space-y-6">
        <Breadcrumbs
          items={[
            { label: 'Mga Gabay', href: '/guides' },
            { label: 'Late Registration Penalty', href: '/guides/lto-late-registration-penalty' },
          ]}
        />

        <header>
          <h1
            className="text-2xl font-black mb-2 leading-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            ⚠️ LTO Late Registration Penalty — Magkano ang Multa? (2026)
          </h1>
          <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
            Huling na-update: Abril 19, 2026
          </p>
        </header>

        <p style={{ color: 'var(--text-secondary)' }}>
          Kapag hindi ka nag-renew ng LTO registration sa iyong itinakdang linggo at buwan, may
          karagdagang bayad na tinatawag na <strong>penalty</strong> o <strong>surcharge</strong>.
          Ang laki ng multa ay depende sa kung gaano na katagal kang huli.
        </p>

        <section aria-labelledby="penalty-table-heading">
          <h2
            id="penalty-table-heading"
            className="text-xl font-black mb-3"
            style={{ color: 'var(--text-primary)' }}
          >
            Talahanayan ng Multa
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: 'var(--bg-secondary)' }}>
                  <th className="border-2 p-2 text-left font-bold" style={{ borderColor: 'var(--border-color)' }}>Tagal ng Pagkaantala</th>
                  <th className="border-2 p-2 text-left font-bold" style={{ borderColor: 'var(--border-color)' }}>Kotse / SUV</th>
                  <th className="border-2 p-2 text-left font-bold" style={{ borderColor: 'var(--border-color)' }}>Motorsiklo</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Nasa itinakdang linggo pa', 'Walang multa', 'Walang multa'],
                  ['Huli sa linggo, nasa buwan pa', '+ ₱200 surcharge', '+ ₱100 surcharge'],
                  ['1–11 buwan na huli', '+ 50% ng MVUC', '+ 50% ng MVUC'],
                  ['12 buwan o higit', '+ 50% ng MVUC + ₱10,000 fine (posible)', '+ 50% ng MVUC + fine (posible)'],
                ].map(([period, car, moto], i) => (
                  <tr key={i} style={i === 3 ? { backgroundColor: '#fff1f2' } : {}}>
                    <td className="border-2 p-2 font-medium" style={{ borderColor: 'var(--border-color)' }}>{period}</td>
                    <td className="border-2 p-2" style={{ borderColor: 'var(--border-color)', color: i >= 2 ? '#dc2626' : undefined }}>{car}</td>
                    <td className="border-2 p-2" style={{ borderColor: 'var(--border-color)', color: i >= 2 ? '#dc2626' : undefined }}>{moto}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-2 italic" style={{ color: 'var(--text-secondary)' }}>
            ⚠️ Ang penalty ay nararapat sa MVUC portion lamang, hindi sa buong registration fee.
          </p>
        </section>

        <section aria-labelledby="mvuc-heading">
          <h2
            id="mvuc-heading"
            className="text-xl font-black mb-3"
            style={{ color: 'var(--text-primary)' }}
          >
            Ano ang 50% ng MVUC sa Peso?
          </h2>
          <p className="text-sm mb-3" style={{ color: 'var(--text-secondary)' }}>
            Ang MVUC (Motor Vehicle User's Charge) ay nag-iiba ayon sa uri at displacement ng
            sasakyan. Narito ang mga halimbawa:
          </p>
          <div className="space-y-2">
            {[
              { type: 'Motorsiklo (hanggang 200cc)', mvuc: '₱240', penalty50: '₱120' },
              { type: 'Motorsiklo (201–400cc)', mvuc: '₱480', penalty50: '₱240' },
              { type: 'Kotse (hanggang 1600cc)', mvuc: '₱3,000–₱4,000', penalty50: '₱1,500–₱2,000' },
              { type: 'Kotse (1601–2000cc)', mvuc: '₱4,000–₱4,500', penalty50: '₱2,000–₱2,250' },
              { type: 'Kotse (higit sa 2000cc)', mvuc: '₱4,500–₱8,000+', penalty50: '₱2,250–₱4,000+' },
            ].map(({ type, mvuc, penalty50 }) => (
              <div
                key={type}
                className="flex justify-between items-center rounded-lg border-2 p-3 text-sm"
                style={{ borderColor: 'var(--border-color)' }}
              >
                <div>
                  <p className="font-bold" style={{ color: 'var(--text-primary)' }}>{type}</p>
                  <p style={{ color: 'var(--text-secondary)' }}>MVUC: {mvuc}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>50% penalty:</p>
                  <p className="font-bold text-red-600">{penalty50}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="consequences-heading">
          <h2
            id="consequences-heading"
            className="text-xl font-black mb-3"
            style={{ color: 'var(--text-primary)' }}
          >
            Anong Mangyayari kung Nahuli sa Kalsada?
          </h2>
          <ul className="space-y-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
            <li className="flex gap-2"><span>🚔</span><span>Maaaring ma-apprehend ng traffic enforcer o LTO enforcer.</span></li>
            <li className="flex gap-2"><span>🚗</span><span>Maaaring ma-impound ang sasakyan, lalo na kung 12 buwan o higit na huli.</span></li>
            <li className="flex gap-2"><span>💸</span><span>Dagdag na proseso at bayad para makuha ang sasakyan mula sa impound.</span></li>
            <li className="flex gap-2"><span>📋</span><span>Kailangan pang bayaran ang lahat ng penalty bago maibalik ang sasakyan.</span></li>
          </ul>
        </section>

        <section aria-labelledby="avoid-heading">
          <h2
            id="avoid-heading"
            className="text-xl font-black mb-3"
            style={{ color: 'var(--text-primary)' }}
          >
            Paano Maiwasan ang Malaking Multa
          </h2>
          <ul className="space-y-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
            <li className="flex gap-2"><span>✅</span><span><strong>Mag-renew nang maaga</strong> — pinapayagan ang advance renewal hanggang 2 buwan bago mag-expire.</span></li>
            <li className="flex gap-2"><span>📅</span><span><strong>Alamin ang schedule mo</strong> — gamitin ang aming <Link to="/renewal-schedule" className="text-red-600 underline">schedule checker</Link> para hindi ka mahuli.</span></li>
            <li className="flex gap-2"><span>🔔</span><span><strong>Mag-set ng reminder</strong> — i-mark ang kalendaryo isang buwan bago ang iyong renewal month.</span></li>
            <li className="flex gap-2"><span>💰</span><span><strong>I-estimate ang fees</strong> — gamitin ang aming <Link to="/registration-fees" className="text-red-600 underline">fee calculator</Link> para maihanda ang pera.</span></li>
          </ul>
        </section>

        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            to="/renewal-schedule"
            className="rounded-lg bg-red-600 px-4 py-2 text-sm font-bold text-white hover:bg-red-700 transition-colors"
          >
            📅 Tingnan ang Schedule
          </Link>
          <Link
            to="/registration-fees"
            className="rounded-lg bg-red-600 px-4 py-2 text-sm font-bold text-white hover:bg-red-700 transition-colors"
          >
            💰 Kalkulahin ang Fees (kasama ang multa)
          </Link>
        </div>
      </article>
    </>
  )
}

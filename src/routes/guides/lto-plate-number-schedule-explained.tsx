import { createFileRoute, Link } from '@tanstack/react-router'
import { Breadcrumbs } from '../../components/common/Breadcrumbs'
import { JsonLd } from '../../components/common/JsonLd'
import { buildRouteMeta, buildCanonical, SITE_URL } from '../../config/seo'

export const Route = createFileRoute('/guides/lto-plate-number-schedule-explained')({
  head: () => ({
    meta: buildRouteMeta('/guides/lto-plate-number-schedule-explained'),
    links: buildCanonical('/guides/lto-plate-number-schedule-explained'),
  }),
  component: PlateScheduleGuidePage,
})

function PlateScheduleGuidePage() {
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Paano Basahin ang LTO Plate Number Schedule — Kailan Mag-renew?',
    description:
      'Ipaliwanag ang LTO plate number renewal schedule system: paano matukoy ang buwan at linggo ng renewal batay sa iyong plate number format sa Pilipinas.',
    url: `${SITE_URL}/guides/lto-plate-number-schedule-explained`,
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
      '@id': `${SITE_URL}/guides/lto-plate-number-schedule-explained`,
    },
  }

  return (
    <>
      <JsonLd data={articleJsonLd} />
      <article className="pt-6 space-y-6">
        <Breadcrumbs
          items={[
            { label: 'Mga Gabay', href: '/guides' },
            { label: 'Plate Number Schedule', href: '/guides/lto-plate-number-schedule-explained' },
          ]}
        />

        <header>
          <h1
            className="text-2xl font-black mb-2 leading-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            🔢 Paano Basahin ang LTO Plate Number Schedule
          </h1>
          <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
            Huling na-update: Abril 19, 2026
          </p>
        </header>

        <p style={{ color: 'var(--text-secondary)' }}>
          Ang LTO ay gumagamit ng isang sistema kung saan ang iyong plate number ang nagtatakda
          kung kailan ka dapat mag-renew ng iyong vehicle registration. Ito ay tinatawag na
          "plate number coding scheme" o renewal schedule. Sa gabay na ito, ipapaliwanag namin
          kung paano ito gumagana.
        </p>

        <section aria-labelledby="month-heading">
          <h2
            id="month-heading"
            className="text-xl font-black mb-3"
            style={{ color: 'var(--text-primary)' }}
          >
            Hakbang 1: Ang Huling Numero = Buwan ng Renewal
          </h2>
          <p className="text-sm mb-3" style={{ color: 'var(--text-secondary)' }}>
            Tingnan ang <strong>huling numero</strong> ng numeric na bahagi ng iyong plate number.
            Ito ang nagtatakda ng <strong>buwan ng renewal</strong> mo:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: 'var(--bg-secondary)' }}>
                  <th className="border-2 p-2 text-left font-bold" style={{ borderColor: 'var(--border-color)' }}>Huling Numero</th>
                  <th className="border-2 p-2 text-left font-bold" style={{ borderColor: 'var(--border-color)' }}>Buwan ng Renewal</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['1', 'Enero (January)'],
                  ['2', 'Pebrero (February)'],
                  ['3', 'Marso (March)'],
                  ['4', 'Abril (April)'],
                  ['5', 'Mayo (May)'],
                  ['6', 'Hunyo (June)'],
                  ['7', 'Hulyo (July)'],
                  ['8', 'Agosto (August)'],
                  ['9', 'Setyembre (September)'],
                  ['0', 'Oktubre (October)'],
                ].map(([num, month]) => (
                  <tr key={num}>
                    <td className="border-2 p-2 font-mono font-bold" style={{ borderColor: 'var(--border-color)' }}>{num}</td>
                    <td className="border-2 p-2" style={{ borderColor: 'var(--border-color)' }}>{month}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm mt-2" style={{ color: 'var(--text-secondary)' }}>
            Halimbawa: Kung ang iyong plate ay <strong>ABC-1234</strong>, ang huling numero ay
            <strong> 4</strong>, kaya ang renewal mo ay sa <strong>Abril</strong>.
          </p>
        </section>

        <section aria-labelledby="week-heading">
          <h2
            id="week-heading"
            className="text-xl font-black mb-3"
            style={{ color: 'var(--text-primary)' }}
          >
            Hakbang 2: Ang Ikalawang Digit mula sa Dulo = Linggo ng Renewal
          </h2>
          <p className="text-sm mb-3" style={{ color: 'var(--text-secondary)' }}>
            Tingnan ang <strong>ikalawang digit mula sa dulo</strong> ng numeric na bahagi.
            Ito ang nagtatakda ng <strong>linggo ng buwan</strong> na dapat kang mag-renew:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: 'var(--bg-secondary)' }}>
                  <th className="border-2 p-2 text-left font-bold" style={{ borderColor: 'var(--border-color)' }}>Ikalawang Digit</th>
                  <th className="border-2 p-2 text-left font-bold" style={{ borderColor: 'var(--border-color)' }}>Linggo ng Renewal</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['1 o 2', 'Linggo 1 (unang linggo ng buwan)'],
                  ['3 o 4', 'Linggo 2 (ikalawang linggo)'],
                  ['5 o 6', 'Linggo 3 (ikatlong linggo)'],
                  ['7, 8, o 9', 'Linggo 4 (ikaapat na linggo)'],
                ].map(([digit, week]) => (
                  <tr key={digit}>
                    <td className="border-2 p-2 font-mono font-bold" style={{ borderColor: 'var(--border-color)' }}>{digit}</td>
                    <td className="border-2 p-2" style={{ borderColor: 'var(--border-color)' }}>{week}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm mt-2" style={{ color: 'var(--text-secondary)' }}>
            Halimbawa: Plate <strong>ABC-1234</strong> → ikalawang digit mula sa dulo ay
            <strong> 3</strong>, kaya ang renewal ay sa <strong>Linggo 2 ng Abril</strong>.
          </p>
        </section>

        <section aria-labelledby="formats-heading">
          <h2
            id="formats-heading"
            className="text-xl font-black mb-3"
            style={{ color: 'var(--text-primary)' }}
          >
            Mga Format ng Plate Number sa Pilipinas
          </h2>
          <div className="space-y-3">
            {[
              { format: 'ABC-1234', desc: '3 letra + 4 numero — karaniwang sasakyan (kotse, SUV, van)', example: 'Huling numero: 4 → Abril; Ikalawang digit: 3 → Linggo 2' },
              { format: 'AB-1234', desc: '2 letra + 4 numero — motorsiklo', example: 'Huling numero: 4 → Abril; Ikalawang digit: 3 → Linggo 2' },
              { format: '123-AB', desc: '3 numero + 2 letra — mas lumang plaka (moto)', example: 'Huling numero ng numeric part: 3 → Marso' },
              { format: 'AB-123CD', desc: 'Ilang espesyal na format', example: 'Gamitin ang huling numero ng unang numeric group' },
            ].map(({ format, desc, example }) => (
              <div
                key={format}
                className="rounded-lg border-2 p-3 text-sm"
                style={{ borderColor: 'var(--border-color)' }}
              >
                <p className="font-mono font-bold text-lg" style={{ color: 'var(--text-primary)' }}>{format}</p>
                <p style={{ color: 'var(--text-secondary)' }}>{desc}</p>
                <p className="text-xs mt-1 italic" style={{ color: 'var(--text-secondary)' }}>{example}</p>
              </div>
            ))}
          </div>
        </section>

        <div
          className="rounded-lg border border-yellow-300 bg-yellow-50 p-3 text-sm"
        >
          <p className="font-semibold text-yellow-700">
            ⚠️ Tandaan: Ang Nobyembre at Disyembre ay hindi saklaw ng plate number scheme.
            Ang mga sasakyan na itinala sa mga buwang iyon ay may hiwalay na itinakdang petsa.
            I-verify sa iyong CR o sa LTO branch.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            to="/renewal-schedule"
            className="rounded-lg bg-red-600 px-4 py-2 text-sm font-bold text-white hover:bg-red-700 transition-colors"
          >
            📅 Gamitin ang Schedule Checker
          </Link>
        </div>
      </article>
    </>
  )
}

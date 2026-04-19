import { createFileRoute } from '@tanstack/react-router'
import { PlateInput } from '../components/Schedule/PlateInput'
import { Breadcrumbs } from '../components/common/Breadcrumbs'
import { JsonLd } from '../components/common/JsonLd'
import { buildRouteMeta, buildCanonical, SITE_URL } from '../config/seo'

export const Route = createFileRoute('/renewal-schedule')({
  head: () => ({
    meta: buildRouteMeta('/renewal-schedule'),
    links: buildCanonical('/renewal-schedule'),
  }),
  component: RenewalSchedulePage,
})

const webAppJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'LTO Renewal Schedule Checker',
  url: `${SITE_URL}/renewal-schedule`,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web Browser',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'PHP' },
  description:
    'Alamin ang LTO vehicle registration renewal schedule batay sa plate number sa Pilipinas.',
  inLanguage: 'fil-PH',
  areaServed: 'Philippines',
}

function RenewalSchedulePage() {
  return (
    <>
      <JsonLd data={webAppJsonLd} />
      <div className="pt-6 space-y-6">
        <Breadcrumbs items={[{ label: 'Renewal Schedule', href: '/renewal-schedule' }]} />

        <section aria-labelledby="schedule-heading">
          <h1
            id="schedule-heading"
            className="text-2xl font-black mb-2"
            style={{ color: 'var(--text-primary)' }}
          >
            📅 Kailan Ako Mag-re-renew?
          </h1>
          <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>
            Ilagay ang iyong plate number para malaman ang iyong LTO registration renewal schedule.
            Ang buwan at linggo ng renewal ay batay sa iyong plate number format.
          </p>

          <PlateInput />
        </section>

        <section
          aria-labelledby="schedule-info-heading"
          className="rounded-lg border-2 p-4 mt-6"
          style={{ borderColor: 'var(--border-color)' }}
        >
          <h2
            id="schedule-info-heading"
            className="font-bold mb-2"
            style={{ color: 'var(--text-primary)' }}
          >
            Paano gumagana ang LTO plate number schedule?
          </h2>
          <ul className="text-sm space-y-2" style={{ color: 'var(--text-secondary)' }}>
            <li>🔢 Ang <strong>huling numero</strong> ng plate ay nagtatakda ng <strong>buwan ng renewal</strong>: 1=Enero, 2=Pebrero, ..., 9=Setyembre, 0=Oktubre.</li>
            <li>🗓️ Ang <strong>ikalawang digit mula sa dulo</strong> ay nagtatakda ng <strong>linggo ng buwan</strong>: 1–2=Linggo 1, 3–4=Linggo 2, 5–6=Linggo 3, 7–9=Linggo 4.</li>
            <li>⏰ Maaari kang mag-renew nang hanggang <strong>2 buwang maaga</strong> bago mag-expire.</li>
            <li>⚠️ Kapag nalampasan na ang iyong linggo, may karagdagang bayad (surcharge).</li>
          </ul>
        </section>
      </div>
    </>
  )
}

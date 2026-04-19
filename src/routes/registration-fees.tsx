import { createFileRoute } from '@tanstack/react-router'
import { GuidedForm } from '../components/Fees/GuidedForm'
import { Breadcrumbs } from '../components/common/Breadcrumbs'
import { JsonLd } from '../components/common/JsonLd'
import { buildRouteMeta, buildCanonical, SITE_URL } from '../config/seo'

export const Route = createFileRoute('/registration-fees')({
  head: () => ({
    meta: buildRouteMeta('/registration-fees'),
    links: buildCanonical('/registration-fees'),
  }),
  component: RegistrationFeesPage,
})

const webAppJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'LTO Registration Fees Calculator',
  url: `${SITE_URL}/registration-fees`,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web Browser',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'PHP' },
  description:
    'Kalkulahin ang LTO motor vehicle registration fees para sa kotse, motorsiklo, at EV/Hybrid sa Pilipinas.',
  inLanguage: 'fil-PH',
  areaServed: 'Philippines',
}

const howToJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Paano kalkulahin ang LTO registration fees',
  description:
    'Gamitin ang calculator na ito para matantya ang iyong LTO registration fees sa Pilipinas.',
  inLanguage: 'fil-PH',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Piliin ang uri ng sasakyan',
      text: 'Pumili kung kotse/SUV/van o motorsiklo ang iyong sasakyan.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Piliin ang subcategory',
      text: 'Piliin ang mas tiyak na klase ng iyong sasakyan at displacement (cc).',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Sagutin ang mga katanungan',
      text: 'Sagutan ang mga tanong tungkol sa EV/Hybrid discount at uri ng registration (bago o renewal).',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Tingnan ang breakdown',
      text: 'Makikita ang tinantyang MVUC, fixed fees, at multa (kung late) na dapat bayaran.',
    },
  ],
}

function RegistrationFeesPage() {
  return (
    <>
      <JsonLd data={webAppJsonLd} />
      <JsonLd data={howToJsonLd} />
      <div className="pt-6 space-y-6">
        <Breadcrumbs items={[{ label: 'Registration Fees', href: '/registration-fees' }]} />

        <section aria-labelledby="fees-heading">
          <h1
            id="fees-heading"
            className="text-2xl font-black mb-2"
            style={{ color: 'var(--text-primary)' }}
          >
            💰 Magkano ang Bayad?
          </h1>
          <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>
            Sagutan ang mga tanong para matantya ang iyong LTO registration fees. Kasama ang
            MVUC, computer fee, sticker fee, CTPL insurance, at multa para sa late renewal.
          </p>

          <GuidedForm />
        </section>

        <section
          aria-labelledby="fees-info-heading"
          className="rounded-lg border-2 p-4 mt-4"
          style={{ borderColor: 'var(--border-color)' }}
        >
          <h2
            id="fees-info-heading"
            className="font-bold mb-2"
            style={{ color: 'var(--text-primary)' }}
          >
            Ano-ano ang mga bayad sa LTO registration?
          </h2>
          <ul className="text-sm space-y-2" style={{ color: 'var(--text-secondary)' }}>
            <li>📊 <strong>MVUC</strong> (Motor Vehicle User's Charge) — pangunahing bayad batay sa uri at displacement ng sasakyan.</li>
            <li>💻 <strong>Computer Fee</strong> — ₱169 para sa lahat ng sasakyan.</li>
            <li>🏷️ <strong>Sticker Fee</strong> — ₱100 para sa windshield sticker.</li>
            <li>📄 <strong>Certification Fee</strong> — ₱100 para sa OR/CR.</li>
            <li>💨 <strong>Smoke Emission Test</strong> — ₱350–₱700 (kotse), ₱150–₱300 (motorsiklo).</li>
            <li>🛡️ <strong>CTPL Insurance</strong> — Compulsory Third Party Liability, mula ₱350 (moto) hanggang ₱1,200 (kotse).</li>
            <li>⚡ <strong>EV/Hybrid Discount</strong> — 50% diskwento sa MVUC para sa electric at hybrid na sasakyan.</li>
          </ul>
        </section>
      </div>
    </>
  )
}

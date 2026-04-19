import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import { Breadcrumbs } from '../components/common/Breadcrumbs'
import { JsonLd } from '../components/common/JsonLd'
import { buildRouteMeta, buildCanonical } from '../config/seo'

export const Route = createFileRoute('/faq')({
  head: () => ({
    meta: buildRouteMeta('/faq'),
    links: buildCanonical('/faq'),
  }),
  component: FaqPage,
})

const faqs: { q: string; a: string }[] = [
  {
    q: 'Kailan ako dapat mag-renew ng LTO registration?',
    a: 'Ang buwan ng renewal mo ay batay sa huling numero ng iyong plate number: 1=Enero, 2=Pebrero, 3=Marso, 4=Abril, 5=Mayo, 6=Hunyo, 7=Hulyo, 8=Agosto, 9=Setyembre, 0=Oktubre. Ang linggo ng renewal ay batay naman sa ikalawang digit mula sa dulo ng numeric na bahagi ng plate.',
  },
  {
    q: 'Maaari ba akong mag-renew bago ang aking itinakdang buwan?',
    a: 'Oo. Pinapayagan ng LTO ang advance renewal nang hanggang 2 buwang maaga bago mag-expire ang iyong rehistro. Hindi magbabago ang iyong renewal month sa susunod na taon.',
  },
  {
    q: 'Magkano ang multa para sa late LTO registration?',
    a: 'Kung huli ka sa itinakdang linggo pero nasa buwan pa: ₱200 surcharge para sa sasakyan, ₱100 para sa motorsiklo. Kung 1–11 buwan na huli: dagdag na 50% ng MVUC. Kung 12 buwan o higit: 50% ng MVUC + posibleng ₱10,000 fine at impoundment kung nahuli sa kalsada.',
  },
  {
    q: 'Ano ang MVUC at magkano ito?',
    a: 'Ang MVUC (Motor Vehicle User\'s Charge) ang pangunahing bayad sa LTO registration. Ito ay batay sa uri at displacement ng sasakyan. Para sa mga karaniwang kotse (1601–2000cc), ang MVUC ay humigit-kumulang ₱3,000–₱4,500. Para sa motorsiklo (100–400cc), ₱240–₱900.',
  },
  {
    q: 'May diskwento ba ang EV at hybrid na sasakyan?',
    a: 'Oo. Ang mga fully electric (EV) at hybrid na sasakyan ay may 50% diskwento sa MVUC bilang insentibo ng gobyerno para sa malinis na transportasyon. Kailangan mong ipresenta ang OR/CR at vehicle documents sa LTO.',
  },
  {
    q: 'Ano ang mga kailangan para sa LTO registration renewal?',
    a: 'Para sa renewal, kailangan mo ng: (1) Certificate of Registration (CR) at Official Receipt (OR), (2) Smoke Emission Test certificate, (3) CTPL Insurance, at (4) bayad ng registration fees. Para sa mga kotse, kailangan din ang PMS certificate kung applicable.',
  },
  {
    q: 'Saan ako makakapag-renew ng LTO registration?',
    a: 'Maaari kang mag-renew sa anumang LTO Regional District Office (RDO) o Extension Office sa buong Pilipinas. May mga authorized agents din ang LTO sa ilang lokasyon. Tingnan ang lto.gov.ph para sa listahan ng mga opisina.',
  },
  {
    q: 'Gaano katagal ang proseso ng LTO renewal?',
    a: 'Depende sa LTO branch at oras ng pagpunta. Sa karaniwan, 1–3 oras. Mas mabilis kung pupunta nang maaga ng umaga at may kumpletong dokumento. May online na serbisyo rin ang ilang LTO branch.',
  },
  {
    q: 'Ano ang format ng plate number sa Pilipinas?',
    a: 'Ang mga karaniwang format: ABC-1234 (3 letra + 4 numero, karaniwang sasakyan), 123-AB (3 numero + 2 letra, ilang mas lumang sasakyan), AB-1234 (2 letra + 4 numero, motorcycle). Ang renewal schedule ay batay sa numeric na bahagi ng plate.',
  },
  {
    q: 'Ano ang mangyayari kung hindi ako nag-renew at nahuli sa kalsada?',
    a: 'Maaari kang mahuli at ma-impound ang iyong sasakyan. May karagdagang multa at proseso ang kailangan bago makuha ang sasakyan. Para sa 12 buwan o higit na late, maaaring ₱10,000 ang fine bukod sa regular na penalty.',
  },
]

function FaqPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }

  return (
    <>
      <JsonLd data={faqJsonLd} />
      <div className="pt-6 space-y-6">
        <Breadcrumbs items={[{ label: 'FAQ', href: '/faq' }]} />

        <section aria-labelledby="faq-heading">
          <h1
            id="faq-heading"
            className="text-2xl font-black mb-2"
            style={{ color: 'var(--text-primary)' }}
          >
            ❓ Mga Madalas Itanong (FAQ)
          </h1>
          <p className="mb-8" style={{ color: 'var(--text-secondary)' }}>
            Sagot sa mga karaniwang tanong tungkol sa LTO registration renewal sa Pilipinas.
          </p>

          <div className="space-y-4">
            {faqs.map(({ q, a }, i) => (
              <details
                key={i}
                className="rounded-lg border-2 overflow-hidden"
                style={{ borderColor: 'var(--border-color)' }}
              >
                <summary
                  className="flex items-center justify-between gap-3 p-4 font-bold cursor-pointer hover:bg-gray-50 transition-colors"
                  style={{ color: 'var(--text-primary)' }}
                >
                  <span>{q}</span>
                  <span className="text-red-600 shrink-0 text-lg" aria-hidden="true">+</span>
                </summary>
                <div
                  className="px-4 pb-4 text-sm leading-relaxed"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {a}
                </div>
              </details>
            ))}
          </div>
        </section>

        <section className="rounded-lg border-2 p-4 mt-4" style={{ borderColor: 'var(--border-color)' }}>
          <p className="text-sm font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
            Gamitin ang aming mga tool:
          </p>
          <div className="flex flex-wrap gap-3">
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
              💰 Kalkulahin ang Fees
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}

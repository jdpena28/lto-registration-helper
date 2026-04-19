import { createFileRoute, Link } from '@tanstack/react-router'
import { Breadcrumbs } from '../../components/common/Breadcrumbs'
import { JsonLd } from '../../components/common/JsonLd'
import { buildRouteMeta, buildCanonical, SITE_URL } from '../../config/seo'

export const Route = createFileRoute('/guides/how-to-renew-lto-registration')({
  head: () => ({
    meta: buildRouteMeta('/guides/how-to-renew-lto-registration'),
    links: buildCanonical('/guides/how-to-renew-lto-registration'),
  }),
  component: HowToRenewPage,
})

function HowToRenewPage() {
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Paano Mag-renew ng LTO Registration 2026 — Step-by-Step Guide',
    description:
      'Kumpleto na gabay sa pag-renew ng LTO registration sa Pilipinas para 2026. Kasama ang mga requirements, hakbang-hakbang na proseso, fees, at mga tip.',
    url: `${SITE_URL}/guides/how-to-renew-lto-registration`,
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
      '@id': `${SITE_URL}/guides/how-to-renew-lto-registration`,
    },
  }

  return (
    <>
      <JsonLd data={articleJsonLd} />
      <article className="pt-6 space-y-6">
        <Breadcrumbs
          items={[
            { label: 'Mga Gabay', href: '/guides' },
            { label: 'Paano Mag-renew', href: '/guides/how-to-renew-lto-registration' },
          ]}
        />

        <header>
          <h1
            className="text-2xl font-black mb-2 leading-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            🔄 Paano Mag-renew ng LTO Registration (2026 Step-by-Step Guide)
          </h1>
          <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
            Huling na-update: Abril 19, 2026
          </p>
        </header>

        <p style={{ color: 'var(--text-secondary)' }}>
          Ang pag-renew ng LTO registration ay isang taunang obligasyon ng bawat may-ari ng
          sasakyan sa Pilipinas. Ang gabay na ito ay magbibigay ng malinaw na hakbang-hakbang na
          proseso para mapadali ang iyong pagbisita sa LTO.
        </p>

        <section aria-labelledby="requirements-heading">
          <h2
            id="requirements-heading"
            className="text-xl font-black mb-3"
            style={{ color: 'var(--text-primary)' }}
          >
            Mga Kailangan (Requirements)
          </h2>
          <ul className="space-y-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
            <li className="flex gap-2">
              <span>✅</span>
              <span><strong>Certificate of Registration (CR)</strong> — ang opisyal na dokumento ng iyong sasakyan</span>
            </li>
            <li className="flex gap-2">
              <span>✅</span>
              <span><strong>Official Receipt (OR)</strong> — ang resibo ng nakaraang registration mo</span>
            </li>
            <li className="flex gap-2">
              <span>✅</span>
              <span><strong>Smoke Emission Test (SET)</strong> — dapat makuha bago pumunta sa LTO; maghanap ng accredited testing center</span>
            </li>
            <li className="flex gap-2">
              <span>✅</span>
              <span><strong>CTPL Insurance</strong> — Compulsory Third Party Liability; maaaring makuha sa LTO o sa mga accredited insurer</span>
            </li>
            <li className="flex gap-2">
              <span>✅</span>
              <span><strong>Bayad</strong> — tingnan ang aming{' '}
                <Link to="/registration-fees" className="text-red-600 underline hover:text-red-700">
                  fee calculator
                </Link>{' '}
                para sa tinantyang halaga
              </span>
            </li>
          </ul>
        </section>

        <section aria-labelledby="steps-heading">
          <h2
            id="steps-heading"
            className="text-xl font-black mb-3"
            style={{ color: 'var(--text-primary)' }}
          >
            Hakbang-Hakbang na Proseso
          </h2>
          <ol className="space-y-4">
            {[
              {
                step: 1,
                title: 'Alamin ang iyong renewal schedule',
                body: (
                  <>
                    Bago pumunta sa LTO, tingnan muna ang iyong renewal schedule batay sa plate
                    number. Gamitin ang aming{' '}
                    <Link to="/renewal-schedule" className="text-red-600 underline hover:text-red-700">
                      renewal schedule checker
                    </Link>{' '}
                    para malaman ang iyong buwan at linggo ng renewal.
                  </>
                ),
              },
              {
                step: 2,
                title: 'Kumuha ng Smoke Emission Test',
                body: 'Pumunta sa isang LTO-accredited emission testing center. Ang bayad ay ₱350–₱700 para sa kotse at ₱150–₱300 para sa motorsiklo. Siguraduhin na pumasa ang iyong sasakyan bago pumunta sa LTO.',
              },
              {
                step: 3,
                title: 'Kumuha o i-renew ang CTPL Insurance',
                body: 'Ang CTPL (Compulsory Third Party Liability) Insurance ay kailangan bago mag-renew. Maaari itong makuha sa LTO mismo o sa mga accredited insurance companies. Ang pinakamababang presyo ay ₱350 (moto) at ₱700 (kotse).',
              },
              {
                step: 4,
                title: 'Pumunta sa LTO branch o Regional District Office',
                body: 'Magdala ng lahat ng dokumento. Pumunta nang maaga ng umaga (7–9 AM) para maiwasan ang mahabang pila. Ang proseso ay karaniwang 1–3 oras.',
              },
              {
                step: 5,
                title: 'Ipasa ang mga dokumento at bayaran ang fees',
                body: 'Ihain ang iyong OR, CR, SET certificate, at CTPL sa LTO counter. Kalkulahin ang kabuuang bayad kasama ang MVUC at ibang fees. Makikuha ang bagong OR/CR pagkatapos ng pagbabayad.',
              },
              {
                step: 6,
                title: 'I-inspect ang sasakyan (kung kinakailangan)',
                body: 'Para sa ilang sasakyan, maaaring kailanganin ng vehicle inspection sa LTO. Siguraduhing nandoon ang iyong sasakyan sa araw ng renewal.',
              },
            ].map(({ step, title, body }) => (
              <li
                key={step}
                className="flex gap-4 rounded-lg border-2 p-4"
                style={{ borderColor: 'var(--border-color)' }}
              >
                <span
                  className="flex-shrink-0 w-8 h-8 rounded-full bg-red-600 text-white text-sm font-black flex items-center justify-center"
                >
                  {step}
                </span>
                <div>
                  <p className="font-bold mb-1" style={{ color: 'var(--text-primary)' }}>
                    {title}
                  </p>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                    {body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="tips-heading">
          <h2
            id="tips-heading"
            className="text-xl font-black mb-3"
            style={{ color: 'var(--text-primary)' }}
          >
            💡 Mga Tip para Maiwasan ang Problema
          </h2>
          <ul className="space-y-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
            <li className="flex gap-2"><span>💡</span><span>Mag-renew nang maaga — maaari kang mag-renew hanggang 2 buwan bago mag-expire.</span></li>
            <li className="flex gap-2"><span>📋</span><span>I-photocopy ang lahat ng dokumento bago pumunta — maaaring hingin ng LTO ang kopya.</span></li>
            <li className="flex gap-2"><span>🕐</span><span>Pumunta nang maaga ng umaga (7–9 AM) para maikli ang pila.</span></li>
            <li className="flex gap-2"><span>💰</span><span>Magdala ng sapat na pera — gamitin ang aming <Link to="/registration-fees" className="text-red-600 underline">fee calculator</Link> para matantya ang kabuuang bayad.</span></li>
            <li className="flex gap-2"><span>⚠️</span><span>Huwag hintayin ang huling linggo ng iyong renewal month — mas maraming tao ang pumupunta sa mga huling araw.</span></li>
          </ul>
        </section>

        <div className="flex flex-wrap gap-3 pt-4">
          <Link
            to="/renewal-schedule"
            className="rounded-lg bg-red-600 px-4 py-2 text-sm font-bold text-white hover:bg-red-700 transition-colors"
          >
            📅 Tingnan ang Iyong Schedule
          </Link>
          <Link
            to="/registration-fees"
            className="rounded-lg bg-red-600 px-4 py-2 text-sm font-bold text-white hover:bg-red-700 transition-colors"
          >
            💰 Kalkulahin ang Fees
          </Link>
        </div>
      </article>
    </>
  )
}

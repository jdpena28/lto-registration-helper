export const SITE_URL = 'https://lto-registration-helper.vercel.app'

export const siteMeta = {
  siteName: 'LTO Registration Helper',
  defaultTitle: 'LTO Registration Helper — Gabay sa Pagpapatala ng Sasakyan sa Pilipinas',
  defaultDescription:
    'Libre at madaling gamitin na tool para malaman ang LTO renewal schedule batay sa plate number, kalkulahin ang registration fees, at basahin ang LTO memos at patakaran.',
  ogImage: `${SITE_URL}/og-image.png`,
  locale: 'fil_PH',
  twitterCard: 'summary_large_image' as const,
}

export type RouteMetaInput = {
  title: string
  description: string
  canonical: string
  ogTitle?: string
  ogDescription?: string
}

export const routeMeta: Record<string, RouteMetaInput> = {
  '/': {
    title: 'LTO Registration Helper — Gabay sa Pagpapatala ng Sasakyan | Libre at Madaling Gamitin',
    description:
      'Libre at madaling gamitin na tool para malaman ang LTO renewal schedule batay sa plate number, kalkulahin ang registration fees, at basahin ang LTO memos at patakaran ng LTO Philippines.',
    canonical: `${SITE_URL}/`,
  },
  '/renewal-schedule': {
    title: 'LTO Renewal Schedule by Plate Number 2026 — Kailan Mag-renew? | LTO Helper',
    description:
      'Alamin kung kailan dapat mag-renew ng LTO registration batay sa iyong plate number. Ilagay lang ang plate number at makikita mo agad ang buwan at linggo ng iyong renewal schedule.',
    canonical: `${SITE_URL}/renewal-schedule`,
  },
  '/registration-fees': {
    title: 'LTO Registration Fees Calculator Philippines 2026 — Magkano ang Bayad? | LTO Helper',
    description:
      'Kalkulahin ang LTO registration fees para sa kotse, SUV, motorsiklo, at EV/Hybrid sa Pilipinas. Kasama ang MVUC, computer fee, sticker, CTPL insurance, at multa para sa late renewal.',
    canonical: `${SITE_URL}/registration-fees`,
  },
  '/memos': {
    title: 'LTO Memos at Patakaran 2026 Philippines — LTO Circulars | LTO Helper',
    description:
      'Plain-language na buod ng mga opisyal na memorandum at patakaran ng LTO Philippines. Kasama ang renewal schedule, late penalties, EV discount, at advance renewal policy.',
    canonical: `${SITE_URL}/memos`,
  },
  '/faq': {
    title: 'LTO Registration FAQ Philippines 2026 — Mga Madalas Itanong | LTO Helper',
    description:
      'Sagot sa mga pinakakaraniwang tanong tungkol sa LTO registration renewal sa Pilipinas: schedule, fees, requirements, late penalties, EV discount, at marami pa.',
    canonical: `${SITE_URL}/faq`,
  },
  '/guides': {
    title: 'LTO Registration Guides Philippines 2026 — Mga Gabay | LTO Helper',
    description:
      'Mga detalyadong gabay tungkol sa LTO registration renewal sa Pilipinas: hakbang-hakbang na proseso, plate number schedule, at late registration penalty.',
    canonical: `${SITE_URL}/guides`,
  },
  '/guides/how-to-renew-lto-registration': {
    title: 'Paano Mag-renew ng LTO Registration 2026 — Step-by-Step Guide | LTO Helper',
    description:
      'Kumpleto na gabay sa pag-renew ng LTO registration sa Pilipinas para 2026. Kasama ang mga requirements, hakbang-hakbang na proseso, fees, at mga tip para maiwasan ang problema.',
    canonical: `${SITE_URL}/guides/how-to-renew-lto-registration`,
  },
  '/guides/lto-plate-number-schedule-explained': {
    title: 'Paano Basahin ang LTO Plate Number Schedule — Kailan Mag-renew? | LTO Helper',
    description:
      'Ipaliwanag ang LTO plate number renewal schedule system: paano matukoy ang buwan at linggo ng renewal batay sa iyong plate number format sa Pilipinas.',
    canonical: `${SITE_URL}/guides/lto-plate-number-schedule-explained`,
  },
  '/guides/lto-late-registration-penalty': {
    title: 'LTO Late Registration Penalty 2026 — Magkano ang Multa? | LTO Helper',
    description:
      'Alamin ang mga multa para sa late LTO registration renewal sa Pilipinas 2026. Kasama ang surcharge, MVUC penalty, at kung paano maiwasan ang mataas na bayad.',
    canonical: `${SITE_URL}/guides/lto-late-registration-penalty`,
  },
}

export function buildRouteMeta(path: keyof typeof routeMeta) {
  const rm = routeMeta[path]
  const ogTitle = rm.ogTitle ?? rm.title
  const ogDesc = rm.ogDescription ?? rm.description
  return [
    { title: rm.title },
    { name: 'description', content: rm.description },
    { property: 'og:title', content: ogTitle },
    { property: 'og:description', content: ogDesc },
    { property: 'og:url', content: rm.canonical },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: siteMeta.ogImage },
    { property: 'og:site_name', content: siteMeta.siteName },
    { property: 'og:locale', content: siteMeta.locale },
    { name: 'twitter:card', content: siteMeta.twitterCard },
    { name: 'twitter:title', content: ogTitle },
    { name: 'twitter:description', content: ogDesc },
    { name: 'twitter:image', content: siteMeta.ogImage },
  ]
}

export function buildCanonical(path: keyof typeof routeMeta) {
  return [{ rel: 'canonical', href: routeMeta[path].canonical }]
}

// Hand-curated plain-language summaries of LTO memoranda
// Each entry links to the original source for verification
export interface Memo {
  id: string
  title: string
  titleFil: string
  summary: string
  bullets: string[]
  sourceUrl: string
  effectiveDate: string
  tags: MemoTag[]
}

export type MemoTag = 'Fees' | 'Schedule' | 'Penalties' | 'EV' | 'General'

export const memos: Memo[] = [
  {
    id: 'renewal-schedule',
    title: 'Motor Vehicle Registration Renewal Schedule (Plate Number System)',
    titleFil: 'Iskedyul ng Pagpapatala ng Sasakyan (Batay sa Plate Number)',
    summary:
      'Ang iyong plate number ang nagtatakda kung kailan ka dapat mag-renew ng rehistro. Ang huling numero ng iyong plate ay nagtatakda ng buwan, at ang ikalawang bago-sa-huli na numero ay nagtatakda ng linggo ng buwan na iyon.',
    bullets: [
      'Plate na nagtatapos sa 1 → Enero; 2 → Pebrero; ... 9 → Setyembre; 0 → Oktubre.',
      'Ang ikalawang digit mula sa dulo (sa numeric na bahagi) ay nagtatakda ng linggo: 1–2 = Linggo 1, 3–4 = Linggo 2, atbp.',
      'Maaari kang mag-renew nang hanggang 2 buwang maaga bago mag-expire.',
      'Walang katabi ang Nobyembre at Disyembre sa plate number scheme — sasakyan na itinala sa mga buwang iyon ay may ibang petsa.',
    ],
    sourceUrl: 'https://ltoportal.ph/lto-car-renewal-registration-schedule/',
    effectiveDate: 'Patuloy',
    tags: ['Schedule'],
  },
  {
    id: 'late-penalties',
    title: 'Penalties for Late Motor Vehicle Registration',
    titleFil: 'Multa para sa Mahuling Pagpapatala',
    summary:
      'Kung hindi ka nag-renew sa itinakdang linggo at buwan, may karagdagang bayad. Mas matagal kang naghintay, mas malaki ang multa.',
    bullets: [
      'Huli sa linggo pero nasa buwan pa: ₱200 surcharge (sasakyan), ₱100 (motorsiklo).',
      '1–11 buwan na huli: dagdag na 50% ng MVUC.',
      '12 buwan o higit: 50% ng MVUC + posibleng ₱10,000 fine at impoundment kung nahuli ka sa kalsada.',
      'Ang penalty ay nararapat lamang sa MVUC portion, hindi sa buong bayad.',
    ],
    sourceUrl: 'https://www.ltoguideph.com/late-registration-penalties/',
    effectiveDate: '2026',
    tags: ['Penalties'],
  },
  {
    id: 'ev-incentive',
    title: 'Electric Vehicle (EV) and Hybrid — 50% MVUC Discount',
    titleFil: 'Diskwento para sa EV at Hybrid na Sasakyan',
    summary:
      'Ang mga electric at hybrid na sasakyan ay may 50% diskwento sa MVUC bilang insentibo ng gobyerno para sa malinis na transportasyon.',
    bullets: [
      '50% diskwento sa MVUC para sa fully electric at hybrid na sasakyan.',
      'Dapat na may W, X, Y, o Z bilang ikatlong letra sa plate number (para sa kasalukuyang EV plates).',
      'I-present ang iyong OR/CR at vehicle documents sa LTO upang ma-claim ang diskwento.',
    ],
    sourceUrl: 'https://lto.gov.ph',
    effectiveDate: '2024 – kasalukuyan',
    tags: ['EV', 'Fees'],
  },
  {
    id: 'advance-renewal',
    title: 'Advance Renewal Policy (up to 2 months early)',
    titleFil: 'Patakaran sa Maagap na Pagpapatala',
    summary:
      'Pinapayagan ng LTO ang mga may-ari ng sasakyan na mag-renew ng hanggang 2 buwang maaga. Magandang gamitin ito para maiwasan ang mahabang pila.',
    bullets: [
      'Maaari kang mag-renew up to 2 months bago mag-expire ang iyong rehistro.',
      'Hindi magbabago ang iyong renewal month sa susunod na taon.',
      'Lalo itong kapaki-pakinabang kung nalalaman mong magiging abala ka sa iyong renewal month.',
    ],
    sourceUrl: 'https://lto.gov.ph/news/advance-renewal-of-mv-registration-for-ending-1-plate-numbers/',
    effectiveDate: 'Patuloy',
    tags: ['Schedule', 'General'],
  },
]

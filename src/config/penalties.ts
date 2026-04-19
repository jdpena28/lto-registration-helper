// Late registration penalty rules
// Source: https://www.ltoguideph.com/late-registration-penalties/
//         https://cyclefinancing.ph/blog/2026/01/lto-late-registration-fines-and-penalties-2026/
// Last verified: 2026-04-19

export type LatenessCategory =
  | 'ontime'           // within designated week & month
  | 'pastWeek'         // past designated week but still within month
  | 'oneToEleven'      // 1–11 months late
  | 'twelveOrMore'     // 12+ months late

export interface PenaltyRule {
  category: LatenessCategory
  label: string
  labelFil: string
  /** Flat surcharge added regardless of MVUC (0 if none) */
  flatCar: number
  flatMoto: number
  /** Percentage of MVUC added as penalty (0–1) */
  mvucPercentage: number
  /** Shown as additional warning text */
  warning?: string
}

export const penaltyRules: Record<LatenessCategory, PenaltyRule> = {
  ontime: {
    category: 'ontime',
    label: 'On time (within designated week)',
    labelFil: 'Sa tamang oras (sa loob ng itinakdang linggo)',
    flatCar: 0,
    flatMoto: 0,
    mvucPercentage: 0,
  },
  pastWeek: {
    category: 'pastWeek',
    label: 'Past designated week, same month',
    labelFil: 'Lampas sa linggo, pero nasa loob pa ng buwan',
    flatCar: 200,
    flatMoto: 100,
    mvucPercentage: 0,
  },
  oneToEleven: {
    category: 'oneToEleven',
    label: '1–11 months late',
    labelFil: '1–11 buwan na huli',
    flatCar: 0,
    flatMoto: 0,
    mvucPercentage: 0.5,
    warning:
      'Kung nahuli ka ng higit sa isang buwan habang nagmamaneho, maaaring may multa na ₱10,000 at impoundment.',
  },
  twelveOrMore: {
    category: 'twelveOrMore',
    label: '12 months or more late',
    labelFil: '12 buwan o higit pang huli',
    flatCar: 0,
    flatMoto: 0,
    mvucPercentage: 0.5,
    warning:
      '⚠️ Malaking multa! Ang ₱10,000 na fine at impoundment ay posible kung nahuli ka habang nagmamaneho. Pumunta agad sa LTO branch.',
  },
}

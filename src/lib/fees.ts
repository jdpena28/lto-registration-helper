import {
  carMvucByDisplacement,
  motoMvucByDisplacement,
  suvPickupSurcharge,
  suvSurchargeSubtypes,
  type CarSubtype,
  type MotoSubtype,
  type DisplacementBracket,
  type MotoBracket,
} from '../config/mvuc'
import { carFixedFees, motoFixedFees, type FixedFee } from '../config/fees'
import { penaltyRules, type LatenessCategory } from '../config/penalties'

export interface CarFeeInput {
  category: 'car'
  subtype: CarSubtype
  displacement: DisplacementBracket
  isHybridOrEv: boolean
  lateness: LatenessCategory
}

export interface MotoFeeInput {
  category: 'motorcycle'
  subtype: MotoSubtype
  displacement: MotoBracket
  isHybridOrEv: boolean
  lateness: LatenessCategory
}

export type FeeInput = CarFeeInput | MotoFeeInput

export interface FeeLineItem {
  label: string
  labelFil: string
  amount: number
  note?: string
}

export interface FeeBreakdown {
  mvuc: number
  fixedFees: FixedFee[]
  fixedFeesTotal: number
  penalty: number
  penaltyNote: string
  penaltyWarning?: string
  total: number
  lines: FeeLineItem[]
}

export function computeTotal(input: FeeInput): FeeBreakdown {
  let mvuc: number
  const fixedFees = input.category === 'car' ? carFixedFees : motoFixedFees

  if (input.category === 'car') {
    mvuc = carMvucByDisplacement[input.displacement]
    if (suvSurchargeSubtypes.includes(input.subtype)) {
      mvuc += suvPickupSurcharge
    }
  } else {
    mvuc = motoMvucByDisplacement[input.displacement]
  }

  if (input.isHybridOrEv) {
    mvuc = Math.round(mvuc * 0.5)
  }

  const rule = penaltyRules[input.lateness]
  const flatPenalty = input.category === 'car' ? rule.flatCar : rule.flatMoto
  const penalty = flatPenalty + Math.round(mvuc * rule.mvucPercentage)

  const fixedFeesTotal = fixedFees.reduce((sum, f) => sum + f.amount, 0)
  const total = mvuc + fixedFeesTotal + penalty

  const lines: FeeLineItem[] = [
    { label: 'MVUC', labelFil: 'MVUC', amount: mvuc },
    ...fixedFees.map((f) => ({
      label: f.label,
      labelFil: f.labelFil,
      amount: f.amount,
      note: f.note,
    })),
    ...(penalty > 0
      ? [{ label: 'Penalty', labelFil: 'Multa', amount: penalty }]
      : []),
  ]

  return {
    mvuc,
    fixedFees,
    fixedFeesTotal,
    penalty,
    penaltyNote: rule.label,
    penaltyWarning: rule.warning,
    total,
    lines,
  }
}

export function formatPeso(amount: number): string {
  return `₱${amount.toLocaleString('en-PH')}`
}

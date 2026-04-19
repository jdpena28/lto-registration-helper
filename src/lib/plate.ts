import { plateFormats, extractDigits, type PlateFormat, type VehicleClass } from '../config/plateFormats'
import {
  digitToMonth,
  digitToWeek,
  monthNames,
  weekDateRanges,
} from '../config/schedule'

export interface PlateParseResult {
  valid: true
  formatId: string
  vehicleClass: VehicleClass
  renewalMonth: number
  renewalWeek: number
  monthName: { en: string; fil: string }
  weekRange: string
}

export interface PlateParseError {
  valid: false
  reason: string
}

export type PlateResult = PlateParseResult | PlateParseError

/** Normalize a raw plate input: uppercase, strip spaces and dashes */
export function normalizePlate(raw: string): string {
  return raw.toUpperCase().replace(/[\s\-_.]/g, '')
}

export function parsePlate(raw: string): PlateResult {
  const normalized = normalizePlate(raw)
  if (!normalized) {
    return { valid: false, reason: 'Walang plate number na naipasok.' }
  }

  let matched: PlateFormat | undefined
  for (const fmt of plateFormats) {
    if (fmt.pattern.test(normalized)) {
      matched = fmt
      break
    }
  }

  if (!matched) {
    return {
      valid: false,
      reason:
        'Hindi nakilala ang format ng plate number. Sinusuportahan: ABC1234, ABC123, AB12345, 123AB.',
    }
  }

  const digits = extractDigits(normalized)
  if (digits.length < 2) {
    return {
      valid: false,
      reason:
        'Hindi sapat ang mga numero sa plate number para matukoy ang schedule. Pumunta sa LTO para sa manual na pag-verify.',
    }
  }

  const lastDigit = digits[digits.length - 1]
  const secondToLastDigit = digits[digits.length - 2]

  const renewalMonth = digitToMonth[lastDigit]
  const renewalWeek = digitToWeek[secondToLastDigit]

  if (!renewalMonth || !renewalWeek) {
    return {
      valid: false,
      reason: 'Hindi matukoy ang buwan o linggo ng renewal. Pumunta sa LTO para sa tulong.',
    }
  }

  return {
    valid: true,
    formatId: matched.id,
    vehicleClass: matched.vehicleClass,
    renewalMonth,
    renewalWeek,
    monthName: monthNames[renewalMonth],
    weekRange: weekDateRanges[renewalWeek],
  }
}

export type VehicleClass = 'fourWheel' | 'motorcycle'

export interface PlateFormat {
  id: string
  label: string
  vehicleClass: VehicleClass
  pattern: RegExp
  /** Index of the last numeric character (0-based, from right in numeric portion) */
  example: string
}

export const plateFormats: PlateFormat[] = [
  {
    id: '4w-new',
    label: '4-Wheel (Bago) — ABC 1234',
    vehicleClass: 'fourWheel',
    pattern: /^[A-Z]{3}\d{4}$/,
    example: 'ABC 1234',
  },
  {
    id: '4w-old',
    label: '4-Wheel (Luma) — ABC 123',
    vehicleClass: 'fourWheel',
    pattern: /^[A-Z]{3}\d{3}$/,
    example: 'ABC 123',
  },
  {
    id: 'moto-new',
    label: 'Motorcycle (Bago) — AB 12345',
    vehicleClass: 'motorcycle',
    pattern: /^[A-Z]{2}\d{5}$/,
    example: 'AB 12345',
  },
  {
    id: 'moto-old',
    label: 'Motorcycle (Luma) — 123 AB',
    vehicleClass: 'motorcycle',
    pattern: /^\d{3}[A-Z]{2}$/,
    example: '123 AB',
  },
]

/** Returns the digits portion of a normalized plate string */
export function extractDigits(normalized: string): string {
  return normalized.replace(/[A-Z]/g, '')
}

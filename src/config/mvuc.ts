// Motor Vehicle User's Charge (MVUC) — RA 8794 as amended
// Source: https://www.ltoguideph.com/registration-fees-mvuc/
//         https://www.motorist.ph/article/5479/...
// Last verified: 2026-04-19
//
// Note: MVUC for passenger cars is based on engine displacement.
// MVUC for trucks/pickups is based on Gross Vehicle Weight (GVW).
// Motorcycles have a flat MVUC by displacement bracket.

export type VehicleCategory = 'car' | 'motorcycle'
export type CarSubtype = 'sedan' | 'hatchback' | 'suv' | 'mpv' | 'pickup' | 'van' | 'truck'
export type MotoSubtype = 'underbone' | 'scooter' | 'standard' | 'bigbike'

export type DisplacementBracket =
  | 'lte1600'
  | '1601to2000'
  | '2001to2500'
  | 'gt2500'

export type MotoBracket =
  | 'lte200'
  | '201to400'
  | '401to800'
  | 'gt800'

export type GvwBracket =
  | 'lte3000kg'
  | '3001to5000kg'
  | 'gt5000kg'

// MVUC for private passenger cars by displacement (₱/year)
export const carMvucByDisplacement: Record<DisplacementBracket, number> = {
  lte1600: 1400,
  '1601to2000': 1800,
  '2001to2500': 2200,
  gt2500: 2600,
}

// SUVs/MPVs/pickups typically have an additional loading based on GVW.
// For simplicity, we use displacement as primary and add a flat surcharge.
export const suvPickupSurcharge = 400

// MVUC for motorcycles by displacement (₱/year)
export const motoMvucByDisplacement: Record<MotoBracket, number> = {
  lte200: 150,
  '201to400': 240,
  '401to800': 300,
  gt800: 400,
}

export const displacementLabels: Record<DisplacementBracket, string> = {
  lte1600: '≤ 1,600 cc (e.g. small sedan, city car)',
  '1601to2000': '1,601 – 2,000 cc (e.g. mid-size sedan)',
  '2001to2500': '2,001 – 2,500 cc (e.g. large sedan, mid SUV)',
  gt2500: '> 2,500 cc (e.g. full-size SUV, luxury)',
}

export const motoBracketLabels: Record<MotoBracket, string> = {
  lte200: '≤ 200 cc (e.g. underbone, scooter)',
  '201to400': '201 – 400 cc (e.g. standard middleweight)',
  '401to800': '401 – 800 cc (e.g. big standard)',
  gt800: '> 800 cc (e.g. big bike)',
}

export const carSubtypeLabels: Record<CarSubtype, string> = {
  sedan: 'Sedan / Hatchback',
  hatchback: 'Hatchback',
  suv: 'SUV',
  mpv: 'MPV / AUV',
  pickup: 'Pickup',
  van: 'Van',
  truck: 'Truck',
}

export const motoSubtypeLabels: Record<MotoSubtype, string> = {
  underbone: 'Underbone (Habal-habal type)',
  scooter: 'Scooter / Automatic',
  standard: 'Standard / Naked',
  bigbike: 'Big Bike (400cc+)',
}

/** Whether this car subtype should use the SUV/pickup surcharge */
export const suvSurchargeSubtypes: CarSubtype[] = ['suv', 'mpv', 'pickup', 'van', 'truck']

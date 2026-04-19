// Fixed fees added on top of MVUC for every registration renewal
// Source: https://www.ltoguideph.com/registration-fees-mvuc/
//         https://www.expressway.ph/lto/vehicle-registration
// Last verified: 2026-04-19

export interface FixedFee {
  label: string
  labelFil: string
  amount: number
  note?: string
}

export const carFixedFees: FixedFee[] = [
  {
    label: 'Computer Fee',
    labelFil: 'Computer Fee',
    amount: 169,
  },
  {
    label: 'Sticker Fee',
    labelFil: 'Bayad sa Sticker',
    amount: 100,
  },
  {
    label: 'Certification Fee',
    labelFil: 'Bayad sa Sertipiko',
    amount: 100,
  },
  {
    label: 'Smoke Emission Test',
    labelFil: 'Smoke Emission Test',
    amount: 500,
    note: 'Maaaring mag-iba depende sa lugar (₱350–₱700)',
  },
  {
    label: 'CTPL Insurance (min.)',
    labelFil: 'CTPL Insurance',
    amount: 700,
    note: 'Compulsory Third Party Liability. Maaaring mag-iba sa bawat insurer (₱600–₱1,200).',
  },
]

export const motoFixedFees: FixedFee[] = [
  {
    label: 'Computer Fee',
    labelFil: 'Computer Fee',
    amount: 169,
  },
  {
    label: 'Sticker Fee',
    labelFil: 'Bayad sa Sticker',
    amount: 100,
  },
  {
    label: 'Certification Fee',
    labelFil: 'Bayad sa Sertipiko',
    amount: 100,
  },
  {
    label: 'Smoke Emission Test',
    labelFil: 'Smoke Emission Test',
    amount: 200,
    note: 'Para sa motorsiklo (₱150–₱300)',
  },
  {
    label: 'CTPL Insurance (min.)',
    labelFil: 'CTPL Insurance',
    amount: 350,
    note: 'Compulsory Third Party Liability para sa motorsiklo.',
  },
]

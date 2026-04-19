// Source: LTO memorandum + https://ltoportal.ph/lto-car-renewal-registration-schedule/
// Last verified: 2026-04-19
//
// Rule:
//   Last digit of plate → renewal MONTH (1=Jan, 2=Feb, ..., 9=Sep, 0=Oct)
//   Second-to-last digit → renewal WEEK within that month
//     1–2 → Week 1 (days 1–7)
//     3–4 → Week 2 (days 8–14)
//     5–6 → Week 3 (days 15–21)
//     7–8 → Week 4 (days 22–28)
//     9–0 → Week 5 (days 29–31, or last days of month)

export const digitToMonth: Record<string, number> = {
  '1': 1,
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
  '0': 10,
}

export const digitToWeek: Record<string, number> = {
  '1': 1,
  '2': 1,
  '3': 2,
  '4': 2,
  '5': 3,
  '6': 3,
  '7': 4,
  '8': 4,
  '9': 5,
  '0': 5,
}

export const weekDateRanges: Record<number, string> = {
  1: 'Araw 1–7',
  2: 'Araw 8–14',
  3: 'Araw 15–21',
  4: 'Araw 22–28',
  5: 'Araw 29–katapusan ng buwan',
}

export const monthNames: Record<number, { en: string; fil: string }> = {
  1: { en: 'January', fil: 'Enero' },
  2: { en: 'February', fil: 'Pebrero' },
  3: { en: 'March', fil: 'Marso' },
  4: { en: 'April', fil: 'Abril' },
  5: { en: 'May', fil: 'Mayo' },
  6: { en: 'June', fil: 'Hunyo' },
  7: { en: 'July', fil: 'Hulyo' },
  8: { en: 'August', fil: 'Agosto' },
  9: { en: 'September', fil: 'Setyembre' },
  10: { en: 'October', fil: 'Oktubre' },
}

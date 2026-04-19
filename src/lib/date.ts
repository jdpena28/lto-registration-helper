import { monthNames } from '../config/schedule'

/** Week ranges within a month (1-indexed) */
const weekStartDay: Record<number, number> = { 1: 1, 2: 8, 3: 15, 4: 22, 5: 29 }
const weekEndDay: Record<number, number> = { 1: 7, 2: 14, 3: 21, 4: 28, 5: 31 }

export interface RenewalWindow {
  year: number
  month: number
  week: number
  startDate: Date
  endDate: Date
  label: string
  /** Early renewal opens 2 months before the renewal month */
  earlyOpenDate: Date
  isLate: boolean
  monthsLate: number
}

/** Compute the next (or current) renewal window for a given month+week, relative to today */
export function computeRenewalWindow(
  renewalMonth: number,
  renewalWeek: number,
  today = new Date(),
): RenewalWindow {
  let year = today.getFullYear()

  const startDay = weekStartDay[renewalWeek]
  const endDay = Math.min(
    weekEndDay[renewalWeek],
    new Date(year, renewalMonth, 0).getDate(), // last day of month
  )

  let startDate = new Date(year, renewalMonth - 1, startDay)
  let endDate = new Date(year, renewalMonth - 1, endDay)

  // If the window has already passed this year, move to next year
  if (endDate < today) {
    year += 1
    startDate = new Date(year, renewalMonth - 1, startDay)
    endDate = new Date(year, renewalMonth - 1, Math.min(endDay, new Date(year, renewalMonth, 0).getDate()))
  }

  // Early renewal window opens 2 months before
  const earlyOpenMonth = renewalMonth - 2
  const earlyOpenYear = earlyOpenMonth <= 0 ? year - 1 : year
  const adjustedEarlyMonth = earlyOpenMonth <= 0 ? earlyOpenMonth + 12 : earlyOpenMonth
  const earlyOpenDate = new Date(earlyOpenYear, adjustedEarlyMonth - 1, 1)

  // Check if we're past the renewal window (late)
  const isLate = today > endDate
  const monthsLate = isLate
    ? Math.floor((today.getTime() - endDate.getTime()) / (1000 * 60 * 60 * 24 * 30))
    : 0

  const monthLabel = monthNames[renewalMonth]
  const label = `${monthLabel.en} (${monthLabel.fil}) — Week ${renewalWeek}, ${formatDate(startDate)} – ${formatDate(endDate)}`

  return {
    year,
    month: renewalMonth,
    week: renewalWeek,
    startDate,
    endDate,
    label,
    earlyOpenDate,
    isLate,
    monthsLate,
  }
}

function formatDate(d: Date): string {
  return d.toLocaleDateString('en-PH', { month: 'long', day: 'numeric', year: 'numeric' })
}

export function formatShortDate(d: Date): string {
  return d.toLocaleDateString('en-PH', { month: 'short', day: 'numeric', year: 'numeric' })
}

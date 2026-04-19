import { computeRenewalWindow, formatShortDate } from '../../lib/date'
import { copy } from '../../config/copy'
import { monthNames } from '../../config/schedule'
import type { PlateParseResult } from '../../lib/plate'

interface ResultCardProps {
  result: PlateParseResult
}

export function ResultCard({ result }: ResultCardProps) {
  const window = computeRenewalWindow(result.renewalMonth, result.renewalWeek)
  const month = monthNames[result.renewalMonth]

  return (
    <div
      className="rounded-xl border-2 border-green-400 bg-green-50 p-5 space-y-4"
      style={{ backgroundColor: 'var(--bg-secondary)', borderColor: window.isLate ? '#f87171' : '#4ade80' }}
      role="region"
      aria-label="Renewal schedule result"
    >
      <h3 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
        ✅ {copy.schedule.resultTitle}
      </h3>

      <div className="grid gap-3">
        <InfoRow
          label={copy.schedule.renewalMonth}
          value={`${month.en} (${month.fil})`}
        />
        <InfoRow
          label={copy.schedule.renewalWeek}
          value={`Linggo ${result.renewalWeek} — ${result.weekRange}`}
        />
        <InfoRow
          label={copy.schedule.nextRenewal}
          value={`${formatShortDate(window.startDate)} – ${formatShortDate(window.endDate)}, ${window.year}`}
        />
      </div>

      {window.isLate && (
        <div className="rounded-lg bg-red-100 border border-red-300 p-3 text-red-800 font-semibold">
          ⚠️ {copy.schedule.alreadyExpiredWarning}
          {window.monthsLate > 0 && (
            <span className="block text-sm font-normal mt-1">
              Humigit-kumulang {window.monthsLate} buwan na ang nakakaraan mula sa iyong renewal window.
            </span>
          )}
        </div>
      )}

      <div
        className="rounded-lg border border-blue-200 bg-blue-50 p-3 text-sm"
        style={{ backgroundColor: 'var(--bg-secondary)' }}
      >
        <p className="font-semibold text-blue-800">
          📅 {copy.schedule.earlyRenewalNote}
        </p>
        <p className="text-blue-700 mt-1">
          Maaari kang mag-renew simula {formatShortDate(window.earlyOpenDate)}.
        </p>
      </div>
    </div>
  )
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col sm:flex-row sm:gap-4">
      <span
        className="font-semibold text-sm w-44 shrink-0"
        style={{ color: 'var(--text-secondary)' }}
      >
        {label}
      </span>
      <span className="font-bold text-lg" style={{ color: 'var(--text-primary)' }}>
        {value}
      </span>
    </div>
  )
}

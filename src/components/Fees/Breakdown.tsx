import { computeTotal, formatPeso } from '../../lib/fees'
import type { FeeInput } from '../../lib/fees'
import { Explain } from '../common/Explain'
import { copy } from '../../config/copy'

interface BreakdownProps {
  input: FeeInput
}

export function Breakdown({ input }: BreakdownProps) {
  const result = computeTotal(input)

  return (
    <div
      className="rounded-xl border-2 border-green-400 p-5 space-y-4"
      style={{ backgroundColor: 'var(--bg-secondary)' }}
      role="region"
      aria-label="Fee breakdown"
    >
      <h3 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
        💰 {copy.fees.resultTitle}
      </h3>

      {/* Line items */}
      <table className="w-full text-sm" aria-label="Breakdown ng bayad">
        <tbody className="divide-y divide-gray-200">
          {result.lines.map((line) => (
            <tr key={line.label}>
              <td className="py-3 font-semibold" style={{ color: 'var(--text-secondary)' }}>
                <Explain term={line.label}>{line.labelFil}</Explain>
                {line.note && (
                  <span className="block text-xs font-normal mt-0.5" style={{ color: 'var(--text-secondary)' }}>
                    {line.note}
                  </span>
                )}
              </td>
              <td
                className="py-3 text-right font-bold tabular-nums"
                style={{ color: 'var(--text-primary)' }}
              >
                {formatPeso(line.amount)}
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="border-t-2 border-gray-400">
            <td className="pt-3 text-lg font-black" style={{ color: 'var(--text-primary)' }}>
              {copy.fees.totalLabel}
            </td>
            <td className="pt-3 text-right text-2xl font-black text-red-600 tabular-nums">
              {formatPeso(result.total)}
            </td>
          </tr>
        </tfoot>
      </table>

      {/* Penalty warning */}
      {result.penaltyWarning && (
        <div className="rounded-lg bg-red-50 border border-red-300 p-3 text-red-800 text-sm">
          {result.penaltyWarning}
        </div>
      )}

      {/* EV note */}
      {input.isHybridOrEv && (
        <div className="rounded-lg bg-green-50 border border-green-300 p-3 text-green-800 text-sm">
          ✅ 50% diskwento sa MVUC ay inilapat dahil EV o Hybrid ang iyong sasakyan.
        </div>
      )}

      {/* Verify note */}
      <div className="rounded-lg bg-yellow-50 border border-yellow-300 p-3 text-yellow-800 text-sm">
        ⚠️ {copy.fees.verifyNote}
      </div>
    </div>
  )
}

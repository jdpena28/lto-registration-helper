import { useState } from 'react'
import { parsePlate, type PlateResult } from '../../lib/plate'
import { copy } from '../../config/copy'
import { ResultCard } from './ResultCard'

export function PlateInput() {
  const [raw, setRaw] = useState('')
  const [result, setResult] = useState<PlateResult | null>(null)

  function handleCheck() {
    if (!raw.trim()) return
    setResult(parsePlate(raw))
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter') handleCheck()
  }

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <label
          htmlFor="plate-input"
          className="block font-semibold"
          style={{ color: 'var(--text-primary)' }}
        >
          {copy.schedule.inputLabel}
        </label>
        <div className="flex gap-2 flex-wrap">
          <input
            id="plate-input"
            type="text"
            value={raw}
            onChange={(e) => setRaw(e.target.value.toUpperCase())}
            onKeyDown={handleKeyDown}
            placeholder={copy.schedule.inputPlaceholder}
            inputMode="text"
            autoComplete="off"
            autoCapitalize="characters"
            className="flex-1 min-w-0 rounded-lg border-2 border-gray-300 px-4 py-3 text-lg font-mono focus:border-red-500 focus:outline-none"
            style={{
              borderColor: 'var(--border-color)',
              backgroundColor: 'var(--bg-primary)',
              color: 'var(--text-primary)',
            }}
          />
          <button
            onClick={handleCheck}
            className="rounded-lg bg-red-600 px-6 py-3 font-bold text-white hover:bg-red-700 active:bg-red-800 transition-colors"
          >
            {copy.schedule.checkButton}
          </button>
        </div>
        <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
          Hal: ABC1234 (bago) · ABC123 (luma) · AB12345 (moto bago) · 123AB (moto luma)
        </p>
      </div>

      {result !== null && (
        <div className="mt-4">
          {result.valid ? (
            <ResultCard result={result} />
          ) : (
            <div
              className="rounded-lg border-2 border-red-300 bg-red-50 p-4 text-red-800"
              role="alert"
            >
              <p className="font-semibold">⚠️ {copy.schedule.invalidPlate}</p>
              <p className="mt-1 text-sm">{result.reason}</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

import { useA11y, type FontScale } from './A11yContext'

const options: { value: FontScale; label: string }[] = [
  { value: 'normal', label: 'A' },
  { value: 'lg', label: 'A+' },
  { value: 'xl', label: 'A++' },
]

export function FontSizeToggle() {
  const { fontSize, setFontSize } = useA11y()

  return (
    <div className="flex items-center gap-1" aria-label="Laki ng teksto">
      {options.map((opt) => (
        <button
          key={opt.value}
          onClick={() => setFontSize(opt.value)}
          aria-pressed={fontSize === opt.value}
          className={`px-2 py-1 rounded border text-sm font-bold transition-colors ${
            fontSize === opt.value
              ? 'bg-red-600 text-white border-red-600'
              : 'bg-white text-gray-700 border-gray-300 hover:border-red-400'
          }`}
          style={{ minHeight: 36, minWidth: 36 }}
        >
          {opt.label}
        </button>
      ))}
    </div>
  )
}

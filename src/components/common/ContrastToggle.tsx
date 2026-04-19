import { useA11y } from './A11yContext'

export function ContrastToggle() {
  const { contrast, setContrast } = useA11y()
  const isHigh = contrast === 'high'

  return (
    <button
      onClick={() => setContrast(isHigh ? 'normal' : 'high')}
      aria-pressed={isHigh}
      className={`px-3 py-1 rounded border text-sm font-semibold transition-colors ${
        isHigh
          ? 'bg-black text-yellow-300 border-yellow-300'
          : 'bg-white text-gray-700 border-gray-300 hover:border-gray-500'
      }`}
      style={{ minHeight: 36 }}
    >
      {isHigh ? '◐ High' : '◐ Contrast'}
    </button>
  )
}

import { useState, useRef, useEffect } from 'react'
import { glossary } from '../../config/glossary'

interface ExplainProps {
  term: string
  children?: React.ReactNode
}

export function Explain({ term, children }: ExplainProps) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const entry = glossary[term]

  useEffect(() => {
    if (!open) return
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [open])

  if (!entry) return <span>{children ?? term}</span>

  return (
    <span className="relative inline-block" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="underline decoration-dotted cursor-help text-blue-700 font-semibold"
        aria-label={`Ano ang ${term}?`}
        style={{ minHeight: 'auto', minWidth: 'auto' }}
      >
        {children ?? term}
      </button>
      {open && (
        <div
          role="tooltip"
          className="absolute z-50 left-0 top-full mt-2 w-72 rounded-lg border border-gray-300 bg-white p-4 shadow-lg text-sm text-gray-800"
          style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)', borderColor: 'var(--border-color)' }}
        >
          <p className="font-bold mb-1">{entry.term}</p>
          <p>{entry.explanation}</p>
          <button
            onClick={() => setOpen(false)}
            className="mt-2 text-xs text-gray-500 underline"
            style={{ minHeight: 'auto', minWidth: 'auto' }}
          >
            Isara
          </button>
        </div>
      )}
    </span>
  )
}

import type { Memo } from '../../config/memos'
import { copy } from '../../config/copy'

interface MemoCardProps {
  memo: Memo
}

export function MemoCard({ memo }: MemoCardProps) {
  return (
    <article
      className="rounded-xl border-2 border-gray-200 p-5 space-y-3"
      style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-secondary)' }}
    >
      <div className="flex flex-wrap gap-2">
        {memo.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-red-100 px-3 py-1 text-xs font-bold text-red-700"
          >
            {tag}
          </span>
        ))}
      </div>

      <h3 className="text-lg font-bold leading-snug" style={{ color: 'var(--text-primary)' }}>
        {memo.titleFil}
      </h3>

      <p className="text-base" style={{ color: 'var(--text-secondary)' }}>
        {memo.summary}
      </p>

      <ul className="list-disc pl-5 space-y-1 text-sm" style={{ color: 'var(--text-secondary)' }}>
        {memo.bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>

      <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-gray-200">
        <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>
          {copy.memos.effectiveDate}: {memo.effectiveDate}
        </span>
        <a
          href={memo.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-blue-600 underline hover:text-blue-800"
        >
          {copy.memos.readOriginal} ↗
        </a>
      </div>
    </article>
  )
}

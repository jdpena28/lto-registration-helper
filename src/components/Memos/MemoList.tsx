import { useState } from 'react'
import { memos, type MemoTag } from '../../config/memos'
import { MemoCard } from './MemoCard'
import { copy } from '../../config/copy'

const allTags: MemoTag[] = ['Fees', 'Schedule', 'Penalties', 'EV', 'General']

export function MemoList() {
  const [activeTag, setActiveTag] = useState<MemoTag | null>(null)

  const filtered = activeTag ? memos.filter((m) => m.tags.includes(activeTag)) : memos

  return (
    <div className="space-y-4">
      {/* Tag filter */}
      <div>
        <p className="text-sm font-semibold mb-2" style={{ color: 'var(--text-secondary)' }}>
          {copy.memos.filterLabel}
        </p>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveTag(null)}
            aria-pressed={activeTag === null}
            className={`rounded-full px-4 py-2 text-sm font-semibold border-2 transition-colors ${
              activeTag === null
                ? 'bg-red-600 text-white border-red-600'
                : 'bg-white text-gray-700 border-gray-300 hover:border-red-400'
            }`}
          >
            {copy.memos.all}
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              aria-pressed={activeTag === tag}
              className={`rounded-full px-4 py-2 text-sm font-semibold border-2 transition-colors ${
                activeTag === tag
                  ? 'bg-red-600 text-white border-red-600'
                  : 'bg-white text-gray-700 border-gray-300 hover:border-red-400'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Memo cards */}
      <div className="space-y-4">
        {filtered.length === 0 ? (
          <p style={{ color: 'var(--text-secondary)' }}>Walang memo sa kategoryang ito.</p>
        ) : (
          filtered.map((memo) => <MemoCard key={memo.id} memo={memo} />)
        )}
      </div>
    </div>
  )
}

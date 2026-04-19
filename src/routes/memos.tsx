import { createFileRoute } from '@tanstack/react-router'
import { MemoList } from '../components/Memos/MemoList'
import { Breadcrumbs } from '../components/common/Breadcrumbs'
import { buildRouteMeta, buildCanonical } from '../config/seo'

export const Route = createFileRoute('/memos')({
  head: () => ({
    meta: buildRouteMeta('/memos'),
    links: buildCanonical('/memos'),
  }),
  component: MemosPage,
})

function MemosPage() {
  return (
    <div className="pt-6 space-y-6">
      <Breadcrumbs items={[{ label: 'LTO Memos', href: '/memos' }]} />

      <section aria-labelledby="memos-heading">
        <h1
          id="memos-heading"
          className="text-2xl font-black mb-2"
          style={{ color: 'var(--text-primary)' }}
        >
          📋 Memo at Patakaran ng LTO
        </h1>
        <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>
          Plain-language na buod ng mga opisyal na memorandum ng LTO Philippines. I-filter ayon
          sa paksa para madaling mahanap ang impormasyon na kailangan mo.
        </p>

        <MemoList />
      </section>
    </div>
  )
}

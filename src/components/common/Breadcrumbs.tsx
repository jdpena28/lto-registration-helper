import { Link } from '@tanstack/react-router'
import { SITE_URL } from '../../config/seo'
import { JsonLd } from './JsonLd'

export interface BreadcrumbItem {
  label: string
  href: string
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const all = [{ label: 'Home', href: '/' }, ...items]

  const listItem = all.map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.label,
    item: `${SITE_URL}${item.href}`,
  }))

  return (
    <>
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: listItem }} />
      <nav aria-label="Breadcrumb" className="mb-4">
        <ol className="flex flex-wrap gap-1 text-sm" style={{ color: 'var(--text-secondary)' }}>
          {all.map((item, i) => (
            <li key={item.href} className="flex items-center gap-1">
              {i > 0 && <span aria-hidden="true">/</span>}
              {i < all.length - 1 ? (
                <Link to={item.href} className="underline hover:text-red-600">
                  {item.label}
                </Link>
              ) : (
                <span aria-current="page">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}

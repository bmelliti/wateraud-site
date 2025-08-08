'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LOCALES = ['en', 'fr'] as const;
type Locale = typeof LOCALES[number];

function withLocale(pathname: string, nextLocale: Locale) {
  const parts = pathname.split('/');
  const first = parts[1];
  if (LOCALES.includes(first as Locale)) {
    parts[1] = nextLocale;
    const out = parts.join('/') || '/';
    return out.startsWith('/') ? out : `/${out}`;
  }
  return `/${nextLocale}${pathname.startsWith('/') ? '' : '/'}${pathname}`.replace(/\/{2,}/g, '/');
}

export function LanguageSwitcher({ className = '' }: { className?: string }) {
  const pathname = usePathname() || '/';
  const current = pathname.split('/')[1] as Locale | undefined;

  return (
    <nav aria-label="Language" className={className}>
      <ul className="flex items-center gap-2">
        {LOCALES.map((loc) => {
          const active = current === loc;
          return (
            <li key={loc}>
              <Link
                href={withLocale(pathname, loc)}
                aria-current={active ? 'page' : undefined}
                className={[
                  'px-3 py-1 rounded-md text-sm border',
                  active ? 'bg-primary-600 text-white border-primary-600'
                         : 'border-neutral-300 hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800'
                ].join(' ')}
              >
                {loc.toUpperCase()}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

// src/components/layout/Navbar.tsx
import Link from 'next/link';
import type { Locale } from '@/i18n/config';
import type { Translations } from '@/i18n/server';

type Props = { locale: Locale; translations: Translations };

export function Navbar({ locale, translations }: Props) {
  const t = translations.nav;
  const items = [
    { href: `/${locale}`, label: t.home },
    { href: `/${locale}/services`, label: t.services },
    { href: `/${locale}/industries`, label: t.industries },
    { href: `/${locale}/about`, label: t.about },
    { href: `/${locale}/contact`, label: t.contact },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/70 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href={`/${locale}`} className="flex items-center gap-2">
          <span className="text-lg font-semibold">WaterAud</span>
        </Link>
        <ul className="hidden gap-8 md:flex">
          {items.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="text-sm text-neutral-700 hover:text-neutral-900">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

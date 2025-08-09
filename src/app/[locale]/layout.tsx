// src/app/[locale]/layout.tsx
import type { Locale } from '@/i18n/config';

// Force pre-render of /en and /fr for the whole [locale] tree
export const dynamicParams = false;
export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'fr' }];
}

export default function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  // No <html>/<body> here — that belongs to root layout
  return <>{children}</>;
}

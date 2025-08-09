// src/app/[locale]/layout.tsx
import type { Locale } from '@/i18n/config';

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
  return <>{children}</>;
}

// src/app/[locale]/terms/page.tsx
import type { Metadata } from 'next';
import type { Locale } from '@/i18n/config';
import { getTranslations } from '@/i18n/server';
import { PageHero } from '@/components/sections/PageHero';
import { generateMetadata as makeMeta } from '@/lib/metadata';


export const dynamicParams = false;
export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'fr' }];
}


export async function generateMetadata({ params: { locale } }: { params: { locale: Locale } }): Promise<Metadata> {
  return makeMeta({
    title: locale === 'fr' ? 'Conditions d’utilisation - WaterAud' : 'Terms of Service - WaterAud',
    description: locale === 'fr'
      ? 'Conditions d’utilisation du site et des services WaterAud.'
      : 'Terms and conditions for using WaterAud services and website.',
    path: `/${locale}/terms`,
  });
}

export default async function TermsPage({ params: { locale } }: { params: { locale: Locale } }) {
  const t = await getTranslations(locale);
  return (
    <>
      <PageHero title={t.termsPage.hero.title} subtitle={t.termsPage.hero.subtitle} variant="default" />
      {/* keep your existing body/content below unchanged */}
      {/* ... your long terms content ... */}
    </>
  );
}

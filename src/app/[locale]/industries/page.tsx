// src/app/[locale]/(routes)/industries/page.tsx
import type { Metadata } from 'next';
import type { Locale } from '@/i18n/config';
import { getTranslations } from '@/i18n/server';
import { PageHero } from '@/components/sections/PageHero';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { generateMetadata as makeMeta } from '@/lib/metadata';
import Link from 'next/link';

export async function generateMetadata({ params: { locale } }: { params: { locale: Locale } }): Promise<Metadata> {
  return makeMeta({
    title: locale === 'fr' ? 'Secteurs desservis – WaterAud' : 'Industries We Serve – WaterAud',
    description: locale === 'fr'
      ? 'Solutions de traitement de l’eau pour municipal, industriel et réutilisation.'
      : 'Municipal, industrial & reuse water-treatment solutions.',
    path: `/${locale}/industries`,
  });
}

export default async function IndustriesPage({ params: { locale } }: { params: { locale: Locale } }) {
  const t = await getTranslations(locale);

  return (
    <>
      <PageHero title={t.industriesPage.hero.title} subtitle={t.industriesPage.hero.subtitle} />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8">
            {t.industriesPage.items.map((ind) => (
              <Card key={ind.id} id={ind.id} className="scroll-mt-24">
                <CardHeader>
                  <CardTitle className="text-2xl">{ind.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-6 text-neutral-700">{ind.description}</p>
                  <Link href={`/${locale}/contact`}>
                    <Button>{t.industriesPage.ctaButton}</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

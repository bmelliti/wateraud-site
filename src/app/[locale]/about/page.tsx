// src/app/[locale]/(routes)/about/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import type { Locale } from '@/i18n/config';
import { getTranslations } from '@/i18n/server';
import { PageHero } from '@/components/sections/PageHero';
import { Card, CardContent } from '@/components/ui/Card';
import { generateMetadata as makeMeta } from '@/lib/metadata';

export async function generateMetadata({ params: { locale } }: { params: { locale: Locale } }): Promise<Metadata> {
  return makeMeta({
    title: locale === 'fr' ? 'À propos de WaterAud' : 'About WaterAud',
    description: locale === 'fr'
      ? 'Découvrez notre mission : simplifier les décisions en traitement de l’eau.'
      : 'Discover our mission to simplify water-treatment decisions.',
    path: `/${locale}/about`,
  });
}

export default async function AboutPage({ params: { locale } }: { params: { locale: Locale } }) {
  const t = await getTranslations(locale);

  return (
    <>
      <PageHero title={t.about.hero.title} subtitle={t.about.hero.subtitle} />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold text-neutral-900">{t.about.story.title}</h2>
            <p className="leading-relaxed text-lg text-neutral-700">{t.about.story.body}</p>
          </div>
        </div>
      </section>

      <section className="bg-neutral-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-2xl font-bold text-neutral-900">{t.about.mission.title}</h2>
              <p className="text-neutral-700">{t.about.mission.body}</p>
            </div>
            <div>
              <h2 className="mb-4 text-2xl font-bold text-neutral-900">{t.about.vision.title}</h2>
              <p className="text-neutral-700">{t.about.vision.body}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold text-neutral-900">{t.about.values.heading}</h2>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {t.about.values.items.map((value, i) => (
              <Card key={i} className="text-center">
                <CardContent className="pt-6">
                  <h3 className="mb-2 text-lg font-semibold text-neutral-900">{value.name}</h3>
                  <p className="text-sm text-neutral-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold text-neutral-900">{t.about.team.heading}</h2>
          <div className="mx-auto max-w-2xl">
            {t.about.team.members.map((m) => (
              <Card key={m.id}>
                <CardContent className="p-8">
                  <h3 className="mb-2 text-xl font-semibold text-neutral-900">{m.name}</h3>
                  <p className="mb-4 font-medium text-primary-600">{m.title}</p>
                  <p className="text-neutral-700">{m.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// src/app/[locale]/(routes)/case-studies/page.tsx
import type { Metadata } from 'next';
import type { Locale } from '@/i18n/config';
import { getTranslations } from '@/i18n/server';
import Link from 'next/link';
import { generateMetadata as makeMeta } from '@/lib/metadata';


// ⚠️ CRITICAL: ADD THESE EXPORTS TO EVERY PAGE
export const dynamicParams = false;
export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'fr' }];
}


export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  return makeMeta({
    title: locale === 'fr' ? 'Études de cas – WaterAud' : 'Case Studies – WaterAud',
    description:
      locale === 'fr'
        ? 'Découvrez comment nous avons transformé le traitement de l’eau chez nos clients.'
        : 'See how we’ve helped organizations transform their water treatment.',
    path: `/${locale}/case-studies`,
  });
}

export default async function CaseStudiesPage({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const t = await getTranslations(locale);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-6 text-center text-4xl font-bold text-white md:text-5xl drop-shadow">
            {t.caseStudiesPage.hero.title}
          </h1>
          <p className="mx-auto max-w-3xl text-center text-lg text-white/85 md:text-xl drop-shadow">
            {t.caseStudiesPage.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="overflow-hidden rounded-lg border border-neutral-200 bg-white transition-shadow duration-200 hover:shadow-lg motion-reduce:transition-none"
              >
                <div className="flex h-48 items-center justify-center bg-neutral-200">
                  <span className="text-neutral-400">Project Image Placeholder</span>
                </div>
                <div className="p-6">
                  <span className="mb-3 inline-block rounded-full bg-primary-50 px-3 py-1 text-sm font-medium text-primary-600">
                    {t.caseStudiesPage.badgeMunicipal}
                  </span>
                  <h3 className="mb-2 text-xl font-semibold text-neutral-900">
                    Project Title {i} — TBD
                  </h3>
                  <ul className="mb-4 space-y-2">
                    <li className="text-sm text-neutral-700">• 30% cost reduction achieved</li>
                    <li className="text-sm text-neutral-700">• 100% regulatory compliance</li>
                    <li className="text-sm text-neutral-700">• 6-month implementation</li>
                  </ul>
                  <Link
                    href={`/${locale}/contact`}
                    className="font-medium text-primary-500 hover:text-primary-600 focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
                  >
                    {t.caseStudiesPage.readMore}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="bg-neutral-100 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-2xl font-semibold text-neutral-900 md:text-3xl">
            {t.caseStudiesPage.resultsHeading}
          </h2>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { label: t.caseStudiesPage.metrics.costSavings, value: '$5M+' },
              { label: t.caseStudiesPage.metrics.waterTreated, value: '500M Gallons' },
              { label: t.caseStudiesPage.metrics.complianceRate, value: '100%' },
              { label: t.caseStudiesPage.metrics.clientRetention, value: '95%' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="mb-2 text-3xl font-bold text-primary-600 md:text-4xl">
                  {stat.value}
                </div>
                <div className="text-sm text-neutral-700 md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

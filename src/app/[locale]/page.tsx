// src/app/[locale]/page.tsx
import Link from 'next/link';
import type { Locale } from '@/i18n/config';
import { getTranslations } from '@/i18n/server';

import { Button } from '@/components/ui/Button';
import { PageHero } from '@/components/sections/PageHero';
import { ServiceCard, ServiceCardGrid } from '@/components/sections/ServiceCard';
import { StatsBlock } from '@/components/sections/StatsBlock';
import { CTASection } from '@/components/sections/CTASection';
import { FAQSection } from '@/components/sections/FAQSection';

import { Droplets, FlaskConical, Settings } from 'lucide-react';

export const dynamicParams = false;
export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'fr' }];
}

type RouteParams = { params: { locale: Locale } };

export default async function HomePage({ params: { locale } }: RouteParams) {
  const t = await getTranslations(locale);

  const stats = [
    {
      value: '5',
      label: t.home.stats.yearsExperience.label,
      suffix: '+',
      description: t.home.stats.yearsExperience.desc,
    },
    {
      value: '15',
      label: t.home.stats.chemicalSavings.label,
      suffix: '%',
      description: t.home.stats.chemicalSavings.desc,
    },
    {
      value: '10',
      label: t.home.stats.trustedPartners.label,
      suffix: '+',
      description: t.home.stats.trustedPartners.desc,
    },
  ];

  const services = [
    {
      title: t.home.services.techSelection.title,
      description: t.home.services.techSelection.description,
      icon: <Droplets className="h-6 w-6" />,
      features: t.home.services.techSelection.features,
      href: `/${locale}/services#technology-selection`,
    },
    {
      title: t.home.services.chemOptim.title,
      description: t.home.services.chemOptim.description,
      icon: <FlaskConical className="h-6 w-6" />,
      features: t.home.services.chemOptim.features,
      href: `/${locale}/services#chemical-optimisation`,
    },
    {
      title: t.home.services.commissioning.title,
      description: t.home.services.commissioning.description,
      icon: <Settings className="h-6 w-6" />,
      features: t.home.services.commissioning.features,
      href: `/${locale}/services#commissioning-support`,
    },
  ];

  const faqs = [
    { question: t.home.faq.industries.q,    answer: t.home.faq.industries.a },
    { question: t.home.faq.pricing.q,       answer: t.home.faq.pricing.a },
    { question: t.home.faq.vendorNeutral.q, answer: t.home.faq.vendorNeutral.a },
  ];

  return (
    <>
      <PageHero title={t.home.hero.title} subtitle={t.home.hero.subtitle}>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link href={`/${locale}/contact`}>
            <Button size="lg">{t.home.hero.cta}</Button>
          </Link>
        </div>
      </PageHero>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mx-auto max-w-prose text-center text-lg text-neutral-700 md:text-xl">
            {t.home.intro}
          </p>
        </div>
      </section>

      <StatsBlock stats={stats} variant="gradient" animate />

      <section className="bg-neutral-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-neutral-900 md:text-4xl">
              {t.home.services.heading}
            </h2>
          </div>

          <ServiceCardGrid columns={3}>
            {services.map((service, i) => (
              <ServiceCard key={i} {...service} />
            ))}
          </ServiceCardGrid>

          <div className="mt-8 text-center">
            <p className="text-neutral-600">
              {t.home.services.explorePrefix}{' '}
              <Link
                href={`/${locale}/services`}
                className="font-medium text-primary-600 underline hover:text-primary-700"
              >
                {t.home.services.exploreLink}
              </Link>{' '}
              {t.home.services.exploreSuffix}
            </p>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} className="bg-white" />

      <CTASection
        title={t.home.cta.title}
        description={t.home.cta.description}
        primaryAction={{ label: t.home.cta.primary, href: `/${locale}/contact` }}
        variant="dark"
      />
    </>
  );
}

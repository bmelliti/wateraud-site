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

type RouteParams = { params: { locale: Locale } };

export default async function HomePage({ params: { locale } }: RouteParams) {
  // Load translations (expects keys shown below in your en.json/fr.json)
  const t = await getTranslations(locale);

  const stats = [
    {
      value: '5',
      label: t.home.stats.yearsExperience.label,         // e.g., "Years Experience" / "Années d’expérience"
      suffix: '+',
      description: t.home.stats.yearsExperience.desc,    // e.g., "hands-on field & laboratory experience"
    },
    {
      value: '15',
      label: t.home.stats.chemicalSavings.label,
      suffix: '%',
      description: t.home.stats.chemicalSavings.desc,
    },
    // {
    //   value: '5',
    //   label: t.home.stats.successfulEngagements.label,
    //   suffix: '+',
    //   description: t.home.stats.successfulEngagements.desc,
    // },
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
      features: t.home.services.techSelection.features, // string[]
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
    {
      question: t.home.faq.industries.q,
      answer: t.home.faq.industries.a,
    },
    {
      question: t.home.faq.pricing.q,
      answer: t.home.faq.pricing.a,
    },
    {
      question: t.home.faq.vendorNeutral.q,
      answer: t.home.faq.vendorNeutral.a,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <PageHero
        title={t.home.hero.title}        // "Water Treatment Made Simple"
        subtitle={t.home.hero.subtitle}  // localized subtitle
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={`/${locale}/contact`}>
            <Button size="lg">{t.home.hero.cta}</Button>
          </Link>
        </div>
      </PageHero>

      {/* Intro Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg md:text-xl text-neutral-700 max-w-prose mx-auto text-center">
            {t.home.intro}
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <StatsBlock stats={stats} variant="gradient" animate />

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              {t.home.services.heading}  {/* "Services Snapshot" */}
            </h2>
          </div>

          <ServiceCardGrid columns={3}>
            {services.map((service, i) => (
              <ServiceCard key={i} {...service} />
            ))}
          </ServiceCardGrid>

          <div className="text-center mt-8">
            <p className="text-neutral-600">
              {t.home.services.explorePrefix}{' '}
              <Link
                href={`/${locale}/services`}
                className="text-primary-600 hover:text-primary-700 font-medium underline"
              >
                {t.home.services.exploreLink}  {/* "Services" */}
              </Link>{' '}
              {t.home.services.exploreSuffix}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} className="bg-white" />

      {/* Final CTA */}
      <CTASection
        title={t.home.cta.title}
        description={t.home.cta.description}
        primaryAction={{ label: t.home.cta.primary, href: `/${locale}/contact` }}
        variant="dark"
      />
    </>
  );
}

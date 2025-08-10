// src/app/[locale]/(routes)/services/page.tsx
import type { Metadata } from 'next';
import type { Locale } from '@/i18n/config';
import { getTranslations } from '@/i18n/server';

import { PageHero } from '@/components/sections/PageHero';
import { ServiceCard } from '@/components/sections/ServiceCard';
import { CTASection } from '@/components/sections/CTASection';
import { generateMetadata as makeMeta } from '@/lib/metadata';

import { Droplets, FlaskConical, Settings, Shield, Calculator } from 'lucide-react';


// ⚠️ CRITICAL: ADD THESE EXPORTS TO EVERY PAGE
export const dynamicParams = false;
export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'fr' }];
}


export async function generateMetadata({ params: { locale } }: { params: { locale: Locale } }): Promise<Metadata> {
  return makeMeta({
    title: locale === 'fr' ? 'Nos services – WaterAud' : 'Water Treatment Services – WaterAud',
    description:
      locale === 'fr'
        ? 'Du choix technologique à la mise en service, découvrez nos services de bout en bout.'
        : 'From tech selection to commissioning, explore our end-to-end services.',
    path: `/${locale}/services`,
  });
}

export default async function ServicesPage({ params: { locale } }: { params: { locale: Locale } }) {
  const t = await getTranslations(locale);

  const items = t.servicesPage.items;
  const services = [
    {
      id: 'technology-selection',
      title: items.technologySelection.title,
      tagline: items.technologySelection.tagline,
      description: items.technologySelection.description,
      icon: <Droplets className="h-6 w-6" />,
      features: items.technologySelection.features,
      href: `/${locale}/contact`,
    },
    {
      id: 'supplier-liaison',
      title: items.supplierLiaison.title,
      tagline: items.supplierLiaison.tagline,
      description: items.supplierLiaison.description,
      icon: <Calculator className="h-6 w-6" />,
      features: items.supplierLiaison.features,
      href: `/${locale}/contact`,
    },
    {
      id: 'chemical-optimisation',
      title: items.chemicalOptimisation.title,
      tagline: items.chemicalOptimisation.tagline,
      description: items.chemicalOptimisation.description,
      icon: <FlaskConical className="h-6 w-6" />,
      features: items.chemicalOptimisation.features,
      href: `/${locale}/contact`,
    },
    {
      id: 'commissioning-support',
      title: items.commissioningSupport.title,
      tagline: items.commissioningSupport.tagline,
      description: items.commissioningSupport.description,
      icon: <Settings className="h-6 w-6" />,
      features: items.commissioningSupport.features,
      href: `/${locale}/contact`,
    },
    {
      id: 'regulatory-navigation',
      title: items.regulatoryNavigation.title,
      tagline: items.regulatoryNavigation.tagline,
      description: items.regulatoryNavigation.description,
      icon: <Shield className="h-6 w-6" />,
      features: items.regulatoryNavigation.features,
      href: `/${locale}/contact`,
    },
  ];

  return (
    <>
      <PageHero
        title={t.servicesPage.hero.title}
        subtitle={t.servicesPage.hero.subtitle}
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service) => (
              <div key={service.id} id={service.id} className="scroll-mt-24">
                <div className="mb-6">
                  <h2 className="mb-2 text-3xl font-bold text-neutral-900">{service.title}</h2>
                  <p className="text-xl font-medium text-primary-600">{service.tagline}</p>
                </div>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={t.servicesPage.cta.title}
        description={t.servicesPage.cta.description}
        primaryAction={{ label: t.servicesPage.cta.primary, href: `/${locale}/contact` }}
        variant="dark"
      />
    </>
  );
}

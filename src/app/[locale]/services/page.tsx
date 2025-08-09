// src/app/[locale]/(routes)/services/page.tsx
import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Our Services – WaterAud' };

import { PageHero } from '@/components/sections/PageHero';
import { ServiceCard } from '@/components/sections/ServiceCard';
import { CTASection } from '@/components/sections/CTASection';
import { Droplets, FlaskConical, Settings, Shield, Calculator } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      id: 'technology-selection',
      title: 'Technology Selection & Trade-off Analysis',
      tagline: 'Pick the right process the first time',
      description:
        'From membranes and ion-exchange to media filtration and biological treatment, we evaluate every viable option...',
      icon: <Droplets className="h-6 w-6" />,
      features: ['Reduced CAPEX risk', 'Data-driven decisions', 'Vendor-neutral recommendation'],
      href: '#technology-selection',
    },
    {
      id: 'supplier-liaison',
      title: 'Supplier Liaison & CAPEX Estimation',
      tagline: 'Reliable budget numbers—fast',
      description:
        'We prepare equipment schedules, issue RFQs to vetted vendors and normalise bids so you compare apples to apples...',
      icon: <Calculator className="h-6 w-6" />,
      features: ['Faster procurement', 'Transparent pricing', 'Negotiation leverage'],
      href: '#supplier-liaison',
    },
    {
      id: 'chemical-optimisation',
      title: 'Chemical Optimisation & Bench Testing',
      tagline: 'Cut chemical spend, boost performance',
      description:
        'On-site jar tests and pilot protocols reveal the optimal coagulant, polymer or disinfectant dose and sequence...',
      icon: <FlaskConical className="h-6 w-6" />,
      features: ['10-25% chemical savings', 'Improved effluent quality', 'Reduced sludge volumes'],
      href: '#chemical-optimisation',
    },
    {
      id: 'commissioning-support',
      title: 'Commissioning Support & Training',
      tagline: 'Start-up without headaches',
      description:
        'We craft step-by-step SOPs, lead functional testing and train operators, ensuring your plant hits design spec...',
      icon: <Settings className="h-6 w-6" />,
      features: ['Smooth start-up', 'Reduced downtime', 'Knowledge transfer'],
      href: '#commissioning-support',
    },
    {
      id: 'regulatory-navigation',
      title: 'Regulatory Navigation',
      tagline: 'Stay compliant, stay operational',
      description:
        'Our team interprets local, provincial and national water-quality regulations, prepares permit submissions...',
      icon: <Shield className="h-6 w-6" />,
      features: ['Compliance assurance', 'Reduced administrative burden', 'Avoided fines'],
      href: '#regulatory-navigation',
    },
  ];

  return (
    <>
      <PageHero title="Our Services" subtitle="End-to-end water treatment solutions tailored to your needs" />
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
        title="Ready to Get Started?"
        description="Let's discuss how our services can help you achieve your water treatment goals"
        primaryAction={{ label: 'Schedule Consultation', href: '/contact' }}
        variant="dark"
      />
    </>
  );
}

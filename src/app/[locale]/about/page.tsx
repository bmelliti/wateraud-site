// src/app/[locale]/(routes)/about/page.tsx
import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'About WaterAud' };

import { PageHero } from '@/components/sections/PageHero';
import { Card, CardContent } from '@/components/ui/Card';

export default function AboutPage() {
  const values = [
    { name: 'Simplicity', description: 'make the complex clear' },
    { name: 'Integrity', description: 'vendor-neutral, client-first decisions' },
    { name: 'Evidence-Based Practice', description: 'data over opinion' },
    { name: 'Client Empowerment', description: 'transfer knowledge, not dependence' },
  ];

  const team = [
    { name: 'Brahim Melliti', title: 'Principal Water Engineer & Founder', bio: 'Water-treatment engineer with 5+ years designing, optimising and commissioning plants across Canada.' },
  ];

  return (
    <>
      <PageHero title="About WaterAud" subtitle="Clarity and confidence in water-treatment decision-making" />
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold text-neutral-900">Our Story</h2>
            <p className="text-lg leading-relaxed text-neutral-700">
              WaterAud was founded to bring clarity and confidence to water-treatment decision-making...
            </p>
          </div>
        </div>
      </section>
      <section className="bg-neutral-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-2xl font-bold text-neutral-900">Mission</h2>
              <p className="text-neutral-700">To ensure the success of municipal and industrial water-treatment projects through independent, science-driven advice.</p>
            </div>
            <div>
              <h2 className="mb-4 text-2xl font-bold text-neutral-900">Vision</h2>
              <p className="text-neutral-700">A world where every drop of water is treated efficiently and sustainably.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold text-neutral-900">Values</h2>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <Card key={v.name} className="text-center">
                <CardContent className="pt-6">
                  <h3 className="mb-2 text-lg font-semibold text-neutral-900">{v.name}</h3>
                  <p className="text-sm text-neutral-600">{v.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-neutral-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold text-neutral-900">Team</h2>
          <div className="mx-auto max-w-2xl">
            {team.map((m) => (
              <Card key={m.name}>
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

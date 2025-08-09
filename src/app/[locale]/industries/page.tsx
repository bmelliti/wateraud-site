// src/app/[locale]/(routes)/industries/page.tsx
import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Industries We Serve – WaterAud' };

import { PageHero } from '@/components/sections/PageHero';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function IndustriesPage() {
  const industries = [
    { id: 'municipal', title: 'Municipal Drinking Water', description: 'Aging infrastructure, strict quality limits and tight budgets...' },
    { id: 'industrial', title: 'Industrial Process Water', description: 'Variable feed quality and downtime risk can cripple production...' },
    { id: 'wastewater', title: 'Wastewater & Reuse', description: 'Emerging contaminants and soaring energy costs challenge compliance...' },
  ];

  return (
    <>
      <PageHero title="Industries We Serve" subtitle="Tailored solutions for your sector's unique challenges" />
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8">
            {industries.map((industry) => (
              <Card key={industry.id} id={industry.id} className="scroll-mt-24">
                <CardHeader><CardTitle className="text-2xl">{industry.title}</CardTitle></CardHeader>
                <CardContent>
                  <p className="mb-6 text-neutral-700">{industry.description}</p>
                  <Link href="/contact"><Button>Request Consultation</Button></Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

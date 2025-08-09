// src/app/[locale]/terms/page.tsx
import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Terms of Service – WaterAud' };

import { PageHero } from '@/components/sections/PageHero';

export default function TermsPage() {
  return (
    <>
      <PageHero title="Terms of Service" subtitle="Last updated: January 1, 2024" />
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2>1. Agreement to Terms</h2>
            <p>These Terms of Service ("Terms") govern your use of the WaterAud website and services...</p>
            {/* …keep your sections here… */}
          </div>
        </div>
      </section>
    </>
  );
}

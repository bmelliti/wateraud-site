// src/app/[locale]/(routes)/contact/page.tsx
import type { Metadata } from 'next';
import type { Locale } from '@/i18n/config';
import { getTranslations } from '@/i18n/server';
import { ContactForm } from '@/components/forms/ContactForm';
import { generateMetadata as makeMeta } from '@/lib/metadata';


// ⚠️ CRITICAL: ADD THESE EXPORTS TO EVERY PAGE
export const dynamicParams = false;
export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'fr' }];
}


export async function generateMetadata({ params: { locale } }: { params: { locale: Locale } }): Promise<Metadata> {
  return makeMeta({
    title: locale === 'fr' ? 'Contact – WaterAud' : 'Contact – WaterAud',
    description: locale === 'fr' ? 'Discutons de votre projet.' : 'Let’s discuss your project.',
    path: `/${locale}/contact`,
  });
}

export default async function ContactPage({ params: { locale } }: { params: { locale: Locale } }) {
  const t = await getTranslations(locale);
  const s = t.contactPage.sidebar;

  return (
    <>
      <section className="bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-center text-4xl font-bold text-white md:text-5xl">
            {t.contactPage.hero.title}
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="rounded-xl bg-white p-8 shadow-xl md:p-10">
                <ContactForm t={t.forms.contact} />
              </div>
            </div>
            <div className="lg:col-span-1">
              <div className="rounded-xl bg-neutral-100 p-8">
                <h2 className="mb-6 text-xl font-semibold text-neutral-900">{s.heading}</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="mb-2 font-medium text-neutral-900">{s.phone}</h3>
                    <a href="tel:+16136007408" className="text-primary-500 transition-colors hover:text-primary-600">
                      (613) 600-7408
                    </a>
                  </div>
                  <div>
                    <h3 className="mb-2 font-medium text-neutral-900">{s.email}</h3>
                    <a href="mailto:contact@wateraud.com" className="text-primary-500 transition-colors hover:text-primary-600">
                      contact@wateraud.com
                    </a>
                  </div>
                  <div>
                    <h3 className="mb-2 font-medium text-neutral-900">{s.hours}</h3>
                    <p className="whitespace-pre-line text-neutral-700">{s.hoursValue}</p>
                  </div>
                  <div>
                    <h3 className="mb-2 font-medium text-neutral-900">{s.response}</h3>
                    <p className="text-neutral-700">{s.responseValue}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

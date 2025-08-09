// src/app/[locale]/(routes)/contact/page.tsx
import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Contact – WaterAud' };

import { ContactForm } from '@/components/forms/ContactForm';

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-center text-4xl font-bold text-white md:text-5xl">Let's Discuss Your Project</h1>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="rounded-xl bg-white p-8 shadow-xl md:p-10">
                <ContactForm />
              </div>
            </div>
            <div className="lg:col-span-1">
              <div className="rounded-xl bg-neutral-100 p-8">
                <h2 className="mb-6 text-xl font-semibold text-neutral-900">Get in Touch</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="mb-2 font-medium text-neutral-900">Phone</h3>
                    <a href="tel:+16136007408" className="text-primary-500 transition-colors hover:text-primary-600">(613) 600-7408</a>
                  </div>
                  <div>
                    <h3 className="mb-2 font-medium text-neutral-900">Email</h3>
                    <a href="mailto:contact@wateraud.com" className="text-primary-500 transition-colors hover:text-primary-600">contact@wateraud.com</a>
                  </div>
                  <div>
                    <h3 className="mb-2 font-medium text-neutral-900">Office Hours</h3>
                    <p className="text-neutral-700">Mon–Fri, 8:00–17:00 EST</p>
                  </div>
                  <div>
                    <h3 className="mb-2 font-medium text-neutral-900">Response Time</h3>
                    <p className="text-neutral-700">Usually within 24 business hours</p>
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

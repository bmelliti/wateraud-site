import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SkipLink } from '@/components/layout/SkipLink';
import { ToastContainer } from '@/components/ui/Toast';
import { getTranslations } from '@/i18n/server';
import type { Locale } from '@/i18n/config';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const dynamicParams = false;

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'fr' }];
}

export async function generateMetadata({
  params: { locale }
}: { params: { locale: Locale } }): Promise<Metadata> {
  return {
    title: locale === 'fr' ? 'WaterAud - Traitement d’eau simplifié' : 'WaterAud - Simplified Water Treatment',
    description: locale === 'fr'
      ? 'Expertise indépendante en traitement d’eau pour ingénieurs municipaux et industriels'
      : 'Independent water treatment expertise for municipal and industrial engineers'
  };
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  const translations = await getTranslations(locale);

  return (
    <html lang={locale} className={inter.className}>
      <body className="flex min-h-screen flex-col">
        <SkipLink />
        <Navbar locale={locale} translations={translations} />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer locale={locale} translations={translations} />
        <ToastContainer />
      </body>
    </html>
  );
}

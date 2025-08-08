import Link from 'next/link';
import type { Locale } from '@/i18n/config';
import type { Translations } from '@/i18n/server';
import { SITE_CONFIG, SERVICES } from '@/lib/constants';

type Props = {
  locale: Locale;
  translations: Translations;
};

export function Footer({ locale, translations }: Props) {
  const t = translations.footer;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-neutral-100" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="col-span-1">
            <div className="mb-4 flex items-center space-x-2">
              <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <g fill="none" fillRule="evenodd">
                  <path d="M15 5C15 5 5 15 5 25C5 30.5228 9.47715 35 15 35C20.5228 35 25 30.5228 25 25C25 15 15 5 15 5Z" fill="#FFFFFF"/>
                  <path d="M20 10C20 10 12 18 12 25C12 28.3137 14.6863 31 18 31C21.3137 31 24 28.3137 24 25C24 18 20 10 20 10Z" fill="#E4F3FF"/>
                </g>
              </svg>
              <span className="text-xl font-semibold text-white">WaterAud</span>
            </div>
            <p className="text-sm text-neutral-400">
              {t.tagline}
            </p>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h2 className="mb-4 text-lg font-semibold text-white">{t.servicesHeading}</h2>
            <ul className="space-y-2">
              {SERVICES.slice(0, 4).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/${locale}/services#${service.id}`}
                    className="text-sm text-neutral-400 transition-colors hover:text-primary-400"
                  >
                    {service.category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="col-span-1">
            <h2 className="mb-4 text-lg font-semibold text-white">{t.companyHeading}</h2>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}/about`} className="text-sm text-neutral-400 transition-colors hover:text-primary-400">
                  {t.links.about}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/case-studies`} className="text-sm text-neutral-400 transition-colors hover:text-primary-400">
                  {t.links.caseStudies}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/industries`} className="text-sm text-neutral-400 transition-colors hover:text-primary-400">
                  {t.links.industries}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/contact`} className="text-sm text-neutral-400 transition-colors hover:text-primary-400">
                  {t.links.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h2 className="mb-4 text-lg font-semibold text-white">{t.contactHeading}</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={`tel:${SITE_CONFIG.phone.replace(/\D/g, '')}`}
                  className="text-neutral-400 transition-colors hover:text-primary-400"
                >
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-neutral-400 transition-colors hover:text-primary-400"
                >
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li className="pt-2">
                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center font-medium text-primary-400 transition-colors hover:text-primary-300"
                >
                  {t.getDirections} →
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-neutral-800 bg-black">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between text-center md:flex-row md:text-left">
            <p className="text-sm text-neutral-400">
              © {currentYear} WaterAud. {t.rights}.
            </p>
            <Link
              href={`/${locale}/terms`}
              className="mt-2 text-sm text-neutral-400 transition-colors hover:text-primary-400 md:mt-0"
            >
              {t.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

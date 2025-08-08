'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { LanguageSwitcher } from '@/components/layout/languageSwitcher';
import type { Locale } from '@/i18n/config';

const Logo = () => (
  <Image
    src="/logo-wateraud.svg"
    alt="WaterAud"
    width={270}
    height={66}
    priority
    className="h-16 w-auto md:h-20 lg:h-24"
  />
);

interface NavbarProps {
  locale: Locale;
  translations: any;
}

export function Navbar({ locale, translations }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: `/${locale}`, label: translations.nav.home },
    { href: `/${locale}/about`, label: translations.nav.about },
    { href: `/${locale}/services`, label: translations.nav.services },
    { href: `/${locale}/industries`, label: translations.nav.industries },
    { href: `/${locale}/contact`, label: translations.nav.contact },
  ];

  useEffect(() => setMobileOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : 'unset';
  }, [mobileOpen]);

  return (
    <nav className="bg-white shadow-sm" role="navigation" aria-label="Main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-32 flex items-center justify-between">
        <Link href={`/${locale}`} className="focus-visible:ring-primary-600 focus-visible:ring-2 rounded">
          <Logo />
        </Link>

        {/* Desktop links + Language Switcher */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'px-4 py-2 font-medium text-neutral-700 border-b-2 border-transparent hover:text-primary-500',
                  pathname === link.href && 'text-primary-600 border-primary-500'
                )}
                aria-current={pathname === link.href ? 'page' : undefined}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <LanguageSwitcher className="ml-4" />
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-neutral-700 hover:text-primary-500 focus-visible:ring-2 focus-visible:ring-primary-600 rounded"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile overlay */}
      <div
        className={cn(
          'fixed inset-0 z-50 bg-white transition-transform duration-300 md:hidden',
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        aria-hidden={!mobileOpen}
      >
        <div className="flex items-center justify-between h-32 px-4 border-b border-neutral-200">
          <Link href={`/${locale}`} className="focus-visible:ring-primary-600 focus-visible:ring-2 rounded">
            <Logo />
          </Link>
          <button
            onClick={() => setMobileOpen(false)}
            className="p-2 text-neutral-700 hover:text-primary-500 focus-visible:ring-2 focus-visible:ring-primary-600 rounded"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-4 py-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'block py-4 text-lg font-medium border-b border-neutral-200',
                pathname === link.href ? 'text-primary-600' : 'text-neutral-700'
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-6 pt-6 border-t border-neutral-200">
            <LanguageSwitcher className="ml-4" />
          </div>
        </nav>
      </div>
    </nav>
  );
}
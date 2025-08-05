'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/about', label: 'About' },
  { href: '/industries', label: 'Industries' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  // close on route change
  useEffect(() => setMobileOpen(false), [pathname]);

  // lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : 'unset';
  }, [mobileOpen]);

  return (
    <nav className="bg-white shadow-sm" role="navigation" aria-label="Main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="focus-visible:ring-primary-600 focus-visible:ring-2 rounded">
            <img
                src="/logo-wateraud.png"
                alt="WaterAud"
                className="h-12 w-auto md:h-14"  
        />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex space-x-1">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                'px-4 py-2 font-medium text-neutral-700 border-b-2 border-transparent hover:text-primary-500',
                pathname === l.href && 'text-primary-600 border-primary-500'
              )}
              aria-current={pathname === l.href ? 'page' : undefined}
            >
              {l.label}
            </Link>
          ))}
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
        <div className="flex items-center justify-between h-20 px-4 border-b border-neutral-200">
         <Link href="/" className="focus-visible:ring-primary-600 focus-visible:ring-2 rounded">
                <img
                    src="/logo-wateraud.png"
                    alt="WaterAud"
                    className="h-12 w-auto md:h-14"  
                />
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
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                'block py-4 text-lg font-medium border-b border-neutral-200',
                pathname === l.href ? 'text-primary-600' : 'text-neutral-700'
              )}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </nav>
  );
}
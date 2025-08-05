'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useScrollLock } from '@/hooks/useScrollLock';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/about', label: 'About' },
  { href: '/industries', label: 'Industries' },
  { href: '/contact', label: 'Contact' },
];

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  
  useScrollLock(isOpen);
  
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 text-neutral-700 hover:text-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 rounded-lg"
        aria-expanded={isOpen}
        aria-label="Toggle navigation menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      <div
        className={cn(
          'fixed inset-0 z-50 bg-white md:hidden transition-transform duration-300',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        aria-hidden={!isOpen}
      >
        <nav className="h-full pt-20 px-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'block py-4 text-lg font-medium border-b border-neutral-200 transition-colors',
                pathname === link.href
                  ? 'text-primary-600'
                  : 'text-neutral-700 hover:text-primary-500'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
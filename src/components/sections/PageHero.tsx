import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
}

export function PageHero({ title, subtitle, children, className }: PageHeroProps) {
  return (
    <section
      className={cn(
        'bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 py-16 md:py-20',
        className
      )}
      aria-labelledby="hero-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 id="hero-heading" className="text-4xl md:text-5xl font-bold text-white mb-6">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-accent-50 max-w-3xl mx-auto mb-6">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
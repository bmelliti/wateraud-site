import Link from 'next/link';
import { Button } from '@/components/ui/Button';

interface CTASectionProps {
  title: string;
  description?: string;
  primaryAction: {
    label: string;
    href: string;
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
  variant?: 'default' | 'dark';
}

export function CTASection({
  title,
  description,
  primaryAction,
  secondaryAction,
  variant = 'default',
}: CTASectionProps) {
  const isDark = variant === 'dark';
  
  return (
    <section className={isDark ? 'bg-primary-600 text-white' : 'bg-neutral-100'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
        <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-neutral-900'}`}>
          {title}
        </h2>
        
        {description && (
          <p className={`text-lg mb-8 max-w-2xl mx-auto ${isDark ? 'text-primary-100' : 'text-neutral-700'}`}>
            {description}
          </p>
        )}
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={primaryAction.href}>
            <Button size="lg" variant={isDark ? 'secondary' : 'primary'}>
              {primaryAction.label}
            </Button>
          </Link>
          
          {secondaryAction && (
            <Link href={secondaryAction.href}>
              <Button size="lg" variant="ghost">
                {secondaryAction.label}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
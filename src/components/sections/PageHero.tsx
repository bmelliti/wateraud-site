import { cn } from '@/lib/utils';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  className?: string;
  variant?: 'default' | 'gradient' | 'dark';
  children?: React.ReactNode;
}

export function PageHero({ 
  title, 
  subtitle, 
  className,
  variant = 'gradient',
  children 
}: PageHeroProps) {
  const variants = {
    default: 'bg-neutral-100 text-neutral-900',
    gradient: 'bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 text-white',
    dark: 'bg-neutral-900 text-white',
  };

  return (
    <section className={cn(variants[variant], 'relative overflow-hidden', className)}>
      {/* Background Pattern */}
      {variant === 'gradient' && (
        <div className="absolute inset-0 bg-black/5" />
      )}
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className={cn(
            'text-4xl md:text-5xl lg:text-6xl font-bold mb-6',
            variant === 'gradient' && 'drop-shadow-md'
          )}>
            {title}
          </h1>
          
          {subtitle && (
            <p className={cn(
              'text-lg md:text-xl lg:text-2xl',
              variant === 'gradient' ? 'text-primary-100' : 'text-neutral-600'
            )}>
              {subtitle}
            </p>
          )}
          
          {children && (
            <div className="mt-8">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
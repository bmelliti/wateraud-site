// src/components/sections/StatsBlock.tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface Stat {
  value: string | number;
  label: string;
  description?: string;
  prefix?: string;
  suffix?: string;
}

interface StatsBlockProps {
  stats: Stat[];
  className?: string;
  variant?: 'default' | 'gradient' | 'dark' | 'minimal';
  animate?: boolean;
}

function AnimatedNumber({ 
  value, 
  duration = 2000 
}: { 
  value: number; 
  duration?: number; 
}) {
  const [displayValue, setDisplayValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const endValue = value;

    const updateNumber = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(easeOutQuart * endValue);
      
      setDisplayValue(currentValue);

      if (progress < 1) {
        requestAnimationFrame(updateNumber);
      }
    };

    requestAnimationFrame(updateNumber);
  }, [value, duration, isVisible]);

  return <span ref={elementRef}>{displayValue}</span>;
}

export function StatsBlock({ 
  stats, 
  className, 
  variant = 'default',
  animate = true 
}: StatsBlockProps) {
  const variants = {
    default: {
      section: 'bg-white',
      container: 'border-y border-neutral-200',
      value: 'text-primary-600',
      label: 'text-neutral-900',
      description: 'text-neutral-600',
      divider: 'border-neutral-200',
    },
    gradient: {
      section: 'bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700',
      container: '',
      value: 'text-white',
      label: 'text-white/90',  // Changed to white with 90% opacity
      description: 'text-white/70', // Changed to white with 70% opacity
      divider: 'border-primary-400/30',
    },
    dark: {
      section: 'bg-neutral-900',
      container: 'border-y border-neutral-800',
      value: 'text-primary-400',
      label: 'text-white',
      description: 'text-neutral-400',
      divider: 'border-neutral-800',
    },
    minimal: {
      section: 'bg-transparent',
      container: '',
      value: 'text-primary-600',
      label: 'text-neutral-700',
      description: 'text-neutral-500',
      divider: 'border-neutral-300',
    },
  };

  const styles = variants[variant];
  const gridCols = stats.length <= 2 ? 'grid-cols-1 sm:grid-cols-2' :
                   stats.length === 3 ? 'grid-cols-1 sm:grid-cols-3' :
                   'grid-cols-2 lg:grid-cols-4';

  return (
    <section 
      className={cn(styles.section, 'py-16 md:py-20', className)}
      aria-label="Statistics"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={cn(
          'grid gap-8 md:gap-0',
          gridCols,
          styles.container,
          'md:divide-x',
          styles.divider
        )}>
          {stats.map((stat, index) => {
            // Extract numeric value for animation
            const numericValue = typeof stat.value === 'number' 
              ? stat.value 
              : parseInt(stat.value.toString().replace(/\D/g, ''), 10);
            
            const hasAnimation = animate && !isNaN(numericValue);

            return (
              <div 
                key={index} 
                className={cn(
                  'text-center px-4 md:px-8',
                  index > 0 && 'md:pl-8'
                )}
              >
                <div className={cn(
                  'text-4xl md:text-5xl lg:text-6xl font-bold mb-2', 
                  styles.value
                )}>
                  {stat.prefix}
                  {hasAnimation ? (
                    <AnimatedNumber value={numericValue} />
                  ) : (
                    stat.value
                  )}
                  {stat.suffix}
                </div>
                
                <div className={cn(
                  'text-lg md:text-xl font-medium',
                  styles.label
                )}>
                  {stat.label}
                </div>
                
                {stat.description && (
                  <p className={cn(
                    'text-sm mt-2 max-w-xs mx-auto',
                    styles.description // This should apply the color
                  )}>
                    {stat.description}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
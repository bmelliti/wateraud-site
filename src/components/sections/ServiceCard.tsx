'use client';

import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  features?: string[];
  href: string;
  icon?: ReactNode;
  className?: string;
  variant?: 'default' | 'compact' | 'featured';
  external?: boolean;
  badge?: string;
  onClick?: () => void;
}

export function ServiceCard({ 
  title, 
  description, 
  features, 
  href, 
  icon,
  className,
  variant = 'default',
  external = false,
  badge,
  onClick
}: ServiceCardProps) {
  const isExternal = external || href.startsWith('http');
  
  const cardContent = (
    <>
      {/* Header Section */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start gap-4">
          {icon && (
            <div className={cn(
              'flex-shrink-0 rounded-lg flex items-center justify-center transition-colors',
              variant === 'featured' 
                ? 'w-14 h-14 bg-primary-600 text-white' 
                : 'w-12 h-12 bg-primary-100 text-primary-600 group-hover:bg-primary-600 group-hover:text-white'
            )}>
              {icon}
            </div>
          )}
          <div className="flex-1">
            <h3 className={cn(
              'font-semibold mb-2 transition-colors',
              variant === 'featured' ? 'text-xl' : 'text-lg',
              'text-neutral-900 group-hover:text-primary-600'
            )}>
              {title}
            </h3>
            {badge && (
              <span className="inline-block px-2 py-1 text-xs font-medium bg-primary-100 text-primary-700 rounded-full mb-2">
                {badge}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Description */}
      <p className={cn(
        'text-neutral-600 mb-4',
        variant === 'compact' ? 'text-sm line-clamp-2' : 'text-base'
      )}>
        {description}
      </p>

      {/* Features List */}
      {features && features.length > 0 && variant !== 'compact' && (
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start text-sm">
              <svg 
                className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M5 13l4 4L19 7" 
                />
              </svg>
              <span className="text-neutral-600">{feature}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Call to Action */}
      <div className={cn(
        'inline-flex items-center font-medium transition-all duration-200',
        'text-primary-600 group-hover:text-primary-700',
        variant === 'compact' ? 'text-sm' : 'text-base'
      )}>
        <span>Learn more</span>
        {isExternal ? (
          <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        ) : (
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        )}
      </div>
    </>
  );

  const cardClasses = cn(
    'group relative block h-full',
    'bg-white rounded-xl border transition-all duration-300',
    'hover:shadow-xl hover:-translate-y-1',
    variant === 'featured' 
      ? 'border-primary-200 shadow-md p-8' 
      : 'border-neutral-200 hover:border-primary-200 p-6',
    className
  );

  // If onClick is provided, render as button
  if (onClick) {
    return (
      <button
        onClick={onClick}
        className={cn(cardClasses, 'w-full text-left cursor-pointer')}
        aria-label={`Learn more about ${title}`}
      >
        {cardContent}
      </button>
    );
  }

  // If external link
if (isExternal) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cardClasses}
      aria-label={`Learn more about ${title} (opens in new tab)`}
    >
      {cardContent}
    </a>
  );
}


  // Internal link
  return (
    <Link href={href} className={cardClasses}>
      {cardContent}
    </Link>
  );
}

// Grid wrapper component for consistent layouts
interface ServiceCardGridProps {
  children: React.ReactNode;
  columns?: 2 | 3 | 4;
  className?: string;
}

export function ServiceCardGrid({ 
  children, 
  columns = 4,
  className 
}: ServiceCardGridProps) {
  const gridCols = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <div className={cn(
      'grid gap-6',
      gridCols[columns],
      className
    )}>
      {children}
    </div>
  );
}
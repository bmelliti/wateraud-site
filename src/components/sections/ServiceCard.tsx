import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  index?: number;
  title: string;
  description: string;
  href?: string;
  className?: string;
}

export function ServiceCard({
  index,
  title,
  description,
  href = '/services',
  className,
}: ServiceCardProps) {
  return (
    <div
      className={cn(
        'bg-white border border-neutral-200 rounded-lg p-6 hover:shadow-md hover:border-accent-100 transition-all',
        className
      )}
    >
      {index !== undefined && (
        <div className="w-12 h-12 bg-accent-50 text-primary-500 rounded-lg mb-4 flex items-center justify-center">
          <span className="text-2xl font-bold">{index}</span>
        </div>
      )}
      <h3 className="text-lg font-semibold text-neutral-900 mb-2">{title}</h3>
      <p className="text-neutral-700">{description}</p>
      <Link
        href={href}
        className="mt-4 inline-block text-primary-500 hover:text-primary-600 font-medium"
      >
        Learn more →
      </Link>
    </div>
  );
}
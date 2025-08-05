// src/components/Button.tsx
import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

/* style variants -------------------------------------------------------- */
const buttonVariants = cva(
  'inline-flex items-center justify-center font-semibold text-base rounded-full \
   transition-all duration-150 motion-reduce:transition-none \
   focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2',
  {
    variants: {
      variant: {
        primary:
          'bg-primary-600 text-neutral-100 hover:bg-primary-700 hover:-translate-y-px hover:shadow-lg active:bg-primary-700 active:translate-y-0',
        secondary:
          'border-2 border-primary-600 text-primary-600 hover:bg-primary-50 hover:border-primary-700 hover:text-primary-700',
        ghost:
          'text-primary-600 hover:bg-primary-50 hover:text-primary-700',
      },
      size: {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3',
        lg: 'px-8 py-4 text-lg',
      },
      /* styling flag (no collision with HTML attr) */
      isDisabled: {
        true: 'opacity-60 cursor-not-allowed hover:translate-y-0 hover:shadow-none',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

/* ---------------------------------------------------------------------- */
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

/* ---------------------------------------------------------------------- */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, isDisabled, disabled, ...props }, ref) => {
    /* single source of truth, coerced to boolean (no null) */
    const finalDisabled: boolean = Boolean(
      disabled ?? isDisabled ?? false
    );

    return (
      <button
        ref={ref}
        disabled={finalDisabled}
        aria-disabled={finalDisabled}
        className={cn(
          buttonVariants({ variant, size, isDisabled: finalDisabled }),
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

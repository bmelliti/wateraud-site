import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, required, ...props }, ref) => {
    const id = props.id || props.name;
    
    return (
      <div className="space-y-2">
        {label && (
          <label
            htmlFor={id}
            className="block text-sm font-medium text-neutral-700"
          >
            {label}
            {required && <span className="text-error ml-1" aria-label="required">*</span>}
          </label>
        )}
        
        <input
          ref={ref}
          id={id}
          className={cn(
            'w-full px-4 py-3 bg-white border rounded-lg text-base text-neutral-900',
            'transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-20',
            error
              ? 'border-error bg-red-50 focus:border-error'
              : 'border-neutral-200 focus:border-primary-500',
            className
          )}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          {...props}
        />
        
        {error && (
          <p id={`${id}-error`} className="text-sm text-error" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
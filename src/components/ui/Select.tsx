
import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: SelectOption[];
}

/**
 * Accessible <select> with label, error message, and custom chevron.
 * Uses a double-quoted arbitrary value so Webpack doesn't treat the URL as a module.
 */
export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, options, required, ...props }, ref) => {
    const id = props.id || props.name;

    return (
      <div className="space-y-2">
        {label && (
          <label
            htmlFor={id}
            className="block text-sm font-medium text-neutral-700"
          >
            {label}
            {required && (
              <span className="text-error ml-1" aria-label="required">
                *
              </span>
            )}
          </label>
        )}

        <select
          ref={ref}
          id={id}
          className={cn(
            // base
            'w-full px-4 py-3 bg-white border rounded-lg text-base text-neutral-900',
            'transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-20',
            // custom chevron ▼  (double-quoted URL → valid CSS)
            'appearance-none bg-[url("data:image/svg+xml,%3Csvg%20xmlns=\'http://www.w3.org/2000/svg\'%20fill=\'none\'%20viewBox=\'0%200%2020%2020\'%3E%3Cpath%20stroke=\'%236B7280\'%20stroke-linecap=\'round\'%20stroke-linejoin=\'round\'%20stroke-width=\'1.5\'%20d=\'M6%208l4%204%204-4\'/%3E%3C/svg%3E")]',
            'bg-[position:right_0.75rem_center] bg-no-repeat bg-[length:1.25em_1.25em] pr-10',
            // error / normal border
            error
              ? 'border-error bg-red-50 focus:border-error'
              : 'border-neutral-200 focus:border-primary-500',
            className
          )}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          required={required}
          {...props}
        >
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>

        {error && (
          <p id={`${id}-error`} className="text-sm text-error" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';

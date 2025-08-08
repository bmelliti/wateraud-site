'use client';

import { useState, FormEvent } from 'react';
import { Mail, ArrowRight, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { validateEmail } from '@/lib/validations';

interface NewsletterFormProps {
  variant?: 'default' | 'compact' | 'inline';
  className?: string;
}

export function NewsletterForm({ variant = 'default', className }: NewsletterFormProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Clear previous messages
    setMessage('');
    
    // Validate email
    if (!validateEmail(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }

    setStatus('loading');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Success
      setStatus('success');
      setMessage('Welcome aboard! Check your inbox for confirmation.');
      setEmail('');
      
      // Reset after 5 seconds
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 5000);
      
    } catch (err) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  if (variant === 'compact') {
    return (
      <form onSubmit={handleSubmit} className={cn('relative', className)}>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className={cn(
              'w-full pl-11 pr-32 py-3 bg-white border rounded-lg text-neutral-900',
              'placeholder:text-neutral-500 transition-all duration-200',
              'focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-primary-600',
              status === 'error' ? 'border-red-500' : 'border-neutral-300'
            )}
            disabled={status === 'loading' || status === 'success'}
            aria-label="Email address"
            required
          />
          <button
            type="submit"
            disabled={status === 'loading' || status === 'success'}
            className={cn(
              'absolute right-2 top-1/2 -translate-y-1/2 px-4 py-1.5 rounded-md',
              'font-medium text-sm transition-all duration-200',
              'disabled:opacity-50 disabled:cursor-not-allowed',
              status === 'success'
                ? 'bg-green-600 text-white'
                : 'bg-primary-600 text-white hover:bg-primary-700'
            )}
          >
            {status === 'loading' ? (
              <span className="inline-flex items-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Subscribing...
              </span>
            ) : status === 'success' ? (
              <span className="inline-flex items-center">
                <CheckCircle className="h-4 w-4 mr-1" />
                Subscribed
              </span>
            ) : (
              'Subscribe'
            )}
          </button>
        </div>
        {message && (
          <p className={cn(
            'mt-2 text-sm',
            status === 'error' ? 'text-red-600' : 'text-green-600'
          )}>
            {message}
          </p>
        )}
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={cn('max-w-md mx-auto', className)}>
      {variant === 'default' && (
        <div className="mb-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
            <Mail className="h-8 w-8 text-primary-600" />
          </div>
          <h3 className="text-xl font-semibold text-neutral-900 mb-2">
            Stay in the Loop
          </h3>
          <p className="text-neutral-600">
            Get industry insights and updates delivered to your inbox
          </p>
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className={cn(
              'w-full px-4 py-3 bg-white border rounded-lg text-neutral-900',
              'placeholder:text-neutral-500 transition-all duration-200',
              'focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-primary-600',
              status === 'error' ? 'border-red-500' : 'border-neutral-300'
            )}
            disabled={status === 'loading' || status === 'success'}
            required
          />
        </div>
        <button
          type="submit"
          disabled={status === 'loading' || status === 'success'}
          className={cn(
            'inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold',
            'transition-all duration-200 whitespace-nowrap',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            'focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2',
            status === 'success'
              ? 'bg-green-600 text-white'
              : 'bg-primary-600 text-white hover:bg-primary-700 hover:shadow-lg'
          )}
        >
          {status === 'loading' ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Subscribing...
            </>
          ) : status === 'success' ? (
            <>
              <CheckCircle className="h-5 w-5 mr-2" />
              Subscribed!
            </>
          ) : (
            <>
              Subscribe
              <ArrowRight className="ml-2 h-5 w-5" />
            </>
          )}
        </button>
      </div>

      {/* Message */}
      {message && (
        <div className={cn(
          'mt-4 p-3 rounded-lg text-sm text-center',
          status === 'error' 
            ? 'bg-red-50 text-red-600' 
            : 'bg-green-50 text-green-600'
        )}>
          {message}
        </div>
      )}

      {/* Privacy Note */}
      <p className="mt-4 text-xs text-center text-neutral-500">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </form>
  );
}
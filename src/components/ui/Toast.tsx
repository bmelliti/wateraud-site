'use client';

import { useEffect, useState } from 'react';
import { X, CheckCircle, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ToastProps {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info';
  onClose: (id: string) => void;
}

function Toast({ id, message, type, onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(id);
    }, 5000);

    return () => clearTimeout(timer);
  }, [id, onClose]);

  const icons = {
    success: <CheckCircle className="h-5 w-5 text-green-600" />,
    error: <AlertCircle className="h-5 w-5 text-red-600" />,
    info: <AlertCircle className="h-5 w-5 text-blue-600" />,
  };

  const styles = {
    success: 'bg-green-50 border-green-200',
    error: 'bg-red-50 border-red-200',
    info: 'bg-blue-50 border-blue-200',
  };

  return (
    <div
      className={cn(
        'flex items-center gap-3 p-4 rounded-lg border shadow-lg',
        'animate-slide-in-right',
        styles[type]
      )}
      role="alert"
    >
      {icons[type]}
      <p className="flex-1 text-sm font-medium text-neutral-900">{message}</p>
      <button
        onClick={() => onClose(id)}
        className="p-1 hover:bg-neutral-100 rounded transition-colors"
        aria-label="Close notification"
      >
        <X className="h-4 w-4 text-neutral-500" />
      </button>
    </div>
  );
}

// Toast Container
export function ToastContainer() {
  const [toasts, setToasts] = useState<Array<{ id: string; message: string; type: 'success' | 'error' | 'info' }>>([]);

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  useEffect(() => {
    const handleToast = (event: CustomEvent) => {
      const { message, type } = event.detail;
      const id = Date.now().toString();
      setToasts((prev) => [...prev, { id, message, type }]);
    };

    window.addEventListener('show-toast' as any, handleToast);
    return () => window.removeEventListener('show-toast' as any, handleToast);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50 space-y-2">
      {toasts.map((toast) => (
        <Toast key={toast.id} {...toast} onClose={removeToast} />
      ))}
    </div>
  );
}

// Toast utility functions
export const toast = {
  success: (message: string) => {
    window.dispatchEvent(new CustomEvent('show-toast', { detail: { message, type: 'success' } }));
  },
  error: (message: string) => {
    window.dispatchEvent(new CustomEvent('show-toast', { detail: { message, type: 'error' } }));
  },
  info: (message: string) => {
    window.dispatchEvent(new CustomEvent('show-toast', { detail: { message, type: 'info' } }));
  },
};
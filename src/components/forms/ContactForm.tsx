// src/components/forms/ContactForm.tsx
'use client';

import { useState, FormEvent } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Select } from '@/components/ui/Select';
import { toast } from '@/components/ui/Toast';
import type { Translations } from '@/i18n/server';

// Infer the exact shape from your translations
type ContactFormDict = Translations['forms']['contact'];

export function ContactForm({ t }: { t: ContactFormDict }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = (formData: FormData) => {
    const newErrors: Record<string, string> = {};

    const name = ((formData.get('name') as string) || '').trim();
    const email = ((formData.get('email') as string) || '').trim();
    const message = ((formData.get('message') as string) || '').trim();

    if (name.length < 2) newErrors.name = t.errors.name;
    if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = t.errors.email;
    if (message.length < 10) newErrors.message = t.errors.message;

    return newErrors;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const newErrors = validateForm(formData);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(formData)),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data?.error || 'Request failed');

      toast.success(t.toast.success);
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      console.error('Form submission error:', err);
      toast.error(t.toast.error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Input label={t.labels.name} name="name" error={errors.name} required />
        <Input label={t.labels.email} name="email" type="email" error={errors.email} required />
        <Input label={t.labels.company} name="company" />
        <Input label={t.labels.phone} name="phone" type="tel" />
      </div>

      <Select
        label={t.labels.service}
        name="service"
        options={[{ value: '', label: t.selectPlaceholder }, ...t.options]}
      />

      <Textarea
        label={t.labels.message}
        name="message"
        rows={5}
        error={errors.message}
        required
      />

      <Button type="submit" size="lg" className="w-full md:w-auto" disabled={isSubmitting}>
        {isSubmitting ? t.buttons.sending : t.buttons.send}
      </Button>
    </form>
  );
}

// src/components/forms/ContactForm.tsx
'use client';

import { useState, FormEvent } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Select } from '@/components/ui/Select';
import { toast } from '@/components/ui/Toast';

type ContactFormStrings = {
  labels: {
    name: string;
    email: string;
    company: string;
    phone: string;
    service: string;
    message: string;
  };
  selectPlaceholder: string;
  options: { value: string; label: string }[];
  buttons: { send: string; sending: string };
  errors: { name: string; email: string; message: string };
  toast: { success: string; error: string };
};

// Fallback dictionary so <ContactForm /> compiles even if no `t` prop is passed.
const EN_FALLBACK: ContactFormStrings = {
  labels: {
    name: 'Name',
    email: 'Email',
    company: 'Company',
    phone: 'Phone',
    service: 'Service Interest',
    message: 'Project Description',
  },
  selectPlaceholder: 'Select a service',
  options: [
    { value: 'water-treatment', label: 'Water Treatment Solutions' },
    { value: 'optimization', label: 'Optimization Services' },
    { value: 'implementation', label: 'Implementation Support' },
    { value: 'compliance', label: 'Regulatory Compliance' },
  ],
  buttons: { send: 'Send Message', sending: 'Sending...' },
  errors: {
    name: 'Name must be at least 2 characters',
    email: 'Invalid email address',
    message: 'Message must be at least 10 characters',
  },
  toast: {
    success: "Message sent successfully! We'll be in touch soon.",
    error: 'Failed to send message. Please try again.',
  },
};

export function ContactForm({ t }: { t?: ContactFormStrings }) {
  const dict = t ?? EN_FALLBACK;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = (formData: FormData) => {
    const newErrors: Record<string, string> = {};

    const name = (formData.get('name') as string) || '';
    const email = (formData.get('email') as string) || '';
    const message = (formData.get('message') as string) || '';

    if (!name || name.trim().length < 2) newErrors.name = dict.errors.name;
    if (!email || !/\S+@\S+\.\S+/.test(email)) newErrors.email = dict.errors.email;
    if (!message || message.trim().length < 10) newErrors.message = dict.errors.message;

    return newErrors;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
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

      toast.success(dict.toast.success);
      form.reset();
    } catch {
      toast.error(dict.toast.error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Input label={dict.labels.name} name="name" error={errors.name} required />
        <Input label={dict.labels.email} name="email" type="email" error={errors.email} required />
        <Input label={dict.labels.company} name="company" />
        <Input label={dict.labels.phone} name="phone" type="tel" />
      </div>

      <Select
        label={dict.labels.service}
        name="service"
        options={[{ value: '', label: dict.selectPlaceholder }, ...dict.options]}
      />

      <Textarea
        label={dict.labels.message}
        name="message"
        rows={5}
        error={errors.message}
        required
      />

      <Button type="submit" size="lg" className="w-full md:w-auto" disabled={isSubmitting}>
        {isSubmitting ? dict.buttons.sending : dict.buttons.send}
      </Button>
    </form>
  );
}

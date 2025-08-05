'use client';

import { useState, FormEvent } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Select } from '@/components/ui/Select';
import { toast } from '@/components/ui/Toast';

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = (formData: FormData) => {
    const newErrors: Record<string, string> = {};
    
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    if (!name || name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!message || message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

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

      if (!response.ok) throw new Error('Failed to send message');

      toast.success('Message sent successfully! We\'ll be in touch soon.');
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Name"
          name="name"
          error={errors.name}
          required
        />
        
        <Input
          label="Email"
          name="email"
          type="email"
          error={errors.email}
          required
        />
        
        <Input
          label="Company"
          name="company"
        />
        
        <Input
          label="Phone"
          name="phone"
          type="tel"
        />
      </div>

      <Select
        label="Service Interest"
        name="service"
        options={[
          { value: '', label: 'Select a service' },
          { value: 'water-treatment', label: 'Water Treatment Solutions' },
          { value: 'optimization', label: 'Optimization Services' },
          { value: 'implementation', label: 'Implementation Support' },
          { value: 'compliance', label: 'Regulatory Compliance' },
        ]}
      />

      <Textarea
        label="Project Description"
        name="message"
        rows={5}
        error={errors.message}
        required
      />

      <Button
        type="submit"
        size="lg"
        className="w-full md:w-auto"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
}
'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    id: 1,
    quote: "WaterAud transformed our water treatment operations, reducing costs by 35% while improving compliance metrics.",
    author: "Sarah Johnson",
    role: "Director of Operations",
    company: "Municipal Water Authority"
  },
  {
    id: 2,
    quote: "Their expertise in regulatory compliance saved us from costly violations and streamlined our processes.",
    author: "Michael Chen",
    role: "Plant Manager",
    company: "Industrial Solutions Corp"
  },
  {
    id: 3,
    quote: "The ROI from their optimization services paid for itself within 6 months. Highly recommend their team.",
    author: "Jennifer Martinez",
    role: "VP Engineering",
    company: "Regional Water District"
  }
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-16 md:py-24 bg-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 text-center mb-12">
          What Our Clients Say
        </h2>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <blockquote className="text-lg md:text-xl text-neutral-700 italic mb-6">
              "{testimonials[current].quote}"
            </blockquote>
            <cite className="block not-italic">
              <div className="font-semibold text-neutral-900">{testimonials[current].author}</div>
              <div className="text-neutral-600">
                {testimonials[current].role}, {testimonials[current].company}
              </div>
            </cite>
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={prev}
              className="p-2 rounded-full bg-white shadow hover:shadow-md transition-shadow focus:outline-none focus:ring-2 focus:ring-primary-600"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            
            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={cn(
                    'w-2 h-2 rounded-full transition-all',
                    current === index ? 'bg-primary-600 w-8' : 'bg-neutral-300'
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-2 rounded-full bg-white shadow hover:shadow-md transition-shadow focus:outline-none focus:ring-2 focus:ring-primary-600"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
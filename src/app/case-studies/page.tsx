import { Button } from '@/components/Button';
import Link from 'next/link';

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
            Client Success Stories
          </h1>
          <p className="text-lg md:text-xl text-accent-50 text-center max-w-3xl mx-auto">
            See how we've helped organizations transform their water treatment
          </p>
        </div>
      </section>

      {/* Featured Projects Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white border border-neutral-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200 motion-reduce:transition-none"
              >
                <div className="bg-neutral-200 h-48 flex items-center justify-center">
                  <span className="text-neutral-400">Project Image Placeholder</span>
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-accent-50 text-primary-600 text-sm font-medium rounded-full mb-3">
                    Municipal
                  </span>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                    Project Title {i} - Content TBD
                  </h3>
                  <ul className="space-y-2 mb-4">
                    <li className="text-sm text-neutral-700">• 30% cost reduction achieved</li>
                    <li className="text-sm text-neutral-700">• 100% regulatory compliance</li>
                    <li className="text-sm text-neutral-700">• 6-month implementation</li>
                  </ul>
                  <Link
                    href="#"
                    className="text-primary-500 font-medium hover:text-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 rounded"
                  >
                    Read Full Case Study →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Summary */}
      <section className="py-16 md:py-20 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900 text-center mb-12">
            Measurable Impact
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Cost Savings', value: '$5M+' },
              { label: 'Water Treated', value: '500M Gallons' },
              { label: 'Compliance Rate', value: '100%' },
              { label: 'Client Retention', value: '95%' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-neutral-700">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
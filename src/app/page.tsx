import { PageHero } from '@/components/sections/PageHero';
import { Button } from '@/components/ui/Button';
import { ServiceCard } from '@/components/sections/ServiceCard';
import { StatsBlock } from '@/components/sections/StatsBlock';

export default function Home() {
  /* cards + metrics pulled into arrays for clarity */
  const services = [
    {
      title: 'Technology Selection',
      description:
        'Expert guidance on choosing the right water treatment technology.',
    },
    {
      title: 'Cost Optimization',
      description:
        'Reduce operational costs while maintaining treatment quality.',
    },
    {
      title: 'Regulatory Compliance',
      description:
        'Navigate complex regulations with confidence and expertise.',
    },
    {
      title: 'Implementation Support',
      description:
        'From planning to commissioning, we ensure smooth deployment.',
    },
  ];

  const stats = [
    { value: '30%', label: 'Average cost reduction' },
    { value: '100+', label: 'Projects completed' },
    { value: '15 Years', label: 'Industry experience' },
  ];

  return (
    <>
      {/* ---------- HERO ---------- */}
      <PageHero
        title="Expert Water Treatment Solutions for Industry Leaders"
        subtitle="Optimize costs, ensure compliance, and maximize treatment effectiveness"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Button size="lg">Get Your Free Consultation</Button>
          <Button variant="secondary" size="lg">
            View Our Services
          </Button>
        </div>
      </PageHero>

      {/* ---------- CORE SERVICES ---------- */}
      <section className="py-16 md:py-24 bg-neutral-100" id="services-overview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-4xl font-semibold text-neutral-900 text-center mb-12">
            How We Help You Succeed
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <ServiceCard
                key={s.title}
                index={i + 1}
                title={s.title}
                description={s.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ---------- METRICS ---------- */}
      <section className="py-16 md:py-24 bg-white" id="results">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-4xl font-semibold text-neutral-900 text-center mb-12">
            Proven Results That Matter
          </h2>

          <StatsBlock stats={stats} />
        </div>
      </section>

      {/* ---------- FINAL CTA ---------- */}
      <section className="py-16 md:py-24 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-4xl font-semibold text-white mb-8">
            Ready to Optimize Your Water Treatment?
          </h2>
          <Button size="lg" variant="secondary" className="bg-white hover:bg-neutral-100">
            Schedule Your Consultation
          </Button>
        </div>
      </section>
    </>
  );
}
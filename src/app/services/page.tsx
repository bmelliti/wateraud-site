import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      category: 'Water Treatment Solutions',
      id: 'water-treatment',
      items: [
        {
          title: 'Technology Selection & Trade-off Analysis',
          description: 'Our experts analyze your specific requirements to recommend the most suitable water treatment technologies, considering factors like efficiency, cost, and scalability.',
        },
        {
          title: 'CAPEX Estimation & Planning',
          description: 'Detailed capital expenditure analysis and planning to ensure your water treatment investments deliver maximum value and align with your budget constraints.',
        },
      ],
    },
    {
      category: 'Optimization Services',
      id: 'optimization',
      items: [
        {
          title: 'Chemical Consumption Optimization',
          description: 'Reduce operational costs by optimizing chemical usage without compromising treatment quality. Our data-driven approach ensures sustainable efficiency gains.',
        },
        {
          title: 'Bench Testing & Analysis',
          description: 'On-site bench testing and comprehensive analysis to validate treatment approaches and fine-tune processes before full-scale implementation.',
        },
      ],
    },
    {
      category: 'Implementation Support',
      id: 'implementation',
      items: [
        {
          title: 'Equipment Commissioning',
          description: 'Expert oversight during equipment installation and commissioning to ensure smooth startup and optimal performance from day one.',
        },
        {
          title: 'Supplier Coordination',
          description: 'We manage relationships with equipment suppliers and contractors, ensuring quality delivery and seamless integration of all system components.',
        },
      ],
    },
    {
      category: 'Regulatory Compliance',
      id: 'compliance',
      items: [
        {
          title: 'Local Regulation Navigation',
          description: 'Stay compliant with evolving water quality regulations. We help you understand and meet all local, state, and federal requirements.',
        },
        {
          title: 'Compliance Consulting',
          description: 'Proactive compliance strategies and documentation support to ensure your operations meet or exceed regulatory standards.',
        },
      ],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
            Comprehensive Water Treatment Services
          </h1>
          <p className="text-lg md:text-xl text-accent-50 text-center max-w-3xl mx-auto">
            From planning to implementation, we deliver end-to-end solutions
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((category, categoryIndex) => (
              <div key={categoryIndex} id={category.id} className="scroll-mt-24">
                <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900 mb-8">
                  {category.category}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.items.map((service, serviceIndex) => (
                    <div
                      key={serviceIndex}
                      className="bg-white border border-neutral-200 rounded-lg p-6 hover:shadow-md hover:border-accent-100 transition-all duration-200 motion-reduce:transition-none"
                    >
                      <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-neutral-700 leading-relaxed">
                        {service.description}
                      </p>
                      <Link
                        href="/contact"
                        className="text-primary-500 font-medium hover:text-primary-600 mt-4 inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 rounded"
                      >
                        Learn more →
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900 mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-lg text-neutral-700 mb-8 max-w-2xl mx-auto">
            Our engineers will assess your specific requirements and recommend the optimal solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">Talk to an Engineer</Button>
            <Button variant="ghost" size="lg">Download Service Guide</Button>
          </div>
        </div>
      </section>
    </>
  );
}
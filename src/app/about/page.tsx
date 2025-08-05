import { Button } from '@/components/ui/Button';

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
            Water Treatment Experts You Can Trust
          </h1>
          <p className="text-lg md:text-xl text-accent-50 text-center max-w-3xl mx-auto">
            Delivering innovative solutions for complex water treatment challenges since 2009
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-neutral-700 leading-relaxed">
                <p>
                  Founded by a team of water treatment engineers with decades of combined experience, WaterAud emerged from a simple observation: the water treatment industry needed a consultancy that could bridge the gap between cutting-edge technology and practical implementation.
                </p>
                <p>
                  Since our inception, we've helped over 100 municipal and industrial clients optimize their water treatment operations, reduce costs, and exceed regulatory requirements. Our approach combines deep technical expertise with a commitment to understanding each client's unique challenges.
                </p>
                <p>
                  Today, WaterAud stands as a trusted partner for organizations seeking to transform their water treatment capabilities while maintaining operational efficiency and environmental responsibility.
                </p>
              </div>
            </div>
            <div className="bg-neutral-200 aspect-video rounded-lg flex items-center justify-center">
              <span className="text-neutral-400">Team/Facility Photo Placeholder</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 md:py-24 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900 text-center mb-12">
            The WaterAud Approach
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Assessment',
                description: 'We begin with a comprehensive evaluation of your current water treatment processes, identifying opportunities for improvement and optimization.',
              },
              {
                step: '2',
                title: 'Strategy',
                description: 'Our team develops a customized strategy that aligns with your operational goals, budget constraints, and regulatory requirements.',
              },
              {
                step: '3',
                title: 'Implementation',
                description: 'We guide you through every step of implementation, from equipment selection to commissioning, ensuring smooth deployment.',
              },
              {
                step: '4',
                title: 'Optimization',
                description: 'Continuous monitoring and optimization ensure your water treatment system operates at peak efficiency for years to come.',
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-3">{item.title}</h3>
                <p className="text-neutral-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Expertise */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900 mb-12">
            Industry-Leading Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">150+</div>
              <div className="text-neutral-700">Combined Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">12</div>
              <div className="text-neutral-700">Professional Certifications</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">8</div>
              <div className="text-neutral-700">Water Treatment Specializations</div>
            </div>
          </div>
          <Button size="lg">Start Your Project</Button>
        </div>
      </section>
    </>
  );
}
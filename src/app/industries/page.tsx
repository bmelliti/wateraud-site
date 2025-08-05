import { Button } from '@/components/ui/Button';

export default function IndustriesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
            Industry-Specific Solutions
          </h1>
          <p className="text-lg md:text-xl text-accent-50 text-center max-w-3xl mx-auto">
            Tailored expertise for your sector's unique challenges
          </p>
        </div>
      </section>

      {/* Municipal Water Treatment */}
      <section id="municipal" className="py-16 md:py-24 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900 mb-6">
                Municipal Water Treatment
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                    Industry-Specific Challenges
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Municipal water facilities face unique pressures including aging infrastructure, 
                    tightening budgets, evolving regulations, and increasing demand. We understand 
                    the complexities of serving diverse communities while maintaining the highest 
                    standards of public health and safety.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                    Our Solutions
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    WaterAud provides comprehensive solutions designed specifically for municipal 
                    operations. From retrofitting existing plants to designing new facilities, we 
                    help municipalities deliver safe, reliable water services while optimizing 
                    operational costs and meeting regulatory requirements.
                  </p>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    <span className="text-neutral-700">Drinking water treatment optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    <span className="text-neutral-700">Wastewater treatment upgrades</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    <span className="text-neutral-700">Regulatory compliance strategies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    <span className="text-neutral-700">Asset management planning</span>
                  </li>
                </ul>
                <Button className="mt-6">Request Municipal Consultation</Button>
              </div>
            </div>
            <div className="bg-neutral-200 aspect-video rounded-lg flex items-center justify-center">
              <span className="text-neutral-400">Municipal Facility Image</span>
            </div>
          </div>
        </div>
      </section>

      {/* Industrial Water Solutions */}
      <section id="industrial" className="py-16 md:py-24 bg-neutral-100 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-neutral-200 aspect-video rounded-lg flex items-center justify-center">
              <span className="text-neutral-400">Industrial Facility Image</span>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900 mb-6">
                Industrial Water Solutions
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                    Industry-Specific Challenges
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Industrial facilities require specialized water treatment solutions to meet 
                    production needs, manage complex waste streams, and comply with discharge 
                    regulations. Each industry has unique water quality requirements that directly 
                    impact product quality and operational efficiency.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                    Our Solutions
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    We develop customized water treatment strategies that align with your industrial 
                    processes. Our solutions help reduce water consumption, minimize waste, recover 
                    valuable resources, and ensure consistent water quality for your operations.
                  </p>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    <span className="text-neutral-700">Process water treatment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    <span className="text-neutral-700">Cooling water management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    <span className="text-neutral-700">Wastewater treatment and reuse</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    <span className="text-neutral-700">Zero liquid discharge systems</span>
                  </li>
                </ul>
                <Button className="mt-6">Request Industrial Consultation</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
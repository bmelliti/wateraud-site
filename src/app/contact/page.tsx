import { ContactForm } from '@/components/forms/ContactForm';

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            Let's Discuss Your Project
          </h1>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl p-8 md:p-10 shadow-xl">
                <ContactForm />
              </div>
            </div>
            <div className="lg:col-span-1">
              <div className="bg-neutral-100 rounded-xl p-8">
                <h2 className="text-xl font-semibold text-neutral-900 mb-6">
                  Get in Touch
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium text-neutral-900 mb-2">Phone</h3>
                    <a 
                      href="tel:+1234567890" 
                      className="text-primary-500 hover:text-primary-600 transition-colors"
                    >
                      (123) 456-7890
                    </a>
                  </div>
                  <div>
                    <h3 className="font-medium text-neutral-900 mb-2">Email</h3>
                    <a 
                      href="mailto:info@wateraud.com" 
                      className="text-primary-500 hover:text-primary-600 transition-colors"
                    >
                      info@wateraud.com
                    </a>
                  </div>
                  <div>
                    <h3 className="font-medium text-neutral-900 mb-2">Office Hours</h3>
                    <p className="text-neutral-700">
                      Monday - Friday<br />
                      8:00 AM - 5:00 PM EST
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium text-neutral-900 mb-2">Response Time</h3>
                    <p className="text-neutral-700">
                      We typically respond within 24 business hours
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
import Link from 'next/link';

const footerLinks = {
  services: [
    { href: '/services#water-treatment', label: 'Water Treatment Solutions' },
    { href: '/services#optimization', label: 'Optimization Services' },
    { href: '/services#implementation', label: 'Implementation Support' },
    { href: '/services#compliance', label: 'Regulatory Compliance' },
  ],
  company: [
    { href: '/about', label: 'About Us' },
    { href: '/case-studies', label: 'Case Studies' },
    { href: '/industries', label: 'Industries' },
    { href: '/contact', label: 'Contact' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-100" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo + blurb */}
        <div>
          <img src="/logo-wateraud.png" alt="WaterAud" className="h-12 mb-4" />
          <p className="text-neutral-400 text-sm">
            Expert water treatment solutions for municipal and industrial clients.
          </p>
        </div>

        {/* Link groups */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Services</h2>
          <ul className="space-y-2">
            {footerLinks.services.map((l) => (
              <li key={l.href}>
                <Link className="text-neutral-400 hover:text-primary-500" href={l.href}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Company</h2>
          <ul className="space-y-2">
            {footerLinks.company.map((l) => (
              <li key={l.href}>
                <Link className="text-neutral-400 hover:text-primary-500" href={l.href}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact</h2>
          <p className="text-neutral-400 text-sm mb-2">(123) 456-7890</p>
          <p className="text-neutral-400 text-sm mb-6">info@wateraud.com</p>
          <Link
            href="/contact"
            className="inline-block text-primary-500 hover:text-primary-400 font-medium"
          >
            Get Directions →
          </Link>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-black border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row items-center justify-between text-neutral-400 text-sm">
          <span>© {new Date().getFullYear()} WaterAud. All rights reserved.</span>
          <span className="space-x-4 mt-2 md:mt-0">
            <Link href="/privacy" className="hover:text-primary-500">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-primary-500">
              Terms
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
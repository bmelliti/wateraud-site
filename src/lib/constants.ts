export const SITE_CONFIG = {
  name: 'WaterAud',
  title: 'WaterAud - Expert Water Treatment Solutions',
  description: 'Professional water treatment consultancy for municipal and industrial clients.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://wateraud.com',
  email: 'brahim.melliti@wateraud.com',
  phone: '(613) 600-7408',
};

export const NAVIGATION_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/about', label: 'About' },
  { href: '/industries', label: 'Industries' },
  { href: '/contact', label: 'Contact' },
];

export const SERVICES = [
  {
    id: 'water-treatment',
    category: 'Water Treatment Solutions',
    items: [
      'Technology Selection & Trade-off Analysis',
      'CAPEX Estimation & Planning',
    ],
  },
  {
    id: 'optimization',
    category: 'Optimization Services',
    items: [
      'Chemical Consumption Optimization',
      'Bench Testing & Analysis',
    ],
  },
  {
    id: 'implementation',
    category: 'Implementation Support',
    items: [
      'Equipment Commissioning',
      'Supplier Coordination',
    ],
  },
  {
    id: 'compliance',
    category: 'Regulatory Compliance',
    items: [
      'Local Regulation Navigation',
      'Compliance Consulting',
    ],
  },
];
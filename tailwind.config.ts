import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/styles/**/*.css',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff8ff',
          100: '#dbeefe',
          200: '#bfe3fd',
          300: '#93d3fc',
          400: '#60bdf8',
          500: '#3ba5f4',  // Bright logo blue
          600: '#3498eb',  // Main brand blue (matches logo)
          700: '#2780d8',  // Hover state
          800: '#2665ae',
          900: '#235589',
          950: '#183353',
        },
        accent: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
        // Add gradient colors for special effects
        'water-gradient': {
          from: '#3498eb',  // Logo blue
          via: '#5dade2',   // Mid blue
          to: '#85c1e9',    // Light blue
        },
      },
      backgroundImage: {
        'water-gradient': 'linear-gradient(135deg, #3498eb 0%, #5dade2 50%, #85c1e9 100%)',
        'water-gradient-radial': 'radial-gradient(circle, #85c1e9 0%, #3498eb 100%)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
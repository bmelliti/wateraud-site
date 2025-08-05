import type { Config } from 'tailwindcss';

const config: Config = {
content: [
  './src/app/**/*.{ts,tsx}',        // keep as-is
  './src/components/**/*.{ts,tsx}', // keep as-is
  './src/styles/**/*.css',          // ← replace this line
],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#33A7FF',
          600: '#008CDB',
          700: '#006CB0',
        },
        neutral: {
          100: '#F8FAFC',
          900: '#0E0E0E',
        },
        accent: {
          50:  '#E4F3FF',
          100: '#AAD2EF',
        },
        success: '#10B981',
        warning: '#F59E0B',
        error:   '#EF4444',
      },
    },
  },
  plugins: [],
};

export default config;

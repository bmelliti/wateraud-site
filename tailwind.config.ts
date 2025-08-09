// tailwind.config.ts — keep minimal (optional)
/* not required for the sanity check, but safe */
import type { Config } from 'tailwindcss';
export default {
  content: ['./src/app/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}', './src/styles/**/*.css'],
  theme: { extend: {} },
  plugins: [],
} satisfies Config;

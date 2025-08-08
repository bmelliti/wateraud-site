import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

export default {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/styles/**/*.{css}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px',
      },
    },
    extend: {
      colors: {
        // Use any palette you like; sky is a nice default
        primary: colors.sky,
        // You already use neutral in your CSS; Tailwind has it by default.
        // If you want to alias, uncomment the next line:
        // neutral: colors.neutral,
      },
      borderRadius: {
        '2xl': '1rem',
      },
    },
  },
  plugins: [
    // If you later install plugins, add them here, e.g.:
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
  ],
} satisfies Config

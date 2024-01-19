import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        'mobile-sm': {
          raw: '(max-height: 640px) and (max-width: 360px)',
        },
      },
      transitionProperty: {
        width: 'width',
        height: 'height',
        border: 'border',
      },
    },
  },
  // For tweaking SVG colors on hover
  variants: {
    fill: ['hover', 'focus', 'responsive'],
  },
  plugins: [require('tailwind-scrollbar')],
  darkMode: 'class',
};
export default config;

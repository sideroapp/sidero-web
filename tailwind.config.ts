import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        // Azul Naval — cor principal da marca
        navy: {
          50: '#f0f5fa',
          100: '#dae6f2',
          200: '#b7cde6',
          300: '#8aacd4',
          400: '#5786bd',
          500: '#3868a3',
          600: '#295086',
          700: '#22406c',
          800: '#1a3a5c',
          900: '#152c46',
          950: '#0d1c2e',
          DEFAULT: '#1a3a5c',
        },
        // Cinza Industrial — cor secundária
        slate: colors.gray,
        // Aço — neutro
        steel: colors.zinc,
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;

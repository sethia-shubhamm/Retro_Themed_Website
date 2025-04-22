import type { Config } from 'tailwindcss';

// Extend the Config type to include safelist
type CustomConfig = Config & {
  safelist?: string[];
}

const config: CustomConfig = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        retroPink: '#ff00ff',
        retroBlue: '#00ffff',
        retroYellow: '#ffff00',
        retroGreen: '#00ff00',
        retroPurple: '#800080',
        neutral: '#1a1a1a',
      },
      fontFamily: {
        retro: ['VT323', 'monospace'],
      },
      maxWidth: {
        '6xl': '72rem',
        '7xl': '80rem',
        '8xl': '88rem',
      },
      padding: {
        '4': '1rem',
        '6': '1.5rem',
        '8': '2rem',
      },
      margin: {
        '4': '1rem',
        '6': '1.5rem',
        '8': '2rem',
      },
    },
  },
  plugins: [],
  safelist: [
    'max-w-6xl',
    'px-4',
    'py-2',
    'bg-retroPink',
    'text-white',
    'font-retro',
    'rounded',
    'retro-button',
    'retro-input',
    'retro-card',
    'retro-container',
  ],
};

export default config; 
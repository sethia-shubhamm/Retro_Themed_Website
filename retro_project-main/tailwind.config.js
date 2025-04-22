/** @type {import('tailwindcss').Config} */
module.exports = {
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
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        retro: {
          primary: "#8A2BE2",
          secondary: "#FF69B4",
          accent: "#00BFFF",
          neutral: "#191D24",
          "base-100": "#111827",
          info: "#00FF7F",
          success: "#36D399",
          warning: "#FFD700",
          error: "#F87272",
        },
      },
    ],
  },
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
} 
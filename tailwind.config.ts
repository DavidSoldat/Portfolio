import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      keyframes: {
        moveSlow: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(50px, -30px)' },
        },
        moveFast: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(-80px, 50px)' },
        },
        moveMedium: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(40px, -20px)' },
        },
        blurToNormal: {
          '0%': {
            filter: 'blur(10px)',
            opacity: '0',
          },
          '100%': {
            filter: 'blur(0)',
            opacity: '1',
          },
        },
      },
      animation: {
        'move-slow': 'moveSlow 10s ease-in-out infinite',
        'move-fast': 'moveFast 8s ease-in-out infinite',
        'move-medium': 'moveMedium 12s ease-in-out infinite',
        'blur-to-normal': 'blurToNormal 1.5s ease-out',
      },
    },
  },
  plugins: [],
};
export default config;

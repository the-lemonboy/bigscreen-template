// tailwind.config.js

/** @type {import('tailwindcss').Config} */
import pxToViewport from 'tailwindcss-px-to-viewport';

export default {
  darkMode: ['class', '[data-mode="dark"]'],
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'regal-blue': 'rgba(90,137,193,0.2)',
      },
      zIndex: {
        100: '100',
        900: '900',
        1000: '1000',
      },
      backgroundImage: {
        'first-bg': "url('./assets/first-bg.png')",
      },
      pxToViewPort: {
        PresetScreen: {
          width: 1920,
          height: 1080,
        },
        utilities: {
          // Add custom conversion rules here
        },
      },
    },
  },
  plugins: [pxToViewport()],
};

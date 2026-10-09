/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        palette: {
          charcoal: '#4A4A4A',
          silver: '#CBCBCB',
          cream: '#FFFFE3',
          slate: '#6D8196',
        },
        card: {
          DEFAULT: 'rgba(17, 25, 46, 0.85)',
          foreground: '#f8fafc',
        },
        border: 'rgba(255, 255, 255, 0.1)',
        primary: {
          DEFAULT: '#22c55e',
          foreground: '#090d16',
        },
        muted: {
          DEFAULT: 'rgba(255, 255, 255, 0.05)',
          foreground: '#94a3b8',
        },
        brand: {
          50: '#f0fdf4',
          100: '#dcfce7',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
        },
        dark: {
          950: '#07090e',
          900: '#0b0f17',
          850: '#0f1522',
          800: '#141c2c',
          700: '#1e293b',
          600: '#334155',
        },
        accent: {
          orange: '#f97316',
          amber: '#f59e0b',
          cyan: '#06b6d4',
          purple: '#a855f7',
          rose: '#f43f5e',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'Roboto', 'system-ui', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        josefin: ['"Josefin Sans"', 'sans-serif'],
        clarity: ['"Clarity City"', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glow-emerald': '0 0 25px -5px rgba(34, 197, 94, 0.3)',
        'glow-orange': '0 0 25px -5px rgba(249, 115, 22, 0.3)',
        'glow-purple': '0 0 25px -5px rgba(168, 85, 247, 0.3)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'flame': 'flame 1.5s ease-in-out infinite alternate',
        'shiny-text': 'shiny-text 4s infinite linear',
      },
      keyframes: {
        flame: {
          '0%': { transform: 'scale(1) rotate(-2deg)', filter: 'drop-shadow(0 0 4px #f97316)' },
          '100%': { transform: 'scale(1.1) rotate(2deg)', filter: 'drop-shadow(0 0 12px #ef4444)' },
        },
        'shiny-text': {
          '0%, 90%, 100%': {
            'background-position': 'calc(-100% - var(--shiny-width, 0px)) 0',
          },
          '30%, 60%': {
            'background-position': 'calc(100% + var(--shiny-width, 0px)) 0',
          },
        },
      }
    },
  },
  plugins: [],
}

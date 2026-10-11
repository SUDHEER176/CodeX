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
          DEFAULT: '#0066FF',
          foreground: '#ffffff',
        },
        muted: {
          DEFAULT: 'rgba(255, 255, 255, 0.05)',
          foreground: '#94a3b8',
        },
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          400: '#38bdf8',
          500: '#0066FF',
          600: '#0052FF',
          700: '#0040cc',
        },
        dark: {
          950: '#07090e',
          900: '#0b0f17',
          850: '#0f1522',
          800: '#141c2c',
          700: '#1e293b',
          600: '#334155',
        },
        background: '#000000',
        foreground: '#f8fafc',
        destructive: {
          DEFAULT: '#ef4444',
          foreground: '#f8fafc',
        },
        accent: {
          DEFAULT: 'rgba(255, 255, 255, 0.08)',
          foreground: '#f8fafc',
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
      },
      boxShadow: {
        'glow-blue': '0 0 25px -4px rgba(0, 102, 255, 0.45)',
        'glow-electric': '0 0 35px -3px rgba(0, 102, 255, 0.65)',
        'glow-emerald': '0 0 25px -5px rgba(34, 197, 94, 0.3)',
        'glow-orange': '0 0 25px -5px rgba(249, 115, 22, 0.3)',
        'glow-purple': '0 0 25px -5px rgba(168, 85, 247, 0.3)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'flame': 'flame 1.5s ease-in-out infinite alternate',
        'shiny-text': 'shiny-text 4s infinite linear',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
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

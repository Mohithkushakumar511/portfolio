export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          primary: '#101827',
          secondary: '#1D2939',
          card: '#243247',
          border: '#354256',
          hover: '#2E3F59',
        },
        platinum: {
          DEFAULT: '#DCE3EA',
          light: '#EDF2F7',
          dark: '#B0BDCC',
        },
        'soft-white': '#F5F7FA',
        'muted-text': '#AAB5C4',
        'accent-blue': {
          DEFAULT: '#4B8BFF',
          hover: '#3A75E5',
          glow: 'rgba(75, 139, 255, 0.25)',
          subtle: 'rgba(75, 139, 255, 0.12)',
        },

        obsidian: {
          DEFAULT: '#101827',
          light: '#1D2939',
          card: '#243247',
        },
        charcoal: {
          DEFAULT: '#1D2939',
          light: '#243247',
          border: '#354256',
          hover: '#2E3F59',
        },
        cream: {
          DEFAULT: '#F5F7FA',
          muted: '#DCE3EA',
          dark: '#AAB5C4',
        },
        sage: {
          DEFAULT: '#AAB5C4',
          light: '#DCE3EA',
          dark: '#7A8699',
        },
        burgundy: {
          DEFAULT: '#4B8BFF',
          hover: '#3A75E5',
          light: '#70A4FF',
          subtle: 'rgba(75, 139, 255, 0.15)',
        }
      },
      fontFamily: {
        serif: ['"Cinzel"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'blue-subtle': '0 0 20px -4px rgba(75, 139, 255, 0.20)',
        'blue-glow': '0 0 35px -2px rgba(75, 139, 255, 0.35)',
        'card-elevated': '0 10px 30px -10px rgba(8, 12, 20, 0.7), 0 0 1px 1px rgba(53, 66, 86, 0.6)',
        'luxury-card': '0 10px 30px -10px rgba(8, 12, 20, 0.7), 0 0 1px 1px rgba(53, 66, 86, 0.6)',
      },
      animation: {
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palet utama Bapas — Biru pemerintahan
        primary: {
          50:  '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#1d4ed8',   // warna utama navbar
          700: '#1e40af',   // hover state
          800: '#1e3a8a',   // header gelap
          900: '#172554',   // teks heading
        },
        // Aksen emas — kesan resmi/formal
        gold: {
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        },
        // Warna status
        success: '#16a34a',
        warning: '#ca8a04',
        danger:  '#dc2626',
      },
      fontFamily: {
        // Font heading — tegas & formal
        heading: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        // Font body — nyaman dibaca
        body: ['"Source Serif 4"', 'Georgia', 'serif'],
        // Font monospace untuk kode/data
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'card': '0 2px 16px 0 rgba(30, 58, 138, 0.08)',
        'nav':  '0 2px 24px 0 rgba(30, 58, 138, 0.12)',
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 60%, #2563eb 100%)",
        'section-pattern': "linear-gradient(180deg, #f8faff 0%, #ffffff 100%)",
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg: '#0d1117',
        surface: '#161b22',
        elevated: '#21262d',
        border: '#30363d',
        text: '#f0f6fc',
        muted: '#8b949e',
        blue: '#58a6ff',
        green: '#7ee787',
        purple: '#bc8cff',
        amber: '#f0a500',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        md: '8px',
      },
    },
  },
  plugins: [],
};

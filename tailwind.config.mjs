/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        paper: '#f1ede2',
        sheet: '#f7f4ec',
        ink: '#1a1915',
        muted: '#6e695c',
        rule: '#cdc5b1',
        stamp: '#c2381f',
        marker: '#f2dc4a',
      },
      fontFamily: {
        display: ['"Instrument Serif"', 'Georgia', 'serif'],
        body: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
        hand: ['"Caveat"', 'cursive'],
      },
    },
  },
  plugins: [],
};

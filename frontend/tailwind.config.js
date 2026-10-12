/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        s1: "var(--s1)",
        s2: "var(--s2)",
        ln: "var(--ln)",
        tx: "var(--tx)",
        mu: "var(--mu)",
        lm: "var(--lm)",
        t2: "var(--t2)",
        wh: "var(--wh)"
      },
      fontFamily: {
        display: ['Inter', 'sans-serif'],
        body: ['"Instrument Sans"', 'system-ui', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif']
      }
    },
  },
  plugins: [],
}

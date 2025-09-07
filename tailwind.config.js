/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        accent: "#E1A4EF"
      },
      boxShadow: {
        glow: "0 0 20px rgba(225,164,239,0.45)",
        "glow-strong": "0 0 40px rgba(225,164,239,0.6)"
      },
      keyframes: {
        shine: {
          "0%": { "background-position": "0% 50%" },
          "100%": { "background-position": "100% 50%" }
        },
        floaty: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" }
        },
        "pulse-soft": {
          "0%,100%": { opacity: "0.6" },
          "50%": { opacity: "1" }
        },
        beam: { "0%": { transform: "translateX(-100%)" }, "100%": { transform: "translateX(100%)" } },
        fall: { "0%": { transform: "translateY(-100vh)" }, "100%": { transform: "translateY(100vh)" } }
      },
      animation: {
        "shine-slow": "shine 14s linear infinite",
        floaty: "floaty 6s ease-in-out infinite",
        "pulse-soft": "pulse-soft 4s ease-in-out infinite",
        beam: "beam 6s linear infinite"
      }
    }
  },
  plugins: [require("@tailwindcss/aspect-ratio")]
};

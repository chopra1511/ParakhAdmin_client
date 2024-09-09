/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      musky: ["Musky"],
      cheque: ["Cheque"],
      Poppins: ["Poppins"],
      Quicksand: ["Quicksand"],
      Pacifico: ["Pacifico"],
      Cursive: ["Sacramento"],
      Lemon: ["LEMONMILK-Bold"],
    },
    keyframes: {
      wiggle: {
        "0%": { letterSpacing: "1em", filter: "blur(20px)", opacity: "0" },
        "100%": { filter: "blur(0px)", opacity: "1" },
      },
      fadeIn: {
        "0%": { transform: "translateY(50px)", opacity: "0" },
        "100%": { transform: "translateY(0px)", opacity: "1" },
      },
      typing: {
        "0%": { width: "0ch" },
        "70%": { width: "25ch" },
        "95%": { width: "25ch" }, // Pause at full width
        "100%": { width: "0ch" }, // Reset width to 0 at the end
      },
    },
    animation: {
      wiggle: "wiggle 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
      fadeIn: "fadeIn 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
      typing: "typing 2s steps(30) infinite, alternate",
    },
  },
  plugins: [],
};

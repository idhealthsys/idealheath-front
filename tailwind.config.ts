import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: ".5rem",
        sm: "1rem",
      }
    },
    extend: {
      keyframes: {
        slideIn: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          }
        },
        fadeIn: {
          '0%': {
            opacity: '0'
          },
          '100%': {
            opacity: '1'
          }
        },
        slideLeft: {
          '0%': {
            transform: 'translateX(-600px)'
          },
          '100%': {  
            transform: 'translateX(0)'
          }
        }
      },
      animation: {
        slideIn: 'slideIn 0.5s ease-in-out forwards',
        fadeIn: 'fadeIn 0.5s ease-in-out forwards',
        slideLeft: 'slideLeft 0.5s ease-in-out forwards'
      },
      colors: {
        roxo: {
          100: '#ECEEFD',
          200: '#8F97CE',
          300: '#4351B0',
          400: '#2D3674',
          500: '#0F1448',
        }
      }
    },
  },
  plugins: [
    plugin(({addUtilities}) => {
      function animationDelay() {
        const delays: { [key: string]: { 'animation-delay': string } } = {};
        for (let i = 0; i <= 12; i++) {
          delays[`.animate-${i}`] = {
            'animation-delay': `${i * 100}ms`,
          };
        }
        return delays;
      }
      addUtilities(animationDelay())
    })
  ],
} satisfies Config;

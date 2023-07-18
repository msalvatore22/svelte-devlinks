/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        'gray': '#737373',
        'light-gray': '#D9D9D9'
      }
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
        
          "primary": "#633CFF",
                  
          "secondary": "#BEADFF",
                  
          "accent": "#EFEBFF",
                  
          "neutral": "#FAFAFA",
                  
          "base-100": "#FFFF",
                  
          "info": "#3abff8",
                  
          "success": "#36d399",
                  
          "warning": "#fbbd23",
                  
          "error": "#FF3939",

          ".btn-primary:hover": {
            "background-color": "#BEADFF",
            "border-color": "#BEADFF"
          },
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}


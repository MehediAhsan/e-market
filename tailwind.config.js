/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
          "primary": "#b5d4f2",
          
          "secondary": "#f26581",
                   
          "accent": "#1ab2af",
                   
          "neutral": "#24222A",
                   
          "base-100": "#F7F3F7",
                   
          "info": "#83B3F1",
                   
          "success": "#5CE0A2",
                   
          "warning": "#E2AC18",
                   
          "error": "#F12222",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
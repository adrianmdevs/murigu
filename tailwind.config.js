/** @type {import('tailwindcss').Config} */
export default {
  darkMode : 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,vue}'
  ],
  theme: {
    extend: {
      colors : {
        'blue' : '#10a1f2',
        'darkBlue' :'#279508',
        'secondary-dark' : '#202122',
        'main-hue' :'#2563EB',
        'green-hue' : '#22C55E',
        'body-slate' : '#708090',
        'dark-slate': '#COC8CF',
      },
      fontSize : {
        // Clamp (Min, preffered, Max)
        'fluid-sm': 'clamp(0.875rem, 1vw + 0.25rem, 1rem)', // 14px -> 16px
        'fluid-base': 'clamp(1rem, 1vw + 0.5rem, 1.25rem)', // 16px -> 20px
        'fluid-lg': 'clamp(1.25rem, 2vw + 0.5rem, 1.75rem)',// 20px -> 28px
        'fluid-xl': 'clamp(1.5rem, 2.5vw + 0.5rem, 2.25rem)',// 24px -> 36px
        'fluid-2xl': 'clamp(2rem, 3vw + 1rem, 3rem)', // 32px -> 48px
        
      }
    },
  },
  plugins: [],
}


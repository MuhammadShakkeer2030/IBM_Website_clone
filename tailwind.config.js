/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:true,
  theme: {
    extend: {
      fontFamily: {
        sans: ['IBM Plex Sans', 'sans-serif'],
        ibmPlex :['Helvetica Neue','Arial','sans-serif']
      },
      colors: {
        ibmBlue: '#054ADA',
        ibmGray: '#5A6872',
        ibmLightGray: '#D0D7DE',
        ibmWhite: '#FFFFFF',
        ibmText:'#161616'
      },
      fontSize: {
        'h1':"53px",
        'h3':"40px",
        'p' : "20px",
        'btn':"20px",
        "icon":"40px",
        "tiny":"7.5px"
      },
      fontWeight:{
        "300":"300",
        "400":"400",
        "600":"600"
      },
      padding: {
        "mp":"10px",//mubile padding
        "tp":"15px",//tablet padding
        "lp":"20px",//laptop padding"
        "boxP":"20px"
      },
      margin: {
        '1': '0.25rem',   // 4px
        '2': '0.5rem',    // 8px
        '3': '0.75rem',   // 12px
        '4': '1rem',      // 16px
        '5': '1.25rem',   // 20px
        '6': '1.5rem',    // 24px
      },
      borderWidth: {
        '1': '1px',
        '2': '2px',
      },
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',  // 2px
        'md': '0.375rem',  // 6px
        'lg': '0.5rem',    // 8px
        'xl': '1rem',      // 16px
        'full': '9999px',
      },
      width:{
        "boxWidth":"352px"
      },
      height:{
        "boxHeight":"298px"
      },
    },
  },
  variants: {
    extend: {
      borderColor: ['responsive', 'hover', 'focus', 'active'],
      borderWidth: ['responsive', 'hover', 'focus', 'active'],
      padding: ['responsive', 'hover', 'focus'],
      margin: ['responsive', 'hover', 'focus'],
      textColor: ['responsive', 'hover', 'focus', 'group-hover'],
      backgroundColor: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
      boxShadow: ['responsive', 'hover', 'focus', 'active'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    // Add other Tailwind plugins here as needed
  ],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '0 1.5rem',
      screens: {
        sm: '540px',
        md: '720px',
        lg: '960px',
        xl: '1140px',
        '2xl': '1320px',
      },
    },
    spacing:{
      auto: 'auto',
      0:  0,
      2:  '0.125rem',
      4:  '0.25rem',
      6:  '0.375rem',
      8:  '0.5rem',
      10: '0.625rem',
      11: '0.688rem',
      12: '0.75rem',
      13: '0.813rem',
      14: '0.875rem',
      16: '1rem',
      18: '1.125rem',
      20: '1.25rem',
      22: '1.375rem',
      24: '1.5rem',
      26: '1.625rem',
      28: '1.75rem',
      30: '1.875rem',
      32: '2rem',
      34: '2.125rem',
      36: '2.25rem',
      38: '2.375rem',
      40: '2.5rem',
      42: '2.625rem',
      44: '2.75rem',
      46: '2.875rem',
      48: '3rem',
      50: '3.125rem',
      52: '3.25rem',
      54: '3.375rem',
      56: '3.5rem',
      58: '3.625rem',
      60: '3.75rem',
      62: '3.875rem',
      64: '4rem',
      66: '4.125rem',
      68: '4.25rem',
      70: '4.375rem',
      72: '4.5rem',
      76: '4.75rem',
      78: '4.875rem',
      80: '5rem',
      100:' 6.25rem',
    },
    fontSize:{
      2:  '0.125rem',
      4:  '0.25rem',
      6:  '0.375rem',
      8:  '0.5rem',
      10: '0.625rem',
      11: '0.688rem',
      12: '0.75rem',
      13: '0.813rem',
      14: '0.875rem',
      16: '1rem',
      18: '1.125rem',
      20: '1.25rem',
      22: '1.375rem',
      24: '1.5rem',
      26: '1.625rem',
      28: '1.75rem',
      30: '1.875rem',
      32: '2rem',
      34: '2.125rem',
      36: '2.25rem',
      38: '2.375rem',
      40: '2.5rem',
      42: '2.625rem',
      44: '2.75rem',
      46: '2.875rem',
      48: '3rem',
      50: '3.125rem',
      52: '3.25rem',
      54: '3.375rem',
      56: '3.5rem',
      58: '3.625rem',
      60: '3.75rem',
      62: '3.875rem',
      64: '4rem',
      66: '4.125rem',
      68: '4.25rem',
      70: '4.375rem',
      72: '4.5rem',
      76: '4.75rem',
      78: '4.875rem',
      80: '5rem',
      100:' 6.25rem',
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',      
    },
    divideWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',      
    },
    outlineWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',      
    },
    ringWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',      
    },
    extend: {
      lineHeight: {
        '110': '110%', 
        inherit: 'inherit',       
      },
      colors:{
        primary: {
          50: '#EFEAFD',
          100: '#CEBDF8',
          200: '#B69DF5',
          300: '#9471F0',
          400: '#8055ED',
          500: '#602BE9',
          600: '#5727D4',
          700: '#441FA5',
          800: '#351880',
          900: '#281262',          
        },
        branddark:{
          50: '#E6E7EB',
          100: '#B2B5C0',
          200: '#8C91A1',
          300: '#585F76',
          400: '#38405C',
          500: '#061033',
          600: '#050F2E',
          700: '#040B24',
          800: '#03091C',
          900: '#030715',
        },
        gray: {
          100: '#F7F9FA',
          200: '#E4E8EB',
          300: '#D1D7DC',
          400: '#9DA3A7',
          500: '#54585B',
          600: '#3E4143',
          700: '#2D2F31',
          800: '#1C1D1F',
          900: '#101112',
        },
        brandlight: '#FAF8FF',
        secondary: '#010ED0',
      },
    },    
  },
  plugins: [
    require("daisyui"),
  ],
  // daisyUI config (optional - here are the default values)
  daisyui: {
    themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
}
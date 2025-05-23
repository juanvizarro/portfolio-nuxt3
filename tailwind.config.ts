import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        // teal: {
        //   50: '#effefc',
        //   100: '#c8fff9',
        //   200: '#90fff3',
        //   300: '#64f8ee', // main
        //   400: '#1de4dd',
        //   500: '#05c7c3',
        //   600: '#00a1a0',
        //   700: '#057f80',
        //   800: '#0a6365',
        //   900: '#0d5354',
        //   950: '#002f33'
        // },
        shark: {
          50: '#f6f7f9',
          100: '#eceff2',
          200: '#d5dce2',
          300: '#afbcca',
          400: '#8499ac',
          500: '#657c92',
          600: '#506479',
          700: '#425262',
          800: '#394653',
          900: '#333d47',
          950: '#232931' // main
        },
        shamrock: {
          50: '#edfcf6',
          100: '#d4f7e6',
          200: '#aceed3',
          300: '#77deb9',
          400: '#4ecca3', // main
          500: '#1cad83',
          600: '#0f8c6a',
          700: '#0c7057',
          800: '#0c5946',
          900: '#0b493b',
          950: '#052921'
        }
      }
    }
  },
  darkMode: 'class'
}

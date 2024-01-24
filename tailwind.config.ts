import type { Config } from 'tailwindcss'

export default <Partial<Config>> {
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
          50: '#f5f7fa',
          100: '#ebeff3',
          200: '#d2dbe5',
          300: '#aabccf',
          400: '#7d99b3',
          500: '#5c7c9b',
          600: '#486381',
          700: '#3b5169',
          800: '#344558',
          900: '#2f3c4b',
          950: '#202833' // main
        }
      }
    }
  },
  darkMode: 'class'
}

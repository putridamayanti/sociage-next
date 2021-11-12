module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  mode: process.env.NODE_ENV ? 'jit' : undefined,
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E1E1F',
          light: '#EFEFEF'
        },
        secondary: {
          light: '#f5e7e7',
          DEFAULT: '#960F12',
          dark: '#1e0304'
        },
        tertiary: {
          light: '#FEEAD0',
          DEFAULT: '#FB9C23',
          dark: '#B46804'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

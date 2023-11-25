/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      display: ['Noto Sans', 'sans-serif'],
      body: ['Noto Sans', 'sans-serif'],
    },
    screens: {
      sm: '320px',
      md: '640px',
      lg: '976px',
      dsk: '1351px',
      xl: '1601px',
      xxl: '1920px',
    },
    container: {
      padding: {
        DEFAULT: '10px',
        sm: '10px',
        md: '38px',
        lg: '38px',
        dsk: '38px',
        xl: '50px',
      },
    },
    extend: {
      fontSize: {
        1: '0.25rem',
        2: '0.5rem',
        3: '0.75rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        7: '1.75rem',
        8: '2rem',
        9: '2.25rem',
        10: '2.5rem',
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
        15: '3.75rem',
        16: '4rem',
        17: '4.25rem',
        18: '4.5rem',
        19: '4.75rem',
        20: '5rem',
      },
      backgroundColor: {
        primary: 'var(--white)',
        secondary: 'var(--bg-secondary)',
        dark: 'var(--dark-primary)',
      },
      colors: {
        white: 'var(--white)',
        textPrimary: 'var(--text-primary)',
        accentPrimary: 'var(--accent-primary)',
        grayPrimary: 'var(--gray-primary)',
        graySecondary: 'var(--gray-secondary)',
      },
      borderWidth: {
        1: '1px',
      },
      borderColor: {
        primary: 'var(--gray-primary)',
        secondary: 'var(--accent-primary)',
      },
      boxShadow: {
        none: 'none',
        regular: '0px 3.5px 5.5px 0px rgba(0, 0, 0, 0.02)',
      },
      backgroundImage: {
        'gradient-primary':
          'linear-gradient(90deg, #9B7EFA 10.49%, #7E5AE1 93.41%)',
      },
    },
  },
}

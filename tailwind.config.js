// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: ['./src/**/*.html', './src/**/*.jsx', './src/**/*.js'],
  theme: {
    container: {
      center: true
    },
    colors: {
      current: 'currentColor',
      transparent: 'transparent',
      foreground: '#fefcf8',
      white: '#ffffff',
      black: '#000000',
      primary: '#34785C',
      gray: {
        100: '#F8F8F8',
        200: '#E7E7E7',
        500: '#9B9B9B',
        700: '#333333',
        800: '#2C2D32',
        900: '#1D1D1D'
      }
    },

    screens: {
      sm: '576px',
      md: '768px',
      lg: '960px',
      xl: '960px'
    },

    fontFamily: {
      sans: ['barlow', 'sans-serif'],
      serif: ['Georgia', 'serif'],
      mono: [
        'Menlo',
        'Monaco',
        'Consolas',
        'Liberation Mono',
        'Courier New',
        'monospace'
      ]
    },

    fontSize: {
      xxs: '.6875rem', // 11px
      xs: '.75rem', // 12px
      sm: '.875rem', // 14px
      base: '1rem', // 16px
      lg: '1.125rem', // 18px
      xl: '1.25rem', // 20px
      '2xl': '1.5rem', // 24px
      '28px': '1.75rem', // 28px
      '30px': '30px', // 30px
      '3xl': '2rem', // 32px
      '4xl': '2.25rem', // 36px
      '5xl': '3rem', // 48px
      '6xl': '3.5rem' // 56px
    },

    fontWeight: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900
    },

    lineHeight: {
      '0': 0,
      none: 1,
      tight: 1.25,
      normal: 1.5,
      medium: 1.626,
      loose: 2
    },

    letterSpacing: {
      tight: '-0.05em',
      normal: '0',
      wide: '0.05em'
    },

    opacity: {
      0: '0',
      25: '.25',
      50: '.5',
      40: '.4',
      75: '.75',
      80: '.8',
      100: '1'
    },

    textColor: theme => theme('colors'),

    backgroundColor: theme => theme('colors'),

    // backgroundSize
    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain'
    },

    borderWidth: {
      default: '1px',
      '0': '0',
      '2': '2px',
      '4': '4px',
      '8': '8px'
    },

    borderColor: theme => ({
      default: theme('colors.grey-light'),
      ...theme('colors')
    }),
    borderRadius: {
      none: '0',
      sm: '.125rem',
      default: '.25rem',
      lg: '.5rem',
      xl: '.75rem',
      '2xl': '1rem',
      full: '9999px'
    },

    width: {
      auto: 'auto',
      px: '1px',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '6': '1.5rem',
      '8': '2rem',
      '10': '2.5rem',
      '12': '3rem',
      '13': '3.25rem',
      '14': '3.5rem',
      '16': '4rem',
      '20': '5rem',
      '24': '6rem',
      '28': '7rem',
      '32': '8rem',
      '36': '9rem',
      '40': '10rem',
      '48': '12rem',
      '64': '16rem',
      '112': '28rem',
      '1/2': '50%',
      '1/3': '33.33333%',
      '2/3': '66.66667%',
      '1/4': '25%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.66667%',
      '5/6': '83.33333%',
      '1/7': '14.285%',
      '1/12': '8.33333%',
      '5/12': '41.66666%',
      '7/12': '58.33333%',
      '11/12': '91.6666%',
      full: '100%',
      screen: '100vw',
      'screen-90': '90vw'
    },

    height: {
      auto: 'auto',
      px: '1px',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '6': '1.5rem',
      '8': '2rem',
      '10': '2.5rem',
      '12': '3rem',
      '13': '3.25rem',
      '14': '3.5rem',
      '16': '4rem',
      '20': '5rem',
      '24': '6rem',
      '28': '7rem',
      '30': '7.5rem',
      '32': '8rem',
      '48': '12rem',
      '64': '16rem',
      full: '100%',
      screen: '100vh'
    },

    minWidth: {
      '0': '0',
      full: '100%'
    },

    minHeight: {
      '0': '0',
      px: '1px',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '6': '1.5rem',
      '8': '2rem',
      '10': '2.5rem',
      '12': '3rem',
      '13': '3.25rem',
      '14': '3.5rem',
      '16': '4rem',
      '24': '6rem',
      '28': '7rem',
      '30': '7.5rem',
      '32': '8rem',
      '48': '12rem',
      '64': '16rem',
      full: '100%',
      screen: '100vh',
      hero: '900px'
    },

    maxWidth: {
      none: 'none',
      xs: '20rem',
      sm: '30rem',
      md: '40rem',
      lg: '50rem',
      xl: '60rem',
      '2xl': '70rem',
      '3xl': '80rem',
      '4xl': '90rem',
      '5xl': '100rem',
      full: '100%'
    },
    maxHeight: {
      full: '100%',
      screen: '100vh'
    },

    spacing: {
      px: '1px',
      '2px': '2px',
      0: '0',
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      10: '2.5rem',
      12: '3rem',
      14: '3.5rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      26: '7rem',
      28: '7.5rem',
      32: '8rem',
      40: '10rem',
      48: '12rem',
      56: '14rem',
      64: '16rem',
      gutter: '12px',
      'half-gutter': '6px'
    },

    padding: theme => theme('spacing'),
    margin: (theme, { negative }) => ({
      auto: 'auto',
      ...theme('spacing'),
      ...negative(theme('spacing'))
    }),

    boxShadow: {
      default: '0 2px 4px 0 rgba(0,0,0,0.10)',
      md: '0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08)',
      lg: '0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)',
      inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
      none: 'none'
    },

    zIndex: {
      auto: 'auto',
      '0': 0,
      '10': 10,
      '20': 20,
      '30': 30,
      '40': 40,
      '50': 50
    },
    fill: {
      current: 'currentColor'
    },

    stroke: {
      current: 'currentColor'
    }
  },

  variants: {
    appearance: ['responsive'],
    backgroundAttachment: ['responsive'],
    backgroundColor: ['responsive', 'hover'],
    backgroundPosition: ['responsive'],
    backgroundRepeat: ['responsive'],
    backgroundSize: ['responsive'],
    borderColor: ['responsive', 'hover'],
    borderRadius: ['responsive'],
    borderStyle: ['responsive'],
    borderWidth: ['responsive'],
    cursor: ['responsive'],
    display: ['responsive'],
    flexDirection: ['responsive'],
    flexWrap: ['responsive'],
    alignItems: ['responsive'],
    alignSelf: ['responsive'],
    justifyContent: ['responsive'],
    alignContent: ['responsive'],
    flex: ['responsive'],
    flexGrow: ['responsive'],
    flexShrink: ['responsive'],
    float: ['responsive'],
    fontFamily: ['responsive'],
    fontWeight: ['responsive', 'hover'],
    height: ['responsive'],
    lineHeight: ['responsive'],
    listStylePosition: ['responsive'],
    listStyleType: ['responsive'],
    margin: ['responsive'],
    maxHeight: ['responsive'],
    maxWidth: ['responsive'],
    minHeight: ['responsive'],
    minWidth: ['responsive'],
    negativeMargin: ['responsive'],
    opacity: ['responsive'],
    overflow: ['responsive'],
    padding: ['responsive'],
    pointerEvents: ['responsive'],
    position: ['responsive'],
    inset: ['responsive'],
    resize: ['responsive'],
    boxShadow: ['responsive'],
    fill: [],
    stroke: [],
    textAlign: ['responsive'],
    textColor: ['responsive', 'hover'],
    fontSize: ['responsive'],
    fontStyle: ['responsive', 'hover'],
    fontSmoothing: ['responsive', 'hover'],
    textDecoration: ['responsive', 'hover'],
    textTransform: ['responsive', 'hover'],
    letterSpacing: ['responsive'],
    userSelect: ['responsive'],
    verticalAlign: ['responsive'],
    visibility: ['responsive'],
    whitespace: ['responsive'],
    wordBreak: ['responsive'],
    width: ['responsive'],
    zIndex: ['responsive']
  },
  plugins: [require('tailwindcss-transitions')]
};

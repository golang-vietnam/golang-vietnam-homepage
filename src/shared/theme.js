const white = '#ffffff'
const primary = '#3BA2BC'
const black = '#080808'
const grey = '#E7E7E7'
const greyLigher = '#F8F8F8'
const greyDarker = '#9B9B9B'

export default {
  white,
  primary,
  black,
  grey,
  greyLigher,
  greyDarker,
  main: {
    primary,
    background: white,
    body: greyLigher,
    foreground: black,
    border: grey,
  },
  button: {
    primary: {
      background: primary,
      foreground: white,
    },
  },
  footer: {
    background: grey,
    foreground: black,
  },
  card: {
    background: white,
    foreground: black,
    boxShadow: '0 0px 4px rgba(0,0,0,0.15)',
  },
  header: {
    background: white,
    foreground: black,
    dark: {
      background: 'rgba(0,0,0,0.5)',
      foreground: white,
      nav: {
        link: {
          foreground: white,
          activeForeground: primary,
        },
      },
    },
    nav: {
      link: {
        foreground: black,
        activeForeground: primary,
      },
      submenu: {
        background: white,
        foreground: black,
        boxShadow: '0 0px 4px rgba(0,0,0,0.15)',
        link: {
          background: white,
          foreground: black,
          activeBackground: primary,
          activeForeground: white,
        },
      },
    },
    mobileNav: {
      background: black,
      foreground: white,
      link: {
        foreground: white,
        active: {
          foreground: primary,
        },
      },
    },
  },
  badge: {
    activeBackground: primary,
    activeForeground: white,
    inactiveBackground: greyDarker,
    inactiveForeground: white,
  },
}

import { css } from 'styled-components'

export const lg = (...args) => {
  return css`
    @media (min-width: 992px) {
      ${css(...args)}
    }
  `
}

export const md = (...args) => {
  return css`
    @media (min-width: 768px) {
      ${css(...args)}
    }
  `
}

export const sm = (...args) => css`
  @media (min-width: 576px) {
    ${css(...args)}
  }
`

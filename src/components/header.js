import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Logo from '@/components/svg/Logo'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Wrapper } from '@/shared/styled'

const Container = styled.header`
  padding: 5px 0;
  ${props => `
    position: ${props.absolute ? 'absolute' : 'relative'}
    background-color: ${props.dark ? `rgba(0, 0, 0, 0.3)` : props.theme.white}
    box-shadow: ${props.dark ? `none` : `0 1px 2px rgba(0, 0, 0, 0.1)`}
  `}
`

const Header = ({ siteTitle, absolute, dark }) => (
  <Container absolute={absolute} dark={dark}>
    <div className="container mx-auto">
      <div className="flex items-center justify-between">
        <Link to="/">
          <Logo />
        </Link>
        <div className="col">Menu</div>
      </div>
    </div>
  </Container>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  absolute: PropTypes.bool,
  dark: PropTypes.bool,
}

Header.defaultProps = {
  siteTitle: ``,
  absolute: false,
  dark: false,
}

export default Header

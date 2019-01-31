import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Logo from '@/components/svg/Logo'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Wrapper } from '@/shared/styled'
import menu from '@/data/menu'
import { FaCaretDown } from 'react-icons/fa'

const Container = styled.header`
  padding: 5px 0;
  ${props => `
    ${
      props.absolute
        ? `
      position: absolute;
      left: 0;
      right: 0;
      z-index: 99;
    `
        : ``
    };    
    background-color: ${
      props.dark
        ? props.theme.header.dark.background
        : props.theme.header.background
    };
    box-shadow: ${props.dark ? `none` : `0 1px 2px rgba(0, 0, 0, 0.1)`};
  `}
`

const LogoWrapper = styled.div`
  a {
    color: ${props =>
      props.dark
        ? props.theme.header.dark.foreground
        : props.theme.header.foreground};
  }
`

const Menu = styled.nav`
  ${tw`list-reset`};
  a {
    text-decoration: none;
    font-weight: 500;
  }
  > li {
    display: inline-block;
    margin-left: 40px;
    position: relative;
    padding: 20px 0;

    &:hover {
      ul {
        opacity: 1;
        visibility: visible;
      }
    }
  }
  > li > a {
    ${tw`flex items-center`};
    svg {
      margin-left: 2px;
    }
    color: ${props =>
      props.dark
        ? props.theme.header.dark.nav.link.foreground
        : props.theme.header.nav.link.foreground};
    &:hover {
      color: ${props =>
        props.dark
          ? props.theme.header.dark.nav.link.activeForeground
          : props.theme.header.nav.link.activeForeground};
    }
  }
  ul {
    ${tw`list-reset`};
    bottom: 1px;
    visibility: hidden;
    opacity: 0;
    transform: translateY(100%);
    position: absolute;
    background-color: ${props => props.theme.header.nav.submenu.background};
    box-shadow: ${props => props.theme.header.nav.submenu.boxShadow};
    padding: 10px 0;
    a {
      padding: 0 27px;
      min-width: 150px;
      height: 40px;
      ${tw`flex items-center`};
      color: ${props => props.theme.header.nav.submenu.link.foreground};

      &:hover {
        background-color: ${props =>
          props.theme.header.nav.submenu.link.activeBackground};
        color: ${props => props.theme.header.nav.submenu.link.activeForeground};
      }
    }
  }
`

const Header = ({ siteTitle, absolute, dark }) => (
  <Container absolute={absolute} dark={dark}>
    <div className="container mx-auto px-gutter">
      <div className="flex items-center justify-between -mx-gutter">
        <LogoWrapper dark={dark} className="px-gutter">
          <Link to="/">
            <Logo />
          </Link>
        </LogoWrapper>
        <div className="px-gutter">
          <nav>
            <Menu dark={dark}>
              {menu.map(({ children, name, href }) => (
                <li key={href}>
                  <Link to={href}>
                    {name} {Array.isArray(children) && <FaCaretDown />}
                  </Link>

                  {Array.isArray(children) && (
                    <ul>
                      {children.map(({ name, href }) => (
                        <li key={href}>
                          <Link to={href}>{name}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </Menu>
          </nav>
        </div>
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

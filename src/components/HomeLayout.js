import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Root from '@/components/root'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html, body {
    color: ${props => props.theme.main.foreground};
    background-color: ${props => props.theme.main.body};
  }
`
const HomeLayout = ({ children }) => (
  <Root>
    <GlobalStyle />
    <Header absolute dark />
    <div>
      {children}
      <Footer />
    </div>
  </Root>
)

HomeLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default HomeLayout

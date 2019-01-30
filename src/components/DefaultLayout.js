import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from 'styled-components'
import Header from './header'
import Root from '@/components/root'
import Footer from '@/components/Footer'

const DefaultLayout = ({ children }) => {
  return (
    <Root>
      <Header />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        {children}
      </div>

      <Footer />
    </Root>
  )
}

export default DefaultLayout

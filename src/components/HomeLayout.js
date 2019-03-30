import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Root from '@/components/root'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import smoothscroll from 'smoothscroll-polyfill'
import { GlobalStyle } from '@/shared/styled'

const HomeLayout = ({ children }) => {
  useEffect(() => {
    // kick off the polyfill!
    smoothscroll.polyfill()
  }, [])
  return (
    <Root>
      <GlobalStyle />
      <Header absolute dark onePage />
      <div>
        {children}
        <Footer />
      </div>
    </Root>
  )
}

HomeLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default HomeLayout

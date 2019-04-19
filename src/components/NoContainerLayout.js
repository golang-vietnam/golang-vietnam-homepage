import React from 'react'
import PropTypes from 'prop-types'
import Header from '@/components/Header'
import Root from '@/components/root'
import Footer from '@/components/Footer'
import styled from 'styled-components'
import { GlobalStyle } from '@/shared/styled'
import { sm } from '@/shared/responsive'

const Container = styled.div`
  min-height: calc(100vh - 76px);
  padding: 150px 0 120px 0;
  ${sm`padding: 170px 0 180px 0;`}
`

const NoContainerLayout = ({ children, title }) => {
  return (
    <Root>
      <GlobalStyle />
      <Header />
      <Container>{children}</Container>
      <Footer />
    </Root>
  )
}

NoContainerLayout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
}

export default NoContainerLayout

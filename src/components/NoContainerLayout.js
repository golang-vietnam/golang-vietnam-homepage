import React from 'react'
import PropTypes from 'prop-types'
import Header from '@/components/Header'
import Root from '@/components/root'
import Footer from '@/components/Footer'
import styled from 'styled-components'
import Heading from '@/components/Heading'
import tw from 'tailwind.macro'
import { GlobalStyle } from '@/shared/styled'

const Container = styled.div`
  min-height: calc(100vh - 76px);
  padding: 170px 0 200px 0;
`

const Head = styled.div`
  ${tw`flex items-end justify-between mb-16`};
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

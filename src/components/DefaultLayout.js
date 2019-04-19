import React from 'react'
import PropTypes from 'prop-types'
import Header from '@/components/Header'
import Root from '@/components/root'
import Footer from '@/components/Footer'
import styled from 'styled-components'
import Heading from '@/components/Heading'
import tw from 'tailwind.macro'
import { GlobalStyle } from '@/shared/styled'
import { sm } from '@/shared/responsive'

const Container = styled.div`
  min-height: calc(100vh - 76px);
  padding: 150px 0 120px 0;
  ${sm`padding: 170px 0 180px 0;`}
`

const Head = styled.div`
  ${tw`flex md:flex-row flex-col justify-between mb-16`};
`

const DefaultLayout = ({ children, title, RightSideComponent }) => {
  return (
    <Root>
      <GlobalStyle />
      <Header />
      <Container>
        <div className="container px-gutter mx-auto">
          {title && (
            <Head>
              <Heading>{title}</Heading>
              {RightSideComponent && <RightSideComponent />}
            </Head>
          )}{' '}
          {children}
        </div>
      </Container>

      <Footer />
    </Root>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  RightSideComponent: PropTypes.any,
}

export default DefaultLayout

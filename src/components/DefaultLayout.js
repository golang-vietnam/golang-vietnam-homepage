import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from 'styled-components'
import Header from './header'
import Root from '@/components/root'
import Footer from '@/components/Footer'
import styled from 'styled-components'
import Heading from '@/components/Heading'
import jx from 'tailwind.macro'

const Container = styled.div`
  padding: 80px 0 200px 0;
`

const Head = styled.div`
  ${jx`flex items-end justify-between mb-16`};
`

const DefaultLayout = ({ children, title, RightSideComponent }) => {
  return (
    <Root>
      <Header />
      <Container>
        <div className="container px-gutter mx-auto">
          <Head>
            <Heading>{title}</Heading>
            {RightSideComponent && <RightSideComponent />}
          </Head>
          {children}
        </div>
      </Container>

      <Footer />
    </Root>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  RightSideComponent: PropTypes.element,
}

export default DefaultLayout

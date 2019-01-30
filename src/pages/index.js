import React from 'react'
import { Link } from 'gatsby'

import Layout from '@/components/layout'
import Image from '@/components/image'
import SEO from '@/components/seo'

import styled from 'styled-components'
import tw from 'tailwind.macro'

// const Paragraph = styled.div`
//   ${tw`bg-blue hover:bg-blue-dark text-white p-2 rounded`};
// `

const Paragraph = styled('div')`
  font-size: 20px;
  ${tw`bg-blue hover:bg-blue-dark text-white p-2 rounded`};
  color: ${props => props.theme.black};
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <Paragraph>Welcome to your new Gatsby site.</Paragraph>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

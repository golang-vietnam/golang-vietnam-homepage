import React from 'react'
import { Link } from 'gatsby'
import { graphql, StaticQuery } from 'gatsby'

import DefaultLayout from '@/components/DefaultLayout'
import SEO from '@/components/seo'
import Heading from '@/components/Heading'
import EventCard from '@/components/EventCard'
import { SubHeading, Card, CardHeading, CardExcerpt } from '@/shared/styled'

const query = graphql`
  {
    data: allMarkdownRemark(
      filter: { frontmatter: { key: { eq: "articles" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            list {
              title
              desc
              linkURL
            }
          }
        }
      }
    }
  }
`

const ArticlesPage = () => (
  <DefaultLayout title="Resources">
    <SEO title="Articles" />

    <SubHeading className="mb-8">Articles</SubHeading>

    <StaticQuery
      query={query}
      render={({ data }) => {
        if (!data) {
          return null
        }
        const { list } = data.edges[0].node.frontmatter

        return list.map(({ title, desc, linkURL }, i) => (
          <Card key={i}>
            <CardHeading>{title}</CardHeading>
            <CardExcerpt>{desc}</CardExcerpt>
          </Card>
        ))
      }}
    />
  </DefaultLayout>
)

export default ArticlesPage

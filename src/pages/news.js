import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import DefaultLayout from '@/components/DefaultLayout'
import SEO from '@/components/seo'
import NewsCard from '@/components/NewsCard'

const query = graphql`
  {
    data: allMarkdownRemark(filter: { frontmatter: { key: { eq: "news" } } }) {
      edges {
        node {
          id
          frontmatter {
            list {
              title
              desc
              postedOn
              author
              link
            }
          }
        }
      }
    }
  }
`

const News = () => (
  <DefaultLayout title="News">
    <SEO title="News" />

    <StaticQuery
      query={query}
      render={({ data }) => {
        if (!data) {
          return null
        }
        const { list } = data.edges[0].node.frontmatter

        return list.map((news, index) => <NewsCard {...news} key={index} />)
      }}
    />
  </DefaultLayout>
)

export default News

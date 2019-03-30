import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import DefaultLayout from '@/components/DefaultLayout'
import SEO from '@/components/seo'
import ArticleCard from '@/components/ArticleCard'

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
              level
              resources {
                title
                link
              }
            }
          }
        }
      }
    }
  }
`

const ArticlesPage = () => (
  <DefaultLayout title="Articles">
    <SEO title="Articles" />
    <StaticQuery
      query={query}
      render={({ data }) => {
        if (!data) {
          return null
        }
        const { list } = data.edges[0].node.frontmatter
        return list.map((props, i) => <ArticleCard key={i} {...props} />)
      }}
    />
  </DefaultLayout>
)

export default ArticlesPage

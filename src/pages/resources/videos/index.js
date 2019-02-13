import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import DefaultLayout from '@/components/DefaultLayout'
import SEO from '@/components/seo'
import VideoCard from '@/components/VideoCard'
import { SubHeading } from '@/shared/styled'

const query = graphql`
  {
    data: allMarkdownRemark(
      filter: { frontmatter: { key: { eq: "videos" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            list {
              date
              iframeLink
              image
              title
            }
          }
        }
      }
    }
  }
`

const VideosPage = () => (
  <DefaultLayout title="Resources">
    <SEO title="Videos" />
    <SubHeading className="mb-8">Videos</SubHeading>

    <div className="flex flex-wrap -mx-gutter">
      <StaticQuery
        query={query}
        render={({ data }) => {
          if (!data) {
            return null
          }
          const { list } = data.edges[0].node.frontmatter

          return list.map((video, index) => (
            <div className="lg:w-1/3 sm:w-1/2 px-gutter mb-6" key={index}>
              <VideoCard {...video} />
            </div>
          ))
        }}
      />
    </div>
  </DefaultLayout>
)

export default VideosPage

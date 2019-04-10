import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import NoContainerLayout from '@/components/NoContainerLayout'
import SEO from '@/components/seo'
import Heading from '@/components/Heading'
import ArticleCard from '@/components/ArticleCard'
import BookCard from '@/components/BookCard'
import VideoBlock from '@/components/VideoBlock'

const query = graphql`
  {
    articles: allMarkdownRemark(
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
    videos: allMarkdownRemark(
      filter: { frontmatter: { key: { eq: "videos" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            list {
              date
              videoId
              title
            }
          }
        }
      }
    }
    books: allMarkdownRemark(
      filter: { frontmatter: { key: { eq: "books" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            list {
              title
              image
              author
              link
            }
          }
        }
      }
    }
  }
`

const Resources = () => (
  <StaticQuery
    query={query}
    render={({ videos, articles, books }) => {
      if (!videos || !articles || !books) {
        return null
      }
      const { list: videoList } = videos.edges[0].node.frontmatter
      const { list: articleList } = articles.edges[0].node.frontmatter
      const { list: bookList } = books.edges[0].node.frontmatter

      return (
        <NoContainerLayout title="Resources">
          <SEO title="Videos" />
          <div className="container px-gutter mx-auto" id="video">
            <Heading className="mb-8">Videos</Heading>
          </div>

          <VideoBlock list={videoList} />

          <div className="container px-gutter mx-auto mt-24">
            <Heading className="mb-10">Articles</Heading>
            {articleList.map((article, index) => (
              <ArticleCard {...article} key={index} />
            ))}
            <Heading className="mt-24 mb-10">Books</Heading>
            {bookList.map((book, index) => (
              <BookCard {...book} key={index} />
            ))}
          </div>
        </NoContainerLayout>
      )
    }}
  />
)

export default Resources

import React, { useState } from 'react'
import { graphql, StaticQuery } from 'gatsby'

import NoContainerLayout from '@/components/NoContainerLayout'
import SEO from '@/components/seo'
import { SubHeading } from '@/shared/styled'
import Heading from '@/components/Heading'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import dayjs from 'dayjs'
import ArticleCard from '@/components/ArticleCard'
import BookCard from '@/components/BookCard'
import { md, sm, lg } from '@/shared/responsive'

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
              iframeLink
              image
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

const VideoHolder = styled.div`
  ${lg`display: flex;`}
  max-width: 1360px;
  margin: 0 auto;
  padding: 0 15px;
  margin-top: 50px;
  position: relative;
`

const MainVideo = styled.div`
  ${lg`
  width: 72%;
    flex: 72% 0 0;
  `};
  width: 100%;
  flex-shrink: 0;
  flex-grow: 0;
  > div {
    padding-bottom: 60%;
    position: relative;
    background-color: ${props => props.theme.greyDarker};
    iframe {
      ${tw`absolute pin`};
      width: 100%;
      height: 100%;
    }
  }
`

const PlayList = styled.div`
  margin-top: 30px;
  width: 100%;
  position: relative;
  > div {
    display: block;
    ${props => `
        // background-color: ${props.theme.card.background};
        // box-shadow: ${props.theme.card.boxShadow};
        // padding: 10px;
    `}
    overflow-y: auto;
  }
  ${sm`
      > div {display: flex;}
  `}
  ${lg`
    width: 356px;
    padding-left: 20px;
    margin-top: 0;
    > div {
        ${tw` absolute pin`}
        left: 20px;
        display: block;
    }
  `}
`

const VideoCard = ({ image, title, date, onPlayVideo, active }) => (
  <a
    css={`
      ${lg`
        width: 100%;
        margin-right: 0;
      `}
      ${sm`
        width: 300px;
        margin-right: 20px;
      `}
    `}
    className={
      'flex flex-none mb-2 no-underline' +
      (active ? ' opacity-50 pointer-events-none' : '')
    }
    onClick={onPlayVideo}
    href="#video"
    role="button"
    tabIndex={0}
    onKeyDown={({ key }) => {
      if (key === 'Enter' || key === ' ') {
        onPlayVideo()
      }
    }}
  >
    <div
      css={`
        width: 140px;
        ${sm`width: 168px;`}
        ${tw`flex-none`}
      `}
    >
      <div
        css={`
          background-image: url(${image});
          padding-bottom: 56.6%;
          ${tw`bg-cover bg-no-repeat bg-center`}
        `}
      />
    </div>
    <div
      css={`
        padding: 5px 0 0 10px;
      `}
    >
      <h4
        css={`
          ${tw`text-sm`}
          color: ${props => props.theme.main.foreground};
        `}
      >
        {title}
      </h4>
      <div
        css={`
          ${tw`text-xs mt-2`}
          color: ${props => props.theme.greyDarker}
        `}
      >
        {dayjs(date).format('DD MMM, YYYY')}
      </div>
    </div>
  </a>
)

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

const VideoBlock = ({ list }) => {
  const [active, setActive] = useState(list[0])
  return (
    <VideoHolder>
      <MainVideo>
        <div>
          <iframe
            src={active.iframeLink}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </MainVideo>
      <PlayList>
        <div>
          {list.map((video, index) => (
            <VideoCard
              key={index}
              {...video}
              onPlayVideo={() => setActive(video)}
              active={video === active}
            />
          ))}
        </div>
      </PlayList>
    </VideoHolder>
  )
}

export default Resources

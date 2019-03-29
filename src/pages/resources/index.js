import React, { useState } from 'react'
import { graphql, StaticQuery } from 'gatsby'

import NoContainerLayout from '@/components/NoContainerLayout'
import SEO from '@/components/seo'
import { SubHeading } from '@/shared/styled'
import Heading from '@/components/Heading'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import dayjs from 'dayjs'

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

const VideoHolder = styled.div`
  max-width: 1360px;
  margin: 0 auto;
  padding: 0 20px;
  margin-top: 50px;
  display: flex;
  position: relative;
`

const MainVideo = styled.div`
  width: 72%;
  flex-shrink: 0;
  flex-grow: 0;
  flex: 72% 0 0;
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
  width: 356px;
  padding-left: 20px;
  position: relative;
  overflow: hidden;
  > div {
    ${tw` absolute pin`}
    left: 20px;
    overflow-y: auto;
  }
`

const VideoCard = ({ image, title, date, onPlayVideo, active }) => (
  <div
    className={'flex mb-2' + (active ? ' opacity-50 pointer-events-none' : '')}
  >
    <div
      role="button"
      onClick={onPlayVideo}
      css={`
        width: 168px;
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
  </div>
)

const Resources = () => (
  <StaticQuery
    query={query}
    render={({ data }) => {
      if (!data) {
        return null
      }
      const { list } = data.edges[0].node.frontmatter

      return (
        <NoContainerLayout title="Resources">
          <SEO title="Videos" />
          <div className="container px-gutter mx-auto">
            <Heading className="mb-8">Videos</Heading>
          </div>

          <VideoBlock list={list} />
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
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
      </MainVideo>
      <PlayList>
        <div>
          {list.map((video, index) => (
            <div key={index}>
              <VideoCard
                {...video}
                onPlayVideo={() => setActive(video)}
                active={video === active}
              />
            </div>
          ))}
        </div>
      </PlayList>
    </VideoHolder>
  )
}

export default Resources

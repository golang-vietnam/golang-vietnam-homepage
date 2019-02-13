import React from 'react'
import { Link } from 'gatsby'
import { graphql, StaticQuery } from 'gatsby'

import DefaultLayout from '@/components/DefaultLayout'
import SEO from '@/components/seo'
import Heading from '@/components/Heading'
import data from '@/data/jobs'
import JobCard from '@/components/JobCard'
import tw from 'tailwind.macro'
import styled from 'styled-components'

const query = graphql`
  {
    data: allMarkdownRemark(filter: { frontmatter: { key: { eq: "jobs" } } }) {
      edges {
        node {
          id
          frontmatter {
            list {
              company
              date
              desc
              isOpened
              linkURL
              location
              title
              type
            }
          }
        }
      }
    }
  }
`

const InfoBlock = styled.div`
  ${tw`flex items-center`};
  b {
    color: ${props => props.theme.main.primary};
    margin-right: 20px;
  }
`

const JobPage = () => (
  <StaticQuery
    query={query}
    render={({ data }) => {
      if (!data) {
        return null
      }
      const { list } = data.edges[0].node.frontmatter

      const { numOfOpen, numOfClosed } = list.reduce(
        (a, { isOpened }) => {
          if (isOpened) {
            a.numOfOpen = a.numOfOpen + 1
          } else {
            a.numOfClosed = a.numOfClosed + 1
          }
          return a
        },
        {
          numOfOpen: 0,
          numOfClosed: 0,
        }
      )

      return (
        <DefaultLayout
          title="Jobs"
          RightSideComponent={() => (
            <InfoBlock>
              <b>{numOfOpen} open</b>
              <span>{numOfClosed} closed</span>
            </InfoBlock>
          )}
        >
          <SEO title="Jobs" />
          {list.map((data, i) => (
            <JobCard {...data} key={i} />
          ))}
        </DefaultLayout>
      )
    }}
  />
)

export default JobPage

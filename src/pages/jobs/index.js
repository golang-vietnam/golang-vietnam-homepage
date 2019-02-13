import React from 'react'
import { Link } from 'gatsby'
import { graphql, StaticQuery } from 'gatsby'

import DefaultLayout from '@/components/DefaultLayout'
import SEO from '@/components/seo'
import Heading from '@/components/Heading'
import data from '@/data/jobs'
import JobCard from '@/components/JobCard'

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

const JobPage = () => (
  <DefaultLayout title="Jobs">
    <SEO title="Jobs" />

    <StaticQuery
      query={query}
      render={({ data }) => {
        if (!data) {
          return null
        }
        const { list } = data.edges[0].node.frontmatter

        return list.map((data, i) => <JobCard {...data} key={i} />)
      }}
    />
  </DefaultLayout>
)

export default JobPage

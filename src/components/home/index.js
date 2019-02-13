import React from 'react'
import Hero from './Hero'
import Jobs from './Jobs'
import News from './News'
import Events from './Events'
import Sponsors from './Sponsors'
import Subscription from './Subscription'
import { graphql, StaticQuery } from 'gatsby'

const query = graphql`
  {
    jobs: allMarkdownRemark(filter: { frontmatter: { key: { eq: "jobs" } } }) {
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
    events: allMarkdownRemark(
      filter: { frontmatter: { key: { eq: "events" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            list {
              location
              date
              guests
              name
            }
          }
        }
      }
    }
    news: allMarkdownRemark(filter: { frontmatter: { key: { eq: "news" } } }) {
      edges {
        node {
          id
          frontmatter {
            list {
              title
              desc
              date
              author
              link
            }
          }
        }
      }
    }
  }
`

const HomePageBody = () => {
  return (
    <StaticQuery
      query={query}
      render={({ jobs, events, news }) => {
        if (!jobs || !events || !news) {
          return null
        }
        const { list: jobList } = jobs.edges[0].node.frontmatter
        const { list: eventList } = events.edges[0].node.frontmatter
        const { list: newsList } = news.edges[0].node.frontmatter

        return (
          <>
            <Hero />
            <Jobs data={jobList} />
            <News data={newsList} />
            <Events data={eventList} />
            <Sponsors />
            <Subscription />
          </>
        )
      }}
    />
  )
}

export default HomePageBody

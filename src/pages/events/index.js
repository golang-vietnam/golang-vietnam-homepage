import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import DefaultLayout from '@/components/DefaultLayout'
import SEO from '@/components/seo'
import EventCard from '@/components/EventCard'
import { SubHeading } from '@/shared/styled'
import dayjs from 'dayjs'

const query = graphql`
  {
    data: allMarkdownRemark(
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
              link
            }
          }
        }
      }
    }
  }
`

const EventsPage = () => (
  <DefaultLayout title="Events">
    <SEO title="Events" />

    <StaticQuery
      query={query}
      render={({ data }) => {
        if (!data) {
          return null
        }
        const { list } = data.edges[0].node.frontmatter
        const fortcoming = []
        const past = []
        const now = Date.now()

        list.forEach(event => {
          if (dayjs(event.date).isBefore(dayjs(now))) {
            past.unshift(event)
          } else {
            fortcoming.unshift(event)
          }
        })

        return (
          <>
            <SubHeading className="mb-8">Forthcoming Events</SubHeading>

            <div className="mb-16">
              {fortcoming.length === 0 ? (
                <p>No fortcoming events</p>
              ) : (
                fortcoming.map((event, index) => (
                  <EventCard {...event} key={index} />
                ))
              )}
            </div>

            <SubHeading className="mb-10">Past Events</SubHeading>

            {past.length === 0 ? (
              <div className="mb-16">
                <p>No fortcoming events</p>
              </div>
            ) : (
              past.map((event, index) => <EventCard {...event} key={index} />)
            )}
          </>
        )
      }}
    />
  </DefaultLayout>
)

export default EventsPage

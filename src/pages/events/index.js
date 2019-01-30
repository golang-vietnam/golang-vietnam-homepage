import React from 'react'
import { Link } from 'gatsby'

import DefaultLayout from '@/components/DefaultLayout'
import SEO from '@/components/seo'
import Heading from '@/components/Heading'
import data from '@/data/events'
import EventCard from '@/components/EventCard'
import { SubHeading } from '@/shared/styled'

const EventsPage = () => (
  <DefaultLayout title="Events">
    <SEO title="Events" />

    <SubHeading className="mb-8">Forthcoming Events</SubHeading>

    <div className="mb-16">
      <p>No fortcoming events</p>
    </div>

    <SubHeading className="mb-10">Past Events</SubHeading>

    {data.map(news => (
      <EventCard {...news} key={news.id} />
    ))}
  </DefaultLayout>
)

export default EventsPage

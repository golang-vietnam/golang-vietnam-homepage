import React from 'react'
import { Link } from 'gatsby'

import DefaultLayout from '@/components/DefaultLayout'
import SEO from '@/components/seo'
import Heading from '@/components/Heading'
import data from './sampleData'
import EventCard from '@/components/EventCard'

const EventsPage = () => (
  <DefaultLayout title="Events">
    <SEO title="Events" />

    {data.map(news => (
      <EventCard {...news} key={news.id} />
    ))}
  </DefaultLayout>
)

export default EventsPage

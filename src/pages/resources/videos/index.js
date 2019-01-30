import React from 'react'
import { Link } from 'gatsby'

import DefaultLayout from '@/components/DefaultLayout'
import SEO from '@/components/seo'
import Heading from '@/components/Heading'
import EventCard from '@/components/EventCard'
import { SubHeading } from '@/shared/styled'

const VideosPage = () => (
  <DefaultLayout title="Resources">
    <SEO title="Videos" />

    <SubHeading className="mb-8">Videos</SubHeading>
  </DefaultLayout>
)

export default VideosPage

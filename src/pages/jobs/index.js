import React from 'react'
import { Link } from 'gatsby'

import DefaultLayout from '@/components/DefaultLayout'
import SEO from '@/components/seo'
import Heading from '@/components/Heading'
import data from '@/data/jobs'
import JobCard from '@/components/JobCard'

const JobPage = () => (
  <DefaultLayout title="Jobs">
    <SEO title="Jobs" />

    {data.map(news => (
      <JobCard {...news} key={news.id} />
    ))}
  </DefaultLayout>
)

export default JobPage

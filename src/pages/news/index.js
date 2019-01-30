import React from 'react'
import { Link } from 'gatsby'

import DefaultLayout from '@/components/DefaultLayout'
import SEO from '@/components/seo'
import Heading from '@/components/Heading'
import data from '@/data/news'
import Card from './Card'

console.log(data)

const SecondPage = () => (
  <DefaultLayout title="News">
    <SEO title="News" />

    {data.map(news => (
      <Card {...news} key={news.id} />
    ))}
  </DefaultLayout>
)

export default SecondPage

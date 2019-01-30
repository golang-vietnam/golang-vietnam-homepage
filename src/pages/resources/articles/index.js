import React from 'react'
import { Link } from 'gatsby'

import DefaultLayout from '@/components/DefaultLayout'
import SEO from '@/components/seo'
import Heading from '@/components/Heading'
import EventCard from '@/components/EventCard'
import { SubHeading, Card, CardHeading, CardExcerpt } from '@/shared/styled'

const ArticlesPage = () => (
  <DefaultLayout title="Resources">
    <SEO title="Articles" />

    <SubHeading className="mb-8">Articles</SubHeading>

    {Array.from({ length: 10 }, (v, i) => (
      <Card key={i}>
        <CardHeading>Effective Go</CardHeading>
        <CardExcerpt>
          Go is a new language. Although it borrows ideas from existing
          languages, it has unusual properties that make effective Go programs
          different in character from programs written in its relatives.
        </CardExcerpt>
      </Card>
    ))}
  </DefaultLayout>
)

export default ArticlesPage

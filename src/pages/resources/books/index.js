import React from 'react'
import { Link } from 'gatsby'

import DefaultLayout from '@/components/DefaultLayout'
import SEO from '@/components/seo'
import Heading from '@/components/Heading'
import EventCard from '@/components/EventCard'
import { SubHeading, Card, CardHeading, CardExcerpt } from '@/shared/styled'

const BooksPage = () => (
  <DefaultLayout title="Resources">
    <SEO title="Books" />
    <SubHeading className="mb-8">Books</SubHeading>

    {Array.from({ length: 10 }, (v, i) => (
      <Card key={i}>
        <CardHeading>Go in Action</CardHeading>
        <CardExcerpt>
          Unusual properties that make effective Go programs different in
          character from programs written in its relatives.
        </CardExcerpt>
      </Card>
    ))}
  </DefaultLayout>
)

export default BooksPage

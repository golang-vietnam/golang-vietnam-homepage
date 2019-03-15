import React from 'react'
import HomeLayout from '@/components/HomeLayout'
import SEO from '@/components/seo'
import HomePageBody from '@/components/home'

const IndexPage = () => (
  <HomeLayout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HomePageBody />
  </HomeLayout>
)

export default IndexPage

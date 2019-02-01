import React from 'react'
import { Link } from 'gatsby'

import DefaultLayout from '@/components/DefaultLayout'
import SEO from '@/components/seo'
import VideoCard from '@/components/VideoCard'
import { SubHeading } from '@/shared/styled'

const data = Array.from({ length: 6 }, () => ({
  title:
    'Golang UK Conference 2017 | Steve Francia - State of the Gopher Nation',
  date: 'June 13, 2018',
  iframeLink: 'https://www.youtube.com/embed/YVDE4Vmk2nM',
  previewImage: '/img/videos/preview.png',
}))

const VideosPage = () => (
  <DefaultLayout title="Resources">
    <SEO title="Videos" />
    <SubHeading className="mb-8">Videos</SubHeading>

    <div className="flex flex-wrap -mx-gutter">
      {data.map((d, i) => (
        <div className="w-1/3 px-gutter mb-6">
          <VideoCard {...d} key={i} />
        </div>
      ))}
    </div>
  </DefaultLayout>
)

export default VideosPage

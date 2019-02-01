import React from 'react'
import { Link } from 'gatsby'

import DefaultLayout from '@/components/DefaultLayout'
import SEO from '@/components/seo'
import Heading from '@/components/Heading'
import data from '@/data/events'
import EventCard from '@/components/EventCard'
import { SubHeading } from '@/shared/styled'
import Member from './Member'

const Members = () => (
  <DefaultLayout title="Members">
    <SEO title="Members" />

    <div className="flex pt-10">
      <div className="w-1/3">
        <SubHeading>2013 - 2016</SubHeading>
      </div>
      <div className="w-1/3">
        <Member
          name="Han Ngo"
          avatar="/img/members/hanngo.png"
          github="#"
          linkedin="#"
          email="#"
          small
        />
      </div>
      <div className="w-1/3">
        <Member
          name="Vu Nguyen"
          avatar="/img/members/vunguyen.png"
          github="#"
          linkedin="#"
          email="#"
          small
        />
      </div>
    </div>

    <div className="flex pt-20 mt-4">
      <div className="w-1/3">
        <SubHeading>2016 - 2017</SubHeading>
      </div>
      <div className="w-1/3">
        <Member
          name="Thach Le"
          avatar="/img/members/thachle.png"
          github="#"
          linkedin="#"
          email="#"
        />
        <div className="pt-10 pb-8" />
        <Member
          name="Thanh Tran"
          avatar="/img/members/thanhtran.png"
          github="#"
          linkedin="#"
          email="#"
        />
      </div>
      <div className="w-1/3">
        <Member
          name="Triet Pham"
          avatar="/img/members/trietpham.png"
          github="#"
          linkedin="#"
          email="#"
          medium="#"
        />
        <div className="pt-10 pb-8" />
        <Member
          name="Thuc Le"
          avatar="/img/members/thucle.png"
          github="#"
          linkedin="#"
          email="#"
          medium="#"
        />
      </div>
    </div>
  </DefaultLayout>
)

export default Members

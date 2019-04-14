import React from 'react'
import DefaultLayout from '@/components/DefaultLayout'
import MemberSubscription from '@/components/MemberSubscription'
import SEO from '@/components/seo'
import { SubHeading } from '@/shared/styled'
import Member from './Member'

const members = [
  {
    name: 'Han Ngo',
    avatar: '/img/members/hanngo.png',
    github: 'tieubao',
    desc: 'Lorem ipsum dolor sit amet, coonsectetur',
  },
  {
    name: 'Vu Nguyen',
    avatar: '/img/members/vunguyen.png',
    github: 'vu-ng',
    desc: 'Lorem ipsum dolor sit amet, coonsectetur',
  },
  {
    name: 'Thach Le',
    avatar: '/img/members/thachle.png',
    github: 'runi_vn',
    desc: 'Lorem ipsum dolor sit amet, coonsectetur',
  },
  {
    name: 'Triet Pham',
    avatar: '/img/members/trietpham.png',
    github: 'trietphm',
    desc: 'Lorem ipsum dolor sit amet, coonsectetur',
  },
  {
    name: 'Thuc Le',
    avatar: '/img/members/thucle.png',
    github: 'ledongthuc',
    desc: 'Lorem ipsum dolor sit amet, coonsectetur',
  },
  {
    name: 'Linh Tran',
    avatar: '/img/members/linhtran.png',
    github: 'linxgnu',
    desc: 'Lorem ipsum dolor sit amet, coonsectetur',
  },
  {
    name: 'Tam Nguyen',
    avatar: '/img/members/hanngo.png',
    github: 'tamnd',
    desc: 'Lorem ipsum dolor sit amet, coonsectetur',
  },
  {
    name: 'Huy',
    avatar: '/img/members/hanngo.png',
    github: 'huydx',
    desc: 'Lorem ipsum dolor sit amet, coonsectetur',
  },
]

const Members = () => (
  <DefaultLayout
    title="Members"
    RightSideComponent={() => (
      <p className="md:ml-32 md:mt-0 mt-8">
        The gophers help to run the community over the past 5 years. They come
        from a wide diversity of background, company and level, but one thing in
        common:{' '}
        <span
          css={`
            font-weight: 700;
          `}
        >
          the passion for Go
        </span>
      </p>
    )}
  >
    <SEO title="Members" />

    <div className="px-5 sm:-mx-5">
      <div className="pt-10 -mx-5 flex flex-wrap ">
        {members.map(member => (
          <div
            className="md:w-1/4 sm:w-1/2 w-full mb-16 px-5"
            key={member.github}
          >
            <Member {...member} />
          </div>
        ))}
      </div>
    </div>
    <div className="mt-16">
      <MemberSubscription />
    </div>
  </DefaultLayout>
)

export default Members

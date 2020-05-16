import React from 'react';
import DefaultLayout from '@/components/DefaultLayout';
import MemberSubscription from '@/components/MemberSubscription';
import SEO from '@/components/seo';
import Member from '@/components/Member';
import { sm } from '@/shared/responsive';

const members = [
  {
    name: 'Han Ngo',
    avatar: '/img/members/tieubao.png',
    company: 'Dwarves Foundation',
    github: 'tieubao',
    desc:
      'Being the initiator of Golang Vietnam, Han helps to organise all the activities and gather other gophers from day one.'
  },
  {
    name: 'Thach Le',
    avatar: '/img/members/thachle.png',
    company: 'BeGroup',
    github: 'runivn',
    desc:
      'Joining the community from the early day, Thach is the main contributor of Golang Vietnam Community.'
  },
  {
    name: 'Vu Nguyen',
    avatar: '/img/members/vunguyen.png',
    company: 'SunnySoft',
    github: 'ng-vu',
    desc:
      'Vu is one of the early gopher in Vietnam. He found himself a dedicated engineer and community contributor.'
  },
  {
    name: 'Triet Pham',
    avatar: '/img/members/trietphm.jpg',
    company: 'Holistics',
    github: 'trietphm',
    desc:
      'Fall in love with Go since 2015, Triet helps to shape up a community that is inclusive, welcoming and vibrant.'
  },
  {
    name: 'Thuc Le',
    avatar: '/img/members/thucle.png',
    company: 'Limina AB',
    github: 'ledongthuc',
    desc:
      'A gopher with strong passion and responsibility. If you are new to Go, Thuc is the right person to reach.'
  },
  {
    name: 'Tam Nguyen',
    avatar: '/img/members/tamnd.jpg',
    company: 'Aimesoft',
    github: 'tamnd',
    desc:
      'A true gopher guru among the community. His wide range of knowledge provides us the opportunity to discover more exciting topics.'
  },
  {
    name: 'Linh Tran',
    avatar: '/img/members/linhtran.png',
    company: 'LINE',
    github: 'linxgnu',
    desc:
      'Joined Golang Vietnam as speaker from 2017, Linh also helps to make Slack channel the best place for discussion.'
  },
  {
    name: 'Huy Do',
    avatar: '/img/members/huydx.jpg',
    company: 'LINE',
    github: 'huydx',
    desc:
      'Huy is an admin of WeBuild Vietnam. His network and experience in community organizing are helpful. He is also a co-creator of Kipalog.'
  },
  {
    name: 'Nam Nguyen',
    avatar: '/img/members/namnhce.jpg',
    company: 'Dwarves Foundation',
    github: 'namnhce',
    desc:
      'The GopherCon Vietnam 2018 could not be successful without Nam contribution to the preparation & coordination.'
  }
];

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
            display: block;
            font-weight: 700;
            text-align: center;
            margin-top: 10px;
            ${sm`text-align: right; margin-top: 0;`}
          `}
        >
          The passion for Go
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
);

export default Members;

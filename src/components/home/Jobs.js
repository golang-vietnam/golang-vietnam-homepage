import React, { Component } from 'react'
import styled from 'styled-components'
import Heading from '@/components/Heading'
import tw from 'tailwind.macro'
import data from '@/data/jobs'
import { Card, CardExcerpt, Dot, PrimaryButton } from '@/shared/styled'
import { IoIosArrowRoundForward } from 'react-icons/io'

const Container = styled.section`
  ${tw`py-20`};
`

const JobCardContainer = styled.div`
  margin-top: -180px;
  position: relative;
  z-index: 9;
`

const JobCard = styled(Card)`
  width: 295px;
  padding: 32px;
  margin-bottom: 0;
  ${tw`mr-6`}
  h3 {
    ${tw`text-3xl mb-4 capitalize`}
  }
`

const JobCardInfo = styled.div`
  ${tw`text-sm opacity-75`}
`

const Navigator = styled(PrimaryButton)`
  width: 55px;
  height: 55px;
  border: none;
  border-radius: 99999px;
  font-size: 30px;
  ${tw`flex items-center justify-center`};
`

class Jobs extends Component {
  render() {
    return (
      <Container id="jobs">
        <div className="container px-gutter mx-auto">
          <div className="flex">
            <div className="w-1/4">
              <Heading>Jobs</Heading>
            </div>
            <JobCardContainer className="w-3/4 flex">
              {data
                .slice(0, 2)
                .map(
                  ({
                    title,
                    desc,
                    from,
                    id,
                    location,
                    company,
                    toString,
                    type,
                  }) => (
                    <JobCard key={id}>
                      <h3>{title}</h3>
                      <JobCardInfo>
                        <div className="font-bold mb-3 mt-5">{company}</div>
                        <div className="flex items-center mb-2">
                          <span>{location}</span>
                          <Dot />
                          <span>{type}</span>
                        </div>
                        <div className="opacity-75 mb-4">{from} days ago</div>
                      </JobCardInfo>
                      <CardExcerpt>{desc}</CardExcerpt>
                    </JobCard>
                  )
                )}

              <div className="flex items-center justify-end">
                <Navigator>
                  <IoIosArrowRoundForward />
                </Navigator>
              </div>
            </JobCardContainer>
          </div>
        </div>
      </Container>
    )
  }
}

export default Jobs

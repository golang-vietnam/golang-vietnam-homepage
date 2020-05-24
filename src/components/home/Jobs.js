import React from 'react';
import styled from 'styled-components';
import Heading from 'components/Heading';
import tw from 'twin.macro';
import {
  Card,
  CardExcerpt,
  Dot,
  PrimaryButton,
  Hyperlink
} from 'shared/styled';
import { IoIosArrowRoundForward } from 'react-icons/io';
import dayjs from 'dayjs';
import classnames from 'classnames';
import toTimeAgo from 'utils/toTimeAgo';
import { lg } from 'shared/responsive';

const itemPadding = 24;
const itemWidth = 295;

const Container = styled.section`
  padding-bottom: 0px;
  padding-top: 230px;
  margin-top: -325px;
`;
const TitleContainer = styled.div`
  ${tw`lg:w-1/4 w-full mb-16 lg:block flex flex-row justify-between items-center`};
  overflow-x: auto;
  margin-top: 170px;
`;

const JobCardContainer = styled.div`
  position: relative;
  z-index: 9;
`;

const JobCard = styled(Card)`
  border-top: 8px solid;
  ${tw`border-primary mb-0 p-8`}
  h3 {
    ${tw`text-lg capitalize`}
  }
`;

const CardWrapper = styled.div`
  ${tw`mb-8 px-3`}
  ${lg`
    width: 320px;
    flex: 320px 0 0;
  `}
`;

const JobCardInfo = styled.div`
  ${tw`text-sm mb-4`}
`;

const Carousel = styled.div`
  ${props => `
  width: ${
    props.display * props.itemWidth + props.display * props.itemPadding
  }px;
  overflow: hidden;
  padding-bottom:5px;
  padding-top:5px;
`}
`;

const Jobs = ({ data }) => {
  const hotJobs = data.filter(({ hot }) => hot);
  const jobs = data.filter(({ hot }) => !hot);

  return (
    <Container id="jobs">
      <div className="container px-gutter mx-auto">
        <div className="flex flex-wrap">
          <TitleContainer>
            <Heading>Jobs</Heading>
            <a
              href="https://github.com/golang-vietnam/jobs"
              target="_blank"
              rel="noopener noreferrer"
              className="items-center inline-flex lg:mt-5 py-2 text-sm px-3 rounded-sm bg-primary text-white no-underline"
            >
              Post a job
            </a>
          </TitleContainer>
          <div className="lg:w-3/4 w-full lg:mx-0 flex lg:justify-end">
            <JobCardContainer className="-mx-3 flex lg:justify-end sm:flex-no-wrap flex-wrap">
              {hotJobs.map(
                (
                  {
                    title,
                    desc,
                    date,
                    location,
                    company,
                    toString,
                    type,
                    linkURL
                  },
                  index
                ) => (
                  <CardWrapper>
                    <JobCard key={index}>
                      <h3 className="font-bold">
                        <Hyperlink
                          href={linkURL}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {title}
                        </Hyperlink>
                      </h3>
                      <JobCardInfo>
                        <div className="font-medium mb-3 mt-5">{company}</div>
                        <div className="flex items-center mb-2 opacity-75">
                          <span>{location}</span>
                          <Dot />
                          <span>{type}</span>
                          <Dot />
                          <span>{toTimeAgo(date)}</span>
                        </div>
                      </JobCardInfo>
                      <CardExcerpt>{desc}</CardExcerpt>
                    </JobCard>
                  </CardWrapper>
                )
              )}
            </JobCardContainer>
          </div>
        </div>

        <div className="mt-6">
          {jobs.map(
            (
              { company, desc, title, location, type, date, linkURL },
              index
            ) => {
              return (
                <Card key={index}>
                  <div className="flex justify-between">
                    <div className="text-gray-900 w-3/4">
                      <a
                        href={linkURL}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <h6 className="hover:text-primary transition-colors duration-200 font-bold text-lg">
                          {title}
                        </h6>
                      </a>
                      <div className="text-sm mt-2 mb-3">{company}</div>
                      <p className="opacity-75 text-sm">{desc}</p>
                    </div>
                    <div className="text-sm sm:text-right w-1/4 pt-2 whitespace-no-wrap pl-2">
                      <div className="mb-1 pb-px opacity-75 flex items-center sm:justify-end flex-wrap">
                        <span className="mb-2 sm:mb-0">{location}</span>
                        <span className="hidden sm:block">
                          <Dot />
                        </span>
                        <span>{type}</span>
                      </div>
                      <div className="text-gray-500">{toTimeAgo(date)}</div>
                    </div>
                  </div>
                </Card>
              );
            }
          )}
        </div>
        <div className="flex justify-end mt-10">
          <a
            href="https://github.com/golang-vietnam/job_board/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="items-center flex underline whitespace-no-wrap text-primary"
          >
            All Jobs
            <IoIosArrowRoundForward className="ml-1 text-lg" />
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Jobs;

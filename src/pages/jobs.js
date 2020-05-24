import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import DefaultLayout from 'components/DefaultLayout';
import SEO from 'components/seo';
import JobCard from 'components/JobCard';
import tw from 'twin.macro';
import styled from 'styled-components';

const query = graphql`
  {
    data: allMarkdownRemark(filter: { frontmatter: { key: { eq: "jobs" } } }) {
      edges {
        node {
          id
          frontmatter {
            list {
              company
              date
              desc
              isOpened
              linkURL
              location
              title
              type
            }
          }
        }
      }
    }
  }
`;

const InfoBlock = styled.div`
  ${tw`flex items-center`};
  b {
    ${tw`text-primary mr-5`};
  }
`;

const JobPage = () => (
  <StaticQuery
    query={query}
    render={({ data }) => {
      if (!data) {
        return null;
      }
      const { list } = data.edges[0].node.frontmatter;

      const { numOfOpen, numOfClosed } = list.reduce(
        (a, { isOpened }) => {
          if (isOpened) {
            a.numOfOpen = a.numOfOpen + 1;
          } else {
            a.numOfClosed = a.numOfClosed + 1;
          }
          return a;
        },
        {
          numOfOpen: 0,
          numOfClosed: 0
        }
      );

      return (
        <DefaultLayout
          title="Jobs"
          RightSideComponent={() => (
            <InfoBlock>
              <b>{numOfOpen} open</b>
              <span>{numOfClosed} closed</span>
            </InfoBlock>
          )}
        >
          <SEO title="Jobs" />
          {list.map((data, i) => (
            <JobCard {...data} key={i} />
          ))}
        </DefaultLayout>
      );
    }}
  />
);

export default JobPage;

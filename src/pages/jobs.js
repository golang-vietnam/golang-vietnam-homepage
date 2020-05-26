import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import DefaultLayout from 'components/DefaultLayout';
import SEO from 'components/seo';
import JobCard from 'components/JobCard';

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

const JobPage = () => (
  <StaticQuery
    query={query}
    render={({ data }) => {
      if (!data) {
        return null;
      }
      const { list } = data.edges[0].node.frontmatter;

      return (
        <DefaultLayout title="Jobs">
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

import React from 'react';
import Hero from './Hero';
import Jobs from './Jobs';
import News from './News';
import Events from './Events';
import Supporters from './Supporters';
// import Subscription from './Subscription'
import { graphql, StaticQuery } from 'gatsby';

const query = graphql`
  {
    jobs: allMarkdownRemark(filter: { frontmatter: { key: { eq: "jobs" } } }) {
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
              hot
            }
          }
        }
      }
    }
    events: allMarkdownRemark(
      filter: { frontmatter: { key: { eq: "events" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            list {
              location
              date
              guests
              name
              link
            }
          }
        }
      }
    }
    news: allMarkdownRemark(filter: { frontmatter: { key: { eq: "news" } } }) {
      edges {
        node {
          id
          frontmatter {
            list {
              title
              desc
              postedOn
              author
              link
            }
          }
        }
      }
    }
  }
`;

const HomePageBody = () => {
  return (
    <StaticQuery
      query={query}
      render={({ jobs, events, news }) => {
        if (!jobs || !events || !news) {
          return null;
        }
        const { list: jobList } = jobs.edges[0].node.frontmatter;
        const { list: eventList } = events.edges[0].node.frontmatter;
        const { list: newsList } = news.edges[0].node.frontmatter;

        return (
          <>
            <Hero />
            <Jobs data={jobList} />
            <News data={newsList} />
            <Events data={eventList} />
            <Supporters />
            <div className="pt-20" />
            {/* <Subscription /> */}
          </>
        );
      }}
    />
  );
};

export default HomePageBody;

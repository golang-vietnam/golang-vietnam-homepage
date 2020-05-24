import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import 'css/style.css';

const Root = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => <>{children}</>}
  />
);

Root.propTypes = {
  children: PropTypes.node.isRequired
};

export default Root;

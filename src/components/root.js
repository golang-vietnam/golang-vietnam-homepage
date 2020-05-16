import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import theme from '@/shared/theme';
import '@/css/style.css';

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
    render={data => (
      <ThemeProvider theme={theme}>
        <>{children}</>
      </ThemeProvider>
    )}
  />
);

Root.propTypes = {
  children: PropTypes.node.isRequired
};

export default Root;

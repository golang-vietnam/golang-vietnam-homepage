import React from 'react';
import { Link } from 'gatsby';
import DefaultLayout from 'components/DefaultLayout';
import NotFoundIllustration from 'components/svg/NotFoundIllustration';

import SEO from '../components/seo';

const NotFoundPage = () => (
  <DefaultLayout>
    <SEO title="404: Not found" />
    <div
      className="w-full text-center flex flex-col justify-center items-center"
      css={`
        min-height: calc(100vh - 480px);
      `}
    >
      <div
        css={`
          width: 100%;
          max-width: 456px;
        `}
      >
        <NotFoundIllustration />
      </div>
      <h1
        className="mt-8"
        css={`
          font-size: 40px;
        `}
      >
        404 Page Not Found
      </h1>
      <p
        css={`
          margin-top: 10px;
          a {
            font-weight: 600;
            text-decoration: underline;
            color: ${props => props.theme.main.primary};
          }
        `}
      >
        Better go back to safe lands, like the <Link to="/">Start Page</Link>
      </p>
    </div>
  </DefaultLayout>
);

export default NotFoundPage;

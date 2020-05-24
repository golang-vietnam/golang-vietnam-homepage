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
      style={{ minHeight: 'calc(100vh - 480px)' }}
    >
      <div className="w-full" style={{ maxWidth: '456px' }}>
        <NotFoundIllustration />
      </div>
      <h1 className="mt-8" style={{ fontSize: '40px' }}>
        404 Page Not Found
      </h1>
      <p className="font-semibold underline text-primary mt-3">
        Better go back to safe lands, like the <Link to="/">Start Page</Link>
      </p>
    </div>
  </DefaultLayout>
);

export default NotFoundPage;

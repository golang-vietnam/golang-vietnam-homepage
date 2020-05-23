import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardExcerpt, Hyperlink } from 'shared/styled';
import tw from 'twin.macro';
import { withPrefix } from 'gatsby';

const BookCard = ({ image, link, title, author }) => (
  <Card
    css={`
      padding: 16px;
    `}
  >
    <div className="flex items-center">
      <div
        css={`
          ${tw`bg-center bg-cover flex-none`};
          width: 64px;
          height: 80px;
          margin-right: 16px;
          border: 1px solid ${props => props.theme.grey};
          background-image: url(${withPrefix(image)});
        `}
      />
      <div
        css={`
          margin-top: -5px;
        `}
      >
        <Hyperlink
          css={`
            font-weight: bold;
            margin-bottom: 5px;
            display: inline-block;
            word-break: break-all;
          `}
          href={link}
        >
          {title}
        </Hyperlink>
        <CardExcerpt>by {author}</CardExcerpt>
      </div>
    </div>
  </Card>
);

BookCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
};

export default BookCard;

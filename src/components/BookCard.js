import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardExcerpt, Hyperlink } from 'shared/styled';
import tw from 'twin.macro';
import { withPrefix } from 'gatsby';

const BookCard = ({ image, link, title, author }) => (
  <Card className="p-4">
    <div className="flex items-center">
      <div
        css={`
          ${tw`bg-center bg-cover flex-none border border-gray-200`};
          width: 64px;
          height: 80px;
          margin-right: 16px;
          background-image: url(${withPrefix(image)});
        `}
      />
      <div className="-mt-1">
        <Hyperlink
          className="font-bold mb-1 inline-block break-words"
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

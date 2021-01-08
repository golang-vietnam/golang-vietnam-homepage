import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardExcerpt, CardHeading, Hyperlink } from 'shared/styled';
import decode from 'unescape';

const NewsCard = ({ title, desc, author, postedOn, link }) => {
  return (
    <Card>
      <div className="flex justify-between">
        <div className="w-3/4">
          <CardHeading>
            <Hyperlink
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              dangerouslySetInnerHTML={{ __html: decode(title) }}
            />
          </CardHeading>
          <CardExcerpt dangerouslySetInnerHTML={{ __html: decode(desc) }} />
        </div>
        <div className="w-1/4 text-sm text-right whitespace-nowrap pt-2 pl-2">
          <div className="break-words whitespace-normal my-1">
            {decode(author)}
          </div>
        </div>
      </div>
    </Card>
  );
};

NewsCard.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  postedOn: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default NewsCard;

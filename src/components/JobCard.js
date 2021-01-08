import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardExcerpt, CardHeading, Dot, Hyperlink } from 'shared/styled';
import toTimeAgo from 'utils/toTimeAgo';
import truncate from 'utils/truncate';

const JobCard = ({
  title,
  desc,
  date,
  from,
  location,
  company,
  type,
  linkURL
}) => {
  return (
    <Card>
      <div className="flex justify-between items-start">
        <div className="w-2/3">
          <CardHeading>
            <Hyperlink href={linkURL} target="_blank" rel="noopener noreferrer">
              {title}
            </Hyperlink>
          </CardHeading>
          <div className="flex items-center text-sm opacity-75 mb-1">
            <b className="capitalize">{company}</b> <Dot />
            <span>{location}</span> <Dot /> <span>{type}</span>
          </div>
          <CardExcerpt>{truncate(desc)}</CardExcerpt>
        </div>
        <div className="w-1/3 mt-2 text-sm text-right whitespace-nowrap">
          <div className="opacity-75 mb-4">{toTimeAgo(date)}</div>
        </div>
      </div>
    </Card>
  );
};

JobCard.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  date: PropTypes.string,
  from: PropTypes.number,
  location: PropTypes.string,
  company: PropTypes.string,
  type: PropTypes.string,
  linkURL: PropTypes.string
};

export default JobCard;

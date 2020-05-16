import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardExcerpt,
  CardHeading,
  Badge,
  Dot,
  Hyperlink
} from '@/shared/styled';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';

TimeAgo.addLocale(en);
const timeAgo = new TimeAgo();

const JobCard = ({
  title,
  desc,
  date,
  from,
  location,
  company,
  type,
  isOpened,
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
          <CardExcerpt>{desc}</CardExcerpt>
        </div>
        <div className="w-1/3 mt-2 text-sm text-right whitespace-no-wrap">
          <div className="opacity-75 mb-4">
            {timeAgo.format(new Date(date).getTime())}
          </div>
          <Badge isActive={isOpened}>{isOpened ? 'Open' : 'Closed'}</Badge>
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
  linkURL: PropTypes.string,
  isOpened: PropTypes.bool
};

export default JobCard;

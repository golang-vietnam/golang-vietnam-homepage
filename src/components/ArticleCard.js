import React from 'react';
import PropTypes from 'prop-types';
import { Card, SubHeading } from 'shared/styled';
import classnames from 'classnames';

const ArticleCard = ({ level, resources }) => (
  <div className="mb-10">
    <SubHeading className="mb-6">{level}</SubHeading>
    <Card>
      <ul className="list-disc m-0" style={{ padding: '10px 15px' }}>
        {resources.map(({ title, link }, index) => (
          <li
            key={index}
            className={classnames('text-sm font-medium leading-normal', {
              'mb-2': index !== resources.length - 1
            })}
          >
            {title}
            <span className="mr-2">:</span>
            <a
              href={link}
              target="_blank"
              className="text-primary hover:underline no-underline break-words"
              rel="noopener noreferrer"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </Card>
  </div>
);

ArticleCard.propTypes = {
  level: PropTypes.string.isRequired,
  resources: PropTypes.array
};

export default ArticleCard;

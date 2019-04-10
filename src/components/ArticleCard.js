import React from 'react'
import PropTypes from 'prop-types'
import { Card, SubHeading } from '@/shared/styled'
import tw from 'tailwind.macro'

const ArticleCard = ({ level, resources }) => (
  <div className="mb-10">
    <SubHeading className="mb-6">{level}</SubHeading>
    <Card>
      <ul
        css={`
          margin: 0;
          padding: 10px 15px;
        `}
      >
        {resources.map(({ title, link }, index) => (
          <li
            key={index}
            css={`
              + * {
                margin-top: 10px;
              }
              ${tw`text-sm font-medium`}
            `}
          >
            {title}
            <span css={{ margin: '0 7px 0 0' }}>:</span>
            <a
              href={link}
              target="_blank"
              css={`
                text-decoration: none;
                word-break: break-all;
                &:hover {
                  text-decoration: underline;
                }
                color: ${props => props.theme.primary};
              `}
              rel="noopener noreferrer"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </Card>
  </div>
)

ArticleCard.propTypes = {
  level: PropTypes.string.isRequired,
  resources: PropTypes.array,
}

export default ArticleCard

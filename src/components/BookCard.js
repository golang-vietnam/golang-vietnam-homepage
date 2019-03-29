import React from 'react'
import PropTypes from 'prop-types'
import {
  Card,
  SubHeading,
  CardHeading,
  CardExcerpt,
  Hyperlink,
} from '@/shared/styled'
import tw from 'tailwind.macro'

const BookCard = ({ image, link, title, author }) => (
  <Card
    css={`
      padding: 16px;
    `}
  >
    <div className="flex">
      <div
        css={`
          ${tw`bg-center bg-cover flex-none`};
          width: 64px;
          height: 80px;
          margin-right: 16px;
          background-image: url(${image});
        `}
      />
      <div
        css={`
          margin-top: 16px;
        `}
      >
        <Hyperlink
          css={`
            font-weight: bold;
            margin-bottom: 5px;
            display: inline-block;
          `}
          href={link}
        >
          {title}
        </Hyperlink>
        <CardExcerpt>by {author}</CardExcerpt>
      </div>
    </div>
  </Card>
)

BookCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
}

export default BookCard

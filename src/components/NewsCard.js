import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardExcerpt, CardHeading } from '@/shared/styled'
import styled from 'styled-components'

const NewsCard = ({ title, excerpt, author, date }) => {
  return (
    <Card>
      <div className="flex justify-between sm:items-center item-start">
        <div className="w-2/3">
          <CardHeading>{title}</CardHeading>
          <CardExcerpt>{excerpt}</CardExcerpt>
        </div>
        <div className="w-1/3 text-sm text-right whitespace-no-wrap sm:mt-0 mt-5">
          <div className="opacity-75">Author</div>
          <div className="uppercase my-2">{author}</div>
          <div className="opacity-50">{date}</div>
        </div>
      </div>
    </Card>
  )
}

NewsCard.propTypes = {
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
}

export default NewsCard

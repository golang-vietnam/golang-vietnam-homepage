import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardExcerpt, CardHeading, Hyperlink } from '@/shared/styled'
import styled from 'styled-components'
import dayjs from 'dayjs'

const NewsCard = ({ title, desc, author, postedOn, link }) => {
  return (
    <Card>
      <div className="flex justify-between sm:items-center item-start">
        <div className="w-2/3">
          <CardHeading>
            <Hyperlink href={link} target="_blank" rel="noopener noreferrer">
              {title}
            </Hyperlink>
          </CardHeading>
          <CardExcerpt>{desc}</CardExcerpt>
        </div>
        <div className="w-1/3 text-sm text-right whitespace-no-wrap sm:mt-0 mt-5">
          <div className="opacity-75">Author</div>
          <div className="uppercase my-2">{author}</div>
          <div className="opacity-50">{dayjs(postedOn).format('MMM DD')}</div>
        </div>
      </div>
    </Card>
  )
}

NewsCard.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  postedOn: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}

export default NewsCard

import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardExcerpt, CardHeading, Badge, Dot } from '@/shared/styled'
import styled from 'styled-components'

const JobCard = ({
  title,
  desc,
  from,
  id,
  location,
  company,
  type,
  isOpened,
}) => {
  return (
    <Card>
      <div className="flex justify-between items-start">
        <div className="w-2/3">
          <CardHeading>{title}</CardHeading>
          <div className="flex items-center text-sm opacity-75 mb-1">
            <b className="capitalize">{company}</b> <Dot />
            <span>{location}</span> <Dot /> <span>{type}</span>
          </div>
          <CardExcerpt>{desc}</CardExcerpt>
        </div>
        <div className="w-1/3 mt-2 text-sm text-right whitespace-no-wrap">
          <div className="opacity-75 mb-4">{from} days ago</div>
          <Badge isActive={isOpened}>{isOpened ? 'Open' : 'Closed'}</Badge>
        </div>
      </div>
    </Card>
  )
}

JobCard.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  from: PropTypes.number,
  id: PropTypes.string,
  location: PropTypes.string,
  company: PropTypes.string,
  type: PropTypes.string,
  isOpened: PropTypes.bool,
}

export default JobCard

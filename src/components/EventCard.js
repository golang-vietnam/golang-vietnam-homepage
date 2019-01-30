import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardExcerpt, CardHeading, Dot } from '@/shared/styled'

const EventsCard = ({ title, date, id, location, company, count }) => {
  return (
    <Card>
      <div className="flex justify-between items-center">
        <div className="w-2/3">
          <CardHeading>{title}</CardHeading>
          <div className="flex items-center text-sm opacity-75">
            <span className="capitalize font-medium">{company}</span> <Dot />
            <span>{location}</span>
          </div>
        </div>
        <div className="w1/3 text-sm text-right whitespace-no-wrap opacity-75">
          <div>{date}</div>
          <div className="mt-2">{count} guests</div>
        </div>
      </div>
    </Card>
  )
}

EventsCard.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
}

export default EventsCard

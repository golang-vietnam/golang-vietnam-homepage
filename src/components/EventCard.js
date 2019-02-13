import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardExcerpt, CardHeading, Dot } from '@/shared/styled'
import dayjs from 'dayjs'

const EventsCard = ({ name, date, location, guests }) => {
  return (
    <Card>
      <div className="flex justify-between items-center">
        <div className="w-2/3">
          <CardHeading>{name}</CardHeading>
          <div className="flex items-center text-sm opacity-75">
            <span className="capitalize font-medium">{location}</span>
          </div>
        </div>
        <div className="w1/3 text-sm text-right whitespace-no-wrap opacity-75">
          <div>{dayjs(date).format('DD/MM/YYYY')}</div>
          <div className="mt-2">{guests} guests</div>
        </div>
      </div>
    </Card>
  )
}

EventsCard.propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  guests: PropTypes.string.isRequired,
}

export default EventsCard

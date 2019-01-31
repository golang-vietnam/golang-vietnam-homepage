import React, { Component } from 'react'
import styled from 'styled-components'
import Heading from '@/components/Heading'
import tw from 'tailwind.macro'
import data from '@/data/events'
import EventsCard from '@/components/EventCard'
import Head from './shared/Head'

const Container = styled.section`
  ${tw`py-20`};
`

class Events extends Component {
  render() {
    return (
      <Container id="events">
        <div className="container px-gutter mx-auto">
          <Head title="Events" link="/events" />

          {data.slice(0, 3).map(d => (
            <EventsCard {...d} key={d.id} />
          ))}
        </div>
      </Container>
    )
  }
}

export default Events

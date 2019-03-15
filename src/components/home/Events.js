import React, { Component } from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import EventsCard from '@/components/EventCard'
import Head from './shared/Head'

const Container = styled.section`
  ${tw`sm:pt-28 pt-20 sm:pb-8 pb-20`};
`

class Events extends Component {
  render() {
    return (
      <Container id="events">
        <div className="container px-gutter mx-auto">
          {/* <Head title="Events" link="/events" /> */}
          <Head title="Events" />

          {this.props.data.slice(0, 5).map((event, index) => (
            <EventsCard {...event} key={index} />
          ))}
        </div>
      </Container>
    )
  }
}

export default Events

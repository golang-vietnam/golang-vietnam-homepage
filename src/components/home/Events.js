import React, { Component } from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import EventsCard from 'components/EventCard';
import Head from './shared/Head';

const Container = styled.section`
  ${tw`sm:pt-28 pt-20 sm:pb-8 pb-20`};
`;

class Events extends Component {
  render() {
    return (
      <Container id="events">
        <div className="container px-gutter mx-auto">
          <Head title="Events" />

          <p className="text-base mb-8 font-semibold">
            <span>
              Want to host a next Golang meetup or Need media sponsor?
            </span>
            <a
              href="https://airtable.com/embed/shrAIh2b0JJoJZbxU"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary text-underline ml-1"
              css={`
                color: ${props => props.theme.primary};
              `}
            >
              Contact us
            </a>
          </p>

          {this.props.data.slice(0, 5).map((event, index) => (
            <EventsCard {...event} key={index} />
          ))}
        </div>
      </Container>
    );
  }
}

export default Events;

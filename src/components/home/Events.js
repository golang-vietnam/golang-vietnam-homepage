import React, { useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import EventsCard from 'components/EventCard';
import Head from './shared/Head';
import ShowAllButton from 'components/ShowAllButton';

const Container = styled.section`
  ${tw`sm:pt-28 pt-20 sm:pb-8 pb-20`};
`;

const Events = ({ data }) => {
  const [showAll, setShowAll] = useState(false);

  return (
    <Container id="events">
      <div className="container px-gutter mx-auto">
        <Head title="Events" />

        <p className="text-base mb-8 font-semibold">
          <span>Want to host a next Golang meetup or Need media sponsor?</span>
          <a
            href="https://airtable.com/embed/shrAIh2b0JJoJZbxU"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary text-underline ml-1 underline text-primary"
          >
            Contact us
          </a>
        </p>

        {data.slice(0, showAll ? 20 : 5).map((event, index) => (
          <EventsCard {...event} key={index} />
        ))}
      </div>

      {data.length > 5 && !showAll && (
        <div className="mt-12 text-center">
          <ShowAllButton onClick={() => setShowAll(true)}>
            Show all
          </ShowAllButton>
        </div>
      )}
    </Container>
  );
};

export default Events;

import React, { useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import NewsCard from 'components/NewsCard';
import Head from './shared/Head';
import ShowAllButton from 'components/ShowAllButton';

const Container = styled.section`
  ${tw`sm:pt-28 pt-24 pb-0`};
`;
const News = ({ data }) => {
  const [showAll, setState] = useState(false);

  return (
    <Container id="news">
      <div className="container px-gutter mx-auto">
        <Head title="News" />

        {data.slice(0, showAll ? 20 : 5).map((news, i) => (
          <NewsCard {...news} key={i} />
        ))}

        {data.length > 5 && !showAll && (
          <div className="mt-12 text-center">
            <ShowAllButton onClick={() => setState(true)}>
              Show all
            </ShowAllButton>
          </div>
        )}
      </div>
    </Container>
  );
};

export default News;

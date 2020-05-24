import React, { useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import NewsCard from 'components/NewsCard';
import Head from './shared/Head';

const Container = styled.section`
  ${tw`sm:pt-28 pt-24 pb-0`};
`;
const News = props => {
  const [showAll, setState] = useState(false);

  return (
    <Container id="news">
      <div className="container px-gutter mx-auto">
        <Head title="News" />

        {props.data.slice(0, showAll ? 20 : 5).map((news, i) => (
          <NewsCard {...news} key={i} />
        ))}

        {props.data.length > 5 && !showAll && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setState(true)}
              className="text-primary hover:border-primary font-medium transition transition-all duration-200"
              css={`
                font-size: 20px;
                padding: 7px 3px;
                border-bottom: 2px solid #ddd;
                }
              `}
            >
              Show all
            </button>
          </div>
        )}
      </div>
    </Container>
  );
};

export default News;

import React from 'react';
import Heading from '@/components/Heading';
import { IoIosArrowRoundForward } from 'react-icons/io';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';
import tw from 'tailwind.macro';

const Container = styled.div`
  ${tw`flex justify-between items-end mb-16`};

  a {
    text-decoration: none;
    color: ${props => props.theme.main.primary};
  }
`;

const Head = ({ title, link }) => {
  return (
    <Container className="flex justify-between">
      <Heading>{title}</Heading>

      {link && (
        <Link to={link} className="flex items-center">
          <span>View more</span>
          <IoIosArrowRoundForward className="text-2xl" />
        </Link>
      )}
    </Container>
  );
};

Head.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string
};

export default Head;

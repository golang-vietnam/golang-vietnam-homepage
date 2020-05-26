import React from 'react';
import Heading from 'components/Heading';
import { IoIosArrowRoundForward } from 'react-icons/io';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';
import tw from 'twin.macro';
import classnames from 'classnames';

const Container = styled.div`
  ${tw`flex justify-between items-end mb-16`};
`;

const Head = ({ className, title, link, extraRight }) => {
  return (
    <Container className={classnames('flex justify-between', className)}>
      <Heading>{title}</Heading>

      {link && (
        <Link to={link} className="flex items-center no-underline text-primary">
          <span>View more</span>
          <IoIosArrowRoundForward className="text-2xl" />
        </Link>
      )}
      {extraRight}
    </Container>
  );
};

Head.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string
};

export default Head;

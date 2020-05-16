import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withPrefix } from 'gatsby';
import tw from 'tailwind.macro';

const Container = styled.div`
  ${tw`flex flex-col items-center justify-center text-center w-full`}
`;
// TODO: investigate ${props => props.theme.main.foreground} will cause build error
const GithubLink = styled.a`
  ${tw`text-sm`};
  text-decoration: none;
  color: ${props => props.theme.black};
  &:hover {
    color: ${props => props.theme.primary};
  }
`;

const Avatar = styled.div`
  ${tw`rounded-full overflow-hidden flex-none mb-5`};
  width: 98px;
  height: 98px;
`;

const Member = ({ name, company, desc, avatar, github }) => {
  return (
    <Container>
      <Avatar>
        <img src={withPrefix(avatar)} alt={name} />
      </Avatar>
      <div>
        <h4 className="text-lg mb-1">{name}</h4>
        <p className="opacity-75 text-xs mt-1 px-4">{company}</p>
        <GithubLink href={`https://github.com/${github}`}>@{github}</GithubLink>
        <p className="opacity-75 text-xs mt-1 px-4">{desc}</p>
      </div>
    </Container>
  );
};

Member.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  company: PropTypes.string,
  desc: PropTypes.string,
  github: PropTypes.string
};

export default Member;

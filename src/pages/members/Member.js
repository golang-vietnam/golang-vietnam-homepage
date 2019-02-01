import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FaGithub, FaLinkedin, FaMedium, FaEnvelope } from 'react-icons/fa'
import { withPrefix } from 'gatsby'
import tw from 'tailwind.macro'

const Container = styled.div`
  ${tw`flex items-center`}
`

const Icon = styled.a`
  ${tw`text-lg`};
  opacity: 0.4;
  color: ${props => props.theme.main.foreground};
  margin-right: 9px;
  display: inline-flex;
  &:hover {
    opacity: 1;
    color: ${props => props.theme.main.primary};
  }
`

const Avatar = styled.div`
  ${tw`rounded-full overflow-hidden`};
  ${props => `
        width: ${props.small ? '48' : '70'}px;
        height: ${props.small ? '48' : '70'}px;    
    `}
`

const Member = ({
  small = false,
  name,
  avatar,
  github,
  linkedin,
  medium,
  email,
}) => {
  const avatarSize = small ? '48px' : '70px'
  const size = { width: avatarSize, height: avatarSize }

  return (
    <Container>
      <Avatar small={small}>
        <img src={withPrefix(avatar)} {...size} alt={name} />
      </Avatar>
      <div className="ml-4">
        <h4 className="text-lg">{name}</h4>
        <div className="flex items-center mt-2">
          {github && (
            <Icon href={github} rel="noopener" target="_blank">
              <FaGithub />
            </Icon>
          )}
          {linkedin && (
            <Icon href={linkedin} rel="noopener" target="_blank">
              <FaLinkedin />
            </Icon>
          )}
          {medium && (
            <Icon href={medium} rel="noopener" target="_blank">
              <FaMedium />
            </Icon>
          )}
          {email && (
            <Icon href={email} rel="noopener" target="_blank">
              <FaEnvelope />
            </Icon>
          )}
        </div>
      </div>
    </Container>
  )
}

Member.propTypes = {
  small: PropTypes.bool,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  github: PropTypes.string,
  linkedin: PropTypes.string,
  medium: PropTypes.string,
  email: PropTypes.string,
}

export default Member

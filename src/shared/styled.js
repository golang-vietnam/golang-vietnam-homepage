import styled from 'styled-components'
import tw from 'tailwind.macro'

export const Wrapper = styled.div`
  max-width: 936px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-wrap: wrap;
`

export const Card = styled.div`
  ${props => `
  background-color: ${props.theme.card.background};
  color: ${props.theme.card.foreground};
  box-shadow: ${props.theme.card.boxShadow};`}
  padding: 20px 32px;
  margin-bottom: 24px;
`

export const CardHeading = styled.h4`
  ${tw`text-lg`};
  margin-bottom: 3px;
  line-height: 1.78em;
  text-transform: capitalize;
`

export const CardExcerpt = styled.p`
  ${tw`opacity-80 text-sm`};
  line-height: 1.71em;
`

export const Badge = styled.span`
  font-weight: bold;
  text-transform: uppercase;
  padding: 6px 8px;
  border-radius: 2px;
  display: inline-block;
  line-height: 1em;
  ${tw`text-xs`}
  ${props => `  
  background-color: ${
    props.isActive
      ? props.theme.badge.activeBackground
      : props.theme.badge.inactiveBackground
  };
  color: ${
    props.isActive
      ? props.theme.badge.activeForeground
      : props.theme.badge.inactiveForeground
  };
  `}
`

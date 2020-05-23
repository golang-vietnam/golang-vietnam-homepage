import styled from 'styled-components';
import tw from 'twin.macro';
import { createGlobalStyle } from 'styled-components';

export const Wrapper = styled.div`
  max-width: 936px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-wrap: wrap;
`;

export const GlobalStyle = createGlobalStyle`
  html, body {
    color: ${props => props.theme.main.foreground};
    background-color: ${props => props.theme.main.body};
  }
  .link-active{
    color: ${props => props.theme.main.primary}!important;
  }
`;

export const Card = styled.div`
  ${props => `
  background-color: ${props.theme.card.background};
  color: ${props.theme.card.foreground};
  box-shadow: ${props.theme.card.boxShadow};`}
  padding: 20px 32px;
  margin-bottom: 24px;
`;

export const CardHeading = styled.h4`
  ${tw`text-lg font-bold capitalize`};
  margin-bottom: 6px;
  line-height: 1.6em;
`;

export const Hyperlink = styled.a`
  text-decoration: none;
  color: ${props => props.theme.card.foreground};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${props => props.theme.card.link};
  }
`;

export const CardExcerpt = styled.p`
  ${tw`opacity-80 text-sm`};
  line-height: 1.71em;
`;

export const Badge = styled.span`
  ${tw`font-bold uppercase inline-block text-xs`};
  font-weight: bold;
  text-transform: uppercase;
  padding: 6px 8px;
  border-radius: 2px;
  line-height: 1em;
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
`;

export const PrimaryButton = styled.button`
  ${props => `
    background-color: ${props.theme.button.primary.background};
    color: ${props.theme.button.primary.foreground};
  `}
`;

export const Dot = styled.span`
  ${tw`block rounded-full`}
  width: 2px;
  height: 2px;
  margin: 0 10px;
  background-color: ${props => props.theme.card.foreground};
`;

export const SubHeading = styled.h3`
  ${tw`text-3xl`};
  font-weight: 500;
  line-height: 1.53em;
`;

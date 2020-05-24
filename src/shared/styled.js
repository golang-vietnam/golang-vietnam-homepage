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
    ${tw`text-gray-900 bg-gray-100`}
  }
  .link-active{
    color: #3BA2BC!important;
  }
`;

export const Card = styled.div`
  ${tw`bg-white text-gray-900 shadow mb-6 py-5 px-8`};
`;

export const CardHeading = styled.h4`
  ${tw`text-lg font-bold capitalize`};
  margin-bottom: 6px;
  line-height: 1.6em;
`;

export const Hyperlink = styled.a`
  ${tw`no-underline text-gray-900 hover:text-primary transition transition-colors duration-200`};
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
  ${props =>
    props.isActive ? tw`bg-primary text-white` : tw`bg-gray-500 text-white`};
`;

export const PrimaryButton = styled.button`
  ${tw`bg-primary text-white`}
`;

export const Dot = styled.span`
  ${tw`block rounded-full bg-gray-900`}
  width: 2px;
  height: 2px;
  margin: 0 10px;
`;

export const SubHeading = styled.h3`
  ${tw`text-3xl`};
  font-weight: 500;
  line-height: 1.53em;
`;

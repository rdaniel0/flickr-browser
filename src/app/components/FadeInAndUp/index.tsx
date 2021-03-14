/**
 *
 * FadeInAndUp
 *
 */
import * as React from 'react';
import styled, { keyframes } from 'styled-components/macro';

interface Props {}

export const FadeInAndUp: React.FunctionComponent<Props> = props => (
  <Div>{props.children}</Div>
);

const fadeIn = keyframes`
  from {
    transform: translateY(50px);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const Div = styled.div`
  visibility: 'visible';
  animation: ${fadeIn} 0.35s ease-in-out;
  transition: visibility 0.35s ease-in-out;
`;

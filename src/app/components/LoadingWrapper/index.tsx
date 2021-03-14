/**
 *
 * LoadingWrapper
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { GridLoader } from 'react-spinners';

interface Props {
  isLoading: boolean;
  error?: Error | null;
  children?: any;
}

export function LoadingWrapper(props: Props) {
  if (props.isLoading) {
    return (
      <Div>
        <GridLoader color="white" size={15} />
      </Div>
    );
  }

  if (props.error) {
    return (
      <Div>
        <p>Error: {props.error}</p>
      </Div>
    );
  }

  return props.children;
}

const Div = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

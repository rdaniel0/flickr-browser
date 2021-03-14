/**
 *
 * LoadingWrapper
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

interface Props {
  isLoading: boolean;
  error?: Error | null;
  children?: any;
}

export function LoadingWrapper(props: Props) {
  if (props.isLoading) {
    return (
      <Div>
        <Loader type="Grid" color="white" height={50} width={50} />
      </Div>
    );
  }

  if (props.error) {
    return (
      <Div>
        <Label>Oops! Something went wrong</Label>
      </Div>
    );
  }

  return props.children;
}

const Label = styled.label`
  color: white;
`;

const Div = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

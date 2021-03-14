/**
 *
 * SearchBar
 *
 */
import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components/macro';

import { useDebouncedEffect } from 'hooks';

interface Props {
  onChange: (text: string) => void;
  delay?: number;
  initialValue?: string;
}

/**
 * A search bar that debounces user input before calling the onChange event.
 */
export function SearchBar(props: Props) {
  const [searchText, setSearchText] = useState(props.initialValue || '');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchText = e.currentTarget.value;
    setSearchText(searchText);
  };

  // We're going to debounce user input before passing the change back up
  useDebouncedEffect(
    () => {
      props.onChange(searchText);
    },
    props.delay || 250,
    [searchText],
  );

  return (
    <Wrapper>
      <P>Search for photos on Flickr!</P>
      <Input type="text" onChange={onChange} value={searchText} />
    </Wrapper>
  );
}

const Wrapper = styled.header`
  box-shadow: 0 1px 0 0 rgba(241, 233, 231, 0.05);
  display: flex;
  width: 100%;
  height: 4rem;
  top: 0;
  position: fixed;
  z-index: 2;
  background: rgba(0, 0, 0, 0.85);
`;

const P = styled.p`
  color: white;
  align-self: center;
  padding: 0 1rem;
`;

const Input = styled.input`
  display: flex;
  flex-grow: 1;
  margin: 0.5rem 1rem 0.5rem 0;
  border-radius: 5px;
`;

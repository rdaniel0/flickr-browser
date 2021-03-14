import * as React from 'react';
import styled from 'styled-components/macro';

import { FlickrItem } from './FlickrItem';
import { Photo } from 'services/FlickrApi/Models';

interface Props {
  items?: Photo[];
}

/**
 *
 * FlickerPhotoList
 * @property items[] - An array of photos from ApiResponse
 */
export function FlickerPhotoList(props: Props) {
  return (
    <List>
      {props.items?.map(item => (
        <FlickrItem key={item.link} item={item} />
      ))}
    </List>
  );
}

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
`;

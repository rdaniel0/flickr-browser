import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { useSearchSlice } from './slice';
import {
  selectError,
  selectLoading,
  selectResults,
  selectSearchText,
} from './slice/selectors';
import { LoadingWrapper } from 'app/components/LoadingWrapper';
import { SearchBar } from 'app/components/SearchBar';
import { FlickerPhotoList } from './FlickerPhotoList';

export function HomePage() {
  const dispatch = useDispatch();

  const { actions } = useSearchSlice();
  const searchText = useSelector(selectSearchText);
  const results = useSelector(selectResults);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const onChangeSearch = (text: string) =>
    dispatch(actions.setSearchText(text));

  return (
    <>
      <Helmet>
        <title>Flickr Photo Browser</title>
        <meta name="description" content="A Flickr public photo browser" />
      </Helmet>
      <SearchBar initialValue={searchText} onChange={onChangeSearch} />
      <Wrapper>
        <LoadingWrapper isLoading={isLoading} error={error}>
          <FlickerPhotoList items={results?.items} />
        </LoadingWrapper>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  height: 100%;
  padding-top: 4rem;
`;

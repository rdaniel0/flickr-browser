import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';

import { useSearchSlice } from './slice';
import {
  selectError,
  selectLoading,
  selectResults,
  selectSearchText,
} from './slice/selectors';
export function HomePage() {
  const dispatch = useDispatch();

  const { actions } = useSearchSlice();
  const searchText = useSelector(selectSearchText);
  const results = useSelector(selectResults);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <span>HomePage container</span>
    </>
  );
}

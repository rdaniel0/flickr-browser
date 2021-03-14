import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.search || initialState;

export const selectSearchText = createSelector(
  [selectSlice],
  searchState => searchState.searchText,
);

export const selectLoading = createSelector(
  [selectSlice],
  searchState => searchState.loading,
);

export const selectError = createSelector(
  [selectSlice],
  searchState => searchState.error,
);

export const selectResults = createSelector(
  [selectSlice],
  searchState => searchState.results,
);

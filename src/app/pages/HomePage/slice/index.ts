import { PayloadAction } from '@reduxjs/toolkit';
import { ApiResponse } from 'services/FlickrApi/Models';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { searchSaga } from './saga';
import { SearchState } from './types';

export const initialState: SearchState = {
  searchText: 'Cockatiel',
  loading: false,
  error: null,
};

const slice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchText(state, action: PayloadAction<any>) {
      state.searchText = action.payload;
    },
    setResults(state, action: PayloadAction<ApiResponse>) {
      state.results = action.payload;
      state.loading = false;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
      if (action.payload === true) {
        state.error = null;
      }
    },
    setError(state, action: PayloadAction<Error>) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { actions: searchActions } = slice;

export const useSearchSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: searchSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useSearchSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */

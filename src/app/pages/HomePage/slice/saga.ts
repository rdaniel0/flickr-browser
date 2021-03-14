import { call, put, takeLatest } from 'redux-saga/effects';
import { searchActions as actions } from '.';

import FlickrApi from 'services/FlickrApi/FlickrApi';

function* receiveSearchResults(action) {
  try {
    yield put(actions.setLoading(true));
    const data = yield call(FlickrApi.getPhotoFeed, action.payload);
    yield put(actions.setResults(data));
  } catch (e) {
    yield put(actions.setError(e));
  }
}

export function* searchSaga() {
  yield takeLatest(actions.setSearchText.type, receiveSearchResults);
}

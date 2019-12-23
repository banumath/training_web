import { call, put, select, fork, all, takeEvery } from 'redux-saga/effects';
import { FETCH_DATA } from 'containers/App/constants';
import { reposLoaded, repoLoadingError } from 'containers/App/actions';
import request from 'utils/request';
import { makeSelectUsername } from 'containers/HomePage/selectors';

/**
 * Github repos request/response handler
 */
export function* getRepos() {
  // Select username from store
  const username = yield select(makeSelectUsername());
  const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;

  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(request, requestURL);
    yield put(reposLoaded(repos, username));
  } catch (err) {
    yield put(repoLoadingError(err));
  }
}

function helloSaga() {
  console.log('Hello Sagas!');
}

/**
 * Root saga manages watcher lifecycle
 */
export function* helloSaga2() {
  yield takeEvery(FETCH_DATA, helloSaga);
}

export default function* githubData() {
  yield all([fork(helloSaga2)]);
}

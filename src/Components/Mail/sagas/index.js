import { call, put, takeEvery, fork, all } from 'redux-saga/effects'
import { serviceUrl } from '../../../Services/mailbox';
import {FETCH_MAILS, FETCH_PEOPLE, LOAD_PEOPLE} from "../actions/index";

export function* mailSaga() {
  const data = yield call(fetchContent, '/messages');
  const rows = data || [];
  yield put({type:FETCH_MAILS, data: rows});
  yield takeEvery(FETCH_PEOPLE, fetchme);
}

export function* fetchme(action) {
  const data = yield call(fetchContent, '/people/'+ action.data.name );
  const rows = data || [];
  yield put({type:LOAD_PEOPLE, data: rows});
}

export async function fetchContent(api) {
  const data = await fetch(serviceUrl + api);
  return data.json();
}

export function* rootSaga() {
  return yield [
    mailSaga(),
  ]
}
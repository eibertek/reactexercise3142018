import { call, put, takeEvery, all } from 'redux-saga/effects'
import { serviceUrl } from '../../../Services/mailbox';
import {
  FETCH_MAILS, FETCH_DETAILS, LOAD_DETAILS, FETCH_MAILS_LOADING, FETCH_MAILS_SUCCESS,
  FETCH_DETAILS_FAILED, FETCH_MAILS_FAILED, FETCH_DETAILS_LOADING, FETCH_DETAILS_SUCCESS
} from "../actions/index";

export function* mailSaga() {
  yield put({type:FETCH_MAILS_LOADING});
  try{
    const data = yield call(fetchContent, '/messages?count=1000');
    const rows = data || [];
    yield put({type:FETCH_MAILS_SUCCESS});
    yield put({type:FETCH_MAILS, data: rows});
  } catch (err) {
    yield put({type:FETCH_MAILS_FAILED, err});
  }
  yield takeEvery(FETCH_DETAILS, fetchDetails);
}

export function* fetchDetails(action) {
  yield put({type:FETCH_DETAILS_LOADING});
  try{
    const data = yield call(fetchContent, '/people/'+ action.data.name );
    const rows = data || [];
    yield put({type:FETCH_DETAILS_SUCCESS});
    yield put({type:LOAD_DETAILS, data: { inbox: action.data.rowData, details: rows}});
  } catch (err) {
    yield put({type:FETCH_DETAILS_FAILED, err});
  }
}

export async function fetchContent(api) {
  const data = await fetch(serviceUrl + api);
  return data.json();
}

export function* rootSaga() {
  return yield all([
    mailSaga(),
  ]);
}
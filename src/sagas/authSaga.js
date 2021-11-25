import { put, call } from 'redux-saga/effects';
import { Types } from '../constants/actionTypes.js';

export function* loginSaga(payload) {
  try {
    const response = yield call(console.log, ["Login Saga Payload", payload]);
    yield [
      put({ type: Types.LOGIN_ACTION, response })
    ];
  } catch(error) {
    yield put({ type: Types.LOGIN_ACTION, error });
  }
}

export function* registerSaga(payload) {
  try {
    const response = yield call(console.log, ["Register Saga Payload", payload]);
    yield [
      put({ type: Types.REGISTER_ACTION, response })
    ];
  } catch(error) {
    yield put({ type: Types.REGISTER_ACTION, error });
  }
}
import { takeLatest } from 'redux-saga/effects';
import { loginSaga } from './authSaga.js';
import { Types } from '../constants/actionTypes.js';

export function* watchLogin() {
  yield takeLatest(Types.LOGIN_ACTION, loginSaga);
}

export function* watchRegister() {
  yield takeLatest(Types.LOGIN_ACTION, loginSaga);
}
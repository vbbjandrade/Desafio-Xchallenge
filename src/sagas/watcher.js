import { takeLatest } from 'redux-saga/effects';
import { loginSaga, registerSaga } from './authSaga.js';
import { Types } from '../constants/actionTypes.js';

export function* watchLogin() {
  yield takeLatest(Types.LOGIN_ACTION, loginSaga);
}

export function* watchRegister() {
  yield takeLatest(Types.REGISTER_ACTION, registerSaga);
}
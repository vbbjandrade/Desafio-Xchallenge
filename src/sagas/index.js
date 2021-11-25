import { fork } from 'redux-saga/effects';
import { watchLogin, watchRegister} from './watcher.js';

export default function* startForman() {
  yield fork(watchLogin);
  yield fork(watchRegister);
}
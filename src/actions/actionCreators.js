import { Types } from '../constants/actionTypes.js';

export const ActionCreators = {
  loginAction: (fields) => ({ type: Types.LOGIN_ACTION, payload: { fields } }),
  registerAction: (fields) => ({ type: Types.REGISTER_ACTION, payload: { fields } })
}
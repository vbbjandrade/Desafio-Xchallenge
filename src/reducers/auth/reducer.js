import { Types } from '../../constants/actionTypes.js';

const initialState = {
  fields: {
    email: '',
    password: '',
    repassword: ''
  }
}

function reducer (state = initialState, action){
  switch (action.type) {
    case Types.LOGIN_ACTION:
    console.log('loginAction', action.payload)
      return {
        ...state,
        fields: action.payload.fields
      }
    case Types.REGISTER_ACTION:
      console.log('registerAction', action.payload)
      return {
        ...state,
        fields: action.payload.fields
      }
    default:
      return state;
  }
}

export default reducer;
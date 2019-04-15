import {SUBMIT_USER_INFO} from '../../actions/actionTypes' ;
const intialState = {
      userInfo:[],
  }
const userInfo = (state = intialState, action) => {
  switch (action.type) {
    case SUBMIT_USER_INFO:{
      return { ...state, userInfo: [...state.userInfo, action.user] }
      }
    default:
    return state  
  }
}
export default userInfo;

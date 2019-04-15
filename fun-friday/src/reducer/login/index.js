import {SIGN_OUT, REMOVE_USER, AUTHENTICATED} from '../../actions/actionTypes';

const login = (state = {
    isAuthenticating: false,
}, action) => {
    switch (action.type) {
        case AUTHENTICATED:
            return Object.assign({}, state, {
                isAuthenticating: false,
                token: action.token
            })
        case "INVALIDLOGIN":
            return Object.assign({}, state, {
                isAuthenticating: false,
                token: false,
            })
        case SIGN_OUT:
        case REMOVE_USER:
            localStorage.removeItem('token');
            return Object.assign({}, state, {
                isAuthenticating: false,
                token: false,
            })
        default:
            return state
    }

}

export default login;

import { SIGN_OUT, REMOVE_USER, AUTHENTICATED} from '../actionTypes.js';

export const validUser = (token) => {
    return {
        type: AUTHENTICATED,
        token
    }
}

export const logout = () => {
    return {
        type: SIGN_OUT
    }
}

export const removeUser = () => {
    return {
        type: REMOVE_USER,
    }
}
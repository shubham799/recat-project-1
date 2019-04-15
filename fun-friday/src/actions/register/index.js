import {SUBMIT_USER_INFO} from '../actionTypes.js';

export const submitUserInfo = (user) => {
    return {
        type: SUBMIT_USER_INFO,
        user
    }
}
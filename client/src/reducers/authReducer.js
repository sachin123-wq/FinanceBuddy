import {
    SET_ACCESS_TOKEN,
    SET_LOGIN
} from '../actions/types';

export const initState = {
    isLoggedIn: false,
    accessToken: ''
};

export default function auth(state = initState, action) {
    switch (action.type) {
        case SET_ACCESS_TOKEN:
            return {
                ...state,
                accessToken: action.payload
            }
        case SET_LOGIN:
            const {
                isLoggedIn, accessToken
            } = action.payload
            return {
                ...state, 
                isLoggedIn,
                accessToken
            }
        default:
            return state;
    }
}
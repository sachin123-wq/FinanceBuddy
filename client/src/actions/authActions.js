import Api from '../api/authAPI';
import axiosInstance from '../helpers/axiosInstance';

// TYPES 
import {
    SET_ACCESS_TOKEN,
    SET_LOGIN, CLEAR_SIGNUP_FORM, TOGGLE_EXTRA_NAV_OPTIONS,
    CLEAR_LOGIN_FORM
} from './types';

import {
    setLocalStorageItem,
    getLocalStorageItem, removeLocalStorageItem,
} from '../helpers/localStorage';
import { ContactSupportOutlined } from '@material-ui/icons';

export const setAccessToken = (accTok, dispatch) => {
    dispatch({
        type: SET_ACCESS_TOKEN,
        payload: accTok
    })
}

// CHECK LOGGED IN
export const checkLoginState = (dispatch) => {
    const accessToken = getLocalStorageItem('access')

    if (accessToken) {
        changeLoginState(true, accessToken, dispatch)
    }
}

// SIGNUP 
export const signupSubmit = async (credentials, dispatch) => {
    const { err, success } = await Api.signUp(credentials);

    if (err) {
        return { error: err };
    }
    else if (success) {
        // SIGNUP SUCCESSFULL
        dispatch({
            type: CLEAR_SIGNUP_FORM
        })
        return { success }
    }
    return {};
}


// LOGIN 
export const login = async (credentials, dispatch) => {
    // call api to login in user 
    const { error, data } = await Api.signIn(credentials);

    if (error) {
        return { error }
    }

    // LOGIN SUCCESFULL
    changeLoginState(true, data.token, dispatch);

    return {};
}


// LOGOUT
export const logout = async (dispatch) => {
    const status = await Api.signOut();
    if (status === 200) {
        removeLocalStorageItem('access');
        changeLoginState(false, "", dispatch);
    }
}

const changeLoginState = (isLoggedIn, accessToken, dispatch) => {

    setLocalStorageItem('access', accessToken)
    axiosInstance.defaults.headers['Authorization'] = 'Bearer ' + accessToken;

    // CLEAR BOTH FORMS 
    dispatch({
        type: CLEAR_SIGNUP_FORM
    })

    dispatch({
        type: CLEAR_LOGIN_FORM
    })

    dispatch({
        type: SET_LOGIN,
        payload: {
            isLoggedIn,
            accessToken
        }
    })

    dispatch({
        type: TOGGLE_EXTRA_NAV_OPTIONS,
        payload: isLoggedIn
    })
}
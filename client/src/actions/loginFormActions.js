import {
    SET_LOGIN_EMAIL, SET_LOGIN_ERROR, SET_LOGIN_PASSWORD, 
    SET_LOGIN_VALID
} from './types'

export const setLoginEmail = (email, dispatch) => {
    dispatch({
        type: SET_LOGIN_EMAIL,
        payload: email
    })
}

export const setLoginPassword = (password, dispatch) => {
    dispatch({
        type: SET_LOGIN_PASSWORD, 
        payload: password
    })
}

export const setLoginValid = (isValid, dispatch) => {
    dispatch({
        type: SET_LOGIN_VALID, 
        payload: isValid
    })
}

export const setLoginError = (error, dispatch) => {
    dispatch({
        type: SET_LOGIN_ERROR,
        payload: error
    })
}

// action for clearing form in ./auth
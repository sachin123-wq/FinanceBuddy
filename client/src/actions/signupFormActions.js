// TYPES
import {
    SET_NAME, SET_EMAIL,
    SET_PASSWORD, SET_VALID, 
    SET_ERROR, SET_SUCCESS_MSG
} from './types';


export const setName = (name, dispatch) => {
    dispatch({
        type: SET_NAME, 
        payload: name
    })
}

export const setEmail = (email, dispatch) => {
    dispatch({
        type: SET_EMAIL,
        payload: email
    })
}

export const setPassword = (password, dispatch) => {
    dispatch({
        type: SET_PASSWORD, 
        payload: password
    })
}

export const setValid = (isValid, dispatch) => {
    dispatch({
        type: SET_VALID, 
        payload: isValid
    })
}

export const setError = (error, dispatch) => {
    dispatch({
        type: SET_ERROR, 
        payload: error
    })
}

export const setSuccessMsg = (msg, dispatch) => {
    dispatch({
        type: SET_SUCCESS_MSG, 
        payload: msg
    })
}

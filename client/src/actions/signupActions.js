import {
    TOGGLE_MODAL, SHOW_SIGN_IN, SHOW_SIGN_UP,
    SHOW_FORGOT_PASSWORD, SET_IS_CREATOR
} from '../actions/types'

export const toggleSignUpModal = (value, dispatch) => {
    dispatch({
        type: TOGGLE_MODAL, 
        payload: value
    })
}

export const showSignIn = (dispatch) => {
    dispatch({
        type: SHOW_SIGN_IN
    })
}

export const showSignUp = (dispatch) => {
    dispatch({
        type: SHOW_SIGN_UP
    })
}

export const showForgotPassword = (dispatch) => {
    dispatch({
        type: SHOW_FORGOT_PASSWORD
    })
}

export const setIsCreator = (value, dispatch) => {
    dispatch({
        type: SET_IS_CREATOR,
        payload: value
    })
}
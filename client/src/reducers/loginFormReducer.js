import {
    SET_LOGIN_EMAIL, SET_LOGIN_PASSWORD, 
    SET_LOGIN_VALID, CLEAR_LOGIN_FORM,
    SET_LOGIN_ERROR
}from '../actions/types'

const initState = {
    email: '',
    password: '',
    isValid: true,
    error: ''
}

export default function loginFormReducer (state = initState, action) { 
    switch(action.type) {
        case SET_LOGIN_EMAIL:
            return {
                ...state, 
                email: action.payload
            }
        case SET_LOGIN_PASSWORD:
            return {
                ...state, 
                password: action.payload
            }
        case SET_LOGIN_VALID: 
            return {
                ...state, 
                isValid: action.payload
            }
        case SET_LOGIN_ERROR: 
            return {
                ...state, 
                error: action.payload
            }
        case CLEAR_LOGIN_FORM:
            return {
                ...initState
            }
        default: 
            return state
    }
}
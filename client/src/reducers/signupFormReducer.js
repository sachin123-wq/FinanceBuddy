import {
    SET_NAME, SET_EMAIL,
    SET_PASSWORD, SET_VALID,
    CLEAR_SIGNUP_FORM, SET_ERROR, SET_SUCCESS_MSG
} from '../actions/types';

const initState = {
    name: '',
    email: '',
    password: '',
    isValid: true,
    error: '', 
    successMsg: ''
}

const signupFormReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_NAME:
            return {
                ...state,
                name: action.payload
            }
        case SET_EMAIL:
            return {
                ...state, 
                email: action.payload
            }
        case SET_PASSWORD: 
            return {
                ...state, 
                password: action.payload
            }
        case SET_VALID: 
            return {
                ...state, 
                isValid: action.payload
            }
        case SET_ERROR: 
            return {
                ...state, 
                error: action.payload
            }
        case SET_SUCCESS_MSG: 
            return {
                ...state, 
                successMsg: action.payload
            }
        case CLEAR_SIGNUP_FORM:
            return {
                ...initState
            }
        default:
            return state
    }
}

export default signupFormReducer

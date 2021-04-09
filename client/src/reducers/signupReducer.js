import {
    TOGGLE_MODAL, SHOW_SIGN_IN, SHOW_SIGN_UP,
    SET_IS_CREATOR
  } from '../actions/types'
  
  const initState = {
    showModal: false, 
    showSignIn: false, 
    showSignUp: true,
    isCreator: false,
  }
  
  export default function global(state=initState, action) {
    switch (action.type) {
        case TOGGLE_MODAL:
          return {
            ...state, 
            showModal: action.payload
          }
        case SHOW_SIGN_IN:
          return {
            ...state, 
            showSignIn: true,
            showSignUp: false, 
            showForgotPass: false
          }
        case SHOW_SIGN_UP:
          return {
            ...state, 
            showSignIn: false, 
            showSignUp: true, 
            showForgotPass: false
          } 
        case SET_IS_CREATOR: 
          return {
            ...state, 
            isCreator: action.payload
          }
        default:
          return state;
    }
  }
  
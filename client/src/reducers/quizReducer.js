import {
    GET_QUIZ_DETAILS, GET_PREVIOUS_RESPONSE,
    QUIZ_LOADING, PREVIOUS_RESPONSE_LOADING,
    CLEAR_QUIZ_STATE, UPDATE_RESPONSE
} from '../actions/types'

const initState = {
    quizDetails: {},
    quizLoading: true,
    response: new Map(),
    previousResponse: [],
    previousResponseLoading: true
}

const quizReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_QUIZ_DETAILS:
            return {
                ...state,
                quizDetails: action.payload,
                quizLoading: false
            }
        case UPDATE_RESPONSE:
            return {
                ...state, 
                response: action.payload
            }
        case GET_PREVIOUS_RESPONSE:
            return {
                ...state, 
                previousResponse: action.payload,
                previousResponseLoading: false
            }
        case CLEAR_QUIZ_STATE:
            return {
                ...initState
            }
        default:
            return state
    }
}

export default quizReducer;
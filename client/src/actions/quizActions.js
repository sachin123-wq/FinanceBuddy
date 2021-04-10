import {
    GET_QUIZ_DETAILS, GET_PREVIOUS_RESPONSE,
    QUIZ_LOADING, PREVIOUS_RESPONSE_LOADING,
    CLEAR_QUIZ_STATE, UPDATE_RESPONSE
} from './types';
import quizAPI from '../api/quizAPI';

export const getQuizDetails = async (quizId, dispatch) => {
    const res = await quizAPI.getQuizDetail(quizId);
    console.log(res);
    dispatch({
        type: GET_QUIZ_DETAILS,
        payload: res
    })
}

export const updateResponse = async (questionId, clickedOptionId, response, dispatch) => {
    console.log('update')
    response.set(questionId, clickedOptionId);
    dispatch({
        type: UPDATE_RESPONSE,
        payload: response
    })
}

export const submitQuizResponse = async (quizId, response, dispatch) => {
    const responseArray = []
    response.forEach((value, key) => {
        responseArray.push({
            questionId: key,
            tickedOptionId: value
        })
    });

    const res = await quizAPI.createQuizResponse(quizId, responseArray, dispatch);
    return res;
}

export const clearQuizState = async (dispatch) => {
    dispatch({
        type: CLEAR_QUIZ_STATE
    })
}




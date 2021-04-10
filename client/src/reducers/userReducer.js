import {
    GET_USER_PROFILE
} from '../actions/types'

const initState = {
    userProfile: {},
    profileLoading: true
}

export default function signupReducer(state = initState, action) {
    switch (action.type) {
        case GET_USER_PROFILE:
            return {
                ...state,
                userProfile: action.payload,
                profileLoading: false
            }
        default:
            return state;
    }
}
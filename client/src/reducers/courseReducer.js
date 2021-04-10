import {
    GET_ALL_COURSE_BY_DOMAIN, GET_ALL_COURSE
} from '../actions/types'

const initState = {
    courses: [],
    courseLoading: true
}

const courseReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_ALL_COURSE_BY_DOMAIN:
            return {
                ...state,
                courses: action.payload,
                courseLoading: false
            };

        case GET_ALL_COURSE:
            return {
                ...state,
                courses: action.payload,
                courseLoading: false
            };

        default:
            return state;
    }
}

export default courseReducer
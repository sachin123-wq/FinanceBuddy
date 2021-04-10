import { GET_ALL_POSTS } from "../actions/types";

const initState = {
    posts: [],
    postLoading: true,
}

const postReducer = (state = initState, action) => {
    switch(action.type) {
        case GET_ALL_POSTS:
            return {
                ...state,
                posts: action.payload,
                postLoading: false
            }
        default:
            return state;
    }
}

export default postReducer
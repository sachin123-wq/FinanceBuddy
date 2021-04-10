import { GET_ALL_POSTS, GET_POST_DETAIL } from "../actions/types";

const initState = {
    posts: [],
    postLoading: true,
    postDetail: {},
    postDetailLoading: true
}

const postReducer = (state = initState, action) => {
    switch(action.type) {
        case GET_ALL_POSTS:
            return {
                ...state,
                posts: action.payload,
                postLoading: false
            }
        case GET_POST_DETAIL:
            return {
                ...state,
                postDetail: action.payload,
                postDetailLoading: false
            }
        default:
            return state;
    }
}

export default postReducer
import {
    GET_ALL_POSTS, GET_POST_DETAIL
} from './types';
import postAPI from '../api/postAPI';

export const getAllPosts = async (dispatch) => {
    const res = await postAPI.getAllPosts();
    console.log("🚀 ~ file: postActions.js ~ line 8 ~ getAllPosts ~ res", res)
    
    dispatch({
        type: GET_ALL_POSTS,
        payload: res
    })
}

export const getPostDetail = async(postId, dispatch) => {
    const res = await postAPI.getPostDetail(postId);
    console.log(res.post);

    dispatch({
        type: GET_POST_DETAIL,
        payload: res.post
    })
}
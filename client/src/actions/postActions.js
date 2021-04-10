import {
    GET_ALL_POSTS
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
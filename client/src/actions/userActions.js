import {
    GET_USER_PROFILE
} from './types';
import { getUserId } from '../helpers';
import userAPI from '../api/userAPI';
import postAPI from '../api/postAPI';

export const getUserProfile = async (dispatch) => {
    const userId = getUserId();
    const res = await userAPI.getUser(userId);
    console.log(res);
    const bookmarkedIds = res.bookmarks;
    const bookmarkedPosts = []
    for(let i=0; i<bookmarkedIds.length; i++) {
        const detail = await postAPI.getPostDetail(bookmarkedIds[i]);
        bookmarkedPosts.push(detail);
    }
    res.posts = bookmarkedPosts;
    dispatch({
        type: GET_USER_PROFILE,
        payload: res
    })
}
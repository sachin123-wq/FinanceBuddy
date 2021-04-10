import {
    GET_USER_PROFILE
} from './types';
import { getUserId } from '../helpers';
import userAPI from '../api/userAPI';

export const getUserProfile = async (dispatch) => {
    const userId = getUserId();
    const res = await userAPI.getUser(userId);
    console.log(res);
    dispatch({
        type: GET_USER_PROFILE,
        payload: res
    })
}
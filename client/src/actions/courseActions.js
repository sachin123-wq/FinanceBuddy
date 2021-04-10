import {
    GET_ALL_COURSE_BY_DOMAIN, GET_ALL_COURSE
} from './types';
import courseAPI from '../api/courseAPI';

export const getCourseByDomain = async (domainId, dispatch) => {
    const res = await courseAPI.getCourseForDomain(domainId);
    dispatch({
        type: GET_ALL_COURSE_BY_DOMAIN,
        payload: res
    })
}


export const getAllCourse = async (dispatch) => {
    const res = await courseAPI.getAllCourses();
    console.log(res);
    dispatch({
        type: GET_ALL_COURSE,
        payload: res
    })
}

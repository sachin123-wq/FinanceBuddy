import {
    GET_ALL_DOMAIN
} from './types';
import domainAPI from '../api/domainAPI';

export const getAllDomainName = async (dispatch) => {
    const res = await domainAPI.getAllDomains();
    console.log(res);
    dispatch({
        type: GET_ALL_DOMAIN,
        payload: res
    })
}
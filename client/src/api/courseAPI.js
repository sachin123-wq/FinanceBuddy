import { get, post } from "../helpers/callAPI";

export default class Api {

    static async getCourseForDomain(domainId) {
        const uri = `${__API_BASE_ADDRESS__}/api/course/?domainId=${domainId}`;
        try {
            const res = await get(uri);
            return res.data;
        }
        catch (e) {
            return e.response.data
        }
    }

    static async getCourseDetail(courdeId) {
        const uri = `${__API_BASE_ADDRESS__}/api/course/${courdeId}`;
        try {
            const res = await get(uri);
            return res.data;
        }
        catch (e) {
            return e.response.data
        }
    }
}
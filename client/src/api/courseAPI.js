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

    static async getCourseDetail(courseId) {
        const uri = `${__API_BASE_ADDRESS__}/api/course/${courseId}`;
        try {
            const res = await get(uri);
            return res.data;
        }
        catch (e) {
            return e.response.data
        }
    }

    static async getAllCourses() {
        const uri = `${__API_BASE_ADDRESS__}/api/course/`;
        try {
            const res = await get(uri);
            return res.data;
        }
        catch (e) {
            return e.response.data
        }
    }
}
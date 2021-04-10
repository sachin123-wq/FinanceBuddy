import { get, post } from "../helpers/callAPI";

export default class Api {

    static async getLearningPathForDomain(domainId) {
        const uri = `${__API_BASE_ADDRESS__}/api/domain/${domainId}/learningPath`;
        try {
            const res = await get(uri);
            return res.data;
        }
        catch (e) {
            return e.response.data
        }
    }

    static async getLearningPathDetail(pathId) {
        const uri = `${__API_BASE_ADDRESS__}/api/learningPath/${pathId}`;
        try {
            const res = await get(uri);
            return res.data;
        }
        catch (e) {
            return e.response.data
        }
    }
}
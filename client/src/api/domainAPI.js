import { get, post } from "../helpers/callAPI";

export default class Api {

    static async getAllDomains() {
        const uri = `${__API_BASE_ADDRESS__}/api/domain`;
        try {
            const res = await get(uri);
            return res.data;
        }
        catch (e) {
            return e.response.data
        }
    }

    static async getDomainDeatil(domainId) {
        const uri = `${__API_BASE_ADDRESS__}/api/domain/${domainId}`;
        try {
            const res = await get(uri);
            return res.data;
        }
        catch (e) {
            return e.response.data
        }
    }
}
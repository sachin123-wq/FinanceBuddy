import { get, post } from "../helpers/callAPI";

export default class Api {

    static async getUser(userId) {
        const uri = `${__API_BASE_ADDRESS__}/api/user/${userId}`;
        try {
            const res = await get(uri, true);
            return res.data;
        }
        catch (e) {
            return e.response.data
        }
    }
}
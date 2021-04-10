import { get, post } from "../helpers/callAPI";

export default class Api {

    static async getQuizDetail(quizId) {
        const uri = `${__API_BASE_ADDRESS__}/api/quiz/${quizId}`;
        try {
            const res = await get(uri, true);
            return res.data;
        }
        catch (e) {
            return e.response.data
        }
    }

    static async createQuizResponse(quizId, response) {
        const uri = `${__API_BASE_ADDRESS__}/api/quiz_response`;
        const body = { quiz: quizId, response };
        try {
            const res = await post(uri, body, true);
            return res.data;
        }
        catch (e) {
            return e.response.data
        }
    }

    static async getQuizResponse(quizId) {
        const uri = `${__API_BASE_ADDRESS__}/api/quiz_response?quiz=${quizId}`;
        try {
            const res = await get(uri, true);
            return res.data;
        }
        catch (e) {
            return e.response.data
        }
    }
}
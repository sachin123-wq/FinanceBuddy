import { get, post } from "../helpers/callAPI";

export default class Api {

    static async getPostsForDomain(domainId) {
        const uri = `${__API_BASE_ADDRESS__}/api/post/?domainId=${domainId}`;
        try {
            const res = await get(uri, true);
            return res.data;
        }
        catch (e) {
            return e.response.data
        }
    }

    static async getPostDetail(postId) {
        const uri = `${__API_BASE_ADDRESS__}/api/post/${postId}`;
        try {
            const res = await get(uri, true);
            return res.data;
        }
        catch (e) {
            return e.response.data
        }
    }

    static async makeCommentOnPost(postId, text) {
        const uri = `${__API_BASE_ADDRESS__}/api/post/${postId}/comment`;
        const body = { text };
        try {
            const res = await post(uri, body, true);
            return res.data;
        }
        catch (e) {
            return e.response.data
        }
    }

    static async getCommentsOnPost(postId) {
        const uri = `${__API_BASE_ADDRESS__}/api/post/${postId}/comment`;
        try {
            const res = await get(uri, true);
            return res.data;
        }
        catch (e) {
            return e.response.data
        }
    }

    static async getBookmarkedPosts(userId, postId) {
        const uri = `${__API_BASE_ADDRESS__}/api/user/${userId}/bookmark/${postId}`;
        try {
            const res = await post(uri, true);
            return res.data;
        }
        catch (e) {
            return e.response.data
        }
    }

    static async getAllPosts() {
        const uri = `${__API_BASE_ADDRESS__}/api/post`;
        try {
            const res = await get(uri);
            return res.data;
        } catch(e) {
            return e.response.data;
        }
    }
}
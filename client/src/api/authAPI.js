import { get, post } from "../helpers/callAPI";


export default class Api {

  // SIGNUP API CALL
  static async signUp({ name, email, password, isCreator }) {
    const uri = `${__API_BASE_ADDRESS__}/api/auth/signup`;
    let body = { name, email, password };
    try {
      const res = await post(uri, body);
      // successfull signup
      return { success: "Account created. You can Sign in now." }
    }
    catch (e) {
      return e.response.data
    }
  }

  // SIGNIN API CALL
  static async signIn({ email, password, isCreator }) {
    let uri = `${__API_BASE_ADDRESS__}/api/auth/signin`;

    let body = { email, password }
    try {
      const res = await post(uri, body);
      return res;
    }
    catch (e) {
      return e.response.data
    }
  }

  static async signOut() {
    let uri = `${__API_BASE_ADDRESS__}/api/auth/signout`;
    try {
      const res = await get(uri);
      return res.status;
    }
    catch (e) {
      return e.response.data
    }
  }
}
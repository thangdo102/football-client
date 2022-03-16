import axios from "axios";

const url = process.env.API_URL || "http://localhost:9000";

export default class Auth {
  static async login(email, password) {
    return axios.post(
      `${url}/auth/login`,
      {
        email: email,
        password: password,
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
      }
    );
  }
}

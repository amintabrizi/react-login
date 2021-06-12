import axios from "axios";

const API_URL = "http://localhost:4000/accounts/";

class AuthService {
  register(username, email, password) {
    return axios.post(API_URL + "register", {
      "title": "Mr",
      "firstName": username,
      "lastName": username,
      "email": email,
      "password": password,
      "confirmPassword": password,
      "acceptTerms": true,
    });
  }
}

export default new AuthService();

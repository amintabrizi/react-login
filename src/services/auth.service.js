import axios from "axios";

const API_URL = "http://localhost:4000/accounts/";

class AuthService {

  register(firstName, lastName, email, password) {
    return axios.post(API_URL + "register", {
      title: "Mr",
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      confirmPassword: password,
      acceptTerms: true,
    });
  }

  verifyEmail(token) {
    return axios.post(API_URL + "verify-email", { token });
  }

  login(email, password) {
    console.log(email, password);
    return axios
      .post(API_URL + "authenticate", { email, password })
      .then((response) => {
        if (response.data.jwtToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }
}

export default new AuthService();

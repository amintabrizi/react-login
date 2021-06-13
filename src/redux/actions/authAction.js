import * as Types from "../types";

import AuthService from "../../services/auth.service";

export const registerAction = (firstName, lastName, email, password) => (dispatch) => {
  console.log(firstName, lastName, email, password);
  return AuthService.register(firstName, lastName, email, password).then(
    (response) => {
      dispatch({
        type: Types.REGISTER_SUCCESS,
      });

      dispatch({
        type: Types.SET_MESSAGE,
        payload: response.data.message,
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: Types.REGISTER_FAIL,
      });

      dispatch({
        type: Types.SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const verifyEmailAction = (token) => (dispatch) => {
  return AuthService.verifyEmail(token).then(
    (response) => {
      dispatch({
        type: Types.VERIFY_SUCCESS,
      });

      dispatch({
        type: Types.SET_MESSAGE,
        payload: response.data.message,
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: Types.VERIFY_FAIL,
      });

      dispatch({
        type: Types.SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const login = (username, password) => (dispatch) => {
  console.log(username, password);
  return AuthService.login(username, password).then(
    (data) => {
      dispatch({
        type: Types.LOGIN_SUCCESS,
        payload: { user: data },
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: Types.LOGIN_FAIL,
      });

      dispatch({
        type: Types.SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const logout = () => (dispatch) => {
  AuthService.logout();

  dispatch({
    type: Types.LOGOUT,
  });
};
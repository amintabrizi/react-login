import * as Types from '../types';

import AuthService from "../../services/auth.service";

export const register = (username, email, password) => (dispatch) => {
    return AuthService.register(username, email, password).then(
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

// export const toggleLoginAction = () => dispatch => {
//     dispatch(showLoading())
//     setTimeout(() => {
//         dispatch({type: types.TOGGLE_LOGIN});
//         dispatch(hideLoading())
//     }, 1000);
    
// }

// export const toastCloseAction = (showStatus, toastTitle, toastBody, toastBg) => ({
//     type: types.HANDLE_TOAST_CLOSE,
// })


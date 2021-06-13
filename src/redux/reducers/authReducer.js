import * as Types from '../types/index';

const user = JSON.parse(localStorage.getItem("user"));

const initialState = user
    ? { isLoggedIn: true, user }
    : { isLoggedIn: false, user: null };

export default function auth(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case Types.REGISTER_SUCCESS:
            return {
                ...state,
                isLoggedIn: false,
            };
        case Types.REGISTER_FAIL:
            return {
                ...state,
                isLoggedIn: false,
            };
        case Types.VERIFY_SUCCESS:
            return {
                ...state,
                isLoggedIn: false,
            };
        case Types.VERIFY_FAIL:
            return {
                ...state,
                isLoggedIn: false,
            };
        case Types.LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                user: payload.user,
            };
        case Types.LOGIN_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                user: null,
            };
        case Types.LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                user: null,
            };
        default:
            return state;
    }
}

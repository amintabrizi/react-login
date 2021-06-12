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
        default:
            return state;
    }
}

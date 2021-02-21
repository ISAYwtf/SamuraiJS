import {authAPI, securityAPI} from "../api/api";
import {reset, stopSubmit} from "redux-form";

const SET_USER_DATA = 'samurai-network/auth/SET-USER-DATA';
const GET_CAPTCHA_URL_SUCCESS = 'samurai-network/auth/GET-CAPTCHA-URL-SUCCESS';

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null // if null, then captcha is not required
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;
    }
}

export const setUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
});

export const getCaptchaUrlSuccess = (captchaUrl) => ({
    type: GET_CAPTCHA_URL_SUCCESS,
    payload: {captchaUrl}
});

export const getMe = () => async dispatch => {
    const data = await authAPI.getMe();

    if (data.resultCode === 0) {
        let {id, login, email} = data.data;
        dispatch(setUserData(id, email, login, true));
    }
}

export const login = (email, password, rememberMe, captcha = null) => async dispatch => {
    const data = await authAPI.login(email, password, rememberMe, captcha);

    if (data.resultCode === 0) {
        dispatch(getMe());
        dispatch(reset('login'));
    } else {
        if (data.resultCode === 10) {
            dispatch(reset('login'));
            dispatch(getCaptcha());
        }
        let message = data.messages.length > 0 ? data.messages[0] : "Email or password are incorrect.";
        dispatch(stopSubmit('login', {_error: message}));
    }
}

export const getCaptcha = () => async dispatch => {
    const data = await securityAPI.getCaptchaUrl();

    const captchaUrl = data.url;

    dispatch(getCaptchaUrlSuccess(captchaUrl));
}

export const logout = () => async dispatch => {
    const data = await authAPI.logout()

    if (data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false));
    }
}

export default authReducer;

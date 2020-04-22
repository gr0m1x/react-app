import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "SET-USER-DATA";
const GET_CAPTCHA_URL_SUCCESS = "GET-CAPTCHA-URL-SUCCESS";

let initialState = {
    userId: null,
    email: null,
    login: null,
    isLoading : false,
    isAuth: false,
    captchaUrl: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS: {
            return {
                ...state,
                ...action.payload,
            };
        }

        default:
            return state;
    }
};

export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}});
export const getCaptchaUrlSuccess = (captchaUrl) => ({type: GET_CAPTCHA_URL_SUCCESS, payload:{captchaUrl}});

export const getAuthUserData = () => async (dispatch) => {
    let data = await authAPI.authMe();

    if(data.resultCode === 0) {
        let {id, email, login} = data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
};

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    let data = await authAPI.login(email, password, rememberMe, captcha);

    if(data.resultCode === 0) {
        dispatch(getAuthUserData()); // после Логина вызывает getAuthUserData(), что бы перерисовать компонетну
    } else  {
        if (data.resultCode === 10) {
            dispatch(getCaptchaUrl()) // если resultCode 10. диспатчим санку получаюшую Капчу
        }

        let errorMessage = data.messages.length > 0 ? data.messages[0] : "Some error";
        dispatch(stopSubmit("login", {_error : errorMessage})); // actionCreator stopSubmit от redux form. для формы "login"
    }

};

export const getCaptchaUrl = () => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;

    dispatch(getCaptchaUrlSuccess(captchaUrl));
};

export const logout = () => async (dispatch) => {
   let data = await authAPI.logout();

    if(data.resultCode === 0) {
        // при LogOut зануляем даные о себе
        dispatch(setAuthUserData(null, null, null, false, null));
    }
};

export default authReducer;
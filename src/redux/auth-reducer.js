import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "SET-USER-DATA";

let initialState = {
    userId: null,
    email: null,
    login: null,
    isLoading : false,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload,
            };
        }

        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}});

export const getAuthUserData = () => {
    return (dispatch) => {
        return authAPI.authMe().then(data => {
                if(data.resultCode === 0) {
                    let {id, email, login} = data.data;
                    dispatch(setAuthUserData(id, email, login, true));
                }
            });
    }
};

export const login = (email, password, rememberMe) => {
    return (dispatch) => {

        authAPI.login(email, password, rememberMe).then(data => {
            if(data.resultCode === 0) {
                dispatch(getAuthUserData()); // после Логина вызывает getAuthUserData(), что бы перерисовать компонетну
            } else  {
                let errorMessage = data.messages.length > 0 ? data.messages[0] : "Some error";
                dispatch(stopSubmit("login", {_error : errorMessage})); // actionCreator от redux form. для формы "login"
            }
        });
    }
};

export const logout = () => {
    return (dispatch) => {
        authAPI.logout().then(data => {
            if(data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false)); // при LogOut зануляем даные о себе
            }
        });
    }
};


export default authReducer;
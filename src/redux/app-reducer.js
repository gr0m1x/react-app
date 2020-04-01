import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = "INITIALIZED-SUCCESS";

let initialState = {
    initialized: null,
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {

        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true,
            };
        }

        default:
            return state;
    }
}

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});


export const initializeApp = () => {
    return (dispatch) => {
        let promise = dispatch(getAuthUserData()); // возвразаем промисы
        Promise.all([promise]).then( () => {  // вызываем инициализацию после того как получим getAuthUserData - данные о пользователе
                dispatch(initializedSuccess())
        });
    }
};

export default appReducer;
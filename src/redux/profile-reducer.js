import {profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";

// Actions
const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = "SET-STATUS";
const SAVE_PHOTO_SUCCESS = "SAVE-PHOTO-SUCCESS"

let initialState = {
    posts: [
        {id: 1, postText: "first props", likesCount: 10},
        {id: 2, postText: "First message", likesCount: 13},
        {id: 3, postText: "Hello", likesCount: 2},
        {id: 2, postText: "Second message", likesCount: 0},
    ],
    profile : null,
    status: '',
};

// Reducer
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                postText: action.newPostText,
                likesCount: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos} // копируем профайл, в профайле меняем фото на те что придут в action
            }
        }
        default:
            return state;
    }
}

// Action Creators
export const addPostCreator = (newPostText) => ({type: ADD_POST, newPostText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos});

// side effects, only as applicable
// e.g. thunks, epics, etc
export const getUserProfile = (userId) => async (dispatch) => {
    let data = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(data));
};

export const getUserStatus = (userId) => async (dispatch) => {
    const response = await profileAPI.getStatus(userId);

    dispatch(setStatus(response.data));
};

export const updateUserStatus = (status) => async (dispatch) => {
    try {
        const response = await profileAPI.updateStatus(status);

        if(response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    } catch(error) {

    }
};

export const savePhoto = (file) => async (dispatch) => {
    const response = await profileAPI.savePhoto(file);

    if(response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos)); // когда придут фото , сработает редюсер.
    }
};

export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const response = await profileAPI.saveProfile(profile);

    if(response.data.resultCode === 0) {
        dispatch(getUserProfile(userId));
    } else  {
        dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0]})) // ошибка попадет в ReduxForm как error
        // dispatch(stopSubmit("edit-profile", {"contacts": {"facebook": response.data.messages[0]}})) // ошибка попадет в ReduxForm как error
        return Promise.reject(response.data.messages[0])
    }
};


export default profileReducer;
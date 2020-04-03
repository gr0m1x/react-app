import {profileAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = "SET-STATUS";

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
        default:
            return state;
    }
}

export const addPostCreator = (newPostText) => ({type: ADD_POST, newPostText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});

export const getUserProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId).then(data => {
                dispatch(setUserProfile(data));
            });
    }
};
export const getUserStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(response => {
            dispatch(setStatus(response.data));
        });
    }
};

export const updateUserStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(response => {
            if(response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        });
    }
};

export default profileReducer;
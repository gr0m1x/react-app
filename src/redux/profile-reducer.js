import {usersAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET-USER-PROFILE";

let initialState = {
    posts: [
        {id: 1, postText: "first props", likesCount: 10},
        {id: 2, postText: "First message", likesCount: 13},
        {id: 3, postText: "Hello", likesCount: 2},
        {id: 2, postText: "Second message", likesCount: 0},
    ],
    newPostText: '',
    profile : null,
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                postText: state.newPostText,
                likesCount: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: "",
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }
        default:
            return state;
    }
}

export const addPostCreator = () => ({type: ADD_POST});
export const updateNewPostTextCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text,});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export const getUserProfile = (userId) => {
    return (dispatch) => {
        if (!userId) {
            userId = 2
        }
        usersAPI.getProfile(userId).then(data => {
                dispatch(setUserProfile(data));
            });
    }
}

export default profileReducer;
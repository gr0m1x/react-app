import React from 'react';
import {addPostCreator, updateNewPostTextCreator} from "../../../../redux/profile-reducer";
import MyPosts from "../MyPosts";


const AddPostContainer = (props) => {

    let addPost = () => {
        props.dispatch( addPostCreator() );
    };
    let onPostChange = (text) => {
        props.dispatch( updateNewPostTextCreator(text) );
    };

    return (
        <MyPosts updateNewPostText={onPostChange} addPost={addPost}/>
    );
}

export default AddPostContainer;
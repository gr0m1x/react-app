import React from 'react';
import './MyPosts.css';
import Post from "./Post/Post";
import {reduxForm ,Field} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControl/FormsControl";

const maxLength10 = maxLengthCreator(10)

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className="addPost">
            <div>
                <Field component={Textarea} placeholder="Enter your post message"
                       name="newPostText" validate={[required, maxLength10]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
};

const AddPostFormRedux = reduxForm({
    form: "profileAddMessageForm"
})(AddNewPostForm);


const MyPosts = (props) => {
    let postsElemetns = props.posts.map( (p, i) => <Post message={p.postText} likeCount={p.likesCount} key={i}/>);

    let addNewPost = (values) => {
        props.addPost(values.newPostText)
    };

    return (
        <div className="posts">
            <h3>My posts</h3>

            <AddPostFormRedux onSubmit={addNewPost}/>

            <div className="postsList">
                {postsElemetns}
            </div>
        </div>
    );
}

export default MyPosts;
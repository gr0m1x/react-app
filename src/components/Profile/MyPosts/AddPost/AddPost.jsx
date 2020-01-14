import React from 'react';
import styles from './AddPost.module.css'
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/state";


const AddPost = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch( updateNewPostTextActionCreator(text) );
    };

    return (
        <div className={styles.addPost}>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
        </div>
    );
}

export default AddPost;
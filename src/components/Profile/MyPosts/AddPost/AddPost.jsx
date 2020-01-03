import React from 'react';
import styles from './AddPost.module.css'

const AddPost = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch({ type: 'ADD-POST'});
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch( { type: 'UPDATE-NEW-POST-TEXT', newText: text});
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
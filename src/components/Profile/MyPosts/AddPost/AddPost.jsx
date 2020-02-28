import React from 'react';
import styles from './AddPost.module.css'

const AddPost = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost()
        // props.dispatch(addPostCreator());
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
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
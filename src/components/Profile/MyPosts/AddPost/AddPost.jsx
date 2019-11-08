import React from 'react';
import styles from './AddPost.module.css'

const AddPost = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;

        props.addPost(text)
        newPostElement.current.value = "";
    }

    return (
        <div className={styles.addPost}>
            <div>
                <textarea ref={newPostElement}></textarea>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
        </div>
    );
}

export default AddPost;
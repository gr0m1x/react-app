import React from 'react';
import styles from './AddPost.module.css'

const AddPost = () => {
    return (
            <div className={styles.addPost}>
                <form action="">
                    <textarea></textarea>
                    <button>Send</button>
                </form>
            </div>
    );
}

export default AddPost;
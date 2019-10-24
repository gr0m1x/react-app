import React from 'react';
import styles from './Post.module.css'

const Post = (props) => {
    return (
        <div className={styles.item}>
            <img className={styles.userAva} src="https://picsum.photos/200/200" alt="user photo"/>
            <p>
                {props.message}
            </p>
            <span className={styles.likeCount}>
               Likes {props.likeCount}
            </span>
        </div>
    );
}

export default Post;
import React from 'react';
import styles from './MyPosts.module.css';
import Post from "./Post/Post";
import AddPost from "./AddPost/AddPost";

const MyPosts = () => {
    return (
        <div className={styles.posts}>
            <h3>My posts</h3>
            <AddPost/>
            <div className={styles.postsList}>
                <Post message="first props" likeCount="10"/>
                <Post message="First message" likeCount="13"/>
                <Post message="Hello" likeCount="2"/>
            </div>
        </div>
    );
}

export default MyPosts;
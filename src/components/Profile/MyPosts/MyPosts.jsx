import React from 'react';
import styles from './MyPosts.module.css'
import Post from "./Post/Post";
import AddPost from "./AddPost/AddPost";

const MyPosts = () => {
    return (
        <div className={styles.posts}>
            My posts
            <AddPost/>
            <div className={styles.postsList}>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    );
}

export default MyPosts;
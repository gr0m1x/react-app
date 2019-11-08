import React from 'react';
import styles from './MyPosts.module.css';
import Post from "./Post/Post";
import AddPost from "./AddPost/AddPost";

const MyPosts = (props) => {

    let postsElemetns = props.posts.map( p => <Post message={p.postText} likeCount={p.likesCount}/>);

    return (
        <div className={styles.posts}>
            <h3>My posts</h3>
            <AddPost addPost={props.addPost}/>
            <div className={styles.postsList}>
                {postsElemetns}
            </div>
        </div>
    );
}

export default MyPosts;
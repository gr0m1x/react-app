import React from 'react';
import './MyPosts.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postsElemetns = props.posts.map( (p, i) => <Post message={p.postText} likeCount={p.likesCount} key={i}/>);
    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost()
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
    };

    return (
        <div className="posts">
            <h3>My posts</h3>
            <div className="addPost">
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
                </div>
                <div>
                    <button onClick={ props.newPostText.length ? onAddPost : null}>Add post</button>
                </div>
            </div>
            <div className="postsList">
                {postsElemetns}
            </div>
        </div>
    );
}

export default MyPosts;
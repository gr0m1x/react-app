import React from 'react';
import './Post.css'

const Post = (props) => {
    return (
        <div className="item">
            <img className="userAva" src="https://picsum.photos/id/509/200/200" alt="user photo"/>
            <p>
                {props.message}
            </p>
            <span className="likeCount">
               Likes {props.likeCount}
            </span>
        </div>
    );
}

export default Post;
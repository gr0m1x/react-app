import React from 'react';
import styles from './Post.module.css'

const Post = () => {
    return (
        <div className={styles.item}>
            <img className={styles.userAva} src="https://picsum.photos/200/200" alt="user photo"/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, ipsam odio?
                Est iusto libero magnam necessitatibus odio odit porro repellendus sapiente soluta voluptatem.
                Dolorum facere necessitatibus perferendis porro tempora ullam?</p>
        </div>
    );
}

export default Post;
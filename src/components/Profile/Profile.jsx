import React from 'react';
import styles from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={styles.mainContent}>
            <div>
                <img src="https://picsum.photos/id/506/1800/500" alt=""/>
            </div>
            <div className={styles.userInfo}>
                <img src="https://picsum.photos/id/447/100/100" alt=""/>
                <div>Description</div>
            </div>
            <MyPosts/>
        </div>
    );
}

export default Profile;
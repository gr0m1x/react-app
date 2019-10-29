import React from 'react';
import styles from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://picsum.photos/id/506/1800/500" alt=""/>
            </div>
            <div className={styles.userInfo}>
                <img src="https://picsum.photos/id/447/100/100" alt=""/>
                <div>Description</div>
            </div>
        </div>

    );
}

export default ProfileInfo;
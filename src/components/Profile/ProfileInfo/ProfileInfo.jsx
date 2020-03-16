import React from 'react';
import './ProfileInfo.css'


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://picsum.photos/id/507/1700/400" alt=""/>
            </div>
            <div className="userInfo">
                <img src="https://picsum.photos/id/447/100/100" alt=""/>
                <div>Description</div>
            </div>
        </div>

    );
}

export default ProfileInfo;
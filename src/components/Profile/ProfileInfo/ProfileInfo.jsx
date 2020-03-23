import React from 'react';
import './ProfileInfo.css'
import Preloader from "../../common/Preloader/Preloader";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div>
                <img src="https://picsum.photos/id/507/1700/400" alt=""/>
            </div>
            <div className="userInfo">
                <img src={props.profile.photos.small} alt=""/>
                <div>Description</div>
            </div>
        </div>

    );
}

export default ProfileInfo;
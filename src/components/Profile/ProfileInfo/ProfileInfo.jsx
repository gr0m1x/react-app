import React from 'react';
import './ProfileInfo.css'
import Preloader from "../../common/Preloader/Preloader";
// import ProfileStatus from "./ProfileStatus"
import ProfileStatusWithHooks from "./ProfileStatusWhithHooks";


const ProfileInfo = ({profile, status, updateUserStatus, ...props}) => {
    if (!profile) {
        return <Preloader />
    }

    return (
        <div>
            <div className="userInfo">
                <ProfileStatusWithHooks status={status} updateUserStatus={updateUserStatus}/>
                <div className="userContact">
                    <div>
                        <img className="userLogo"  alt="logo" src={profile.photos.small
                            ? profile.photos.small
                            : 'https://picsum.photos/id/509/200/200'} />
                        <p>Name: {profile.fullName}</p>
                        <p>{profile.aboutMe}</p>
                    </div>

                    {/*сделать что бы MAPилось*/}
                    <ul className="userContact-list">
                        <li>{profile.contacts.facebook}</li>
                        <li>{profile.contacts.vk}</li>
                        <li>{profile.contacts.twitter}</li>
                        <li>{profile.contacts.instagram}</li>
                        <li>{profile.contacts.github}</li>
                    </ul>
                </div>

                <div className="userDescription">
                    {profile.lookingForAJob && <p>{profile.lookingForAJobDescription}</p>}
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;
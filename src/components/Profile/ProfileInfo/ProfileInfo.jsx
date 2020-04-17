import React from 'react';
import './ProfileInfo.css'
import Preloader from "../../common/Preloader/Preloader";
// import ProfileStatus from "./ProfileStatus"
import ProfileStatusWithHooks from "./ProfileStatusWhithHooks";
import userPhoto from "../../../img/avatar.jpg"


const ProfileInfo = ({profile, status, updateUserStatus, isOwner, savePhoto, ...props}) => {
    if (!profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    };

    return (
        <div>
            <div className="userInfo">
                <ProfileStatusWithHooks status={status} updateUserStatus={updateUserStatus}/>

                <div className="userContact">
                    <div>
                        <img className="profile__user-photo"  alt="logo"
                             src={profile.photos.small
                                    ? profile.photos.small
                                    : userPhoto}
                        />

                        {isOwner && <input type="file" onChange={onMainPhotoSelected}/>}

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
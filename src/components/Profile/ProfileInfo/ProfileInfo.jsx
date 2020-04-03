import React from 'react';
import './ProfileInfo.css'
import Preloader from "../../common/Preloader/Preloader";
// import imgBg from "../../../img/bg.jpg"
// import ProfileStatus from "./ProfileStatus"
import ProfileStatusWithHooks from "./ProfileStatusWhithHooks";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            {/*<div >*/}
            {/*    <img src={imgBg} alt="bg"/>*/}
            {/*</div>*/}

            <div className="userInfo">
                <ProfileStatusWithHooks status={props.status} updateUserStatus={props.updateUserStatus}/>
                {/*<ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>*/}
                <div className="userContact">

                    <div>
                        <img className="userLogo" src={props.profile.photos.small ? props.profile.photos.small : 'https://picsum.photos/id/509/200/200'} alt="logo"/>
                        <p>Name: {props.profile.fullName}</p>
                        <p>{props.profile.aboutMe}</p>
                    </div>

                    <ul className="userContact-list">
                        <li>{props.profile.contacts.facebook}</li>
                        <li>{props.profile.contacts.vk}</li>
                        <li>{props.profile.contacts.twitter}</li>
                        <li>{props.profile.contacts.instagram}</li>
                        <li>{props.profile.contacts.github}</li>
                    </ul>

                </div>

                <div className="userDescription">
                    {props.profile.lookingForAJob && <p>{props.profile.lookingForAJobDescription}</p>}
                </div>
            </div>
        </div>

    );
}

export default ProfileInfo;
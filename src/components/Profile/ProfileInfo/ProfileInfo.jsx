import React from 'react';
import './ProfileInfo.css'
import Preloader from "../../common/Preloader/Preloader";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div >
                <img src="https://picsum.photos/id/507/1700/400" alt=""/>
            </div>

            <div className="userInfo">
                <div className="userContact">
                    <div>
                        <img className="userLogo" src={props.profile.photos.small ? props.profile.photos.small : 'https://picsum.photos/id/509/200/200'} alt=""/>
                        <p>Name: {props.profile.fullName}</p>
                        <p>{props.profile.aboutMe}</p>
                    </div>
                    <img src="" alt=""/>
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
import React, {useState} from 'react';
import './ProfileInfo.css'
import Preloader from "../../common/Preloader/Preloader";
// import ProfileStatus from "./ProfileStatus"
import ProfileStatusWithHooks from "./ProfileStatusWhithHooks";
import userPhoto from "../../../img/avatar.jpg"
import ProfileReduxDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile, status, updateUserStatus, isOwner, savePhoto, saveProfile, ...props}) => {

    let [editMode, setEditMode] = useState(false);// возвращает массив, значение + функция

    if (!profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    };

    const activateEditMode = () => {
        setEditMode(true)
    };

    const onSubmit = (value) => { // получает данные из формы через hoc handleSubmit
        saveProfile(value).then(
            () => {setEditMode(false)}
        )
    };

    return (
        <div>
            <div className="userInfo">
                <ProfileStatusWithHooks status={status} updateUserStatus={updateUserStatus}/>

                <div className="userContact">
                    <img className="profile__user-photo"  alt="logo"
                         src={profile.photos.small
                                ? profile.photos.small
                                : userPhoto}
                    />

                    {isOwner && <input type="file" onChange={onMainPhotoSelected}/>}
                </div>
            </div>

            { editMode
                ? <ProfileReduxDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                : <ProfileData profile={profile} isOwner={isOwner} activateEditMode={activateEditMode}/>
            }

        </div>
    );
};

const ProfileData = ({profile, activateEditMode, isOwner}) => {

    return (
        <div>
            { isOwner && <button onClick={activateEditMode}> Edit profile </button>}
            <div>
                Name: {profile.fullName}
            </div>

            <div>
                Looking for a job: {profile.lookingForAJob ? "yes" : "no"}
            </div>
            {profile.lookingForAJob &&
                <div>
                    My professional skills: {profile.lookingForAJobDescription}
                </div>
            }
            {profile.aboutMe &&
                <div>
                    About me: {profile.aboutMe}
                </div>
            }
            <div>
                Contacts: {Object.keys(profile.contacts).map(key => {
                return <Contacts key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            }) }
            </div>
        </div>
    )
};


const Contacts = ({contactTitle, contactValue}) => {
    return (
        <div>
          <b>{contactTitle}</b>: {contactValue}
        </div>
    )
}

export default ProfileInfo;
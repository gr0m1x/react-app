import React, {useState} from "react"
import "./ProfileInfo.css"

const ProfileStatusWithHooks = (props) =>  {

    let [editMode, setEditMode] = useState(false);// возвращает массив, значение + функция
    let [status, setStatus] = useState(props.status);

    const activateEditMode = () => {
        setEditMode(true)
    };

    const deactivateEditMode = () =>  {
        setEditMode(false)
        props.updateUserStatus(status);
    };

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    };

    return (
        <div>
             {!editMode
                 ? <div>
                    <span onDoubleClick={activateEditMode} className={"userStatus"}  >{props.status || "some status"}</span>
                </div>
                : <div>
                    <input onChange={onStatusChange} onBlur={deactivateEditMode} type="text" value={status} autoFocus={true}/>
                </div>
             }

        </div>
    )

};

export default ProfileStatusWithHooks;
import React, {useEffect, useState} from "react"
import "./ProfileInfo.css"

const ProfileStatusWithHooks = (props) =>  {

    let [editMode, setEditMode] = useState(false);// возвращает массив, значение + функция
    let [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status)
        //[props.status] - зависимость , каждый раз отрисовывается при изменении props.status
    }, [props.status]); // [] - выполнится 1 раз когда отрисуется компонента,


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
            { props.isOwner
                ? !editMode
                    ? <div>
                        <span onDoubleClick={activateEditMode} className={"userStatus"}  >{props.status || "some status"}</span>
                    </div>
                    : <div>
                        <input onChange={onStatusChange} onBlur={deactivateEditMode} type="text" value={status} autoFocus={true}/>
                    </div>

                : <div>
                    <span className={"userStatus"}  >{props.status || "some status"}</span>
                  </div>
            }

        </div>
    )
};

export default ProfileStatusWithHooks;
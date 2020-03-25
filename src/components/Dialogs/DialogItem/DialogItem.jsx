import React from "react";
import "../Dialogs.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id
    return (
        <div className="dialog">
            <span>
                <img src="https://picsum.photos/id/577/200/200" alt="logo"/>
            </span>
            <NavLink to={path} activeClassName="active">{props.name}</NavLink>
        </div>
    );
}

export default DialogItem;
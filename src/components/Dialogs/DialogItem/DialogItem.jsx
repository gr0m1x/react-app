import React from "react";
import styles from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={styles.dialog}>
            <span>
                <img src="https://picsum.photos/id/577/200/200" alt=""/>
            </span>
            <NavLink to={path} activeClassName={styles.active}>{props.name}</NavLink>
        </div>
    );
}

export default DialogItem;
import React from "react";
import styles from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={styles.dialog}>
            <NavLink to={path} activeClassName={styles.active}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={styles.message}>{props.textMessage}</div>
    );
}

const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: "Slavon"},
        {id: 2, name: "Alex"},
        {id: 3, name: "Gena"},
        {id: 4, name: "Nikitos"},
        {id: 5, name: "Yrko"},
        {id: 6, name: "Marina"},
    ];

    let message = {};

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
                <DialogItem name={dialogsData[5].name} id={dialogsData[5].id}/>
            </div>

            <div className={styles.messages}>
                <Message textMessage="Lorem ipsum dolor sit amet, consectetur adipisicing elit."/>
                <Message textMessage="Esse laborum laudantium maxime quos vel."/>
                <Message
                    textMessage="Accusantium, assumenda cupiditate dolores exercitationem mollitia necessitatibus nobis perferendis quaerat quis reprehenderit rerum, sint vitae voluptatum. "/>
                <Message textMessage="Esse laborum laudantium maxime quos vel."/>
                <Message textMessage="Lorem ipsum dolor sit amet, consectetur adipisicing elit."/>
            </div>
        </div>
    );
}

export default Dialogs;
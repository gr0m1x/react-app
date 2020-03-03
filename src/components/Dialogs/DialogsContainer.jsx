import React from "react";
import "./Dialogs.css";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    };

    let  updateNewMessageBody = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    };

    return (
        <Dialogs
            sendMessage={onSendMessageClick}
            updateNewMessageBody={updateNewMessageBody}
            dialogsPage={state}
        />
    );
}

export default DialogsContainer;
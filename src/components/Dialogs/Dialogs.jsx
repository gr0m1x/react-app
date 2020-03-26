import React from "react";
import "./Dialogs.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {Redirect} from "react-router-dom";

const Dialogs = (props) => {

    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>);
    let messagesElements = state.messages.map(m => <Message textMessage={m.message} id={m.id} key={m.id}/>);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage()
    };

    let  onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body)
    };

    if( !props.isAuth) return <Redirect to="/login"/>

    return (
        <div className="dialogs">
            <div className="dialogsItems">
                {dialogsElements}
            </div>

            <div className="messages">
                <div>
                    {messagesElements}
                </div>
                <div className="sendMessage">
                    <div>
                        <textarea onChange={onNewMessageChange}
                              value={newMessageBody} rows="8" placeholder="Enter your message">
                        </textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send message</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;
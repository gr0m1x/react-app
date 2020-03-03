import React from "react";
import "../Dialogs.css";

const Message = (props) => {
    return (
        <div className="message">
            <span className="userAva">
                <img src="https://picsum.photos/id/536/200/200" alt=""/>
            </span>
            <span className="messageItem">
                {props.textMessage}
            </span>
        </div>
    );
}

export default Message;
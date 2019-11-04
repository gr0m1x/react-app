import React from "react";
import styles from "./../Dialogs.module.css";

const Message = (props) => {
    return (
        <div className={styles.message}>
            <span className={styles.userAva}>
                <img src="https://picsum.photos/id/536/200/200" alt=""/>
            </span>
            <span className={styles.messageItem}>
                {props.textMessage}
            </span>
        </div>
    );
}

export default Message;
import React from "react";
import "./Dialogs.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControl/FormsControl";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const maxLength50 = maxLengthCreator(50)

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={"formMessage sendMessage"} action="">
            <label>
                <Field rows="8" placeholder="Enter your message" component={Textarea} name={"newMessageBody"} validate={[required, maxLength50]}/>
            </label>
            <div>
                <button>Send message</button>
            </div>
        </form>
    )
};

const AddMessageFormRedux = reduxForm({
    form: "dialogAddMessageForm"
})(AddMessageForm);


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>);
    let messagesElements = state.messages.map(m => <Message textMessage={m.message} id={m.id} key={m.id}/>);


    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    };

    return (
        <div className="dialogs">
            <div className="dialogsItems">
                {dialogsElements}
            </div>

            <div className="messages">
                <div>
                    {messagesElements}
                </div>

                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    );
};


export default Dialogs;
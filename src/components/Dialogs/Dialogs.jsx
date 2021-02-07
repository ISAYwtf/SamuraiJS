import React from 'react';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

import classes from './Dialogs.module.css';
import {Field, reduxForm} from "redux-form";

const Dialogs = ({sendMessage, dialogsPage}) => {
    const {dialogs, messages} = dialogsPage;

    const dialogsElements = dialogs.map(el => <DialogItem name={el.name} key={el.id} id={el.id}/>);
    const messagesElements = messages.map(el => <Message id={el.id} mine={el.mine} key={el.id} message={el.message}/>);

    const addNewMessage = values => {
        sendMessage(values.messageBody);
    }

    return (
        <div>
            <div className={classes.dialogs}>
                <div className={classes.dialogsItems}>
                    <h3 className={classes.title}>Dialogs</h3>
                    <div className={classes.dialogsList}>{dialogsElements}</div>
                </div>
                <div className={classes.messages}>
                    <h3 className={classes.title}>Messages</h3>
                    <div className={classes.messageList}>{messagesElements}</div>
                    <AddMessageFormRedux onSubmit={addNewMessage}/>
                </div>
            </div>
        </div>
    )
};

const AddMessageForm = props => {
    return (
        <form className={classes.inputs} onSubmit={props.handleSubmit}>
            <Field component={"input"} type="text" name={"messageBody"} placeholder={`Type your message...`}
                   className={classes.textarea}/>
            <button name={"messageSubmit"} type="submit" className={classes.add}>Send</button>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);

export default Dialogs;

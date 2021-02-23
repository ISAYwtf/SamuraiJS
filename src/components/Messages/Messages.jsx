import React from 'react';
import Message from "./Message/Message";

import classes from './Messages.module.css';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormControls/FormControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import Button from "../common/Button";

const maxLength300 = maxLengthCreator(300);

const Messages = ({sendMessageTC, dialogsPage}) => {
    const {messages} = dialogsPage;

    const messagesElements = messages.map(el => <Message id={el.id} mine={el.mine} key={el.id} message={el.message}/>);

    const addNewMessage = values => {
        sendMessageTC(values.messageBody);
    }

    return (
        <div className={`${classes.messages} component--wrap`}>
            <h3 className={classes.title}>Messages</h3>
            <div className={classes.messageList}>{messagesElements}</div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    )
};

const AddMessageForm = ({handleSubmit}) => {
    return (
        <form className={classes.inputs} onSubmit={handleSubmit}>
            <Field component={Input} name={"messageBody"} placeholder={`Type your message...`}
                   className={classes.textarea} validate={[required, maxLength300]}/>
            <Button className={classes.add}>Send</Button>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);

export default Messages;

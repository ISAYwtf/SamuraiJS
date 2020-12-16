import React from 'react';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import classes from './Dialogs.module.css';

const Dialogs = ({state}) => {

    const {dialogs, messages} = state;

    let dialogsElements = dialogs.map(el => <DialogItem name={el.name} id={el.id}/>);

    let messagesElements = messages.map(el => <Message message={el.message}/>);

    return (
        <div>
            <div className={classes.dialogs}>
                <div className={classes.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={classes.messages}>
                    {messagesElements}
                </div>
            </div>
        </div>
    )
}

export default Dialogs;

import React from 'react';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

import classes from './Dialogs.module.css';

const Dialogs = ({onMessageChange, sendMessage, dialogsPage}) => {
    debugger

    const {dialogs, messages, newMessageText} = dialogsPage;

    const dialogsElements = dialogs.map(el => <DialogItem name={el.name} key={el.id} id={el.id}/>);
    const messagesElements = messages.map(el => <Message id={el.id} mine={el.mine} key={el.id} message={el.message}/>);

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
                    <div className={classes.inputs}>
                        <input type="text" placeholder={`Type your message...`} className={classes.textarea}
                               onChange={e => onMessageChange(e.target.value)} value={newMessageText}/>
                        <input onClick={sendMessage} type="submit" value={`Send`}
                               className={classes.add}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;

import React from 'react';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import classes from './Dialogs.module.css';

const Dialogs = ({state}) => {

    const {dialogs, messages} = state;

    const dialogsElements = dialogs.map(el => <DialogItem name={el.name} id={el.id}/>);

    const messagesElements = messages.map(el => <Message id={el.id} mine={el.mine} message={el.message}/>);

    const newMessage = React.createRef();

    const sendMessage = () => {
        const text = newMessage.current.value;
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
                    <div className={classes.inputs}>
                        <input type="text" placeholder={`Type your message...`} className={classes.textarea}/>
                        <input onClick={sendMessage} ref={newMessage} type="submit" value={`Send`}
                               className={classes.add}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;

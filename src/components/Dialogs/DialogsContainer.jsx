import React from 'react';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = ({store}) => {

    const {dialogs, messages, newMessageText} = store.getState().dialogsPage;

    const onMessageChange = (e) => {
        const msg = e.target.value;
        store.dispatch(updateNewMessageTextActionCreator(msg));
    }

    const sendMessage = () => store.dispatch(sendMessageActionCreator());

    return (
        <Dialogs dialogs={dialogs} messages={messages} newMessageText={newMessageText}
                 onMessageChange={onMessageChange} sendMessage={sendMessage}/>
    )
}

export default DialogsContainer;

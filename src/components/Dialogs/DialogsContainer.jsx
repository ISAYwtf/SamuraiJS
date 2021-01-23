import React from 'react';
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {store => {
                const {dialogs, messages, newMessageText} = store.getState().dialogsPage;

                const onMessageChange = (e) => {
                    const msg = e.target.value;
                    store.dispatch(updateNewMessageTextActionCreator(msg));
                }

                const sendMessage = () => store.dispatch(sendMessageActionCreator());

                return <Dialogs dialogs={dialogs} messages={messages} newMessageText={newMessageText}
                                onMessageChange={onMessageChange} sendMessage={sendMessage}/>
            }}
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;

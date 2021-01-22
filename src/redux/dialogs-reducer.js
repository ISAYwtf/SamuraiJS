const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

const dialogsReducer = (state, action) => {
    const updateNewMessageText = (newText) => {
        state.newMessageText = newText;
    };
    const sendMessage = () => {
        const newMessage = {
            id: 7,
            message: state.newMessageText,
            mine: true
        };
        state.messages.push(newMessage);
        state.newMessageText = "";
    };

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            updateNewMessageText(action.newText);
            break;
        case SEND_MESSAGE:
            sendMessage();
            break;
    }

    return state;
}

export const sendMessageActionCreator = () => ({
    type: SEND_MESSAGE
});

export const updateNewMessageTextActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text
});

export default dialogsReducer;

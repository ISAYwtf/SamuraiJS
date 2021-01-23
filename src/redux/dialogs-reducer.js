const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

const initialState = {
    dialogs: [
        {id: 1, name: 'Dmitriy'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Svetlana'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valeriy'},
    ],
    messages: [
        {id: 1, message: 'Hi', mine: false},
        {id: 2, message: 'How are you', mine: false},
        {id: 3, message: 'Yo', mine: false},
        {id: 4, message: 'Yo', mine: true},
        {id: 5, message: 'My friend', mine: true},
        {id: 6, message: `It's a new cool chat, dude!`, mine: true},
    ],
    newMessageText: "",
};

const dialogsReducer = (state = initialState, action) => {
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
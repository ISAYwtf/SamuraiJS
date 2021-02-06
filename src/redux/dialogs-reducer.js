const UPDATE_INPUT_TEXT = 'UPDATE-INPUT-TEXT';
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
    inputText: "",
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_INPUT_TEXT:
            return {
                ...state,
                inputText: action.newText
            };
        case SEND_MESSAGE:
            const newMessage = {
                id: 7,
                message: state.inputText,
                mine: true
            };

            return {
                ...state,
                messages: [...state.messages, {...newMessage}],
                inputText: ""
            };
        default:
            return state;
    }
}

export const sendMessage = () => ({
    type: SEND_MESSAGE
});

export const onMessageChange = (text) => ({
    type: UPDATE_INPUT_TEXT,
    newText: text
});

export default dialogsReducer;

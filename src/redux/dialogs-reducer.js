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
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            const newMessage = {
                id: 7,
                message: action.message,
                mine: true
            };

            return {
                ...state,
                messages: [...state.messages, {...newMessage}],
            };
        default:
            return state;
    }
}

export const sendMessage = (message) => ({
    type: SEND_MESSAGE,
    message
});

export default dialogsReducer;

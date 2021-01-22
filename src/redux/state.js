const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

const store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, post: 'Hi how are you', likesCount: 15},
                {id: 2, post: 'I\'m fine, thanks', likesCount: 20},
            ],
            newPostText: ""
        },
        dialogsPage: {
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
        },
        navbarPage: {
            friends: [
                {id: 1, img: 'https://s0.rbk.ru/v6_top_pics/media/img/8/22/755895443908228.jpg'},
                {
                    id: 2,
                    img: 'https://www.moya-planeta.ru/upload/images/xl/19/a7/19a713c5edb6c69c5a0c31b875d732b3.jpg'
                },
                {id: 3, img: 'https://brammels.com/wp-content/uploads/2018/06/krasivye-lyudi-umnee.jpg'},
                {id: 4, img: 'https://www.kino-teatr.ru/art/5823/82736.jpg'}
            ]

        }
    },
    _callSubscriber() {
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    _addPost() {
        const newPost = {
            id: 3,
            post: this.getState().profilePage.newPostText,
            likesCount: 1
        };
        this.getState().profilePage.posts.push(newPost);
        this.getState().profilePage.newPostText = "";
        this._callSubscriber(this);
    },
    _updateNewPostText(newText) {
        this.getState().profilePage.newPostText = newText;
        this._callSubscriber(this);
    },
    _updateNewMessageText(newText) {
        this.getState().dialogsPage.newMessageText = newText;
        this._callSubscriber(this);
    },
    _sendMessage() {
        const newMessage = {
            id: 7,
            message: this.getState().dialogsPage.newMessageText,
            mine: true
        };
        this.getState().dialogsPage.messages.push(newMessage);
        this.getState().dialogsPage.newMessageText = "";
        this._callSubscriber(this);
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            this._addPost();
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._updateNewPostText(action.newText);
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._updateNewMessageText(action.newText);
        } else if (action.type === SEND_MESSAGE) {
            this._sendMessage();
        }
    }
};

export const addPostActionCreator = () => ({
    type: ADD_POST
});

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
});

export const sendMessageActionCreator = () => ({
    type: SEND_MESSAGE
});

export const updateNewMessageTextActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text
});

export default store;

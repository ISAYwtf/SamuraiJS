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
        },
        navbarPage: {
            friends: [
                {id: 1, img: 'https://s0.rbk.ru/v6_top_pics/media/img/8/22/755895443908228.jpg'},
                {
                    id: 2,
                    img: 'https://lh3.googleusercontent.com/Y_um3uK9FQCbzMJrFjyebPy4WYEOFnE8fsdCSBSIkvatgoyFuQm6vptO3fTCz_CuZuSX9V6ceUOTlFFI_KRTYP8eTE90--815BH5qmeam0PWOlVhMFYrfecGsJWQjBPENXPOZdpJh3wI3pkbyT6H7p4jzGqu11JIg_owJP4JlMpKow5AioOIqFhtqUYFYu4o5WNl2RjA7p49k2ZXlrUZk4bZ0zabEqm3T8X6ZFd54uKgQNxQRqUX82QAYJ6G73fsUS86RMn2Tcgr5tQ55U_aEXWZwgxE8rzV_79j6wmfHMGzdhvoc6XNW_ZRuvBUHb1C2P7IWaaVCp5L8oaBR0i9kenhQCztBkCsXOXo544MUi3Ipp8CcWjc-faNdY21j-P315IuG_2oXwAOjzZhlTuqyh1KIcApi9X17C1-ytfBjkyJoGvk8POc9kJNZTBJUMgr6Qe8iwF7jety6dplMAGfv4E0iY8m1IMduq04B2sK--CeWzBlr4CMg_3OgRZ6l6EXGFTrjoXsyNtAegDb4BRZAKiKm9GiwBoNLFVEic6cOTfiavC9kwVULLOo3NYUpWs3vXu9ZekSKFYzfwyjn06-0Ovbl63vNkvgCJdAZmU=w1938-h1292-no'
                },
                {id: 3, img: 'https://brammels.com/wp-content/uploads/2018/06/krasivye-lyudi-umnee.jpg'},
                {id: 4, img: 'https://www.kino-teatr.ru/art/5823/82736.jpg'}
            ]

        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
    },
    addPost() {
        const newPost = {
            id: 3,
            post: this.getState().profilePage.newPostText,
            likesCount: 1
        };
        this.getState().profilePage.posts.push(newPost);
        this.getState().profilePage.newPostText = "";
        this._callSubscriber(this);
    },
    updateNewPostText(newText) {
        this.getState().profilePage.newPostText = newText;
        this._callSubscriber(this);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
};

export default store;

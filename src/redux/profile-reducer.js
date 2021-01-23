const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState = {
    posts: [
        {id: 1, post: 'Hi how are you', likesCount: 15},
        {id: 2, post: 'I\'m fine, thanks', likesCount: 20},
    ],
    newPostText: ""
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            const newPost = {
                id: 3,
                post: state.newPostText,
                likesCount: 1
            };
            const stateCopy = {...state};
            stateCopy.posts = [...state.posts];

            stateCopy.posts.push(newPost);
            stateCopy.newPostText = "";

            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            const stateCopy = {...state};

            stateCopy.newPostText = action.newText;

            return stateCopy;
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({
    type: ADD_POST
});

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
});

export default profileReducer;

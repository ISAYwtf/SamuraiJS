const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export const profileReducer = (state, action) => {
    const addPost = () => {
        const newPost = {
            id: 3,
            post: state.newPostText,
            likesCount: 1
        };
        state.posts.push(newPost);
        state.newPostText = "";
    };
    const updateNewPostText = (newText) => {
        state.newPostText = newText;
    };

    switch (action.type) {
        case ADD_POST:
            addPost();
            break;
        case UPDATE_NEW_POST_TEXT:
            updateNewPostText(action.newText);
            break;
    }

    return state;
}

export const addPostActionCreator = () => ({
    type: ADD_POST
});

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
});

export default profileReducer;

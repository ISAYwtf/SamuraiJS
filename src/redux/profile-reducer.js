import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';

const initialState = {
    posts: [
        {id: 1, post: 'Hi how are you', likesCount: 15},
    ],
    status: null,
    profile: null
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 3,
                post: action.newPost,
                likesCount: 1
            };
            return {
                ...state,
                posts: [...state.posts, {...newPost}],
            };
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(el => el.id !== action.post),
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };
        default:
            return state;
    }
}

export const addPost = newPost => ({type: ADD_POST, newPost});
export const deletePost = post => ({type: DELETE_POST, post});
export const setUserProfile = profile => ({type: SET_USER_PROFILE, profile});
export const setStatus = status => ({type: SET_STATUS, status});

export const getProfile = userId => async dispatch => {
    const data = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(data));
};

export const getUserStatus = userId => async dispatch => {
    const data = await profileAPI.getStatus(userId);
    dispatch(setStatus(data));
};

export const updateStatus = status => async dispatch => {
    const data = await profileAPI.updateStatus(status);

    if (data.resultCode === 0) {
        dispatch(setStatus(status));
    }
};

export default profileReducer;

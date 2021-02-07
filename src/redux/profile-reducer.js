import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
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
export const setUserProfile = profile => ({type: SET_USER_PROFILE, profile});
export const setStatus = status => ({type: SET_STATUS, status});

export const getProfile = userId => dispatch => {
    return usersAPI.getProfile(userId).then(data => dispatch(setUserProfile(data)));
};

export const getUserStatus = userId => dispatch => {
    return profileAPI.getStatus(userId).then(data => dispatch(setStatus(data)));
};

export const updateStatus = status => dispatch => {
    return profileAPI.updateStatus(status).then(data => {
        if (data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    });
};

export default profileReducer;

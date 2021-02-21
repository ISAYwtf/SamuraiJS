import {getMe} from "../Auth/auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED-SUCCESS';

const initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }
        default:
            return state;
    }
}

export const initializedSuccess = () => ({
    type: INITIALIZED_SUCCESS
});

export const initializeApp = () => dispatch => {
    const initialized = dispatch(getMe());

    Promise.all([initialized])
        .then(() => {
            dispatch(initializedSuccess());
        });
}

export default appReducer;

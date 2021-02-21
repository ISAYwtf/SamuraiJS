import {getMe} from "../Auth/auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED-SUCCESS';
const HAS_ERROR = 'HAS-ERROR';

const initialState = {
    initialized: false,
    errorData: {
        hasError: false,
        errorMessage: null
    }
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }
        case HAS_ERROR:
            return {
                ...state,
                errorData: {...action.payload}
            }
        default:
            return state;
    }
}

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});
export const toggleHasError = (errorData = [false, null]) => ({
    type: HAS_ERROR,
    payload: {hasError: errorData[0], errorMessage: errorData[1]}
});

export const initializeApp = () => dispatch => {
    const initialized = dispatch(getMe());

    Promise.all([initialized])
        .then(() => {
            dispatch(initializedSuccess());
        });
}

export default appReducer;

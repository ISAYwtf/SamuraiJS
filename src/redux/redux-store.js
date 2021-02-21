import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer from "./Profile/profile-reducer";
import dialogsReducer from "./Dialogs/dialogs-reducer";
import sidebarReducer from "./Sidebar/sidebar-reducer";
import usersReducer from "./Users/users-reducer";
import authReducer from "./Auth/auth-reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import appReducer from "./App/app-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

// const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;

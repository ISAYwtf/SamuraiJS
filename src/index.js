import React from 'react';
import './index.css';
import store from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";

const rerenderEntireTree = (store) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={store.getState()} dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store);

store.subscribe(rerenderEntireTree);


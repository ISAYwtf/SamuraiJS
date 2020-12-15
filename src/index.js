import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let dialogs = [
    {id: 1, name: 'Dmitriy'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Svetlana'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Viktor'},
    {id: 6, name: 'Valeriy'},
];

let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'Yo'},
    {id: 6, message: 'Yo'},
];

let posts = [
    {id: 1, post: 'Hi how are you', likesCount: 15},
    {id: 2, post: 'I\'m fine, thanks', likesCount: 20},
]

ReactDOM.render(
    <React.StrictMode>
        <App dialogs={dialogs} messages={messages} posts={posts}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

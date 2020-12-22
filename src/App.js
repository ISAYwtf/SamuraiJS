import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = ({state, addPost, updateNewPostText}) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar state={state.navbarPage}/>
                <div className={`app-wrapper-content`}>

                    <Route path={`/dialogs`}
                           render={() => <Dialogs state={state.dialogsPage}/>}/>
                    <Route path={`/profile`} render={() => <Profile profilePage={state.profilePage} addPost={addPost}
                                                                    updateNewPostText={updateNewPostText}/>}/>
                    <Route path={`/news`} render={() => <News/>}/>
                    <Route path={`/music`} render={() => <Music/>}/>
                    <Route path={`/settings`} render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

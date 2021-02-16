import React from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";

class App extends React.Component {
    componentDidMount = () => this.props.initializeApp();

    render = () => {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className={`app-wrapper-content`}>

                    <Route path={`/dialogs`}
                           render={() => <DialogsContainer/>}/>
                    <Route path={`/profile/:userId?`}
                           render={() => <ProfileContainer/>}/>
                    <Route path={`/users`} render={() => <UsersContainer/>}/>
                    <Route path={`/music`} render={() => <Music/>}/>
                    <Route path={`/settings`} render={() => <Settings/>}/>
                    <Route path={`/login`} render={() => <Login/>}/>
                </div>
            </div>
        )
    };
}

const mapStateToProps = state => ({
    initialized: state.app.initialized
})

const mapDispatchToProps = {
    initializeApp
}

const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(App);

const SamuraiJSApp = props => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>;
}

export default SamuraiJSApp;

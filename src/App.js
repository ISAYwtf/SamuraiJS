import React from "react";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import {compose} from "redux";
import {connect, Provider} from "react-redux";
import './App.css';
import store from "./redux/redux-store";
import {initializeApp} from "./redux/app-reducer";
import Navbar from "./components/Navbar/Navbar";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Preloader from "./components/common/Preloader/Preloader";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {withSuspense} from "./hoc/withSuspense";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const Login = React.lazy(() => import('./components/Login/Login'));

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
                           render={withSuspense(DialogsContainer)}/>
                    <Route path={`/profile/:userId?`}
                           render={withSuspense(ProfileContainer)}/>
                    <Route path={`/users`} render={() => <UsersContainer/>}/>
                    <Route path={`/music`} render={() => <Music/>}/>
                    <Route path={`/settings`} render={() => <Settings/>}/>
                    <Route path={`/login`} render={withSuspense(Login)}/>
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
    return <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>;
}

export default SamuraiJSApp;

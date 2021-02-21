import React, {useEffect} from "react";
import {BrowserRouter, withRouter} from "react-router-dom";
import {compose} from "redux";
import {connect, Provider} from "react-redux";
import './App.css';
import store from "./redux/redux-store";
import {initializeApp} from "./redux/App/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import HeaderContainer from "./components/Header/HeaderContainer";
import Body from "./components/Body";
import {getAppInitialized} from "./redux/App/app-selectors";

const App = props => {
    useEffect(() => props.initializeApp(), [])

    if (!props.initialized) return <Preloader/>

    return <div className='app-wrapper'>
        <HeaderContainer/>
        <Body/>
    </div>
}

const mapStateToProps = state => ({initialized: getAppInitialized(state)})
const mapDispatchToProps = {initializeApp}

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

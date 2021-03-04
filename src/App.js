import React, {useEffect} from "react";
import {BrowserRouter, HashRouter, withRouter} from "react-router-dom";
import {compose} from "redux";
import {connect, Provider} from "react-redux";
import './App.css';
import store from "./redux/redux-store";
import {toggleHasError, initializeApp} from "./redux/App/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import Body from "./components/Body";
import {getAppErrorData, getAppInitialized} from "./redux/App/app-selectors";
import Alert from "./components/common/Alert/Alert";
import Header from "./components/Header/Header";

const App = props => {
    useEffect(() => {
        props.initializeApp();
    })

    if (!props.initialized) return <Preloader/>

    return <div className='app-wrapper'>
        <Header/>
        <Body/>

        {props.errorData.hasError ? <Alert>{props.errorData.errorMessage}</Alert> : ""}
    </div>
}

const mapStateToProps = state => ({
    initialized: getAppInitialized(state),
    errorData: getAppErrorData(state)
})
const mapDispatchToProps = {initializeApp, toggleHasError}

const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(App);

const SamuraiJSApp = () =>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>

export default SamuraiJSApp;

import React, {useState} from "react";
import Navbar from "../Navbar/Navbar";
import classes from "./Sidebar.module.css";
import {Route} from "react-router-dom";
import {withSuspense} from "../../hoc/withSuspense";
import {compose} from "redux";
import {connect} from "react-redux";
import {getIsShowed} from "../../redux/Sidebar/sidebar-selectors";
import {toggleIsShowed} from "../../redux/Sidebar/sidebar-reducer";

const DialogsContainer = React.lazy(() => import('../Dialogs/DialogsContainer'));
const Search = React.lazy(() => import('../Search/Search'));

const Sidebar = ({isShowed, toggleIsShowed, ...props}) => {

    const closeSidebar = e => {
        toggleIsShowed(false);
        document.body.style.overflowY = "unset";
    };

    return <div className={classes.sidebar} data-show={isShowed} onClick={closeSidebar}>
        <Navbar/>
        <Route path={'/dialogs'} render={withSuspense(DialogsContainer)}/>
        <Route path={'/users'} render={withSuspense(Search)}/>
    </div>;
}

const mapStateToProps = state => ({
    isShowed: getIsShowed(state)
})

const mapDispatchToProps = {
    toggleIsShowed
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(Sidebar);

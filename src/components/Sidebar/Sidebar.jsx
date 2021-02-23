import React from "react";
import Navbar from "../Navbar/Navbar";
import classes from "./Sidebar.module.css";
import {Route} from "react-router-dom";
import {withSuspense} from "../../hoc/withSuspense";

const DialogsContainer = React.lazy(() => import('../Dialogs/DialogsContainer'));
const Search = React.lazy(() => import('../Search/Search'));

const Sidebar = () =>
    <div className={classes.sidebar}>
        <Navbar/>
        <div><Route path={'/dialogs'} render={withSuspense(DialogsContainer)}/></div>
        <div><Route path={'/users'} render={withSuspense(Search)}/></div>
    </div>

export default Sidebar;

import React from "react";
import classes from "./Body.module.css";
import Content from "../Content";
import Sidebar from "../Sidebar/Sidebar";

const Body = props => {
    return (
        <div className={classes.body}>
            <Sidebar/>
            <Content/>
        </div>
    )
}

export default Body;

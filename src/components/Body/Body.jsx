import React from "react";
import Navbar from "../Navbar/Navbar";
import classes from "./Body.module.css";
import Content from "../Content";

const Body = props => {
    return (
        <div className={classes.body}>
            <Navbar/>
            <Content/>
        </div>
    )
}

export default Body;

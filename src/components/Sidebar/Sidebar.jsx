import React from "react";
import Navbar from "../Navbar/Navbar";
import classes from "./Sidebar.module.css";
import Search from "../Search/Search";

const Sidebar = props =>
    <div className={classes.sidebar}>
        <Navbar/>
        <Search/>
    </div>

export default Sidebar;

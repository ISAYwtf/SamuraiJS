import {NavLink} from "react-router-dom";
import classes from "./DialogItem.module.css";
import React from "react";

const DialogItem = ({name, id}) => {
    return (
        <NavLink to={`/dialogs/${id}`} className={classes.dialog}>{name}</NavLink>
    )
}

export default DialogItem;

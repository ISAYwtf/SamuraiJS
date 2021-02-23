import {NavLink} from "react-router-dom";
import classes from "./DialogItem.module.css";
import React from "react";

const DialogItem = ({name, id}) => {
    return (
        <NavLink to={`/dialogs/${id}`} activeClassName={`sidebar--item--active`} className={`sidebar--item`}>
            {name}
        </NavLink>
    )
}

export default DialogItem;

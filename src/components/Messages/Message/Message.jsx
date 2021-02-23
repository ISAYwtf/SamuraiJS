import React from "react";
import classes from "./Message.module.css";

const Message = ({message, mine}) => {
    const styleMsg = factor => factor ? classes.right : classes.left;

    return (
        <div className={`${classes.message} ${styleMsg(mine)}`}>{message}</div>
    )
}

export default Message;

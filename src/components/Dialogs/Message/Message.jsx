import React from "react";
import classes from "./Message.module.css";

const Message = ({message, mine}) => {
    let styleMsg = (factor) => {
        if (factor) return classes.right;

        return classes.left;
    }

    return (
        <div className={`${classes.message} ${styleMsg(mine)}`}>{message}</div>
    )
}

export default Message;
